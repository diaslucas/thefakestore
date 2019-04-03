import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, DECREASE_CART_ITEM_QUANTITY } from '../action_types';

export const addItemToCart = newItem => ({
  type: ADD_ITEM_TO_CART,
  payload: newItem,
});

export const removeItemFromCart = item => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const decreaseCartItemQuantity = (item) => {
  if (item.quantity - 1 === 0) {
    return removeItemFromCart(item);
  }

  return {
    type: DECREASE_CART_ITEM_QUANTITY,
    payload: item,
  };
};
