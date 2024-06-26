import React, { useState } from 'react'

import Overlay from '../Overlay';

import Padding from '../Padding';

import { causesInfo } from './causes-data'

const Causes = () => {

  const [economicHardshipsOverlay, setEconomicHardshipsOverlay] = useState(false)
  const [constantWarOverlay, setConstantWarOverlay] = useState(false)
  const [workingConditionsOverlay, setWorkingConditionsOverlay] = useState(false)
  const [povertyOverlay, setPovertyOverlay] = useState(false)
  const [tsarOverlay, setTsarOverlay] = useState(false)

    {/* Functions */}
    const openEconomicHardshipsOverlay = () => {
        setEconomicHardshipsOverlay(true);
    }
    
    const openConstantWarOverlay = () => {
        setConstantWarOverlay(true);
    }
    
    const openWorkingConditionsOverlay = () => {
        setWorkingConditionsOverlay(true);
    }
    
    const openPovertyOverlay = () => {
        setPovertyOverlay(true);
    }


  {/* EconomicHardships */}

  const closeEconomicHardshipsOverlay = () => {
    setEconomicHardshipsOverlay(false);
  }

  {/* ConstantWar */}

  const closeConstantWarOverlay = () => {
    setConstantWarOverlay(false);
  }

  {/* WorkingConditions */}

  const closeWorkingConditionsOverlay = () => {
    setWorkingConditionsOverlay(false);
  }

  {/* Poverty */}

  const closePovertyOverlay = () => {
    setPovertyOverlay(false);
  }

  return (
    <div>
      <h1>Causes</h1>
      <br></br>
      <footer style={{ color: "gray", fontFamily: "Poppins", fontSize: "14px", fontStyle: "italic" }}>Click on the list items to learn more about each cause!</footer>
      <br></br>

      <div style={{ textAlign: "center" }}>
        <ul style={{ display: "inline-block", textAlign: "left" }}>
          <li onClick={openEconomicHardshipsOverlay} style={{ cursor: "pointer" }}>{causesInfo[0].information}</li>
            <li onClick={openConstantWarOverlay} style={{ cursor: "pointer" }}>{causesInfo[1].information}</li>
            <li onClick={openWorkingConditionsOverlay} style={{ cursor: "pointer" }}>{causesInfo[2].information}</li>
            <li onClick={openPovertyOverlay} style={{ cursor: "pointer" }}>{causesInfo[3].information}</li>
        </ul>
      </div>

      <Padding value="10px"/>
      
      {/* Information Overlays */}
      <Overlay type={economicHardshipsOverlay} function={closeEconomicHardshipsOverlay} content={causesInfo[0].content} heading={causesInfo[0].information}/>
      <Overlay type={constantWarOverlay} function={closeConstantWarOverlay} content={causesInfo[1].content} heading={causesInfo[1].information}/>
      <Overlay type={workingConditionsOverlay} function={closeWorkingConditionsOverlay} content={causesInfo[2].content} heading={causesInfo[2].information}/>
      <Overlay type={povertyOverlay} function={closePovertyOverlay} content={causesInfo[3].content} heading={causesInfo[3].information}/>
    </div>
    
  )
}

export default Causes

{/* <div style={{ textAlign: "center" }}>
  <ul style={{ display: "inline-block", textAlign: "left" }}>
    <li>Peasants faced heavy taxation while they had no money, and this created more inequalities throughout the nation. </li>
    <li>Workers working in factories faced dreadful conditions, which slowed down economic development.</li>
    <li>The Russo-Japanese War strained Russia’s military spending and Russia’s resources and made the economy plummet.</li>
    <li>WWI disrupted food supplies, Russia’s resources, and Russia’s military dramatically.</li>
    <li>The people revolted to get rid of the Tsar, and amongst this chaos, the Bolshevik Party seized power and took control of Russia by gaining the support of his people using the slogan ‘Peace, Land, Bread’</li>
  </ul>
</div> */}
