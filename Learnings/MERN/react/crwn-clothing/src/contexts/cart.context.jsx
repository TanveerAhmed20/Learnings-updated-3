import React,{useState,createContext} from 'react';

const addCartItem = (cartItems,productToAdd,totalItems,setTotalItems)=>{
    // console.log('addCartItems called')
    // console.log(totalItems)
    setTotalItems(totalItems+1)

    const index = cartItems.findIndex((x)=>x.id ===productToAdd.id);
    // console.log(index)
    if(index!==-1){
        return  [...cartItems.slice(0,index),{...cartItems[index],quantity:cartItems[index].quantity+1},...cartItems.slice(index+1)]
    }
    return [...cartItems,{...productToAdd,quantity:1}]
  
}


export const CartContext = createContext({
        cartItems:[],
        totalItems:0,
        setCartItems :()=>null,
        addItemToCart:()=>null
})

export const CartProvider = ({children})=>{
    const [cartItems  ,setCartItems] = useState([]);
    const [totalItems,setTotalItems] = useState(0);
    const addItemToCart = (product)=>{
        // console.log('clicked');
        setCartItems(addCartItem(cartItems,product,totalItems,setTotalItems));
        // console.log(cartItems)
    }
    const value = {cartItems,totalItems,addItemToCart};
    return <CartContext.Provider value ={value}>{children}</CartContext.Provider>
}