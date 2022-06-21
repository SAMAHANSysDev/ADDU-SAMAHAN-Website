import React from 'react'

import styles from './FaciFinderSection.module.scss'
import { Facilitators, AFYOPLabel } from '../../ComponentIndex';

const FaciFinderSection = ({ facilitators }) => {
  return (
    <div className={styles["FaciFinderSection"]}>
      <div className="container">
        <div className={styles["label"]} id="FaciFinder">
          <AFYOPLabel variant='h1' title="FACI FINDER" />
        </div>
        <Facilitators facilitators={facilitators} />
      </div>
    </div>
  )
}

export default FaciFinderSection