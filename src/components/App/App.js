import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from '../Nav/Nav';
import SideNavLeft from '../SideNavLeft/SideNavLeft';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';

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
  return (
    <div className="app">
      <Nav />

      <div className="main-content">
        <SideNavLeft />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/photography" component={Photography} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
}
