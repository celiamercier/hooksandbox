import {Button, ButtonGroup, Col, Container, Form, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import ProductTable from '../table/ProductTable';
import React, {useCallback, useEffect, useState} from 'react';
import fetchProducts from '../mock/fetchProducts';

import '../FetchPaginateStyle.css';

const INITIAL_PAGE_SIZE = 5;

function usePagination(totalNumberOfItems) {
    const [ pagination, setPagination ] = useState({
        offset: 0,
        pageSize: INITIAL_PAGE_SIZE,
    });

    const goToPreviousPage = () => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            offset: Math.max(0, prevPagination.offset - prevPagination.pageSize),
        }));
    }

    const goToNextPage = () => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            offset: Math.min(totalNumberOfItems, prevPagination.offset + prevPagination.pageSize),
        }));
    }

    const updatePageSize = (pageSize) => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            pageSize,
        }));
    }

    const canGoToPreviousPage = () => pagination.offset === 0;

    const canGoToNextPage = () => pagination.offset + pagination.pageSize >= totalNumberOfItems;

    return {
        pagination,
        updatePageSize,
        goToPreviousPage,
        goToNextPage,
        canGoToPreviousPage,
        canGoToNextPage,
    };
}

function useAsyncFetch(fetchCallback, itemsSelector) {
    const [ totalCount, setTotalCount ] = useState(0);
    const [ items, setItems ] = useState([]);
    const [ isFetchingProducts, setIsFetchingProducts ] = useState(false);

    const fetch = useCallback((offset, pageSize) => {
        setIsFetchingProducts(true);
        fetchCallback(offset, pageSize)
            .then((result) => {
                setItems(itemsSelector(result));
                setTotalCount(result.totalCount);
            })
            .finally(() => {
                setIsFetchingProducts(false);
            });
    }, [fetchCallback, itemsSelector]);

    return {
        fetch,
        isFetchingProducts,
        page: {
            items,
            totalCount,
        },
    };
}

const productSelector = (result) => result.products;

export default function FetchPaginateFunctionalComponentV2() {

    const {
              fetch,
              isFetchingProducts,
              page,
          } = useAsyncFetch(fetchProducts, productSelector);

    const { pagination,
              updatePageSize,
              goToPreviousPage,
              goToNextPage,
              canGoToPreviousPage,
              canGoToNextPage,
          } = usePagination(page.totalCount);

    useEffect(() => {
        fetch(pagination.offset, pagination.pageSize);
    }, [fetch, pagination]);

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
                        <span className="mr-3">{pagination.offset + 1} - {Math.min(pagination.offset + pagination.pageSize, page.totalCount)} of {page.totalCount} results</span>
                        <ButtonGroup className="mr-3">
                            <Button variant='primary'
                                    onClick={goToPreviousPage}
                                    disabled={canGoToPreviousPage(pagination.offset)}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </Button>
                            <Button variant='primary'
                                    onClick={goToNextPage}
                                    disabled={canGoToNextPage(pagination.offset, pagination.pageSize, page.totalCount)}
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
                    <ProductTable products={page.items} isLoading={isFetchingProducts} />
                </Col>
            </Row>
        </Container>
    );
}
