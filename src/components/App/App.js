import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';

import Nav from '../Nav/Nav';
import SideNavSocial from '../SideNavSocial/SideNavSocial';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';

import PointingUpEmoji from '../../../assets/img/pointing-up-emoji.png';

const About = () => (
  <div className="temp-wrapper">
    <h1>About</h1>
  </div>
);

const Photography = () => (
  <div className="temp-wrapper">
    <h1>Photography</h1>
  </div>
);

const Contact = () => (
  <div className="temp-wrapper">
    <h1>Contact</h1>
  </div>
);

const PageNotFound = () => (
  <div className="temp-wrapper">
    <h1>404: Page Not Found</h1>
  </div>
);

export default function App() {
  const scrollToTopStyles = {
    position: 'relative',
    bottom: 0,
    right: 0,
  };

  return (
    <div className="app">
      <Nav />

      <div className="main-content">
        <SideNavSocial />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/photography" component={Photography} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </div>

      <div className="back-to-top-btn">
        <ScrollToTop showUnder={1000} duration={500} style={scrollToTopStyles}>
          <img src={PointingUpEmoji} alt="Back to Top" />
        </ScrollToTop>
      </div>

      <Footer />
    </div>
  );
}
