import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import CategoryList from '../categories/CategoryList.jsx'
import ProductsList from '../products/ProductsList.jsx'

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs="3">
                        <CategoryList />
                    </Col>
                    <Col xs="9">
                        <ProductsList />
                    </Col>
                </Row>
            </div>
        )
    }
}
