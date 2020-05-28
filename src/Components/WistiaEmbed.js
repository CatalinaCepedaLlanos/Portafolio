import React from 'react'

export default ({ src }) =>
  <React.Fragment>
    <div className="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
      <div className="wistia_responsive_wrapper" style={{height:'100%', left:0, position:'absolute', top:0, width:'100%'}}>
        <iframe 
          src={src} 
          title="InteraccionesAmericaSolidaria.mp4 Video" 
          allowtransparency="true" 
          frameBorder="0" 
          scrolling="no" 
          className="wistia_embed" 
          name="wistia_embed" 
          allowFullScreen
          mozallowfullscreen="true" 
          webkitallowfullscreen="true" 
          oallowfullscreen="true" 
          msallowfullscreen="true" 
          width="100%" 
          height="100%">
        </iframe>
      </div>
    </div>
    <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
  </React.Fragment>