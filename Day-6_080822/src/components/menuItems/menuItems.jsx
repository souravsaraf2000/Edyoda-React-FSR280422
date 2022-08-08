import React from 'react'
import styles from './menuItems.module.css'

function MenuItems() {

    const itemNames = ['Pizza','Biriyani','Cake','Dosa','SandWich']
  return (
    <>
        <ul>
            {
                itemNames.map((item,index)=>
                    <a href={`./index.html#${item}`} className = {styles.menuItems} key={index}><li>{item}</li></a>    
                )
            }
        </ul>
    </>
  )
}

export default MenuItems