import React from 'react';

import cnnImg from '../../../../assets/img/cnn-kennedys.jpg';

export default function CNN () {
  return (
    <li id='cnn' className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>CNN x The Atlantic</span>
        <h2 className='project-tiles__title'>
          <a href='https://www.theatlantic.com/sponsored/cnn-2018/so-you-think-you-know-the-kennedys/1808/' target='_blank'>So You Think You Know the Kennedys?</a>
        </h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>
      
      <div className='project-tiles__image' data-bg-start='#DF4C31' data-bg-end='#000000'>
        <div className='project-tiles__gradient-overlay'></div>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={cnnImg}
         />
      </div>
    </li>
  );
}
