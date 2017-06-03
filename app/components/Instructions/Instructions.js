import React from 'react';

export const Instructions = () => {
  return (
    <article className='instructions'>
      <h2 className='instructions-howto'>How to play</h2>
      <img  className='instructions-img'
            src='../../assets/images/instructions.jpg'
            alt='screenshot of emotican app' />
      <ol className='instruction-list'>
        <li>Pick an emotion to express by clicking one of the yellow buttons</li>
        <li>Click the "Start video" button</li>
        <li>Practice showing the emotion!</li>
        <li>Click the "take picture" button</li>
        <li>Learn more about what emotions your expression shows!</li>
        <li>Try again or pick a new emotion to try</li>
        <li>Have fun!</li>
      </ol>
    </article>
  )
}
