import React from 'react';

import volvoImg from '../../../../assets/img/volvo-future.png';

export default function Volvo () {
  return (
    <li id='volvo' className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>Volvo x The Atlantic</span>
        <h2 className='project-tiles__title'>Designing for the Future</h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>
      
      <div className='project-tiles__image' data-bg-start='#FF512F' data-bg-end='#fffb85'>
        <div className='project-tiles__gradient-overlay'></div>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={volvoImg}
         />
      </div>
    </li>
  );
}
