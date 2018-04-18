import React from 'react';

import hpeImg from '../../../../assets/img/hpe-eighteen-zeros.jpg';

export default function HPE () {
  return (
    <li className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>Hewlett Packard Enterprise x The Atlantic</span>
        <h2 className='project-tiles__title'>Eighteen Zeros</h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>
      
      <div className='project-tiles__image' data-bg-start='#0B0E1D' data-bg-end='#01a982'>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={hpeImg}
         />
      </div>
    </li>
  );
}