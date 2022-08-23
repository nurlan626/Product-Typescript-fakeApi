import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IProduct } from './components/model/model';
import Product from './components/Product';
// import { products } from './data/data'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchProducsts = async () => {
    try {
      setError('')
      setLoading(true)
      let response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
      setProducts(response.data);
      setLoading(false)
    } catch (e: any) {
      setLoading(false);
      setError(e.message)
    }
  }
  useEffect(() => {
    fetchProducsts();
  }, []);
  return (
    <div className="App">
      {loading && <div>"Loading"</div>} 
      {error && <div>{error}</div>}
      {products.map((product, index) => <Product product={product} key={index} />)}
    </div>
  );
}

export default App;
