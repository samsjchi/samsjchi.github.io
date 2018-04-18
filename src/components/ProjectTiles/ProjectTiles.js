import React, { Component } from 'react';

import Blazy from 'blazy';

// Project Tiles
import WeWork from './Projects/WeWork';
import Netflix from './Projects/Netflix';
import Behanced from './Projects/Behanced';
import CNN from './Projects/CNN';
import BoA from './Projects/BoA';
import StanfordChildrensHealth from './Projects/StanfordChildrensHealth';
import VMware from './Projects/VMware';
import PBS from './Projects/PBS';
import Betterment from './Projects/Betterment';
import Volvo from './Projects/Volvo';
import HPE from './Projects/HPE';
import MeterMate from './Projects/MeterMate';

class ProjectTiles extends Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
    const blazy = new Blazy();
    const projectTiles = document.querySelectorAll('.project-tiles__image');

    projectTiles.forEach((projectTile) => {
      let bgStart = projectTile.getAttribute('data-bg-start');
      let bgEnd = projectTile.getAttribute('data-bg-end');
      
      if (bgStart.length && bgEnd.length) {
        projectTile.style.backgroundImage = 'linear-gradient(135deg, ' + bgStart + ' 0%, ' + bgEnd + ' 100%)';
      }
    });
  }
  
  render () {
    return (
      <div className='project-tiles__container'>
        <ul className='project-tiles__column-a project-tiles__column'>
          <WeWork />
          <Netflix />
          <Behanced />
          <CNN />
          <BoA />
          <StanfordChildrensHealth />
        </ul>
        
        <ul className='project-tiles__column-b project-tiles__column'>
          <VMware />
          <PBS />
          <Betterment />
          <Volvo />
          <HPE />
          <MeterMate />
        </ul>
      </div>
    );
  }
}

export default ProjectTiles;