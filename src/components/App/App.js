import React from 'react';

import SideNavLeft from '../SideNavLeft/SideNavLeft';
import Landing from '../Landing/Landing';
import ProjectTiles from '../ProjectTiles/ProjectTiles';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <div className="app">
      <div className="content-container">
        <SideNavLeft />
        <Landing />
        <ProjectTiles />
      </div>
      <Footer />
    </div>
  );
}
