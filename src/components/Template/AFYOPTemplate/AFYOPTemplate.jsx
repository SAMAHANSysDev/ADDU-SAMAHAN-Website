import React from 'react'

import styles from './AFYOPTemplate.module.scss'
import { Navigation, Footer, AFYOPContainer, AFYOPButton } from '../../ComponentIndex'

const AFYOPTemplate = () => {
  return (
    <>
        <Navigation />
        <div className={styles["AFYOPTemplate"]}>
          <div className="container">
            <AFYOPContainer title={"Lorem Ipsum"} variant={"default"} content={"adasdasdasdasd"}>

            </AFYOPContainer>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default AFYOPTemplate