import React from 'react';

import PBSImg from '../../../../assets/img/pbs-to-pledge-allegiance.jpg';

export default function Netflix () {
  return (
    <li id="pbs" className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>PBS x The Atlantic</span>
        <h2 className='project-tiles__title'>To Pledge Allegiance</h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className='project-tiles__cta'>View Project →</div>
      <div className='project-tiles__image' data-bg-start='#C6D1E3' data-bg-end='#1C505D'>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={PBSImg}
         />
      </div>
    </li>
  );
}
