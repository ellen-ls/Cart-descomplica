import React, { useContext, useState } from 'react'
import { BsCartX } from 'react-icons/bs'
import './CartItem.css'
import formatCurrency from '../../utils/formatCurrency'
import propTypes from 'prop-types'
import AppContext from '../../context/AppContext'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'

const CartItem = ({data}) => {

    const {cartItems, setCartItems} = useContext(AppContext)
    const {thumbnail, title, price, quantity} = data
   

    const incrementItem = (item) => {
      const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === data.id ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem
      );
      setCartItems(updatedItems);
  };
  
  const decrementItem = (item) => {
      if (data.quantity === 1) {
      const updatedItems = cartItems.filter((cartItem) => cartItem.id !== data.id);
      setCartItems(updatedItems);
      } else {
      const updatedItems = cartItems.map((cartItem) =>
          cartItem.id === data.id ? { ...cartItem, quantity: cartItem.quantity - 1} : cartItem
      );
      setCartItems(updatedItems);
      }
  };

    const handleRemoveItem = (item) => {
      const updatedItems = cartItems.filter((cartItem) => cartItem.id !== data.id);
      setCartItems(updatedItems);
  };

 
  return (
   <section className='cart-item'>
    <img 
    src={thumbnail}
    alt='imagem do produto' 
    className='cart-item-image'

    />
    <div className='cart-item-content'>
        
        <h3 className='cart-item-title'>{title}</h3>
        <div className='cart-item-quanty'>
                    <button className='button__quanty-item' onClick={decrementItem} disabled={quantity <= 1}><CiCircleMinus/></button>
                    <span className='cart-item-number'>{quantity}</span>
                    <button className='button__quanty-item' onClick={incrementItem}><CiCirclePlus/></button>
                </div>
        <h3 className='cart-item-price'>{formatCurrency(price * quantity, 'BRL')}</h3>
        <button 
        type='button' 
        className='button-remove-item'
        onClick={handleRemoveItem}>
        <BsCartX/>
    </button>
    </div>

    

   </section>
  )
}

export default CartItem

CartItem.propTypes = {
    data:propTypes.object
}.isRequired
