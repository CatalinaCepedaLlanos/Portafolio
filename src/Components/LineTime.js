import React from 'react'
import config from './../config'

export default () =>
  <section className="process-area pt-80 pb-80">
    <div className="row ml-5 mr-5">
      <div className="col-lg-2 offset-lg-1 col-sm-6 single-process no-padding">
        <img className="img-fluid w-50 p-3" src={`${config.ICON_URL}/InvestigacionUsuarios.svg`} />
        <div className="center-block dot"></div>
        <h2 className="text-uppercase">Investigación</h2>
      </div>
      <div className="col-lg-2 col-sm-6 single-process no-padding">
        <img className="img-fluid w-50 p-3" src={`${config.ICON_URL}/EntendiendoUsuario.svg`} />
        <div className="center-block dot"></div>
        <h2 className="text-uppercase">Entendimiento</h2>
      </div>
      <div className="col-lg-2 col-sm-6 single-process no-padding">
        <img className="img-fluid w-50 p-3" src={`${config.ICON_URL}/Insight.svg`} />
        <div className="d-flex justify-content-center dot"></div>
        <h2 className="text-uppercase">Desafío</h2>
      </div>
      <div className="col-lg-2 col-sm-6 single-process no-padding">
        <img className="img-fluid w-50 p-3" src={`${config.ICON_URL}/DefinirIdeas.svg`} />
        <div className="d-flex justify-content-center dot"></div>
        <h2 className="text-uppercase">Ideación</h2>
      </div>
      <div className="col-lg-2 col-sm-6 single-process no-padding">
        <img className="img-fluid w-50 p-3" src={`${config.ICON_URL}/Prototipar.svg`} />
        <div className="dot"></div>
        <h2 className="text-uppercase">Prototipar</h2>
      </div>
    </div>
  </section>