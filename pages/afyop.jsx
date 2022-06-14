import React from 'react'
import Head from "next/head";

import { AFYOPPage } from '../src/components/ComponentIndex'

const afyop = () => {
  return (
    <>
      <Head>
        <title>AFYOP Simula - SAMAHAN</title>
      </Head>
      <AFYOPPage />
    </>
  )
}

export default afyop