import React from 'react'

import { AFYOPTemplate } from '../../ComponentIndex'
import { AFYOPSimulaTV } from '../../../data/dataIndex'

const AFYOPPage = () => {
  return (
    <>
        <AFYOPTemplate SimulaTVContent={AFYOPSimulaTV.content}/>
    </>
  )
}

export default AFYOPPage