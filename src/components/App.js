import React, { Component } from 'react';

import Landing from './Landing';
import ProjectTiles from './ProjectTiles';

class App extends Component {
  render () {
    return (
      <div className='content-container'>
        <Landing />
        <ProjectTiles />
      </div>
    );
  }
}

export default App;
