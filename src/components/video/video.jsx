import React from 'react';
import ModalVideo from 'react-modal-video';
import { Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import './video.css';


class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { t } = this.props;
    const { isOpen } = this.state;
    const { youtubeId, start } = this.props;
    const options = {
      start,
      color: 'white',
      autoplay: 1,
    };
    return (
      <section className="video-block">
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={youtubeId}
          youtube={options}
          color="white"
          onClose={() => this.setState({ isOpen: false })}
        />
        <Button variant="primary" onClick={this.openModal}>{t('Open Video')}</Button>
      </section>
    );
  }
}

export default withTranslation()(Video);
