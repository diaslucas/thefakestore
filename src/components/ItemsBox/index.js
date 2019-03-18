import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './itemsBox.scss';
import Product from '../Product';

const ItemsBox = () => (
  <main className="items-box">
    <Container fluid>
      <Row>
        <Col md="3">
          <Product />
        </Col>
        <Col md="3">
          <Product />
        </Col>
        <Col md="3">
          <Product />
        </Col>
        <Col md="3">
          <Product />
        </Col>
      </Row>
    </Container>
  </main>
);

export default ItemsBox;
