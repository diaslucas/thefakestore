import React from 'react';
import './cartItem.scss';

const CartItem = (props) => {
  const { name, imgSrc, quantity, price, onRemove } = props;
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img className="img-fluid" alt={name} src={imgSrc} />
      </div>
      <div className="cart-item-quantity">
        {quantity} <i className="fas fa-times" />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-details">
          <div className="cart-item-name">{name}</div>
          <div>${price}</div>
        </div>
        <button type="button" className="cart-item-remove" onClick={() => onRemove()}>
          <i className="fas fa-times-circle" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
