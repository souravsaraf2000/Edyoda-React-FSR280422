import React from 'react'
import styles from './Card.module.css'

function Card(props) {
    
    const {foodItems} = props
  return (
    <div className={styles.cardContainer}>
        {
            foodItems.map(item => 
                <div key={item.id} id={item.name} className={styles.card}>
                    <img src={item.imageLink} alt={item.name} className={styles.images}/>
                    <h4 className={styles.itemNames}>{item.name}</h4>
                </div>
            )
        }
    </div>
  )
}

export default Card