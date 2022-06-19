import React from 'react'
import Image from 'next/image'

import styles from './Facilitator.module.scss'
import { SysDevSocials } from '../../ComponentIndex'
const Facilitator = ({ image, name, position, socials }) => {
  return (
    <div className={styles["Facilitator"]}>
      <div className={styles["Facilitator__details"]}>
      <div className={styles["Facilitator__image"]}>
        <Image.default src={image} layout="fill" objectFit="cover" draggable={false}/>
      </div>
        <div className={styles["texts"]}>
          <h5 className={styles["name"]}>{name}</h5>
          <p className={styles["position"]}>{position}</p>
        </div>
        <div className={styles["socials"]}>
          <SysDevSocials socials={socials} color={"#FFFFFF"}/>
        </div>
      </div>
    </div>
  )
}

export default Facilitator