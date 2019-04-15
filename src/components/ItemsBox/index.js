import React, { PureComponent } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import './itemsBox.scss';
import Product from '../Product';
import { addItemToCart } from '../../actions';

const mapStateToProps = state => ({
  products: state.products,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addItemToCart }, dispatch);
}

class ItemsBox extends PureComponent {
  render() {
    // eslint-disable-next-line no-shadow
    const { products, addItemToCart } = this.props;
    return (
      <main className="items-box">
        <Container fluid>
          <Row>
            {_.values(products).map(product => (
              <Col md="3" style={{ margin: '10px 0' }} key={product.id}>
                <Product
                  name={product.name}
                  category={product.category}
                  pictures={product.pictures}
                  price={product.price}
                  onAdd={() => addItemToCart(product)}
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
  mapDispatchToProps,
)(ItemsBox);
