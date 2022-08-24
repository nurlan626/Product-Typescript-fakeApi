import React, { useEffect, useState } from 'react';
import { IProduct } from '../model/model';
import axios from 'axios';


export const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const addProductHandler = (product: IProduct) => {
        setProducts((prev) => [product, ...prev]);
        
    }

    const fetchProducsts = async () => {
        try {
            setError('')
            setLoading(true)
            let response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
            setProducts(response.data);
            setLoading(false)
        } catch (e: any) {
            setLoading(false);
            setError(e.message);
        }
    }
    useEffect(() => {
        fetchProducsts();
    }, []);
    return { products, loading, error, addProductHandler }
}