import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  total:0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // step 1: check if item already exists in cart
      const existingItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItem === -1) {
        state.cartItems.push(action.payload);
        state.total+=action.payload.price;
        state.cartCount++;
        return;
      }
      // step 2: if item does not exist in cart
      state.cartItems[existingItem].quantity= state.cartItems[existingItem].quantity?++state.cartItems[existingItem].quantity:2;
      state.total += state.cartItems[existingItem].price;
      state.cartCount++;
    },
    decrementFromCart:(state,action)=>{
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      const {quantity, price} = action.payload;
      const q = quantity? quantity:1;

      if(quantity===1){
        state.total -= price;
        --state.cartCount;
          state.cartItems = [...state.cartItems.slice(0,itemIndex),...state.cartItems.slice(itemIndex+1)];
          return;
        }

      --state.quantity;
      --state.cartCount;
      state.total -= state.cartItems[itemIndex].price;
      if(state.cartItems[itemIndex].quantity ===0) 
        state.cartItems = [...state.cartItems.slice(0,itemIndex),...state.cartItems.slice(itemIndex+1)];
    }
    ,
    deleteFromCart: (state,action)=>{
      const {price,quantity} = action.payload;
      const q = quantity ? quantity: 1;
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      state.cartCount-= q
      const sub = q? q*price : price;
      state.total-=sub;
      state.cartItems = [...state.cartItems.slice(0,itemIndex),...state.cartItems.slice(itemIndex+1)];
    }
  }
});

export const { addToCart,decrementFromCart,deleteFromCart } = cartSlice.actions;

export const selectCartCount = (state) => state.cart.cartCount;//Home component

export const selectCartItems = (state) => state.cart.cartItems;//Cart Component

export const selectCartTotal = (state) => state.cart.total;//Cart Component -total


export default cartSlice.reducer;
