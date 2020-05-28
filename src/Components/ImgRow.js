import React from 'react'
import Image from './Image'
import config from './../config'

export default ({ src, width = 12, height = 500, alt }) =>
  <div className="row">
    <div className={`col-md-${width} text-center grid-gallery`}>
      <a href={`${config.IMAGE_URL}${src}`} className="img-pop-up">
        <Image
          src={src}
          height={height}
          alt={alt}
        />
      </a>
    </div>
  </div>