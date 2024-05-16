import React, { useState } from 'react'

import Overlay from './Overlay'

const Impacts = () => {

  // const [summariseOverlay, setSummariseOverlay] = useState(false)

  // {/* Summarise */}
  // const openSummariseOverlay = () => {
  //   setSummariseOverlay(true)
  // }

  // const closeSummariseOverlay = () => {
  //   setSummariseOverlay(false)
  // }

  // const contentInfo = (
  //   <>
  //     <div></div>
  //   </>
  // );

  return (
    <div>
        <h1>Impacts</h1>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <ul style={{ display: "inline-block", textAlign: "left" }}>
            <li>First communist state</li>
            <li>Idea of communism spread to other nations</li>
            <li>Paved the way for the Cold War via its legacy</li>
            <li>Establishment of Soviet Union</li>
            <li>Led to more harsh years of food shortages and economic hardships</li>
          </ul>
        </div>

        <br></br>

{/*         <button onClick={openSummariseOverlay}>Learn more</button>

        <Overlay type={summariseOverlay} function={closeSummariseOverlay} heading="Impacts of the Russian Revolution" content={contentInfo}/> */}
    </div>
  )
}

export default Impacts
