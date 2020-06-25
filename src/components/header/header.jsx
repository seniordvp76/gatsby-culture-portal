import React from 'react';
import { withTranslation } from 'react-i18next';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { navigate } from 'gatsby';
import Link from '../Link';
import Translate from '../translate';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../translate/i18n';


class Header extends React.Component {
  componentDidMount() {
    const { i18n } = this.props;
    // set .split('/')[2] for production
    const lang = window.location.pathname.split('/')[1];
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
      // set .slice(3) for production
      const page = window.location.pathname.split('/').slice(2).join('/');
      navigate(`/${lang}/${page}`);
    }
  }

  render() {
    const { t } = this.props;
    return (
      <header>
        <Navbar expand="md">
          <Navbar.Brand><Link to="/"><Image src={logo} /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav>
              <div className="wrapper">
                <Nav.Item><Link to="/" activeStyle={{ color: '#40589A' }} className="menuLink">{t('menu.main')}</Link></Nav.Item>
                <Nav.Item><Link to="/search" activeStyle={{ color: '#40589A' }} className="menuLink">{t('menu.search')}</Link></Nav.Item>
              </div>
              <Nav.Item><Translate /></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default withTranslation()(Header);
