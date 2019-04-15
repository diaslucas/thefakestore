import _ from 'lodash';
import { FILTER_PRODUCTS_BY_CATEGORY } from '../action_types';
import { products } from '../data';

const initialState = products;

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS_BY_CATEGORY: {
      const filters = [];
      Object.keys(initialState).forEach((key) => {
        const product = initialState[key];
        if (product.category === action.payload) {
          filters.push(product.id);
        }
      });

      return _.pick(initialState, filters);
    }

    default:
      return state;
  }
};
