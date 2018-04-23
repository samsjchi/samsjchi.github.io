import React, { Component } from 'react';

import ProjectTilesItem from './ProjectTilesItem';
import projects from './projects.json';
import Blazy from 'blazy';

class ProjectTiles extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      isScrolling: false,
      scrollPosition: null
    };
    
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount () {
    const blazy = new Blazy();
    const projectTiles = document.querySelectorAll('.project-tiles__image');
    
    // Bind scroll event listener
    window.addEventListener('scroll', this.handleScroll);
    
    // Scroll to top on page refresh
    window.onbeforeunload = () => { window.scrollTo(0, 0); }
    
    // Store initial scroll position
    this.setState(() => ({ scrollPosition: document.documentElement.scrollTop }));
    
    // Set interval to throttle scrolling
    let interval = setInterval(() => {
      if (this.state.isScrolling) {
        this.setState(() => ({ isScrolling: false }))
      }
    }, 1000);
    
    // Store interval to clear it in componentWillUnmount
    this.setState(() => ({ interval }));

    // Set color gradients on each project tile
    projectTiles.forEach((projectTile) => {
      let bgStart = projectTile.getAttribute('data-bg-start');
      let bgEnd = projectTile.getAttribute('data-bg-end');
      let gradientOverlay = projectTile.children[0];
      
      if (bgStart.length && bgEnd.length) {
        projectTile.style.backgroundImage = 'linear-gradient(135deg, ' + bgStart + ' 0%, ' + bgEnd + ' 100%)';
        gradientOverlay.style.backgroundImage = 'linear-gradient(135deg, ' + bgStart + ' 0%, ' + bgEnd + ' 100%)';
      }
    });
  }
  
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.state.interval);
  }
  
  handleScroll () {
    this.setState(() => ({ isScrolling: true }));
    
    let currentScrollPosition = document.documentElement.scrollTop;
    let scrollDepth = Math.round((currentScrollPosition - this.state.scrollPosition) / 12);

    let columnA = document.querySelector('.project-tiles__column-a');
    columnA.style.transform = 'translate3d(0px, ' + scrollDepth + 'px, 0px)';
  }
  
  render () {
    return (
      <div className='project-tiles__container'>
        <h1 className='project-tiles__heading'>Work.</h1>
        
        <div className='project-tiles__columns'>
          <div className='project-tiles__column-a-wrapper project-tiles__column'>
            <ul className='project-tiles__column-a'>
              {
                projects.columnA.map((project) => {
                  return (
                    <ProjectTilesItem
                      key={project.id}
                      project={project}
                    />
                  );
                })
              }
            </ul>
          </div>
          
          <ul className='project-tiles__column-b project-tiles__column'>
            {
              projects.columnB.map((project) => {
                return (
                  <ProjectTilesItem
                    key={project.id}
                    project={project}
                  />
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectTiles;
