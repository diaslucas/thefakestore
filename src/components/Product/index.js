import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './product.scss';

const Product = (props) => {
  const { name, imgURL } = props;

  return (
    <Card>
      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
      <CardBody>
        <CardTitle>Bed</CardTitle>
        <CardSubtitle>Color: Black</CardSubtitle>
        <Button color="success">Add</Button>
      </CardBody>
    </Card>
  );
};

export default Product;
