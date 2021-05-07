import {Button, ButtonGroup, Col, Container, Form, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import ProductTable from '../table/ProductTable';
import React, {useCallback, useEffect, useReducer, useState} from 'react';
import fetchProducts from '../mock/fetchProducts';

import '../FetchPaginateStyle.css';

const INITIAL_PAGE_SIZE = 5;

const PREVIOUS_PAGE = "action/previous-page";
const NEXT_PAGE = "action/next-page";
const UPDATE_PAGE_SIZE = "action/update-page-size";

const paginationReducer = (state, action) => {
    switch (action.type) {
        case PREVIOUS_PAGE:
            return {
                ...state,
                offset: Math.max(0, state.offset - state.pageSize),
            };
        case NEXT_PAGE:
            return {
                ...state,
                offset: Math.min(action.totalNumberOfItems, state.offset + state.pageSize),
            };
        case UPDATE_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.newSize,
            };
        default:
            throw new Error(`unknown action ${action}`);
    }
};

function usePagination(totalNumberOfItems) {
    const [state, dispatch] = useReducer(paginationReducer, {
        offset: 0,
        pageSize: INITIAL_PAGE_SIZE,
    });

    const goToPreviousPage = () => {
        dispatch({
            type: PREVIOUS_PAGE,
            totalNumberOfItems
        });
    }

    const goToNextPage = () => {
        dispatch({
            type: NEXT_PAGE,
            totalNumberOfItems
        });
    }

    const updatePageSize = (newSize) => {
        dispatch({
            type: UPDATE_PAGE_SIZE,
            newSize
        });
    }

    const canGoToPreviousPage = () => state.offset === 0;

    const canGoToNextPage = () => state.offset + state.pageSize >= totalNumberOfItems;

    return {
        pagination: state,
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

export default function FetchPaginateFunctionalComponentV3() {

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
