/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import CloseIcon from '@icons/icon_close.png'
import '../styles/components/OrderItem.scss'

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext)

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={CloseIcon} alt="close" onClick={() => removeFromCart(product)}/>
    </div>
  )
}

export default OrderItem