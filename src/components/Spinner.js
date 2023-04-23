import React, { Component } from 'react'
import loading from './loading.gif.gif'

const Spinner =()=>  {
 
    return (
      <div className="text-center my-3">
        <img  style={{height : "50px", width:"50px"}} src={loading} alt="loading" />
      </div>
    )
  
}

export default Spinner