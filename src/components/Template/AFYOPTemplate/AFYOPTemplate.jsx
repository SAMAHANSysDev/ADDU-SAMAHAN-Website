import React from 'react'

import styles from './AFYOPTemplate.module.scss'
import { Navigation, Footer } from '../../ComponentIndex'

const AFYOPTemplate = () => {
  return (
    <>
        <Navigation />
        <div className={styles["AFYOPTemplate"]}>
            
        </div>
        <Footer />
    </>
  )
}

export default AFYOPTemplate