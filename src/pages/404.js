import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div id="main404">
      <h1>404</h1>
      <SEO title="404: Not found" />
      <h3>{t('error404')}</h3>
      <Fragment>
        <h4>{t('description404')}</h4>
        <p className="intro404">{t('intro').slice(-65)}</p>
      </Fragment>
      <Link className="btn-primary" to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFoundPage;
