import React from 'react'
import './flag.css'
import Flower from './image/flower.jpg'
function IndianFlag() {
  return (
    
    <div className="flag">
    <div className="stripe orange"></div>
    <div className="stripe white">
      <div className="chakra"></div>
    </div>
    <div className="stripe green"></div>
    <div>
    <img src={Flower} alt='hi'></img>
    </div>
  </div>
   
  );
}

export default IndianFlag;
