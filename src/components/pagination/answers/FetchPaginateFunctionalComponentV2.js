import {Button, ButtonGroup, Col, Container, Form, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import ProductTable from '../table/ProductTable';
import React, {useEffect, useState} from 'react';
import fetchProducts from '../mock/fetchProducts';

import '../FetchPaginateStyle.css';

const INITIAL_PAGE_SIZE = 5;

const canGoToPreviousPage = (offset) => offset === 0;
const canGoToNextPage = (offset, pageSize, totalNumberOfProducts) => offset + pageSize >= totalNumberOfProducts;

export default function FetchPaginateFunctionalComponentV2() {

    const [ pagination, setPagination ] = useState({
        offset: 0,
        pageSize: INITIAL_PAGE_SIZE,
    });
    const [ totalNumberOfProducts, setTotalNumberOfProducts ] = useState(0);
    const [ products, setProducts ] = useState([]);
    const [ isFetchingProducts, setIsFetchingProducts ] = useState(false);

    useEffect(() => {
        const fetch = () => {
            setIsFetchingProducts(true);
            fetchProducts(pagination.offset, pagination.pageSize)
                .then((result) => {
                    setProducts(result.products);
                    setTotalNumberOfProducts(result.totalCount);
                })
                .finally(() => {
                    setIsFetchingProducts(false);
                });
        };
        fetch();
    }, [pagination]);

    const goToPreviousPage = () => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            offset: Math.max(0, prevPagination.offset - prevPagination.pageSize),
        }));
    }

    const goToNextPage = () => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            offset: Math.min(totalNumberOfProducts, prevPagination.offset + prevPagination.pageSize),
        }));
    }

    const updatePageSize = (newSize) => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            pageSize: newSize,
        }));
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
                        <span className="mr-3">{pagination.offset + 1} - {Math.min(pagination.offset + pagination.pageSize, totalNumberOfProducts)} of {totalNumberOfProducts} results</span>
                        <ButtonGroup className="mr-3">
                            <Button variant='primary'
                                    onClick={goToPreviousPage}
                                    disabled={canGoToPreviousPage(pagination.offset)}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </Button>
                            <Button variant='primary'
                                    onClick={goToNextPage}
                                    disabled={canGoToNextPage(pagination.offset, pagination.pageSize, totalNumberOfProducts)}
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
