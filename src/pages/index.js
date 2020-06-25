import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';
import AuthorOfTheDay from '../components/author-of-the-day';
// import MainSlider from '../components/main-slider';

import '../components/translate/i18n';
import Description from '../components/portal-description/description';

const IndexPage = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <div>
      <section className="background"><Layout /></section>
      {/* <MainSlider className="background" /> */}
      <main>
        <SEO title="Home" />
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
        <Description />
        <AuthorOfTheDay data={data} />
        <Footer />
      </main>
      <footer>{t('footer')}</footer>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
query {
  allJavascriptFrontmatter {
    edges {
      node {
        frontmatter {
          science
          authorImage
          birthDate
          death
          name
          path
          lng
        }
      }
    }
  }
}
`;

IndexPage.defaultProps = {
  data: {},
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allJavascriptFrontmatter: PropTypes.object,
  }),
};
