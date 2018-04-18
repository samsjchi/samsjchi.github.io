import React, { Component } from 'react';

import Blazy from 'blazy';

// Project Tiles
import Netflix from './Projects/Netflix';
import PBS from './Projects/PBS';
import VMware from './Projects/VMware';

import vmwareImg from '../../../assets/img/vmware-the-possibility-report.jpg';

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
        {/* Column A */}
        <ul className='project-tiles__column-a project-tiles__column'>
          <Netflix />
          <PBS />
          <VMware />
          <li className='project-tiles__tile'>
            <div className='project-tiles__tile-content'>
              <span className='project-tiles__client'>Team Project @ Hack Reactor</span>
              <h2 className='project-tiles__title'>MeterMate</h2>
              <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='project-tiles__cta'>View Project →</div>
            <div className='project-tiles__image' data-bg-start='#C6D1E3' data-bg-end='#1C505D'>
              <img 
                className='b-lazy' 
                src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                data-src={vmwareImg}
               />
            </div>
          </li>
          <li className='project-tiles__tile'>
            <div className='project-tiles__tile-content'>
              <span className='project-tiles__client'>Volvo x The Atlantic</span>
              <h2 className='project-tiles__title'>Designing for the Future</h2>
              <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='project-tiles__cta'>View Project →</div>
            <div className='project-tiles__image' data-bg-start='#C6D1E3' data-bg-end='#1C505D'>
              <img 
                className='b-lazy' 
                src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                data-src={vmwareImg}
               />
            </div>
          </li>
          <li className='project-tiles__tile'>
            <div className='project-tiles__tile-content'>
              <span className='project-tiles__client'>WeWork x The Atlantic</span>
              <h2 className='project-tiles__title'>How Can Cities Succeed in the 21st Century?</h2>
              <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='project-tiles__cta'>View Project →</div>
            <div className='project-tiles__image' data-bg-start='#C6D1E3' data-bg-end='#1C505D'>
              <img 
                className='b-lazy' 
                src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                data-src={vmwareImg}
               />
            </div>
          </li>
          <li className='project-tiles__tile'>
            <div className='project-tiles__tile-content'>
              <span className='project-tiles__client'>Hewlett Packard Enterprise x The Atlantic</span>
              <h2 className='project-tiles__title'>Eighteen Zeros</h2>
              <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='project-tiles__cta'>View Project →</div>
            <div className='project-tiles__image' data-bg-start='#C6D1E3' data-bg-end='#1C505D'>
              <img 
                className='b-lazy' 
                src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                data-src={vmwareImg}
               />
            </div>
          </li>
        </ul>
        
        {/* Column B */}
        <ul className='project-tiles__column-b project-tiles__column'>
          <li className='project-tiles__tile'>
            <div className='project-tiles__tile-content'>
              <span className='project-tiles__client'>Personal Project</span>
              <h2 className='project-tiles__title'>Behanced</h2>
              <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='project-tiles__cta'>View Project →</div>
            <div className='project-tiles__image' data-bg-start='#C6D1E3' data-bg-end='#1C505D'>
              <img 
                className='b-lazy' 
                src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                data-src={vmwareImg}
               />
            </div>
          </li>
          <li className='project-tiles__tile'>
            <div className='project-tiles__tile-content'>
              <span className='project-tiles__client'>Bank of America x The Atlantic</span>
              <h2 className='project-tiles__title'>Beyond the Bottom Line</h2>
              <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='project-tiles__cta'>View Project →</div>
            <div className='project-tiles__image' data-bg-start='#C6D1E3' data-bg-end='#1C505D'>
              <img 
                className='b-lazy' 
                src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                data-src={vmwareImg}
               />
            </div>
          </li>
          <li className='project-tiles__tile'>
            <div className='project-tiles__tile-content'>
              <span className='project-tiles__client'>CNN x The Atlantic</span>
              <h2 className='project-tiles__title'>So You Think You Know the Kennedys?</h2>
              <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='project-tiles__cta'>View Project →</div>
            <div className='project-tiles__image' data-bg-start='#C6D1E3' data-bg-end='#1C505D'>
              <img 
                className='b-lazy' 
                src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                data-src={vmwareImg}
               />
            </div>
          </li>
          <li className='project-tiles__tile'>
            <div className='project-tiles__tile-content'>
              <span className='project-tiles__client'>Stanford Children's Health x The Atlantic</span>
              <h2 className='project-tiles__title'>Building with Care</h2>
              <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='project-tiles__cta'>View Project →</div>
            <div className='project-tiles__image' data-bg-start='#C6D1E3' data-bg-end='#1C505D'>
              <img 
                className='b-lazy' 
                src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                data-src={vmwareImg}
               />
            </div>
          </li>
          <li className='project-tiles__tile'>
            <div className='project-tiles__tile-content'>
              <span className='project-tiles__client'>Betterment x The Atlantic</span>
              <h2 className='project-tiles__title'>Investing: Was It Designed to Mystify Everyday Americans?</h2>
              <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='project-tiles__cta'>View Project →</div>
            <div className='project-tiles__image' data-bg-start='#C6D1E3' data-bg-end='#1C505D'>
              <img 
                className='b-lazy' 
                src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                data-src={vmwareImg}
               />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProjectTiles;
