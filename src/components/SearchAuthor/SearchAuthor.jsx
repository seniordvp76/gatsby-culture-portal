import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from '../Link';
import Photo from '../image';

const Author = ({ author, t }) => (
  <Card className="authorCard">
    <Photo className="photoCard blog-post" imgsrc={author.authorImage} />
    <Card.Body className="p-0">
      <Card.Title className="titleCard">{author.name}</Card.Title>
      <Card.Text>
        {author.birthDate}
        {' '}
          (
        {author.birthPlace}
          )
      </Card.Text>
      <Link to={author.path}><Button variant="primary" className="buttonCard">{t('more')}</Button></Link>
    </Card.Body>
  </Card>
);

export default Author;

Author.propTypes = {
  author: PropTypes.shape({
    birthDate: PropTypes.string,
    birthPlace: PropTypes.string,
    science: PropTypes.string,
    name: PropTypes.string,
    path: PropTypes.string,
    authorImage: PropTypes.string,
  }),
  t: PropTypes.func.isRequired,
};

Author.defaultProps = {
  author: {},
};
