import React from 'react';

export default function ProjectTilesItem ({ project }) {
  return (
    <li 
      id={project.id} 
      className='project-tiles__tile'>
      <div className='project-tiles__tile-content'>
        <span className='project-tiles__client'>{project.client}</span>
        <h2 className='project-tiles__title'>
          <a href={project.url} target='_blank'>{project.title}</a>
        </h2>
        <p className='project-tiles__description'>{project.description}</p>
      </div>
      <div className='project-tiles__cta'>View Project →</div>
      
      <div 
        className='project-tiles__image' 
        data-bg-start={project.bgStart} 
        data-bg-end={project.bgEnd}>
        <div className='project-tiles__gradient-overlay'></div>
        <img 
          className='b-lazy' 
          src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          data-src={project.imgSrc}
        />
      </div>
    </li>
  );
}
