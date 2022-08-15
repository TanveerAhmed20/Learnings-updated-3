import React,{useContext} from 'react'
import ProductCard from '../../components/product-card/product-card.component'
import { ProductContext } from '../../contexts/products.context'
// import SHOP_DATA from '../../shop-data.json'
import './shop.styles.scss'
const Shop = () => {
 const {products} = useContext(ProductContext);
//  console.log(players)
  return (
    <div className='products-container'>
        {products.map((product,idx)=><ProductCard product={product} key  ={idx}></ProductCard>)}    
    </div>
  )
}

export default Shop