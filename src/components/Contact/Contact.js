import React from 'react';

import GitHubLogo from '../../../assets/img/github-logo.svg';
import LinkedInLogo from '../../../assets/img/linkedin-logo.svg';
import FacebookLogo from '../../../assets/img/facebook-logo.svg';
import InstagramLogo from '../../../assets/img/instagram-logo.svg';
import Portrait from '../../../assets/img/portrait.jpg';

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__heading">Get in touch. ✉️</h2>

      <div className="contact__box">
        <div className="contact__box--left">
          <a className="contact__email" href="mailto:hello@samchi.co">
            hello@<br />samchi.co
          </a>

          <p className="contact__body">
            Interested in working together or collaborating on a project (whether it's web
            development, design, photography, or otherwise)? Got any questions, comments,
            compliments, or feedback about my work? Don&apos;t be shy and say hello!
          </p>

          <div className="contact__social-buttons">
            <a href="https://github.com/samsjchi" target="_blank" rel="noopener noreferrer">
              <GitHubLogo width={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/samsjchi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogo width={30} />
            </a>
            <a href="https://www.facebook.com/samsjchi" target="_blank" rel="noopener noreferrer">
              <FacebookLogo width={30} />
            </a>
            <a href="https://www.instagram.com/samsjchi/" target="_blank" rel="noopener noreferrer">
              <InstagramLogo width={30} />
            </a>
          </div>
        </div>

        <div className="contact__box--right is-unselectable">
          <img className="contact__portrait" src={Portrait} alt="" />
        </div>
      </div>
    </div>
  );
}
