import React from 'react';

import stanfordChildrensHealthImg from '../../../../assets/img/stanford-childrens-health.jpg';

export default function StanfordChildrensHealth () {
  return (
    <li id='stanford' className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>Stanford Children's Health x The Atlantic</span>
        <h2 className='project-tiles__title'>
          <a href='https://www.theatlantic.com/sponsored/lucile-packard-childrens-health-stanford-2017/building-with-care/1694/' target='_blank'>Building with Care</a>
        </h2>
        <p className='project-tiles__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <div className='project-tiles__cta'>View Project →</div>
      
      <div className='project-tiles__image' data-bg-start='#2D2114' data-bg-end='#42495B'>
        <div className='project-tiles__gradient-overlay'></div>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={stanfordChildrensHealthImg}
         />
      </div>
    </li>
  );
}
