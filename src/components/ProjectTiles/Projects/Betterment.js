import React from 'react';

import bettermentImg from '../../../../assets/img/betterment-investing.gif';

export default function Betterment () {
  return (
    <li id='betterment' className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>Betterment x The Atlantic</span>
        <h2 className='project-tiles__title'>
          <a href='https://www.theatlantic.com/sponsored/betterment-2017/investing-was-it-designed-to-mystify-everyday-americans/1386/' target='_blank'>Investing: Was It Designed to Mystify Everyday Americans?</a>
        </h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>
      
      <div className='project-tiles__image' data-bg-start='#1FA2FF' data-bg-end='#A6FFCB'>
        <div className='project-tiles__gradient-overlay'></div>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={bettermentImg}
         />
      </div>
    </li>
  );
}
