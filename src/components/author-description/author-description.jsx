import React from 'react';
import Card from 'react-bootstrap/Card';
import Video from '../video';
import Photo from '../image';

const AutorDescription = (props) => {
  const { data } = props;
  const {
    name, birthDate, death, science, authorImage,
  } = data;
  const yearsLife = !death.length ? birthDate : `${birthDate} - ${death}`;

  return (
    <section className="author-description_wrapper">
      <Photo className="author-description_photo" imgsrc={authorImage} alt="author photo" />
      <Card id="author-description_block">
        <Card.Body className="cardBody pl-0 pt-0">
          <Card.Title id="author-description_title">{name}</Card.Title>
          <Card.Text style={{ marginBottom: '0' }}>{`( ${yearsLife} )`}</Card.Text>
          <Card.Text>{science}</Card.Text>
          <Video youtubeId={data.youtube} start={data.youtubeStart || 0} />
        </Card.Body>
      </Card>
    </section>
  );
};

export default AutorDescription;
