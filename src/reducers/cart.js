import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../action_types';

const initialState = {
  total: 448,
  totalItems: 2,
  items: [
    {
      id: 1,
      name: 'MALM',
      categorie: 'Beds',
      pictures: ['https://www.ikea.com/us/en/images/products/malm-bed-frame-high__0559901_PE662082_S4.JPG'],
      price: 199,
    },
    {
      id: 2,
      name: 'HEMNES',
      categorie: 'Beds',
      pictures: [
        'https://www.ikea.com/us/en/images/products/hemnes-bed-frame__0637516_PE698353_S4.JPG',
      ],
      price: 249,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const newItem = action.payload;
      const totalItems = state.totalItems + 1;
      const total = state.total + action.payload.price;
      const { items } = state;
      return {
        ...state,
        totalItems,
        total,
        items: [
          ...items,
          newItem,
        ],
      };
    }

    case REMOVE_ITEM_FROM_CART: {
      const totalItems = state.totalItems - 1;
      const total = state.total - action.payload.price;
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

    default:
      return state;
  }
};
