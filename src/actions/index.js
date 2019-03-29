import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../action_types';

export const addItemToCart = newItem => ({
  type: ADD_ITEM_TO_CART,
  payload: newItem,
});

export const removeItemFromCart = id => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: id,
});
