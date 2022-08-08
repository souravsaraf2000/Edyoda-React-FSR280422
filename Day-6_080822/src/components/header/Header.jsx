import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <nav className={styles.headerContainer}>
        <div className={styles.menuContainer}>
            <div className={styles.menuItems}>
                Index
            </div>
            <div className={styles.menuItems}>
                Food
            </div>
            <div className={styles.menuItems}>
                About
            </div>
        </div>
    </nav>
  )
}

export default Header