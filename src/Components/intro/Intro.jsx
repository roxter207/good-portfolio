import React from 'react';
import "./intro.css"
import shoe2 from "../../img/art.jpg"



export default function Intro() {
  return (
      <div className='i'>
          <div className='i-left'>
              <div className="i-left-wrapper">
                  <h2 className='i-intro'>Hello, My name is</h2>
                  <h2 className='i-name'>Sneha kaimal</h2>
                  <div className="i-title">
                      <div className="i-title-wrapper">
                          <div className="i-title-item">Web Developer</div>
                          <div className="i-title-item">UI/UX Designer</div>
                          <div className="i-title-item">Writer</div>
                          <div className="i-title-item">Game Developer</div>
                          <div className="i-title-item">Data Scientist</div>
                      </div>
                  </div>
                  <p className="i-desc">
                      The pictures posted here are taken from pinterest, therefore the credit goes to the rightfull owner
                  </p>
              </div>
          </div>
          <div className='i-right'>
              <div className="i-bg"></div>
              <img src={shoe2} alt="" className="i-image" />
          </div>
      </div>
  )
}
