import React from 'react'
import { Link } from "react-router-dom"
import Image from "../Components/Image"

export default ({ name, img, url }) =>
  <div className="col-md-4 pb-80">
    <Link to={`/${url}`}>
      <h3 className="text-center text-heading text-uppercase">{name}</h3>
      <div className="hovereffect">
        <Image
          src={img}
        />
        <div className="overlay">
          <button className="genric-btn default circle mt-70 ml-20 text-center">VER MÁS</button>
        </div>
      </div>
    </Link>
  </div>