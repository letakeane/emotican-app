import React from 'react';

export const About = () => {
  return (
    <article className='about'>
      <h2>About emotican</h2>
      <p>Many children, due to autism, developmental delays, or trauma have difficulty both in recognizing facial expressions and in emoting.</p>
      <p>Built with React, this 'game' utilizes Microsoft's Cognitive Services Emotion API and the device webcam to help children practice making and recognizing facial expressions.</p>

      <h2>Areas of focus</h2>
      <p>The app was designed with the needs of children on the Autism Disorder Spectrum in mind:</p>
      <ul>
        <li>The color palette was chosen based on the information presented in <a href='http://www.autism-architects.com/wp-content/uploads/downloads/2012/06/MLA-Presentation-November-2010-low-res-pdf.pdf'>this study</a></li>
        <li>The font (monospaced, sans-serif, with distinct letterforms) was chosen to improve readability for people with dyslexia</li>
      </ul>

      <h2>Future goals:</h2>
      <ul>
        <li>The app is not currently very accessible; I hope to improve the webcam interface to audibly alert the user as to when their face is in the frame in order to make the app useful for the blind community.</li>
        <li>I hope to add a secondary version of the game which presents users with photographs of diverse individuals (varying in age, race, gender, and identifiers) modeling various facial expressions, in order to help users recognize and identify emotions in others.</li>
        <li>The app currently has Express but is not utilizing it. I hope to build out a backend so users can be stored and progress can be tracked (i.e. the user can see their growth over time, and see patterns in their abilities).</li>
      </ul>
    </article>
  )
}
