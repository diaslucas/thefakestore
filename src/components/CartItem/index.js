import React from 'react';
import './cartItem.scss';

const CartItem = (props) => {
  const { name, imgSrc, price } = props;
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img className="img-fluid" alt={name} src={imgSrc} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-details">
          <div className="cart-item-name">{name}</div>
          <div>${price}</div>
        </div>
        <div className="cart-item-remove">
          <i className="fas fa-times-circle" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
