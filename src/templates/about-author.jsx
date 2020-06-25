import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Layout from '../components/layout';
import TimeLine from '../components/timeLine';
import Exhibition from '../components/exhibition';
import AutorDescription from '../components/author-description';
import Gallery from '../components/gallery';

import Map from '../components/map';
import './about-author.css';

export default function Template(props) {
  const { data } = props;
  const { frontmatter } = data.javascriptFrontmatter;
  const locations = [frontmatter.birthPlaceLocation];
  frontmatter.exhibitions.forEach(exh => locations.push(exh.location));
  const { t } = useTranslation();

  return (
    <div>
      <Layout />
      <main>
        <div className="blog-post">
          <AutorDescription data={frontmatter} />
          <TimeLine activity={frontmatter.activity} />
          <Exhibition exhibitions={frontmatter.exhibitions} />
          <Gallery data={frontmatter.works} />
          <Map locations={locations} />
        </div>
      </main>
      <footer>{t('footer')}</footer>
    </div>
  );
}

export const pageQuery = graphql`
  query($searchPath: String!, $lang: String!) {
    javascriptFrontmatter(frontmatter: {path: {eq: $searchPath}, lng: {eq: $lang}}) {
    frontmatter {
      birthDate
      birthPlaceLocation { name, lat, lng, center {lat, lng}, zoom}
      name
      death
      activity{date, description}
      works
      science
      authorImage
      youtube
      youtubeStart
      exhibitions {
        name
        photo
        year
        location {name, lat, lng}
      }
      works
    }
  }
  }
`;

Template.defaultProps = {
  data: {},
};

Template.propTypes = {
  data: PropTypes.shape({
    javascriptFrontmatter: PropTypes.object,
  }),
};
