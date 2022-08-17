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

const deleteCartItem = (cartItems,productToAdd,totalItems,setTotalItems)=>{
    // console.log('addCartItems called')
    // console.log(totalItems)
    if(totalItems==0) return ;
    setTotalItems(totalItems-1)

    const index = cartItems.findIndex((x)=>x.id ===productToAdd.id);
    // console.log(index)
    if(index!==-1){
        if(cartItems[index].quantity==1) return [...cartItems.slice(0,index),...cartItems.slice(index+1)]
        return  [...cartItems.slice(0,index),{...cartItems[index],quantity:cartItems[index].quantity-1},...cartItems.slice(index+1)]
    }
  
}



export const CartContext = createContext({
        cartItems:[],
        totalItems:0,
        setCartItems :()=>null,
        addItemToCart:()=>null,
        decrementFromCart:()=>null
})

export const CartProvider = ({children})=>{
    const [cartItems  ,setCartItems] = useState([]);
    const [totalItems,setTotalItems] = useState(0);
    const addItemToCart = (product)=>{
        // console.log('clicked');
        setCartItems(addCartItem(cartItems,product,totalItems,setTotalItems));
        // console.log(cartItems)
    }
    const decrementFromCart = (product) => {
        setCartItems(deleteCartItem(cartItems,product,totalItems,setTotalItems))
    }
    const value = {cartItems,totalItems,addItemToCart,decrementFromCart};
    return <CartContext.Provider value ={value}>{children}</CartContext.Provider>
}