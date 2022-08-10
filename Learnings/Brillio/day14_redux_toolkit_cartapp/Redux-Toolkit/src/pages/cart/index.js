import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardBody, CardFooter, CardText, Container } from "reactstrap";
import { addToCart, decrementFromCart, deleteFromCart, selectCartItems ,selectCartTotal} from "../../store/cart/cartSlice";
import "./cart.css";
const Cart = () => {
  const cartItems = useSelector(selectCartItems);
 const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  function handleDecrementFromCart(product) {
    dispatch(decrementFromCart(product));
  }

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }
  function handleDeleteFromCart(product) {
    dispatch(deleteFromCart(product));
  }
  return (
    <Container className=" cart-container flex-row">
      <Container className="card-container flex-col ">
        {cartItems &&
          cartItems.map((item,idx) => (
            <Card key = {idx} className="mt-2">
              <CardBody className="flex-row">
                <div className="item-details">
                  <p>ITEM ID: {item.id}</p>
                  <p>{item.name}</p>
                  <p>QUANTITY: {item.quantity}</p>
                  <p> Price : {item.price}</p>
                  <Button className="btn btn-danger" onClick ={()=>handleDeleteFromCart(item)}>REMOVE</Button>
                </div>
                <div className="flex-row center">
                  <Button onClick={() => handleDecrementFromCart(item)}>-</Button>
                  <Button onClick={() => handleAddToCart(item)}>+</Button>
                </div>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          ))}
      </Container>
      {
      cartTotal!==0 ? 
      (<Container className = "cart-total-container">
           <Card className="mt-2">
              <CardBody>
                <CardText>
                    Cart Total : {`${cartTotal.toFixed(2)}`}$
                </CardText>
                <Button>
                    CHECKOUT
                </Button>
              </CardBody>
            </Card>
      </Container>):''
  }
    </Container>
  );
};

export default Cart;
