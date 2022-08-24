import React, { useState } from 'react'
import { IProduct } from '../model/model';
import axios from 'axios';

interface createProductProps {
    createProductHandler: (product: IProduct) => void,}

const CreateProduct = ({createProductHandler}: createProductProps) => {
    const productData: IProduct = {
        title: '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 42,
            count: 10
        }
    }
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const changeHandler = (event: any) => {
        setValue(event.target.value);
    }
    const submitHandler = async (event: React.FormEvent) => {
        setError('')
        event.preventDefault();

        if (value.trim().length === 0) {
            setError("Please eneter valid title.")
            return
        }
        productData.title = value;
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
        createProductHandler(response.data);
        console.log('qeqwe');

    }
    return (
        <>
        <form onSubmit={submitHandler}>
            <input
                type='text'
                placeholder='Enter title'
                value={value}
                onChange={changeHandler}
            />
            <button type="submit">Create product with title</button>
            
        </form>
        <div style={{color: 'red'}}>{error && error}</div>
        </>
        
    )
}

export default CreateProduct