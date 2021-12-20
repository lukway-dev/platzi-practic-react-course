/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import AddToCartImage from '@icons/bt_add_to_cart.svg'
import '../styles/components/ProductItem.scss'

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext)

  const handleCart = () => {
    addToCart(product)
  }

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>{product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleCart}>
          <img src={AddToCartImage} alt="" />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem