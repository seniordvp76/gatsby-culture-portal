import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import './description.css';

const Description = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <h1 className="h1">{t('welcome')}</h1>
      <p className="description">{t('intro')}</p>
    </Fragment>
  );
};

export default Description;
