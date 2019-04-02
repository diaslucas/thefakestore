import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Badge, UncontrolledCollapse, UncontrolledPopover, PopoverBody } from 'reactstrap';
import './cart.scss';
import { removeItemFromCart } from '../../actions';
import CartItem from '../CartItem';

const mapStateToProps = state => ({
  cart: state.cart,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeItemFromCart }, dispatch);
}

class Cart extends PureComponent {
  render() {
    const cartItemsStyle = { position: 'absolute', right: '10px', zIndex: '99' };
    // eslint-disable-next-line no-shadow
    const { cart, removeItemFromCart } = this.props;
    const { total, totalItems, items } = cart;
    let cartContent;
    if (totalItems > 0) {
      cartContent = (
        <React.Fragment>
          <Badge color="success">{totalItems}</Badge>
          <UncontrolledCollapse toggler="#cartToggler" className="cart-items-box shadow-lg p-3 mb-5 bg-white rounded" style={cartItemsStyle}>
            {items.map(item => (
              <CartItem
                key={item.id}
                name={item.name}
                imgSrc={item.pictures[0]}
                quantity={item.quantity}
                price={item.price}
                onRemove={() => removeItemFromCart(item)}
              />
            ))}
            <div>
              Total: ${total}
            </div>
          </UncontrolledCollapse>
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
