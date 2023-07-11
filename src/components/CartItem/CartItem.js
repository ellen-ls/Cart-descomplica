import React, { useContext } from 'react'
import { BsCartX } from 'react-icons/bs'
import './CartItem.css'
import formatCurrency from '../../utils/formatCurrency'
import propTypes from 'prop-types'
import AppContext from '../../context/AppContext'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'

const CartItem = ({data}) => {

    const{cartItems, setCartItems} = useContext(AppContext)
    const {id, thumbnail, title, price} = data

    const handleRemoveItem = () =>{
        const updatedItems = cartItems.filter((item)=>item.id !== id) 
        setCartItems(updatedItems)
    }
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
                    <button className='button__quanty-item'><CiCircleMinus /></button>
                    <span className='cart-item-number'>1</span>
                    <button className='button__quanty-item'><CiCirclePlus /></button>
                </div>
        <h3 className='cart-item-price'>{formatCurrency(price, 'BRL')}</h3>
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
