import React from 'react';
import { Link } from 'react-router-dom';
import analyzeResponse from '../../lib/analyzeResponse.js';

export const EmotionResults = ({ results, url, pickedEmotion }) => {
  const noResults = () => {
    return (
      <h2 className='no-results'>Take a picture to see your expression!</h2>
    )
  }

  const ifNotNeutralContemptRenderLink = (emotion) => {
    if (emotion !== 'neutral' && emotion !== 'contempt') {
      return (
        <Link className='learn-more-link' to={`/learn/${emotion}`}>Learn more about {emotion}</Link>
      )
    }
  }

  const showResults = () => {
    let emotionsForDisplay = analyzeResponse(results);
    return (
      <div>
        <img className='result-img' src={url} height='175px' width='150px' />
        <h2 className='results'>your expression is:</h2>
        {
          emotionsForDisplay.map((emotionObject, index) => {
            if (emotionObject !== undefined && emotionObject.emotion !== 'contempt') {
              return (
                <div key={emotionObject.emotion}>
                  <h3 key={index}
                      className='emotion-result'>
                    {emotionObject.quantifier}
                  </h3>
                  <h2 className='emotion-score'>
                    {emotionObject.emotion}
                  </h2>
                  {ifNotNeutralContemptRenderLink(emotionObject.emotion)}
                </div>
              )
            }
          })
        }
      </div>
    )
  }

  const displayResults = () => {
    return (!results.length) ? noResults() : showResults()
  }

  return (
    <div className='emotion-results'>
      {displayResults()}
    </div>
  )
}
