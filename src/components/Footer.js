import React from 'react';

// Logos
import ReactLogo from '../../assets/img/react-logo.svg'
import BabelLogo from '../../assets/img/babel-logo.svg'
import WebpackLogo from '../../assets/img/webpack-logo.svg'
import SassLogo from '../../assets/img/sass-logo.svg'
import GitHubLogo from '../../assets/img/github-logo.svg'

export default function Footer () {
  return (
    <footer className='footer'>
      <div className='footer__site-logo'>
        <a href='/'>
          SC LOGO HERE
        </a>
      </div>

      <div className='footer__social-media'>
        <ul className='footer__social-media-list'>
          <li><a href='https://github.com/samsjchi'>GitHub</a></li>
          <li><a href='https://www.linkedin.com/in/samsjchi/'>LinkedIn</a></li>
          <li><a href='https://www.facebook.com/samsjchi'>Facebook</a></li>
          <li><a href='https://www.instagram.com/samsjchi/'>Instagram</a></li>
        </ul>
      </div>

      <div className='footer__web-tech'>
        <p>This website is powered by the following web technologies:</p>
        <ul className='footer__web-tech-list'>
          <li>
            <a href='https://reactjs.org/' target='_blank'>
              <ReactLogo width={65} />
            </a>
          </li>
          <li>
            <a href='https://babeljs.io/' target='_blank'>
              <BabelLogo width={80} />
            </a>
          </li>
          <li>
            <a href='https://webpack.js.org/' target='_blank'>
              <WebpackLogo width={45} />
            </a>
          </li>
          <li>
            <a href='https://sass-lang.com/' target='_blank'>
              <SassLogo width={40} />
            </a>
          </li>
          <li>
            <a href='https://pages.github.com/' target='_blank'>
              <GitHubLogo width={45} />
            </a>
          </li>
        </ul>
      </div>

      <p className='footer__copyright'>© 2018 Sam Chi. All rights reserved.</p>
    </footer>
  );
}
