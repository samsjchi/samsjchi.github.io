import React, { Component } from 'react';

import Landing from './Landing';
import ProjectTiles from './ProjectTiles/ProjectTiles';
import Footer from './Footer';

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='content-container'>
          <Landing />
          <ProjectTiles />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
