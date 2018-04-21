import React, { Component } from 'react';

import SideNavLeft from './SideNavLeft';
import Landing from './Landing';
import ProjectTiles from './ProjectTiles/ProjectTiles';
import Footer from './Footer';

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='content-container'>
          <SideNavLeft />
          <Landing />
          <ProjectTiles />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
