import React from 'react';
import {Button, ButtonGroup, Col, Container, Row, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import './FetchPaginateStyle.css';
import fetchProducts from './mock/fetchProducts';
import ProductTable from './table/ProductTable';

class FetchPaginateComponentClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            pageSize: 5,
            isFetchingProducts: false,
            products: [],
            totalNumberOfProducts: 0,
        };
    }

    fetch = () => {
        this.setState({
            isFetchingProducts: true,
        });
        fetchProducts(this.state.offset, this.state.pageSize)
            .then((result) => {
                this.setState({
                    products: result.products,
                    totalNumberOfProducts: result.totalCount,
                });
            })
            .finally(() => {
                this.setState({
                    isFetchingProducts: false,
                });
            });
    }

    componentDidMount() {
        this.fetch();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.offset !== this.state.offset || prevState.pageSize !== this.state.pageSize) {
            this.fetch();
        }
    }

    goToPreviousPage = () => {
        this.setState((state) => ({
            offset: Math.max(0, state.offset - state.pageSize)
        }));
    }

    goToNextPage = () => {
        this.setState((state) => ({
            offset: Math.min(state.totalNumberOfProducts, state.offset + state.pageSize)
        }));
    }

    updatePageSize = (newSize) => {
        this.setState({
            pageSize: newSize,
        });
    }

    canGoToPreviousPage = () => this.state.offset === 0;
    canGoToNextPage = () => this.state.offset + this.state.pageSize >= this.state.totalNumberOfProducts;

    render() {
        const { offset, pageSize, totalNumberOfProducts, isFetchingProducts, products } = this.state;

        console.log("render");
        return (
            <Container className="main-container p-5">
                <Row className="pb-4">
                    <Col>
                        <h3>Component Class Example</h3>
                    </Col>
                </Row>
                <Row className="pb-4">
                    <Col>
                        <Form inline>
                            <span className="mr-3">{offset + 1} - {Math.min(offset + pageSize, totalNumberOfProducts)} of {totalNumberOfProducts} results</span>
                            <ButtonGroup className="mr-3">
                                <Button variant='primary'
                                        onClick={this.goToPreviousPage}
                                        disabled={this.canGoToPreviousPage()}
                                >
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </Button>
                                <Button variant='primary'
                                        onClick={this.goToNextPage}
                                        disabled={this.canGoToNextPage()}
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Button>
                            </ButtonGroup>
                            <Form.Control as="select"
                                          defaultValue={5}
                                          onChange={(event) => this.updatePageSize(parseInt(event.target.value))}>
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
}

export default FetchPaginateComponentClass;
