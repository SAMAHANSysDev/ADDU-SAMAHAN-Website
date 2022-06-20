import React, { useState, useEffect } from 'react'

import styles from './AFYOPTemplate.module.scss';
import { Navigation, Footer, AFYOPFeedSection, AfyopFourthSection, FaciFinderSection, AFYOPLanding } from '../../ComponentIndex';
import { CFData, NHData } from '../../../data/dataIndex';
import { ALandingData } from '../../../sampleData/dataIndex';
import { FilterContents } from '../../../utilities/datetime'

const AFYOPTemplate = ({ SimulaTVContent, facilitators, AFYOPLandingData }) => {
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
        <AFYOPFeedSection variant={SimulaTVContent.variant} content={SimulaTVContent.content}/>
        <AfyopFourthSection variant={CFData.content.variant} content={CFData.content.items} content2={NHContent} />
        <FaciFinderSection facilitators={facilitators}/>
        <Footer />
    </>
  )
}

export default AFYOPTemplate