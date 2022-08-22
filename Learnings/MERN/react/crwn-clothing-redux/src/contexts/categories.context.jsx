import React,{useState,createContext,useEffect} from 'react';
import SHOP_DATA from '../shop-data.js'
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';
export const CategoriesContext= createContext({
        products:[],
        setProducts :()=>null
})

export const CategoriesProvider = ({children})=>{
    const [categoriesMap ,setCategoriesMap] = useState({});
    
    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const categoryMap = await getCategoriesAndDocuments();
            // console.log('map set');
            // console.log(categoryMap)
            setCategoriesMap(categoryMap)
        }
        // addCollectionAndDocuments('categories',SHOP_DATA);
        getCategoriesMap();
    },[])
    const value = {categoriesMap};
    return <CategoriesContext.Provider value ={value}>{children}</CategoriesContext.Provider>
}