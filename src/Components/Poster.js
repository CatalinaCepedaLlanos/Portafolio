import React from 'react'

export default ({ title, paragraphs }) =>
  <section className="subscription-area pt-40 pb-40">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center">
            <h3>{title}</h3>
            {paragraphs.map((paragraph, key) =>
              <div key={key} dangerouslySetInnerHTML={{ __html: paragraph }} />
              // <p key={key}>{paragraph}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>