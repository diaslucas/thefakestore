import React, { PureComponent } from 'react';
import _ from 'lodash';
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
            {_.values(products).map(product => (
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
  products: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    categorie: PropTypes.string,
    pictures: PropTypes.arrayOf(String),
    price: PropTypes.number,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(ItemsBox);
