import React, { Component } from 'react';

import anime from 'animejs';
import videoIcon from '../../assets/img/video-icon.png';

class Landing extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      showVideo: false
    }
  }
  
  handleMouseOver () {
    this.setState(() => ({ showVideo: true }));
    document.querySelector('.rethink-video').style.display = 'flex';
    
    if (document.querySelector('#vimeoIframe').getAttribute('src') === 'about:blank') {
      document.querySelector('#vimeoIframe').setAttribute('src', 'https://player.vimeo.com/video/201355728?title=0&byline=0&portrait=0');
    }
  }
  
  handleMouseOut () {
    this.setState(() => ({ showVideo: false }));
    document.querySelector('.rethink-video').style.display = 'none';
    document.querySelector('#vimeoIframe').setAttribute('src', 'about:blank');
  }
  
  render () {
    return (
      <div className='landing'>
        <div className='intro'>
          <h2>
            I'm Sam 
            <div className='tooltip'>
              <span className='tooltip__message'>
                Pronounced “kai,” like the Greek letter
              </span>
              Chi
            </div>
            – a front end engineer based in New York City.
          </h2>
          <h2>
            Currently at <a className='rethink' href="https://advertising.theatlantic.com/rethink/" target="_blank">Atlantic Re:think</a> 
            <img 
              className='video-icon' 
              src={videoIcon}
              onMouseOver={() => this.handleMouseOver()}
            />,
            the award-winning content
          </h2>
          <h2>
            studio and in-house creative marketing team at <a className='atlantic' href='https://www.theatlantic.com/' target='_blank'>The Atlantic</a>.
          </h2>
          
          <div 
            className='rethink-video'
            onMouseOut={() => this.handleMouseOut()}>
            <iframe 
              id='vimeoIframe'
              src='https://player.vimeo.com/video/201355728?title=0&byline=0&portrait=0' 
              width='640' 
              height='345' 
              frameBorder='0' 
              webkitallowfullscreen='true' 
              mozallowfullscreen='true' 
              allowFullScreen='true'>
            </iframe>
          </div>
          
          <h2>I design & build dynamic web applications.</h2>
        </div>
      </div>
    );
  }
}

export default Landing;
