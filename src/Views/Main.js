import React from 'react';
import Banner from '../Components/Banner';
import FeatureArea from '../Components/FeatureArea';

import projects from '../Data/projects'

export default () => {
  const isMobile = (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)
  return(
    <React.Fragment>
      <Banner />
      {
        projects.map(({url, subTitle, name, description, img, alignImg, background}, i) =>
          <FeatureArea
            key={i}
            url={url}
            subTitle={subTitle}
            name={name}
            description={description}
            img={img}
            alignImg={isMobile ? 'right' : alignImg}
            background={background}
          />
        )
      }
    </React.Fragment>
  );
};