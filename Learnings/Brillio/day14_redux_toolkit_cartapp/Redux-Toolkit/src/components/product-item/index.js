import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, CardBody, CardHeader, CardImg } from "reactstrap";
import { addToCart } from "../../store/cart/cartSlice";

const Product = ({ product }) => {
  const { id, name, price, description, image } = product;
  //mapDispatchToProps
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  return (
    <Card>
      <CardHeader>
        <h3>
          {id} - {name}
        </h3>
      </CardHeader>
      <CardImg alt={`img-${name}`} src={image} top width="200px" height="350px"/>
      <CardBody>
        <div>{price}$</div>
        <div>{description}</div>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </CardBody>
    </Card>
  );
};

export default Product;
