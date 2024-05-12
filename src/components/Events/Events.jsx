import React, { useState } from 'react'
import { eventsInfo } from './events-data'

import Overlay from '../Overlay'
import Padding from '../Padding'

const Events = () => {

  const listItems = eventsInfo.map(info => 
    <li key={info.id} id={info.id}>
      {info.heading}
    </li>
  )

  const contentInfo = eventsInfo.map(info => 
    <div style={{ textAlign: "left" }} key={info.id} id={info.id}>
      <h3>{info.heading}</h3>
      <div>
        {info.content}
      </div>

      <Padding value="12px"/>
      <hr></hr>
      <Padding value="10px"/>
    </div>
  )

  const [learnMoreOverlay, setLearnMoreOverlay] = useState(false)

  {/* LearnMore */}
  const openLearnMoreOverlay = () => {
    setLearnMoreOverlay(true);
  }

  const closeLearnMoreOverlay = () => {
    setLearnMoreOverlay(false);
  }

  return (
    <div>
        <h1>Events</h1>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <ul style={{ display: "inline-block", textAlign: "left" }}>
            {listItems}
          </ul>
        </div>
        <br></br>
        <button onClick={openLearnMoreOverlay}>Learn more</button>

        <Overlay type={learnMoreOverlay} function={closeLearnMoreOverlay} heading="Key Events - Russian Revolution" content={contentInfo}/>
    </div>
  )
}

export default Events