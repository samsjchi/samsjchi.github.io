import React, { Component } from 'react';

import ProjectTiles from '../ProjectTiles/ProjectTiles';
import FacebookLogo from '../../../assets/img/facebook-logo.svg';
import RethinkLogo from '../../../assets/img/rethink-poseidon.svg';
import AtlanticLogo from '../../../assets/img/atlantic-a.svg';
import Ampersand from '../../../assets/img/ampersand.png';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typeWriterTimeouts: [],
    };

    this.typeWriter = this.typeWriter.bind(this);
    this.startTextAnimation = this.startTextAnimation.bind(this);
  }

  componentDidMount() {
    this.startTextAnimation(0); // Initiate typewriter animation
  }

  componentWillUnmount() {
    // Clear all typewriter timeouts
    this.state.typeWriterTimeouts.forEach((timeout) => clearTimeout(timeout));
  }

  /**
   * Show Vimeo iframe when user hovers over video icon
   */
  openVideo = () => {
    const rethinkVideo = document.querySelector('.intro__rethink-video');
    const videoIframe = document.querySelector('#videoIframe');

    document.querySelector('body').style.overflow = 'hidden';
    rethinkVideo.classList.remove('closed');

    if (videoIframe && videoIframe.getAttribute('src') === 'about:blank') {
      videoIframe.setAttribute(
        'src',
        'https://www.youtube.com/embed/zoY8YEELzrM',
      );
    }
  };

  /**
   * Close Vimeo iframe when user clicks on close button
   */
  closeVideo = () => {
    document.querySelector('body').style.overflow = 'auto';
    document.querySelector('.intro__rethink-video').classList.add('closed');
    document.querySelector('#videoIframe').setAttribute('src', 'about:blank');
  };

  /**
   * Show Re:think Poseidon/Atlantic "A" graphic on link mouse over
   */
  handleLinkMouseOver = (e) => {
    if (e.target.className === 'facebook') {
      document.querySelector('.intro__facebook-logo').style.opacity = '0.1';
    }

    if (e.target.className === 'rethink') {
      document.querySelector('.intro__rethink-logo').style.opacity = '0.1';
    }

    if (e.target.className === 'atlantic') {
      document.querySelector('.intro__atlantic-logo').style.opacity = '0.1';
    }
  };

  /**
   * Hide Re:think Poseidon/Atlantic "A" graphic on link mouse out
   */
  handleLinkMouseOut = (e) => {
    if (e.target.className === 'facebook') {
      document.querySelector('.intro__facebook-logo').style.opacity = '0';
    }

    if (e.target.className === 'rethink') {
      document.querySelector('.intro__rethink-logo').style.opacity = '0';
    }

    if (e.target.className === 'atlantic') {
      document.querySelector('.intro__atlantic-logo').style.opacity = '0';
    }
  };

  /**
   * Typewriter animation
   */
  typeWriter(text, i, callbackFn) {
    // Check if text isn't finished yet
    if (i < text.length) {
      // Add next character
      document.querySelector('span.typewriter').innerHTML = `${text.substring(
        0,
        i + 1,
      )}<span className="single-letter" aria-hidden="true"></span>`;

      // Wait 50ms, then move on to next character
      const timeout1 = setTimeout(() => {
        this.typeWriter(text, i + 1, callbackFn);
      }, 50);

      this.setState((prevState) => ({
        typeWriterTimeouts: [...prevState.typeWriterTimeouts, timeout1],
      }));
    } else if (typeof callbackFn === 'function') {
      // If text has finished, invoke callback function
      // Invoke callback after 2500ms
      const timeout2 = setTimeout(callbackFn, 2500);
      this.setState((prevState) => ({
        typeWriterTimeouts: [...prevState.typeWriterTimeouts, timeout2],
      }));
    }
  }

  /**
   * Start text animation for each word in the typeWriterList
   */
  startTextAnimation(i) {
    const typeWriterList = [
      ' clean and intuitive user interfaces.',
      ' modern single-page web applications using React & Redux.',
      ' responsive, cross-platform interactive content.',
      ' dynamic and delightful web experiences.',
      ' with the end user always in mind.',
      ' then experiment, iterate, learn, and repeat.',
    ];

    // If at the end of typeWriterList, start over
    if (typeof typeWriterList[i] === 'undefined') {
      const timeout3 = setTimeout(() => {
        this.startTextAnimation(0);
      }, 7000);

      this.setState((prevState) => ({
        typeWriterTimeouts: [...prevState.typeWriterTimeouts, timeout3],
      }));
    }
    // If text exists, start typewriter animation
    if (i < typeWriterList[i].length) {
      this.typeWriter(typeWriterList[i], 0, () => {
        // After entire text has been animated, start next word
        this.startTextAnimation(i + 1);
      });
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="landing">
          <div className="intro">
            <div className="intro__section">
              <h2 className="intro__tagline">
                I&apos;m <span className="intro__name">Sam</span>
                <div className="intro__tooltip">
                  <span className="intro__tooltip-message">
                    Pronounced “kai,” like the Greek letter
                  </span>
                  <span className="intro__name">Chi</span>
                </div>
                – a design-minded front end engineer based in New York City.
              </h2>

              <h2 className="intro__tagline">
                Currently, I work at&nbsp;
                <a
                  className="facebook"
                  href="https://www.facebook.com/careers/life/partner-engineering-at-facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(e) => this.handleLinkMouseOver(e)}
                  onMouseOut={(e) => this.handleLinkMouseOut(e)}
                >
                  Facebook
                </a>
                &nbsp;on the Partner Engineering team, helping companies
              </h2>

              <h2 className="intro__tagline">
                glean data-driven insights and discover stories that matter
                on&nbsp;
                <a
                  className="crowdtangle"
                  href="https://www.crowdtangle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(e) => this.handleLinkMouseOver(e)}
                  onMouseOut={(e) => this.handleLinkMouseOut(e)}
                >
                  CrowdTangle
                </a>
                .
              </h2>

              <FacebookLogo className="intro__facebook-logo" height={550} />
            </div>

            <div className="intro__section">
              <h2 className="intro__tagline atlantic">
                Previously, I worked at&nbsp;
                <a
                  className="rethink"
                  href="https://advertising.theatlantic.com/rethink/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(e) => this.handleLinkMouseOver(e)}
                  onMouseOut={(e) => this.handleLinkMouseOut(e)}
                >
                  Atlantic Re:think
                </a>
                <div
                  className="intro__video-icon"
                  onMouseOver={() => this.openVideo()}
                  onClick={() => this.openVideo()}
                >
                  <svg x="0px" y="0px" viewBox="0 0 27 24">
                    <g
                      fillRule="evenodd"
                      fill="none"
                      strokeWidth="1"
                      stroke="none"
                    >
                      <g fill="#2f2f2f">
                        <path d="M18,15.8461538 L18,11 L0,11 L0,24 L18,24 L18,19.8461538 L27,24 L27,11 L18,15.8461538 Z" />
                        <circle r="5.5" cy="5.5" cx="12.5" />
                        <circle r="3.5" cy="7.5" cx="3.5" />
                      </g>
                    </g>
                  </svg>
                </div>
                , the award-winning
              </h2>

              <h2 className="intro__tagline atlantic">
                content studio and in-house creative marketing team at{' '}
                <a
                  className="atlantic"
                  href="https://www.theatlantic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(e) => this.handleLinkMouseOver(e)}
                  onMouseOut={(e) => this.handleLinkMouseOut(e)}
                >
                  The Atlantic
                </a>
                .
              </h2>

              <h2 className="intro__tagline mobile-only">
                Previously, I worked at&nbsp;
                <a
                  className="rethink"
                  href="https://advertising.theatlantic.com/rethink/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(e) => this.handleLinkMouseOver(e)}
                  onMouseOut={(e) => this.handleLinkMouseOut(e)}
                >
                  Atlantic Re:think
                </a>
                <div
                  className="intro__video-icon"
                  onMouseOver={() => this.openVideo()}
                  onClick={() => this.openVideo()}
                >
                  <svg x="0px" y="0px" viewBox="0 0 27 24">
                    <g
                      fillRule="evenodd"
                      fill="none"
                      strokeWidth="1"
                      stroke="none"
                    >
                      <g fill="#2f2f2f">
                        <path d="M18,15.8461538 L18,11 L0,11 L0,24 L18,24 L18,19.8461538 L27,24 L27,11 L18,15.8461538 Z" />
                        <circle r="5.5" cy="5.5" cx="12.5" />
                        <circle r="3.5" cy="7.5" cx="3.5" />
                      </g>
                    </g>
                  </svg>
                </div>
                , the award-winning content studio and in-house creative
                marketing team at{' '}
                <a
                  className="atlantic"
                  href="https://www.theatlantic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(e) => this.handleLinkMouseOver(e)}
                  onMouseOut={(e) => this.handleLinkMouseOut(e)}
                >
                  The Atlantic
                </a>
                .
              </h2>

              <RethinkLogo className="intro__rethink-logo" height={550} />
              <AtlanticLogo className="intro__atlantic-logo" height={550} />

              <div
                className="intro__rethink-video closed"
                onClick={() => this.closeVideo()}
              >
                <div className="intro__video-wrapper">
                  <iframe
                    id="videoIframe"
                    width="960"
                    height="540"
                    src="https://www.youtube.com/embed/zoY8YEELzrM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                  <button
                    className="intro__video-close-btn"
                    onClick={() => this.closeVideo()}
                  />
                </div>
              </div>
            </div>

            <div className="intro__section">
              <h2 className="intro__tagline last">
                I design{' '}
                <img className="intro__ampersand" src={Ampersand} alt="" />{' '}
                build...{' '}
                <span className="typewriter">dynamic web applications.</span>
              </h2>
            </div>
          </div>
        </div>

        <ProjectTiles />
      </div>
    );
  }
}

export default Landing;
