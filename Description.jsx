import React from 'react'
import "./css/Description.css"

const Description = ({ img }) => {


    return (
        <section className="section">
        <h1>{img.title}</h1>
        <p>{img.explanation}</p>
      </section>
    )
}

export default Description
