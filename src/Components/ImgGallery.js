import React from 'react'
import styled from 'styled-components'
import config from './../config'

const ImgDiv = styled.div`
  background-position: top !important;
`;

export default ({ images }) =>
  <div className="pb-80">
    <div className="row gallery-item grid-gallery">
      {
        images.map(({ src, width, height }, key) =>
          <div key={key} className={`col-md-${width}`}>
            <a href={`${config.IMAGE_URL}${src}`} className="img-pop-up">
              <ImgDiv 
                className="single-gallery-image" 
                style={{ 
                  background: `url(${config.IMAGE_URL}${src})`,
                  height
                }}
              />
            </a>
          </div>
        )
      }
    </div>
  </div>