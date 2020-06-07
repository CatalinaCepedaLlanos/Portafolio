import React from 'react'
import SecondaryBanner from '../Components/SecondaryBanner'
import ImgHoverLink from '../Components/ImgHoverLink'

import projects from '../Data/projects'

export default () => {
  return(
    <React.Fragment>
      <SecondaryBanner 
        title={'PROYECTOS'}
        fontSize={'55px'}
      />
      <div className="container">
        <div className="core-feature-bottom-area" style={{padding: '200px 0'}}>
          <div className="row gallery-item">
            {
              projects.map(({ name, imgDesktop, url }, i) =>
                <ImgHoverLink
                  key={i}
                  name={name}
                  img={imgDesktop}
                  url={url}
                />
              )
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}