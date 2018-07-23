import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';

import Nav from '../Nav/Nav';
import SideSocial from '../SideSocial/SideSocial';
import SideNav from '../SideNav/SideNav';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

import PointingUpEmoji from '../../../assets/img/pointing-up-emoji.png';

const About = () => (
  <div className="temp-wrapper">
    <h1>Under Construction 🛠️</h1>
  </div>
);

const Photography = () => (
  <div className="temp-wrapper">
    <h1>Under Construction 🛠️</h1>
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
        <SideSocial />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/photography" component={Photography} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
        <SideNav />
      </div>

      <div className="back-to-top-btn is-unselectable">
        <ScrollToTop showUnder={1000} duration={500} style={scrollToTopStyles}>
          <img src={PointingUpEmoji} alt="Back to Top" />
        </ScrollToTop>
      </div>

      <Footer />
    </div>
  );
}
