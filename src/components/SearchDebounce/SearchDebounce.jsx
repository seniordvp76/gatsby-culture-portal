import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import propTypes from 'prop-types';

const SearchDebounce = ({ t, handleChange }) => (
  <DebounceInput
    minLength={1}
    debounceTimeout={300}
    onChange={event => handleChange(event.target.value)}
    placeholder={t('placeholder')}
  />
);

SearchDebounce.propTypes = {
  handleChange: propTypes.func.isRequired,
  t: propTypes.func.isRequired,
};

export default SearchDebounce;
