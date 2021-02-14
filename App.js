import './App.css';
import React, { useState, useEffect} from 'react'
import axios from "axios"
import Navbar from "./components/Navbar"
import Image from './components/Image.jsx';
import Description from "./components/Description"

function App() {
  const [img, setImg] = useState([])

    useEffect(() => {
       const imgData = async () => {
           const dailyImg = await axios("/api")
           console.log(dailyImg.data)
           setImg(dailyImg.data)
       }
       imgData()
    }, [])

  
    return (
        <div className="main">
          <Navbar />
          <div className="main-section">
            <Image img={img}  />
            <Description img={img} />
          </div>
         
        
        </div>
    )
}

export default App;
