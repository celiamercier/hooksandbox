import {Spinner, Table} from 'react-bootstrap';
import React from 'react';
import './ProductTable.css';

export default function ProductTable({ products, isLoading }) {

    if (isLoading) {
        return (
            <Table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Sku</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="3" className="spinner-td">
                            <Spinner animation="border" variant="secondary" />
                        </td>
                    </tr>
                </tbody>
            </Table>
        );
    } else {
        return (
            <Table striped>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Sku</th>
                </tr>
                </thead>
                <tbody>
                { products.map((product) =>
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.brand}</td>
                        <td>{product.sku}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        );
    }
}
