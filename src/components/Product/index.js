import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './product.scss';

const Product = (props) => {
  const { name, categorie, pictures, price, onAdd } = props;
  const firstPic = pictures[0];
  return (
    <Card>
      <CardImg top width="100%" src={firstPic} alt={name} />
      <CardBody>
        <CardTitle className="font-weight-bold">{name}</CardTitle>
        <CardSubtitle className="font-weight-bold">${price}</CardSubtitle>
        <CardSubtitle>{categorie}</CardSubtitle>
        <Button color="success" onClick={() => onAdd()}>Add to cart</Button>
      </CardBody>
    </Card>
  );
};


Product.propTypes = {
  name: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(String).isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
