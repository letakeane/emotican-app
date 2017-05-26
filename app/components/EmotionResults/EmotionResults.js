import React from 'react';


export const EmotionResults = ({ results }) => {
  const displayResults = () => {
    if (!results.length) {
      return (
        <h2 className='no-results'>Take a picture to see your expression!</h2>
      )
    }
  }

  return (
    <div className='emotion-results'>
      {displayResults()}
    </div>
  )
}
