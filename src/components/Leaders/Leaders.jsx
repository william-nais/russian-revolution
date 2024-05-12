import React, { useState, useRef } from 'react'

import Overlay from '../Overlay'

import { images } from './leaders-data';

const Leaders = () => {

  const overlayRef = useRef(null)

  const [imageOverlay, setImageOverlay] = useState(false)

  {/* Image */}
  const openImageOverlay = () => {
    setImageOverlay(true);
  }

  const closeImageOverlay = () => {
    setImageOverlay(false);
  }

  const leaderImage = images.map(image =>
    <div key={image.id}>
      <img
        src={image.imageURL}
        alt={image.name}
        className="overlay-image-2"
      />
      <p>
        <b>{image.name}</b>
      </p>
      <br></br>
    </div>
  );

  

  const leaders = images.map(person => 
    <li key={person.id} id={person.id}>
      {person.name}
    </li>
  )

  return (
    <div>
      <h1>Leaders</h1>
      <br></br>

      {/* Content */}
      <div>
        <div>There were several leaders in different aspects of this revolution:</div>
        <div style={{ textAlign: "center" }}>
          <ul style={{ display: "inline-block", textAlign: "left" }}>
            {leaders}
          </ul>
        </div>
      </div>

      
      <br></br>
      <button onClick={openImageOverlay}>See images</button>

      {/* Overlay */}
      <Overlay type={imageOverlay} function={closeImageOverlay} heading="Leaders" content={leaderImage}/>
      <br></br>
    </div>
  )
}

export default Leaders