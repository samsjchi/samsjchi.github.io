import React, { Component } from 'react';

import ampersand from '../../../assets/img/ampersand.png';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showVideo: false,
    };
  }

  componentDidMount() {
    const typeWriterList = [
      ' dynamic single-page web applications.',
      ' clean and intuitive user interfaces.',
      ' responsive, cross-browser compatible websites.',
      ' interactive data-driven content.',
      ' useful and delightful web experiences.',
      ' with the end user in mind.',
      ' then experiment, iterate, learn, and repeat.',
    ];

    // Type one character in the typewriter
    function typeWriter(text, i, callbackFn) {
      // Check if text isn't finished yet
      if (i < (text.length)) {
        // Add next character
        document.querySelector('span.typewriter').innerHTML = text.substring(0, i + 1) + '<span className="single-letter" aria-hidden="true"></span>';

        // Wait 50ms, then move on to next character
        setTimeout(() => { typeWriter(text, i + 1, callbackFn); }, 50);
      } else if (typeof callbackFn === 'function') { // If text has finished, invoke callback function
        // Invoke callback after 2500ms
        setTimeout(callbackFn, 2500);
      }
    }

    // Start text animation for each word in the typeWriterList
    function startTextAnimation(i) {
      // If at the end of typeWriterList, start over
      if (typeof typeWriterList[i] === 'undefined') {
        setTimeout(() => { startTextAnimation(0); }, 7000);
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

  handleMouseOver() {
    this.setState(() => ({ showVideo: true }));
    document.querySelector('.rethink-video').style.display = 'flex';

    if (document.querySelector('#vimeoIframe').getAttribute('src') === 'about:blank') {
      document.querySelector('#vimeoIframe').setAttribute('src', 'https://player.vimeo.com/video/201355728?title=0&byline=0&portrait=0');
    }
  }

  handleMouseOut() {
    this.setState(() => ({ showVideo: false }));
    document.querySelector('.rethink-video').style.display = 'none';
    document.querySelector('#vimeoIframe').setAttribute('src', 'about:blank');
  }

  render() {
    return (
      <div className="landing">
        <div className="intro">
          <h2>
            <span className="name">I'm Sam</span>
            <div className="tooltip">
              <span className="tooltip__message">
                Pronounced “kai,” like the Greek letter
              </span>
              <span className="name">Chi</span>
            </div>
            – a front end engineer based in New York City.
          </h2>
          <h2>
            Currently at <a className="rethink" href="https://advertising.theatlantic.com/rethink/" target="_blank">Atlantic Re:think</a>
            <div
              className="video-icon"
              onMouseOver={() => this.handleMouseOver()}>
              <svg x="0px" y="0px" viewBox="0 0 27 24">
                <g fillRule="evenodd" fill="none" strokeWidth="1" stroke="none">
                  <g fill="#2f2f2f">
                    <path d="M18,15.8461538 L18,11 L0,11 L0,24 L18,24 L18,19.8461538 L27,24 L27,11 L18,15.8461538 Z"></path>
                    <circle r="5.5" cy="5.5" cx="12.5"></circle>
                    <circle r="3.5" cy="7.5" cx="3.5"></circle>
                  </g>
                </g>
              </svg>
            </div>
            , the award-winning content
          </h2>
          <h2>
            studio and in-house creative marketing team at <a className="atlantic" href="https://www.theatlantic.com/" target="_blank" rel="noopener noreferrer">The Atlantic</a>.
          </h2>

          <div
            className="rethink-video"
            onMouseOut={() => this.handleMouseOut()}
          >
            <iframe
              id="vimeoIframe"
              src="https://player.vimeo.com/video/201355728?title=0&byline=0&portrait=0"
              width="960"
              height="518"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen="true"
            />
          </div>

          <h2>I design <img alt="" className="ampersand" src={ampersand} /> build... &nbsp;<span className="typewriter">dynamic web applications.</span></h2>
        </div>
      </div>
    );
  }
}

export default Landing;
