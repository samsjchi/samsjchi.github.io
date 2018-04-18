import React from 'react';

import metermateImg from '../../../../assets/img/metermate.jpg';

export default function MeterMate () {
  return (
    <li id='metermate' className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>Team Project @ Hack Reactor</span>
        <h2 className='project-tiles__title'>
          <a href='http://metermate.herokuapp.com/' target='_blank'>MeterMate</a>
        </h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>
      
      <div className='project-tiles__image' data-bg-start='#dedede' data-bg-end='#fff'>
        <div className='project-tiles__gradient-overlay'></div>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={metermateImg}
         />
      </div>
    </li>
  );
}
