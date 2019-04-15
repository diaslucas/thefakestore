import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, UncontrolledCollapse } from 'reactstrap';
import './categoriesMenu.scss';

const CategoriesMenu = ({ categories, filterProducts }) => (
  <ListGroup className="categorie-menu">
    {categories.map(category => (
      <ListGroupItem key={category.id}>
        <div id={category.id} className="categorie-link">{category.name}</div>
        <UncontrolledCollapse toggler={`#${category.id}`}>
          <ul>
            {category.subcategories.map(subcategory => (
              <li key={subcategory} onClick={() => filterProducts(subcategory)}>{subcategory}</li>
            ))}
          </ul>
        </UncontrolledCollapse>
      </ListGroupItem>
    ))}
  </ListGroup>
);

CategoriesMenu.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
};

export default CategoriesMenu;
