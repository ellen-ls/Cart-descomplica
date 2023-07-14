import React, { useContext } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import propTypes from 'prop-types'
import './ProductsCard.css'
import formatCurrency from '../../utils/formatCurrency'
import AppContext from '../../context/AppContext'

const ProductCard = ({data}) => {

    const{title, thumbnail, price} = data
    const {cartItems,setCartItems} = useContext(AppContext)

    const handleAddCart = () => {
        const existingItem = cartItems.find((item) => item.id === data.id);
        if (existingItem) {
          const updatedItems = cartItems.map((item) =>
            item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
          );
          setCartItems(updatedItems);
        } else {
          setCartItems([...cartItems, { ...data, quantity: 1 }]);
        }
      };

      

  return (
    <section className='product-card'>
        <img src={thumbnail.replace(/\w\.jpg/gi,'W.jpg')} alt='product' className='card_image'></img>
        <div className='card_infos'>
            <h2 className='card_price'>{formatCurrency(price, 'BRL')}</h2>
            <h2 className='card_title'>{title}</h2>
        </div>

        <button 
        type='button' 
        className='button_add-cart'
        onClick={handleAddCart}>
            <BsFillCartPlusFill/>
        </button>
    </section>
  )
}

export default ProductCard

ProductCard.proTypes = {

    data: propTypes.shape({})
}.isRequired;