import React from "react";
import { useSelector } from "react-redux";
import { Badge, Button, CardGroup, Col, Container, Row } from "reactstrap";
import Product from "../../components/product-item";
import { useNavigate } from "react-router";
import products from "../../data/products.json";
import { selectCartCount } from "../../store/cart/cartSlice";
import { routeConstants } from "../../constants/routeConstants";

const Home = () => {
  //mapStateToProps - reading content form state
  const count = useSelector(selectCartCount);
  const navigate = useNavigate();//with

  function handleCartClick() {
    navigate(routeConstants.CART);
  }

  return (
    <Container>
      <Col>
        <div className="d-flex flex-row justify-content-between my-4">
          <h3>Redux Cart App</h3>
          <Button onClick={handleCartClick} color="primary">
            Cart{" "}
            <Badge color="white" className="text-black">
              {count}
            </Badge>
          </Button>
        </div>
        <CardGroup>
          {products &&
            products.length &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </CardGroup>
      </Col>
    </Container>
  );
};

export default Home;
