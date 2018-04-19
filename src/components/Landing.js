import React from 'react';

export default function Landing () {
  return (
    <div className='landing'>
      <div className='intro'>
        <h2>I'm Sam 
          <div className='tooltip'>
            <span className='tooltip__message'>
              Pronounced “kai,” like the Greek letter
            </span>
            Chi
          </div>
          
          – a front end developer based in New York City.
        </h2>
        <h2>Currently at <a className='rethink' href="https://advertising.theatlantic.com/rethink/" target="_blank">Atlantic Re:think</a>, the award-winning content</h2>
        <h2>studio and in-house creative marketing team at <a className='atlantic' href="https://www.theatlantic.com/" target="_blank">The Atlantic</a>.</h2>
        <h2>I design & build dynamic web applications.</h2>
      </div>
    </div>
  )
}
