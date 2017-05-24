import React, { Component } from 'react';
import { PickEmotion } from '../PickEmotion/PickEmotion';
import ImageCapture from '../ImageCapture/ImageCapture';
import { EmotionResults } from '../EmotionResults/EmotionResults';

export default class Play extends Component {
  constructor() {
    super()
    this.state = {
      emotions: {}
    }
  }

  analyzeEmotions(faceURL) {
    fetch('https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '3119bdf7116e4afebc7b8d910aa343d9'
        },
        body: `{'url': '${faceURL}'}`
    })
    .then((response) => {
      console.log('success');
      response.json();
    })
    .then((data) => {
      const emotions = data.scores
      this.setState({emotions: emotions})
    })
    .catch((error) => {
      console.log('error retreiving emotion analysis: ', error);
    });
  }

  render() {
    return (
      <article className='play'>
        <PickEmotion />
        <ImageCapture analyzeEmotions={this.analyzeEmotions.bind(this)} />
        <EmotionResults />
      </article>
    )
  }
}
