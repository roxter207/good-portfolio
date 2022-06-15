import React from 'react';
import "../productlist/productlist.css";

export default function Product({img, link}){
  return (
      <div className='p'>
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <nav target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img" />
          </nav>
      </div>
  )
}
