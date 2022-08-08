import React from 'react'
import styles from './styles.module.css'

function ProductCard(props) {

    const {productData} = props
  return (
    <div className={styles.productCard}>
        <img src={productData.thumbnail} alt='productImg' className={styles.productImage}/>
        <p><b>{productData.title}</b></p>
        <p><i>{productData.description}</i></p>
        <p>Price : {productData.price}</p>
        <p>Rating : <b>{productData.rating} / 5</b></p>
    </div>
  )
}

export default ProductCard