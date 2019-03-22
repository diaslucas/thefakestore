import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, UncontrolledCollapse } from 'reactstrap';
import './categoriesAside.scss';

const mapStateToProps = state => ({
  categories: state.categories,
});

const CategoriesAside = ({ categories }) => {
  console.log(categories);
  return (
    <aside className="categorie-aside">
      <ListGroup className="categorie-menu">
        <ListGroupItem>
          <div id="toggler1" className="categorie-link">Kitchen</div>
          <UncontrolledCollapse toggler="#toggler1">
            <ul>
              <li>Tables</li>
              <li>Chairs</li>
              <li>Microwaves</li>
            </ul>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem>
          <div id="toggler2" className="categorie-link">Bedroom</div>
          <UncontrolledCollapse toggler="#toggler2">
            <ul>
              <li>Beds</li>
              <li>Matresses</li>
              <li>Nightstands</li>
            </ul>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem>
          <div id="toggler3" className="categorie-link">Living Room</div>
          <UncontrolledCollapse toggler="#toggler3">
            <ul>
              <li>Sofas</li>
              <li>Media Furnitures</li>
              <li>Coffee and Side Tables</li>
            </ul>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem>
          <div id="toggler4" className="categorie-link">Bathroom</div>
          <UncontrolledCollapse toggler="#toggler4">
            <ul>
              <li>Sinks</li>
              <li>Mirrors</li>
            </ul>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem>
          <div id="toggler5" className="categorie-link">Office</div>
          <UncontrolledCollapse toggler="#toggler5">
            <ul>
              <li>Desks</li>
              <li>Chairs</li>
              <li>Storages</li>
            </ul>
          </UncontrolledCollapse>
        </ListGroupItem>
      </ListGroup>
    </aside>
  );
};

export default connect(
  mapStateToProps,
  null,
)(CategoriesAside);
