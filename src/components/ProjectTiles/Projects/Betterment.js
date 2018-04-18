import React from 'react';

import bettermentImg from '../../../../assets/img/betterment-investing.gif';

export default function Betterment () {
  return (
    <li id='betterment' className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>Betterment x The Atlantic</span>
        <h2 className='project-tiles__title'>Investing: Was It Designed to Mystify Everyday Americans?</h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>
      
      <div className='project-tiles__image' data-bg-start='#1FA2FF' data-bg-end='#A6FFCB'>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={bettermentImg}
         />
      </div>
    </li>
  );
}
