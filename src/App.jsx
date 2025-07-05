import { useCallback, useMemo, useState } from 'react'
import './App.css'
import { productsDB } from './components/ProductsData';
import ProductList from './components/ProductList';

function App() {
  console.log("rendering App component")
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState(productsDB);
  const [showInCartOnly, setShowInCartOnly] = useState(false);

  const handleAddToCart = useCallback( (productId) => setProducts((products)=> products.map((product) => (product.id === productId) ? {...product, inCart : !product.inCart} : product)), [] );

  const filteredProducts = useMemo(()=> {
    console.log("Only calculates/re-runs when showInCartOnly or Products Changes");
    return products.filter((product)=> showInCartOnly ? product.inCart : true)
  },[showInCartOnly, products])


  // const filteredProducts = products.filter((product) => {
  //   console.log("Calculates everytime when app re-renders")
  //   return showInCartOnly ? product.inCart : true
  // });

  return (
    <div>
     <button className='btn' onClick={() => setCount((prev) => prev + 1)}>Click to Re-render APP {count}</button>
     <button className='btn' onClick={()=> setShowInCartOnly((prev) => !prev)}>{showInCartOnly ? 'Show All' : 'Show In Cart Only'}</button>
     <ProductList products={filteredProducts} handleAddToCart={handleAddToCart}/>
    </div>
  )
}

export default App
