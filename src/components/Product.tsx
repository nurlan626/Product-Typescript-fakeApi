import React, { useState } from 'react'
import {IProduct} from './model/model'
import '../styles/Product.scss'

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
  const [details, setDetails] = useState(false);
  return (
    <div className='product'>
    <img src={product.image} width={100} height={50}/>
        <div className='title'>{product.title} </div>
        <div>{product.price}</div>
      <button
        className={details ? " button yellowButton" : "button blueButton"}
        onClick={() => setDetails(prev => !prev)}>
        {details ? 'Hide details' : 'Show details'}
      </button>
        {details && <div>{product.description}</div>}       

    </div>
  )
}

export default Product