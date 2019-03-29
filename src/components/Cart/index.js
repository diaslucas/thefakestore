import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Badge, UncontrolledCollapse } from 'reactstrap';
import './cart.scss';

const mapStateToProps = state => ({
  cart: state.cart,
});

class Cart extends PureComponent {
  render() {
    const cartItemsStyle = { position: 'absolute', right: '10px', zIndex: '99' };
    const { cart } = this.props;
    const { total, totalItems, items } = cart;
    return (
      <React.Fragment>
        <i className="fas fa-shopping-cart fa-lg" id="toggler" />
        {totalItems > 0
          && <Badge color="success">{totalItems}</Badge>
        }
        <UncontrolledCollapse toggler="#toggler" className="cart-items-box" style={cartItemsStyle}>
          <div className="cart-item">
            <div className="cart-item-image"><img className="img-fluid" src="https://www.ikea.com/us/en/images/products/brimnes-bed-frame-with-storage-headboard-black__0553395_PE659474_S4.JPG" /></div>
            <div className="cart-item-info">
              <div className="cart-item-details">
                <div className="cart-item-name">HUNTIN</div>
                <div>299$</div>
              </div>
              <div className="cart-item-remove">
                <i className="fas fa-times-circle" />
              </div>
            </div>
          </div>
        </UncontrolledCollapse>
      </React.Fragment>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.shape({
    total: PropTypes.number,
    totalItems: PropTypes.number,
    items: PropTypes.arrayOf(String),
  }).isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(Cart);
