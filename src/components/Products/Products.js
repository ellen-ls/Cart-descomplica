import React, { useContext, useEffect, useState } from 'react'
import './Products.css'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import AppContext from '../../context/AppContext'

const Products = () => {

    const {products, setProducts, loading, setLoading} = useContext(AppContext) 
    


    useEffect(()=>{

        fetchProducts('perfume').then((response)=>{
            setProducts(response)
            setLoading(false)
            
        })
    },[])
    
  return (
  (loading && <Loading/>) || (
    <section className='products container'>
  
  {
      products.map((product)=> <ProductCard key={product.id} data={product}></ProductCard>)
  }
 </section> )
  
  )
}

export default Products
