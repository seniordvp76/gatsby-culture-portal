import React, { Fragment } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next';
import { uniqueId } from 'lodash';


const { Carousel } = require('react-responsive-carousel');

const MainSlider = () => {
  const { t } = useTranslation();
  const slides = t('slider', { returnObjects: true });
  return (
    <Fragment>
      <Carousel
        autoPlay
        interval={5000}
        transitionTime={2000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable={false}
      >
        {slides.length && slides.map(item => (
          <div key={uniqueId()}>
            <img className="main_slider_img" src={item} alt={item} />
          </div>
        ))
        }
      </Carousel>
    </Fragment>
  );
};

export default MainSlider;
