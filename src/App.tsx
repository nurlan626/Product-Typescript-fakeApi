import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Error from './components/Error';
import Loader from './components/Loader';
// import { IProduct } from './components/model/model';
import Product from './components/Product';
import { useProducts } from './customHooks/useProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss'
import ModalComponent from './components/ModalComponent';
import CreateProduct from './components/CreateProduct';
import { IProduct } from './model/model';
// import { products } from './data/data'

function App() {
  const { products, loading, error, addProductHandler } = useProducts();
  const [showModal, setShowModal] = useState(false);
  function createProductHandler(product: IProduct) {
    setShowModal(false);
    addProductHandler(product);
  }
  return (
    <div className="App">
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Add new product
      </Button>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <div className='products__container'>
      {products.map((product, index) => <Product product={product} key={index} />)}

      </div>

      <div>
        <ModalComponent showModal={showModal} setShowModal={setShowModal}>
          <CreateProduct createProductHandler={createProductHandler} />
        </ ModalComponent>
      </div>
    </div>
  );
}

export default App;
