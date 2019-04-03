import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, DECREASE_CART_ITEM_QUANTITY } from '../action_types';

const initialState = {
  total: 0,
  totalItems: 0,
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const newItem = action.payload;
      const totalItems = state.totalItems + 1;
      const total = state.total + action.payload.price;
      const { items } = state;
      const existingItemIndex = items.findIndex(item => item.id === newItem.id);
      if (existingItemIndex > -1) {
        return {
          ...state,
          totalItems,
          total,
          items: [
            ...items.slice(0, existingItemIndex),
            { ...items[existingItemIndex], quantity: items[existingItemIndex].quantity + 1 },
            ...items.slice(existingItemIndex + 1),
          ],
        };
      }

      return {
        ...state,
        totalItems,
        total,
        items: [
          ...items,
          { ...newItem, quantity: 1 },
        ],
      };
    }

    case REMOVE_ITEM_FROM_CART: {
      const totalItems = state.totalItems - action.payload.quantity;
      const total = state.total - action.payload.price * action.payload.quantity;
      const itemToBeRemovedId = action.payload.id;
      const { items } = state;
      return {
        ...state,
        totalItems,
        total,
        items: [
          ...items.filter(item => item.id !== itemToBeRemovedId),
        ],
      };
    }

    case DECREASE_CART_ITEM_QUANTITY: {
      const { items } = state;
      const existingItemIndex = items.findIndex(item => item.id === action.payload.id);
      const totalItems = state.totalItems - 1;
      const total = state.total - action.payload.price;
      return {
        ...state,
        totalItems,
        total,
        items: [
          ...items.slice(0, existingItemIndex),
          { ...items[existingItemIndex], quantity: items[existingItemIndex].quantity - 1 },
          ...items.slice(existingItemIndex + 1),
        ],
      }; 
    }

    default:
      return state;
  }
};
