import React, { Component } from 'react';

import ProjectTiles from '../ProjectTiles/ProjectTiles';
import NycLogo from '../../../assets/img/nyc-logo.svg';
import CloseBtn from '../../../assets/img/close-btn.svg';
import RethinkLogo from '../../../assets/img/rethink-poseidon.svg';
import AtlanticLogo from '../../../assets/img/atlantic-a.svg';
import Ampersand from '../../../assets/img/ampersand.png';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showVideo: false,
      showNycLogo: true,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    /**
     * Typewriter animation
     */
    const typeWriterList = [
      ' clean and intuitive user interfaces.',
      ' modern single-page web applications.',
      ' responsive, interactive data-driven content.',
      ' dynamic and delightful web experiences.',
      ' cross-browser/cross-platform compatible websites.',
      ' with the end user always in mind.',
      ' experiment, iterate, learn, and repeat.',
    ];

    // Type one character in the typewriter
    function typeWriter(text, i, callbackFn) {
      // Check if text isn't finished yet
      if (i < text.length) {
        // Add next character
        document.querySelector('span.typewriter').innerHTML = `${text.substring(
          0,
          i + 1,
        )}<span className="single-letter" aria-hidden="true"></span>`;

        // Wait 50ms, then move on to next character
        setTimeout(() => {
          typeWriter(text, i + 1, callbackFn);
        }, 50);
      } else if (typeof callbackFn === 'function') {
        // If text has finished, invoke callback function
        // Invoke callback after 2500ms
        setTimeout(callbackFn, 2500);
      }
    }

    // Start text animation for each word in the typeWriterList
    function startTextAnimation(i) {
      // If at the end of typeWriterList, start over
      if (typeof typeWriterList[i] === 'undefined') {
        setTimeout(() => {
          startTextAnimation(0);
        }, 7000);
      }
      // If text exists, start typewriter animation
      if (i < typeWriterList[i].length) {
        typeWriter(typeWriterList[i], 0, () => {
          // After entire text has been animated, start next word
          startTextAnimation(i + 1);
        });
      }
    }

    // Initiate text animation
    startTextAnimation(0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  /**
   * Hide NYC logo when user reaches project tiles section
   */
  handleScroll() {
    if (window.pageYOffset < 350) {
      if (!this.state.showNycLogo) {
        this.setState({ showNycLogo: true });
      }
    } else if (this.state.showNycLogo) {
      this.setState({ showNycLogo: false });
    }
  }

  /**
   * Show Vimeo iframe when user hovers over video icon
   */
  openVideo() {
    this.setState(() => ({ showVideo: true }));
    document.querySelector('.intro__rethink-video').style.display = 'flex';

    if (document.querySelector('#vimeoIframe').getAttribute('src') === 'about:blank') {
      document
        .querySelector('#vimeoIframe')
        .setAttribute(
          'src',
          'https://player.vimeo.com/video/201355728?title=0&byline=0&portrait=0?autoplay=1',
        );
    }
  }

  /**
   * Close Vimeo iframe when user clicks on close button
   */
  closeVideo() {
    this.setState(() => ({ showVideo: false }));
    document.querySelector('.intro__rethink-video').style.display = 'none';
    document.querySelector('#vimeoIframe').setAttribute('src', 'about:blank');
  }

  /**
   * Show Re:think Poseidon/Atlantic "A" graphic on link mouse over
   */
  handleLinkMouseOver(e) {
    if (e.target.className === 'rethink') {
      document.querySelector('.intro__nyc-logo').style.opacity = '0';
      document.querySelector('.intro__rethink-logo').style.opacity = '0.05';
    }

    if (e.target.className === 'atlantic') {
      document.querySelector('.intro__nyc-logo').style.opacity = '0';
      document.querySelector('.intro__atlantic-logo').style.opacity = '0.05';
    }
  }

  /**
   * Hide Re:think Poseidon/Atlantic "A" graphic on link mouse out
   */
  handleLinkMouseOut(e) {
    if (e.target.className === 'rethink') {
      document.querySelector('.intro__rethink-logo').style.opacity = '0';
      document.querySelector('.intro__nyc-logo').style.opacity = '0.05';
    }

    if (e.target.className === 'atlantic') {
      document.querySelector('.intro__atlantic-logo').style.opacity = '0';
      document.querySelector('.intro__nyc-logo').style.opacity = '0.05';
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="landing">
          <div className="intro">
            <h2 className="intro__tagline">
              <span className="intro__name">I&apos;m Sam</span>
              <div className="intro__tooltip">
                <span className="intro__tooltip-message">
                  Pronounced “kai,” like the Greek letter
                </span>
                <span className="intro__name">Chi</span>
              </div>
              – a front end engineer based in <span className="intro__nyc">New York City</span>.
            </h2>
            <h2 className="intro__tagline">
              Currently at&nbsp;
              <a
                className="rethink"
                href="https://advertising.theatlantic.com/rethink/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={e => this.handleLinkMouseOver(e)}
                onMouseOut={e => this.handleLinkMouseOut(e)}
              >
                Atlantic Re:think
              </a>
              <div className="intro__video-icon" onMouseOver={() => this.openVideo()}>
                <svg x="0px" y="0px" viewBox="0 0 27 24">
                  <g fillRule="evenodd" fill="none" strokeWidth="1" stroke="none">
                    <g fill="#2f2f2f">
                      <path d="M18,15.8461538 L18,11 L0,11 L0,24 L18,24 L18,19.8461538 L27,24 L27,11 L18,15.8461538 Z" />
                      <circle r="5.5" cy="5.5" cx="12.5" />
                      <circle r="3.5" cy="7.5" cx="3.5" />
                    </g>
                  </g>
                </svg>
              </div>
              , the award-winning content
            </h2>
            <h2 className="intro__tagline">
              studio and in-house creative marketing team at{' '}
              <a
                className="atlantic"
                href="https://www.theatlantic.com/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={e => this.handleLinkMouseOver(e)}
                onMouseOut={e => this.handleLinkMouseOut(e)}
              >
                The Atlantic
              </a>.
            </h2>

            <NycLogo
              className="intro__nyc-logo"
              height={550}
              width={550}
              style={{ opacity: this.state.showNycLogo ? 0.05 : 0 }}
            />
            <RethinkLogo className="intro__rethink-logo" height={550} />
            <AtlanticLogo className="intro__atlantic-logo" height={550} />

            <div className="intro__rethink-video">
              <div className="intro__video-wrapper">
                <iframe
                  id="vimeoIframe"
                  src="https://player.vimeo.com/video/201355728?title=0&byline=0&portrait=0?autoplay=1"
                  width="960"
                  height="518"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen="true"
                />
                <CloseBtn
                  onClick={() => this.closeVideo()}
                  className="intro__video-close-btn"
                  width={25}
                  height={25}
                />
              </div>
            </div>

            <h2 className="intro__tagline">
              I design <img className="intro__ampersand" src={Ampersand} alt="" /> build...{' '}
              <span className="typewriter">dynamic web applications.</span>
            </h2>
          </div>
        </div>

        <ProjectTiles />
      </div>
    );
  }
}

export default Landing;
