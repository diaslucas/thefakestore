import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../action_types';

const initialState = { total: 0, totalItems: 0, items: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const newItem = action.payload;
      return [
        ...state,
        newItem,
      ];
    }

    case REMOVE_ITEM_FROM_CART: {
      return [
        ...state,
      ];
    }

    default:
      return state;
  }
};
