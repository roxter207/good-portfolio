import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import "./Toggle.css"
import sun from "../../img/sun.png"
import moon from "../../img/moon.png"

export default function Toggle() {
    const theme = useContext(ThemeContext)
   
    const handleClick = () =>{
        theme.dispatch({ type: "TOGGLE" })
    }

  return (
      <div className="t">
          <img src= {sun} alt="" className="t-icon" />
          <img src={moon} alt="" className="t-icon" />
          <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode? 25 : 0}}></div>
      </div>
  ) 
}
