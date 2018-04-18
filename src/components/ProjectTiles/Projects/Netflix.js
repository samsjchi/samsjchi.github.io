import React from 'react';

import NetflixImg from '../../../../assets/img/netflix-fauda.jpg';

export default function Netflix () {
  return (
    <li id='netflix' className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>Netflix x The Atlantic</span>
        <h2 className='project-tiles__title'>Fauda</h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>

      <div className='project-tiles__image' data-bg-start='#22485f' data-bg-end='#030303'>
        <div className='project-tiles__gradient-overlay'></div>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={NetflixImg}
         />
      </div>
    </li>
  );
}
