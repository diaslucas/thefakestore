import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Badge, UncontrolledPopover, PopoverBody } from 'reactstrap';
import './cart.scss';
import { addItemToCart, removeItemFromCart, decreaseCartItemQuantity } from '../../actions';
import CartItemsCollapse from '../CartItemsCollapse';

const mapStateToProps = state => ({
  cart: state.cart,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addItemToCart, removeItemFromCart, decreaseCartItemQuantity }, dispatch);
}

class Cart extends PureComponent {
  render() {
    // eslint-disable-next-line no-shadow
    const { cart, addItemToCart, removeItemFromCart, decreaseCartItemQuantity } = this.props;
    const { total, totalItems, items } = cart;
    let cartContent;
    if (totalItems > 0) {
      cartContent = (
        <React.Fragment>
          <Badge color="success">{totalItems}</Badge>
          <CartItemsCollapse
            items={items}
            total={total}
            toggler="#cartToggler"
            onRemove={removeItemFromCart}
            onDecrease={decreaseCartItemQuantity}
            onIncrease={addItemToCart}
          />
        </React.Fragment>
      );
    } else {
      cartContent = (
        <UncontrolledPopover placement="bottom" target="cartToggler">
          <PopoverBody>No Items</PopoverBody>
        </UncontrolledPopover>
      );
    }
    return (
      <React.Fragment>
        <i className="fas fa-shopping-cart fa-lg" id="cartToggler" />
        {cartContent}
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
  mapDispatchToProps,
)(Cart);
