import React from 'react';
import { useTranslation } from 'react-i18next';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { uniqueId } from 'lodash';
import Photo from '../image';


const { Carousel } = require('react-responsive-carousel');

const Gallery = (props) => {
  const { t } = useTranslation();
  const { data } = props;

  return (
    <section className="gallery">
      <h3>{t('gallery')}</h3>
      <Carousel
        width="100%"
        dynamicHeight
        transitionTime={1000}
        emulateTouch
        infiniteLoop
        useKeyboardArrows
        showThumbs={false}
        showStatus={false}
      >
        {data.length && data.map(item => (
          <div key={uniqueId()}>
            <Photo className="slide" imgsrc={item} alt={item} />
          </div>
        ))
        }
      </Carousel>
    </section>
  );
};

export default Gallery;
