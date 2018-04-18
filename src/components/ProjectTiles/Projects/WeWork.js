import React from 'react';

import weWorkImg from '../../../../assets/img/wework-cities.png';

export default function WeWork () {
  return (
    <li id='wework' className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>WeWork x The Atlantic</span>
        <h2 className='project-tiles__title'>
          <a href='https://www.theatlantic.com/sponsored/wework-2018/focus-on-community/1832/?preview=qAW5VhqO465CaJuLNAbkTMahzps' target='_blank'>How Can Cities Succeed in the 21st Century?</a>
        </h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>

      <div className='project-tiles__image' data-bg-start='#c0efff' data-bg-end='#ffdaa8'>
        <div className='project-tiles__gradient-overlay'></div>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={weWorkImg}
         />
      </div>
    </li>
  );
}
