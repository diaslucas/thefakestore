import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import './itemsBox.scss';
import Product from '../Product';


const mapStateToProps = state => ({
  products: state.products,
});

class ItemsBox extends PureComponent {
  render() {
    const { products } = this.props;
    return (
      <main className="items-box">
        <Container fluid>
          <Row>
            {products.map(product => (
              <Col md="3" key={product.name}>
                <Product
                  name={product.name}
                  categorie={product.categorie}
                  pictures={product.pictures}
                  price={product.price}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}

ItemsBox.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(ItemsBox);
