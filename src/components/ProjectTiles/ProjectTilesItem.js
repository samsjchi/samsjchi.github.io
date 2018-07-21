import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectTilesItem({ project }) {
  return (
    <li id={project.id} className="project-tiles__tile">
      <div className="project-tiles__tile-content">
        <span className="project-tiles__client">{project.client}</span>
        <h2 className="project-tiles__title">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h2>
        <p className="project-tiles__description">{project.description}</p>
      </div>
      <div className="project-tiles__cta">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      </div>

      <div
        className="project-tiles__image"
        data-bg-start={project.bgStart}
        data-bg-end={project.bgEnd}
      >
        <div className="project-tiles__gradient-overlay" />
        <img
          className="b-lazy"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          data-src={project.imgSrc}
          alt=""
        />
      </div>
    </li>
  );
}

ProjectTilesItem.propTypes = {
  project: PropTypes.object.isRequired,
};
