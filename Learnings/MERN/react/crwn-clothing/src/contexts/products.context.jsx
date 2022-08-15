import React,{useState,createContext} from 'react';
import Products from '../shop-data.json'

export const ProductContext = createContext({
        products:[],
        setProducts :()=>null
})

export const ProductsProvider = ({children})=>{
    const [products ,setProducts] = useState(Products);
    const value = {products,setProducts};

    return <ProductContext.Provider value ={value}>{children}</ProductContext.Provider>
}