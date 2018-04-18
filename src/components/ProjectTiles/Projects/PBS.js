import React from 'react';

import pbsImg from '../../../../assets/img/pbs-to-pledge-allegiance.jpg';

export default function PBS () {
  return (
    <li id='pbs' className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>PBS x The Atlantic</span>
        <h2 className='project-tiles__title'>
          <a href='https://www.theatlantic.com/sponsored/PBS-2017/to-pledge-allegiance/1443/' target='_blank'>To Pledge Allegiance</a>
        </h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>
      
      <div className='project-tiles__image' data-bg-start='#eeeeee' data-bg-end='#efe75a'>
        <div className='project-tiles__gradient-overlay'></div>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={pbsImg}
         />
      </div>
    </li>
  );
}
