/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import './layout.css';
import './style/mainStyles.scss';
// import MainSlider from './main-slider';

const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div
        style={{
          margin: '0 auto',
          // maxWidth: 960,
          // padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} style={{ fontSize: '.7em' }} />
        {/* <MainSlider /> */}
      </div>
    </>
  );
};

export default Layout;
