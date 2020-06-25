import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import { navigate } from 'gatsby';

const Translate = () => {
  const { t, i18n } = useTranslation();
  const value = i18n.language;
  const changeLanguage = (locale) => {
    i18n.changeLanguage(locale);
    // eslint-disable-next-line no-undef
    // set .slice(3) for production
    const page = window.location.pathname.split('/').slice(2).join('/');
    navigate(`/${locale}/${page}`);
  };

  const handleChange = (event) => {
    changeLanguage(`${event.target.value}`);
  };

  return (
    <Form className="select-language">
      <Form.Group className="mb-0">
        <Form.Control as="select" value={value} onChange={handleChange}>
          <option value="ru">{t('russian')}</option>
          <option value="by">{t('belorussian')}</option>
          <option value="en">{t('english')}</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default Translate;
