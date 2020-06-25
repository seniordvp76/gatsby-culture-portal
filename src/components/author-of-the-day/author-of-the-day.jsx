import React from 'react';
import Card from 'react-bootstrap/Card';
import i18n from 'i18next';
import { sortBy } from 'lodash';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import Link from '../Link';
import Photo from '../image';

const AuthorOfTheDay = (props) => {
  const { data } = props;
  const { t } = useTranslation();
  const authors = data.allJavascriptFrontmatter.edges;
  const filteredAuthors = authors.filter(el => el.node.frontmatter.lng === i18n.language);
  const index = new Date().getDay() % 5;
  const sortedAuthors = sortBy(filteredAuthors, el => el.node.frontmatter.name);
  const author = sortedAuthors[index].node.frontmatter;

  const yearsLife = !author.death.length ? author.birthDate : `${author.birthDate} - ${author.death}`;

  return (
    <section id="author-of-the-day">
      <h3 id="author-of-the-day__title">
        <span>{t('photographer')}</span>
        {t('day')}
      </h3>
      <Card id="author__block">
        <Photo className="author__photo" imgsrc={author.authorImage} />
        <Card.Body id="author__description">
          <Card.Title id="author__title">{author.name}</Card.Title>
          <Card.Text style={{ marginBottom: '0' }}>{`( ${yearsLife} )`}</Card.Text>
          <Card.Text id="author__science">{author.science}</Card.Text>
          <Link to={author.path} id="author__link">
            <Button id="author__button" variant="primary">
              {t('more')}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </section>
  );
};

export default AuthorOfTheDay;
