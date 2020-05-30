import React from 'react'
import { Link } from "react-router-dom"
import Image from "../Components/Image"

export default ({ url, subTitle, name, description, img, alignImg, background }) =>
  <section className={`${background ? 'core-feature-area' : 'core-feature-bottom-area'} pt-100 pb-100`}>
    <div className="container">
      {
        alignImg === 'right' ?
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 core-feat-left">
              <div>
                <h5>{subTitle}</h5>
                <h2>
                  <span>{name}</span>
                </h2>
                <p>
                  {description}
                </p>
                <Link to={url}>
                  <button className="primary-btn hover d-inline-flex align-items-center">
                    <span className="mr-10">Leer Más</span>
                    <span className="lnr lnr-arrow-right"></span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 core-feature-right">
              <div className="item text-center">
                <Image
                  src={img}
                  width={650}
                  height={500}
                />
              </div> 
            </div> 
          </div>
        :
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7 core-feature-right">
              <div className="item text-center">
                <Image
                  src={img}
                  width={650}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-5 core-feat-left">
              <div>
                <h5>{subTitle}</h5>
                <h2>
                  <span>{name}</span>
                </h2>
                <p>
                  {description}
                </p>
                <Link to={url}>
                  <button className="primary-btn hover d-inline-flex align-items-center">
                    <span className="mr-10">Leer Más</span>
                    <span className="lnr lnr-arrow-right"></span>
                  </button>
                </Link>
              </div>
            </div> 
          </div>
      }
    </div>
  </section>