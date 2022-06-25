import React, { useState, useEffect } from 'react'

import styles from './AFYOPTemplate.module.scss'
import { Navigation, Footer, AFYOPFeedSection, AfyopFourthSection, FaciFinderSection, AFYOPLanding, AFYOPGimmicks, AFYOPCarousel } from '../../ComponentIndex';
import { CFData, NHData } from '../../../data/dataIndex';
import { ALandingData } from '../../../sampleData/dataIndex';
import { FilterContents } from '../../../utilities/datetime'

const AFYOPTemplate = ({ SimulaTVContent, facilitators, AFYOPLandingData, firstP, secondP, thirdP, fHeading, sHeading, tHeading, carcon, fPicture,sPicture,tPicture }) => {
  const [NHContent, SetNHContent] = useState(NHData.content.contents);

  useEffect(() => {
    SetNHContent(FilterContents(NHContent));
    
    const interval = setInterval(() => {
      SetNHContent(FilterContents(NHContent));
    }, 10000)

    return () => clearInterval(interval);
  }, [])

  return (
    <>
        <Navigation />
        <AFYOPLanding AFYOPLandingData={ALandingData}/>
        <AFYOPCarousel carcon = {carcon}/>
        <div className={[styles["divider"], styles['divider-1']].join(' ')}></div>
        <AFYOPFeedSection variant={SimulaTVContent.variant} content={SimulaTVContent.content}/>
        <div className={[styles["divider"], styles['divider-2']].join(' ')}></div>
        <AfyopFourthSection variant={CFData.content.variant} content={CFData.content.items} content2={NHContent} />
        <FaciFinderSection facilitators={facilitators}/>
        <AFYOPGimmicks firstP = {firstP} secondP = {secondP} thirdP ={thirdP} fHeading={fHeading} sHeading={sHeading} tHeading={tHeading} fPicture={fPicture} sPicture={sPicture} tPicture={tPicture}/>
        <Footer />
    </>
  )
}

export default AFYOPTemplate