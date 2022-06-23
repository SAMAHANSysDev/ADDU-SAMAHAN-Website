import React from 'react'
import { GimmicksButton, AfyopGimmickSection } from "../../ComponentIndex";
const AFYOPGimmicks = ({link, firstP, secondP, thirdP}) => {
  return (
    <div>
        <section>
       <AfyopGimmickSection 
       text= {firstP}
       />
       <GimmicksButton 
       title = "Coming Soon"
       variant='default'
       />
       </section>

       <section>
       <AfyopGimmickSection 
       text={secondP}
       />
       <GimmicksButton 
       title = "Coming Soon"
       variant='default'
       />
       </section>

       <section>
       <AfyopGimmickSection 
       text={thirdP}
       />
       <GimmicksButton 
       title = "JOIN DISCORD SERVER"
       variant='default'
       />
       </section>

    </div>
  )
}

export default AFYOPGimmicks