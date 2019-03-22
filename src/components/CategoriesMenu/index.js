import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, UncontrolledCollapse } from 'reactstrap';
import './categoriesMenu.scss';

const CategoriesMenu = ({ categories }) => (
  <ListGroup className="categorie-menu">
    {categories.map(categorie => (
      <ListGroupItem key={categorie.id}>
        <div id={categorie.id} className="categorie-link">{categorie.name}</div>
        <UncontrolledCollapse toggler={`#${categorie.id}`}>
          <ul>
            {categorie.subcategories.map(subcategorie => (
              <li key={subcategorie}>{subcategorie}</li>
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
