import React from 'react';

import hpeImg from '../../../../assets/img/hpe-eighteen-zeros.jpg';

export default function HPE () {
  return (
    <li className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>Hewlett Packard Enterprise x The Atlantic</span>
        <h2 className='project-tiles__title'>
          <a href='https://www.theatlantic.com/sponsored/hpe-2017/eighteen-zeros/1545/' target='_blank'>Eighteen Zeros</a>
        </h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>
      
      <div className='project-tiles__image' data-bg-start='#0B0E1D' data-bg-end='#0c7d63'>
        <div className='project-tiles__gradient-overlay'></div>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={hpeImg}
         />
      </div>
    </li>
  );
}
