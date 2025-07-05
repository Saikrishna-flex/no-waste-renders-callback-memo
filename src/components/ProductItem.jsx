import React from 'react'

const ProductItem = (props) => {
    console.log("redering ProductItem", props.name);
    const {id, name, price, inCart, handleAddToCart} = props
  return (
    <div className='product-item'>
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={() => handleAddToCart(id)}>{inCart ? `✔ Added` : `+ Add to Cart`}</button>
    </div>
  )
}

export default React.memo(ProductItem)