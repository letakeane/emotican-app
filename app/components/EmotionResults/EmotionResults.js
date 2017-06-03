import React from 'react';
import { analyzeResponse } from '../../helper.js';

export const EmotionResults = ({ results, url }) => {
  const noResults = () => {
    return (
      <h2 className='no-results'>Take a picture to see your expression!</h2>
    )
  }

  const showResults = () => {
    let emotionsForDisplay = analyzeResponse(results);
    return (
      <div>
        <img className='result-img' src={url} height='175px' width='150px' />
        <h2 className='results'>your expression is:</h2>
        {
          emotionsForDisplay.map((emotionObject, index) => {
            if (emotionObject !== undefined) {
              return (
                <div key={emotionObject.emotion}>
                  <h3 key={index}
                      className='emotion-result'>
                    {emotionObject.quantifier}
                  </h3>
                  <h2 className='emotion-score'>
                    {emotionObject.emotion}
                  </h2>
                </div>
              )
            }
          })
        }
      </div>
    )
  }

  const displayResults = () => {
    if (!results.length) {
      return noResults();
    } else {
      return showResults();
    }
  }

  return (
    <div className='emotion-results'>
      {displayResults()}
    </div>
  )
}
