import React from 'react'

export default ({ title, paragraph, fontSize}) =>
  <section className="generic-banner relative">
    <div className="container">
      <div className="row height align-items-center justify-content-center">
        <div className="col-lg-10">
          <div className="banner-content text-center">
            <h2 className="text-white" style={{ fontSize: fontSize}}>{title}</h2>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  </section>