import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './categoriesAside.scss';

const CategoriesAside = () => (
  <aside className="categories-aside">
    <ListGroup>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  </aside>
);

export default CategoriesAside;
