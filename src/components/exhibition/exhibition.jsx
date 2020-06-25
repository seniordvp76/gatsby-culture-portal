import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';

import { uniqueId } from 'lodash';
import Photo from '../image';


const Exhibition = ({ exhibitions }) => {
  const { t } = useTranslation();
  return (
    <section className="exhibition">
      <h3>{t('Exhibitions')}</h3>
      <div className="exhib__group">
        {
        exhibitions.map(exh => (
          <Card className="exhib__card" key={uniqueId()}>
            <Card.Header>
              <Photo imgsrc={exh.photo} />
            </Card.Header>
            <Card.Body className="exhib__desc">
              <Card.Title>{exh.name}</Card.Title>
              <Card.Text>{exh.year}</Card.Text>
            </Card.Body>
          </Card>
        ))
      }
      </div>
    </section>
  );
};

export default Exhibition;
