import React from 'react'
import "./Second.css"
import SecondHeaderImg from "../../images/second-2.png"
const Second = () => {
  return (
    <div className='second'>
        <div>
            <img src={SecondHeaderImg} alt="" />
        </div>
        <div className='Overlay'></div>
    </div>
  )
}

export default Second