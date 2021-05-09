import {Button, ButtonGroup, Col, Container, Form, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import ProductTable from '../table/ProductTable';
import React, {useEffect, useRef, useState} from 'react';
import fetchProducts from '../mock/fetchProducts';

import '../FetchPaginateStyle.css';

const INITIAL_PAGE_SIZE = 5;

const canGoToPreviousPage = (offset) => offset === 0;
const canGoToNextPage = (offset, pageSize, totalNumberOfProducts) => offset + pageSize >= totalNumberOfProducts;

export default function FetchPaginateFunctionalComponentV1() {

    const [ offset, setOffset ] = useState(0);
    const [ pageSize, setPageSize ] = useState(INITIAL_PAGE_SIZE);
    const [ totalNumberOfProducts, setTotalNumberOfProducts ] = useState(0);
    const [ products, setProducts ] = useState([]);
    const [ isFetchingProducts, setIsFetchingProducts ] = useState(false);

    useEffect(() => {
        let didCancel = false;
        const fetch = () => {
            setIsFetchingProducts(true);
            fetchProducts(offset, pageSize)
                .then((result) => {
                    if (!didCancel) {
                        setProducts(result.products);
                        setTotalNumberOfProducts(result.totalCount);
                    }
                })
                .finally(() => {
                    setIsFetchingProducts(false);
                });
        };
        fetch();
        return () => { didCancel = true; };
    }, [offset, pageSize]);

    const goToPreviousPage = () => {
        setOffset((prevOffset) => Math.max(0, prevOffset - pageSize));
    }

    const goToNextPage = () => {
        setOffset((prevOffset) => Math.min(totalNumberOfProducts, prevOffset + pageSize));
    }

    const updatePageSize = (newSize) => {
        setPageSize(newSize);
    }

    console.log('render');
    return (
        <Container className="main-container p-5">
            <Row className="pb-4">
                <Col>
                    <h3>Functional Component Example</h3>
                </Col>
            </Row>
            <Row className="pb-4">
                <Col>
                    <Form inline>
                        <span className="mr-3">{offset + 1} - {Math.min(offset + pageSize, totalNumberOfProducts)} of {totalNumberOfProducts} results</span>
                        <ButtonGroup className="mr-3">
                            <Button variant='primary'
                                    onClick={goToPreviousPage}
                                    disabled={canGoToPreviousPage(offset)}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </Button>
                            <Button variant='primary'
                                    onClick={goToNextPage}
                                    disabled={canGoToNextPage(offset, pageSize, totalNumberOfProducts)}
                            >
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Button>
                        </ButtonGroup>
                        <Form.Control as="select"
                                      defaultValue={INITIAL_PAGE_SIZE}
                                      onChange={(event) => updatePageSize(parseInt(event.target.value))}>
                            <option value={3}>3</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                        </Form.Control>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProductTable products={products} isLoading={isFetchingProducts} />
                </Col>
            </Row>
        </Container>
    );
}
