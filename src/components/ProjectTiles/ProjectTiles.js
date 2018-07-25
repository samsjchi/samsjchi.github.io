import React, { Component } from 'react';

import Blazy from 'blazy';
import ProjectTilesItem from './ProjectTilesItem';
import projects from './projects.json';

class ProjectTiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolling: false,
      scrollPosition: null,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const blazy = new Blazy();
    const projectTiles = document.querySelectorAll('.project-tiles__image');

    // Bind scroll event listener
    window.addEventListener('scroll', this.handleScroll);

    // Scroll to top on page refresh
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    // Store initial scroll position
    this.setState(() => ({ scrollPosition: document.documentElement.scrollTop }));

    // Set interval to throttle scrolling
    const interval = setInterval(() => {
      if (this.state.isScrolling) {
        this.setState(() => ({ isScrolling: false }));
      }
    }, 1000);

    // Store interval to clear it in componentWillUnmount
    this.setState(() => ({ interval }));

    // Set color gradients on each project tile
    projectTiles.forEach((projectTile) => {
      const bgStart = projectTile.getAttribute('data-bg-start');
      const bgEnd = projectTile.getAttribute('data-bg-end');
      const gradientOverlay = projectTile.children[0];

      if (bgStart.length && bgEnd.length) {
        projectTile.style.backgroundImage = `linear-gradient(135deg, ${bgStart} 0%, ${bgEnd} 100%)`;
        gradientOverlay.style.backgroundImage = `linear-gradient(135deg, ${bgStart} 0%, ${bgEnd} 100%)`;
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.state.interval);
  }

  handleScroll() {
    this.setState(() => ({ isScrolling: true }));

    const currentScrollPosition = document.documentElement.scrollTop;
    const scrollDepth = Math.round((currentScrollPosition - this.state.scrollPosition) / 12);

    const columnA = document.querySelector('.project-tiles__column-b');

    if (document.documentElement.clientWidth >= 480) {
      columnA.style.transform = `translate3d(0px, ${scrollDepth}px, 0px)`;
    }
  }

  render() {
    return (
      <div className="project-tiles">
        <h1 className="project-tiles__heading is-unselectable">Work.</h1>

        <div className="project-tiles__columns">
          <ul className="project-tiles__column-a project-tiles__column">
            {projects.columnA.map(project => (
              <ProjectTilesItem key={project.id} project={project} />
            ))}
          </ul>

          <div className="project-tiles__column-b-wrapper project-tiles__column">
            <ul className="project-tiles__column-b">
              {projects.columnB.map(project => (
                <ProjectTilesItem key={project.id} project={project} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTiles;
