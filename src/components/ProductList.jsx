import React from 'react'
import ProductItem from './ProductItem';

const ProductList = (props) => {
  const {products, handleAddToCart} = props;
    console.log("redering ProductList", products);
  return (
    <div className='product-grid'>
    {
        products.map((product) => <ProductItem key={product.id} {...product} handleAddToCart={handleAddToCart} />)
    }
    </div>
  )
}

export default  ProductList