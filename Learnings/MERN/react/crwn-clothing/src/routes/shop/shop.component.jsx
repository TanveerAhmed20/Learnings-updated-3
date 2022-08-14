import React from 'react'
import SHOP_DATA from '../../shop-data.json'
const Shop = () => {
  return (
    <div>
        {SHOP_DATA.map((product)=>
        <div>
            <h2>{product.id}</h2>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>{product.imageUrl}</h2>
        
        </div>)}
    </div>
  )
}

export default Shop