import React from 'react'
import "./Second.css"
import SecondHeaderImg from "../../images/second-2.png"
const Second = () => {
  return (
    <div className='second'>
        <div>
            <img src={SecondHeaderImg} alt="" />
            <p className='text-content'><i>You <span>win</span>  some, you lose some, you <span>wreck</span>  some</i></p>
        </div>
        <div className='Overlay'></div>
    </div>
  )
}

export default Second