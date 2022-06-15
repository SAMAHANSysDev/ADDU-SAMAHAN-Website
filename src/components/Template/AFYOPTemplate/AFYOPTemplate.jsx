import React from 'react'

import styles from './AFYOPTemplate.module.scss'
import { Navigation, Footer, AFYOPFeedSection } from '../../ComponentIndex'

const AFYOPTemplate = ({ SimulaTVContent }) => {
  return (
    <>
        <Navigation />
        <AFYOPFeedSection variant={SimulaTVContent.variant} content={SimulaTVContent.content}/>
        <Footer />
    </>
  )
}

export default AFYOPTemplate