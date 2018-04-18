import React from 'react';

import boaImg from '../../../../assets/img/boa-beyond-bottom-line.gif';

export default function BoA () {
  return (
    <li id='boa' className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>Bank of America x The Atlantic</span>
        <h2 className='project-tiles__title'>Beyond the Bottom Line</h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>
      
      <div className='project-tiles__image' data-bg-start='#16A085' data-bg-end='#B5AC49'>
        <div className='project-tiles__gradient-overlay'></div>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={boaImg}
         />
      </div>
    </li>
  );
}
