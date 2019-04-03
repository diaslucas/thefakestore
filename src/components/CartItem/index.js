import React from 'react';
import './cartItem.scss';

const CartItem = (props) => {
  const { name, imgSrc, quantity, price, onRemove, onDecrease, onIncrease } = props;
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img className="img-fluid" alt={name} src={imgSrc} />
      </div>
      <div className="cart-item-quantity">
        <button type="button" className="no-style-btn text-success" onClick={() => onIncrease()}>
          <i className="fas fa-plus-circle" />
        </button>
        <span>{quantity}</span>
        <button type="button" className="no-style-btn text-danger" onClick={() => onDecrease()}>
          <i className="fas fa-minus-circle" />
        </button>
      </div>
      <div className="cart-item-info">
        <div className="cart-item-details">
          <div className="cart-item-name">{name}</div>
          <div>${price}</div>
        </div>
        <button type="button" className="no-style-btn cart-item-remove" onClick={() => onRemove()}>
          <i className="fas fa-times-circle" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
