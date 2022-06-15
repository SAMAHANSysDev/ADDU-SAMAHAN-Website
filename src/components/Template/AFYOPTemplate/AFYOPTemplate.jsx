import React from 'react'

import styles from './AFYOPTemplate.module.scss';
import { Navigation, Footer, AFYOPFeedSection, AfyopFourthSection } from '../../ComponentIndex';
import { CFData, NHData } from '../../../data/dataIndex';


const AFYOPTemplate = ({ SimulaTVContent }) => {
  return (
    <>
        <Navigation />
        <AFYOPFeedSection variant={SimulaTVContent.variant} content={SimulaTVContent.content}/>
        <AfyopFourthSection variant={CFData.content.variant} content={CFData.content.items} content2={NHData.content.contents} />
        <Footer />
    </>
  )
}

export default AFYOPTemplate