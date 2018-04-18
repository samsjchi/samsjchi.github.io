import React from 'react';

import vmwareImg from '../../../../assets/img/vmware-possibility-report.jpg';

export default function VMware () {
  return (
    <li id='vmware' className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>VMware x The Atlantic</span>
        <h2 className='project-tiles__title'>The Possibility Report</h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>
      
      <div className='project-tiles__image' data-bg-start='#061454' data-bg-end='#fc4a1a'>
        <div className='project-tiles__gradient-overlay'></div>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={vmwareImg}
         />
      </div>
    </li>
  );
}
