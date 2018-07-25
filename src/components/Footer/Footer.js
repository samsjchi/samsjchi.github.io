import React from 'react';

// Logos
import ReactLogo from '../../../assets/img/react-logo.svg';
import BabelLogo from '../../../assets/img/babel-logo.svg';
import WebpackLogo from '../../../assets/img/webpack-logo.svg';
import SassLogo from '../../../assets/img/sass-logo.svg';
import GitHubLogo from '../../../assets/img/github-logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social-buttons">
        <ul className="footer__social-buttons-list">
          <li>
            <a href="https://github.com/samsjchi" target="_blank" rel="noopener noreferrer">
              <svg x="0px" y="0px" viewBox="0 0 41 41">
                <title>GitHub</title>
                <circle
                  className="ring"
                  fill="none"
                  strokeMiterlimit="10"
                  cx="20.5"
                  cy="20.5"
                  r="20"
                />
                <path
                  className="github-icon icon"
                  d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/samsjchi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg x="0px" y="0px" viewBox="0 0 41 41">
                <title>LinkedIn</title>
                <circle
                  className="ring"
                  fill="none"
                  strokeMiterlimit="10"
                  cx="20.5"
                  cy="20.5"
                  r="20"
                />
                <path
                  className="linkedin-icon icon"
                  d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/samsjchi" target="_blank" rel="noopener noreferrer">
              <svg x="0px" y="0px" viewBox="0 0 41 41">
                <title>Facebook</title>
                <circle
                  className="ring"
                  fill="none"
                  strokeMiterlimit="10"
                  cx="20.5"
                  cy="20.5"
                  r="20"
                />
                <path
                  className="fb-icon icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24,13c0,0.9,0,2.4,0,2.4s-1.8-0.2-2.2,0.5c-0.2,0.4-0.1,1.5-0.1,2.2c0.8,0,1.6,0,2.4,0c-0.2,0.9-0.3,1.5-0.5,2.3c-0.7,0-1.9,0-1.9,0V28c0,0-2.2,0-3.3,0c0-2.3,0-5,0-7.5c-0.5,0-0.9,0-1.4,0c0-0.9,0-1.5,0-2.4c0.5,0,0.9,0,1.4,0c0.1-1.7,0.1-3.4,1-4.3C20.3,12.9,21.2,13,24,13z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/samsjchi/" target="_blank" rel="noopener noreferrer">
              <svg x="0px" y="0px" viewBox="0 0 41 41">
                <title>Instagram</title>
                <circle
                  className="ring"
                  fill="none"
                  strokeMiterlimit="10"
                  cx="20.5"
                  cy="20.5"
                  r="20"
                />
                <path
                  className="instagram-icon icon"
                  d="M26.1,13.1H14.9c-1,0-1.9,0.8-1.9,1.9v11.3c0,1,0.8,1.9,1.9,1.9h11.1c1,0,1.9-0.8,1.9-1.9V15C27.9,13.9,27.1,13.1,26.1,13.1z M23.6,20.6c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-0.5,0.1-1,0.3-1.4c0.5-1,1.5-1.7,2.7-1.7c1.2,0,2.2,0.7,2.7,1.7C23.4,19.6,23.6,20.1,23.6,20.6z M26.3,25.7c0,0.4-0.3,0.8-0.8,0.8h-9.9c-0.4,0-0.8-0.3-0.8-0.8v-6.5h1.3c-0.1,0.4-0.2,0.9-0.2,1.4c0,2.6,2.1,4.6,4.6,4.6c2.6,0,4.6-2.1,4.6-4.6c0-0.5-0.1-1-0.2-1.4h1.3L26.3,25.7L26.3,25.7z M26.3,16.8c0,0.4-0.3,0.8-0.8,0.8h-1.2c-0.4,0-0.8-0.3-0.8-0.8v-1.3c0-0.3,0.2-0.6,0.5-0.7h1.4c0.4,0,0.8,0.3,0.8,0.8L26.3,16.8L26.3,16.8z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__web-tech">
        <p>This site is powered by the following web technologies:</p>
        <ul className="footer__web-tech-list">
          <li>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              <ReactLogo className="react" width={70} />
            </a>
          </li>
          <li>
            <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">
              <BabelLogo className="babel" width={85} />
            </a>
          </li>
          <li>
            <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">
              <WebpackLogo className="webpack" width={45} />
            </a>
          </li>
          <li>
            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
              <SassLogo className="sass" width={45} />
            </a>
          </li>
          <li>
            <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
              <GitHubLogo className="github" width={40} />
            </a>
          </li>
        </ul>
      </div>

      <p className="footer__copyright">© 2018 Sam Chi. All rights reserved.</p>
    </footer>
  );
}
