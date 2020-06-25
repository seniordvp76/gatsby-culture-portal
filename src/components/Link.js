/**
* Wrapper for Link to use language in path
* Based on i18n Link: gatsby-i18n-plugin/packages/gatsby-i18n/src/Link.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import i18n from 'i18next';

const Link = ({ to, children, ...rest }) => {
  const lng = i18n.language;
  return (
    <GatsbyLink to={lng ? `/${lng}${to}` : `${to}`} {...rest}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
