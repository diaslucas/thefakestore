import React from 'react';
import { UncontrolledCollapse } from 'reactstrap';
import CartItem from '../CartItem';

const CartItemsCollapse = (props) => {
  const { items, toggler, total, onRemove, onDecrease, onIncrease } = props;
  const cartItemsStyle = { position: 'absolute', right: '10px', zIndex: '99' };
  return (
    <UncontrolledCollapse toggler={toggler} className="cart-items-box shadow-lg p-3 mb-5 bg-white rounded" style={cartItemsStyle}>
      {items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          imgSrc={item.pictures[0]}
          quantity={item.quantity}
          price={item.price}
          onRemove={() => onRemove(item)}
          onDecrease={() => onDecrease(item)}
          onIncrease={() => onIncrease(item)}
        />
      ))}
      <div>
        Total: ${total}
      </div>
    </UncontrolledCollapse>
  );
};

export default CartItemsCollapse;
