import React, { useState, useEffect} from 'react'
import "./css/Image.css"
import Copyright from "./Copyright"




const Image = ({ img }) => {

  const style = {
    backgroundImage: `url(${img.url})`
  }  

    return (
        <div className="bg-img" style={style}>
           <Copyright img={img}/>
        </div>
    )
}
   
   

export default Image
