import React from 'react'

export default ({ title, paragraphs, duration, rol }) =>
  <div className="row pt-80">
    <div className="col-md-9">
      <h3 className="text-heading mb-30">{title}</h3>
      {
        paragraphs.map((p, key) => 
          <div key={key} dangerouslySetInnerHTML={{ __html: p }} />
        )
      }
    </div>
    <div className="col-md-3">
      <p><strong>Duración:</strong>{` ${duration}`}</p>
      <p><strong>Mi rol:</strong>{` ${rol} `}</p>
    </div>
  </div>