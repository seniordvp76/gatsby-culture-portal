import React from 'react';
import Card from 'react-bootstrap/Card';
import { withTranslation } from 'react-i18next';
import { uniqueId } from 'lodash';
import gitIcon from './git.svg';

class Footer extends React.Component {
  state = {
    items: [
      {
        name: 'Tatyana Hetsman',
        nickName: 'lorabard',
        git: 'https://github.com/LoraBard',
        avatar: 'https://avatars1.githubusercontent.com/u/47930758?s=400&v=4',
        worklog: ['header', 'Page with list of authors contains search widget', 'design of pages'],
      },
      {
        name: 'Kate Zenchik',
        nickName: 'kavalapka',
        git: 'https://github.com/kavalapka',
        avatar: 'https://avatars3.githubusercontent.com/u/16915498?s=460&v=4',
        worklog: ['video overlay component', 'list of exhibitions component', 'routing with language in URL'],
      },
      {
        name: 'Stetckaia Iuliia',
        nickName: 'juliastetskaya',
        git: 'https://github.com/juliastetskaya',
        avatar: 'https://avatars3.githubusercontent.com/u/30536011?s=460&v=4',
        worklog: ['portal translation into three languages', 'author of the day component', 'put content in .json, .js files'],
      },
      {
        name: 'Dzmitry Ivanou',
        nickName: 'dzmitryi',
        git: 'https://github.com/DzmitryI',
        avatar: 'https://avatars3.githubusercontent.com/u/46649383?s=460&v=4',
        worklog: ['timeline', 'component "our team" on the main page', 'author description', '404 page'],
      },
      {
        name: 'Fiodar Kaputski',
        nickName: 'feodorius',
        git: 'https://github.com/Feodorius',
        avatar: 'https://avatars2.githubusercontent.com/u/39455164?s=460&v=4',
        worklog: ['gallery', 'portal description'],
      },
      {
        name: 'Viktar Hlushchenia',
        nickName: 'slayer110',
        git: 'https://github.com/slayer110',
        avatar: 'https://avatars0.githubusercontent.com/u/29726358?s=460&v=4',
        worklog: ['map'],
      },
    ],
  };

  render() {
    const { items } = this.state;
    const { t } = this.props;
    return (
      <section className="our-team">
        <h3 className="our-team__title">
          <span>{t('our')}</span>
          {t('team')}
        </h3>
        <div className="our-team__list">
          {items.length > 0 && items.map(item => (
            <Card className="our-team__item" key={uniqueId()}>
              <Card.Img src={item.avatar} alt="avatar" className="avatar" />
              <Card.Title style={{ fontSize: '.8em' }}>{item.name}</Card.Title>
              <Card.Subtitle style={{ fontSize: '.7em' }}>{item.nickName}</Card.Subtitle>
              <Card.Link target="_blank" rel="noopener noreferrer" href={item.git}>
                <Card.Img id="our-team__gitIcon" src={gitIcon} alt="Github" />
              </Card.Link>
              <ul className="footer_inf">
                {item.worklog.map(elem => <li key={uniqueId()}>{elem}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    );
  }
}

export default withTranslation()(Footer);
