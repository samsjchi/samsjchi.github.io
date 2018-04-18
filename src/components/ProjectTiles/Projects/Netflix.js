import React from 'react';

import NetflixFaudaImg from '../../../../assets/img/netflix-fauda.jpg';

export default function Netflix () {
  return (
    <li className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>Netflix x The Atlantic</span>
        <h2 className='project-tiles__title'>Fauda</h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className='project-tiles__cta'>View Project →</div>
      <div className='project-tiles__image' data-bg-start='#C6D1E3' data-bg-end='#1C505D'>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={NetflixFaudaImg}
         />
      </div>
    </li>
  );
}
