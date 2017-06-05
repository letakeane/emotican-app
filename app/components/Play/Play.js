import React, { Component } from 'react';
import PickEmotion from '../PickEmotion/PickEmotion';
import ImageCapture from '../ImageCapture/ImageCapture';
import { EmotionResults } from '../EmotionResults/EmotionResults';
import { key } from '../key.js'

export default class Play extends Component {
  constructor() {
    super()
    this.state = {
      emotions: [],
      canvasURL: ''
    }
  }

  getImageURL(url) {
    this.setState({canvasURL: url})
  }

  analyzeEmotions(faceBlob) {
    const body = faceBlob;

    const headers = new Headers({
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': key
    })

    fetch('https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize', {
        method: 'POST',
        headers: headers,
        body: faceBlob
    })
    .then(response => response.json())
    .then((data) => {
      this.setState({emotions: data})
    })
    .catch((error) => {
      console.log('error retreiving emotion analysis: ', error);
    });
  }

  render() {
    return (
      <article className='play'>
        <PickEmotion />
        <ImageCapture analyzeEmotions={this.analyzeEmotions.bind(this)}
                      getImageURL={this.getImageURL.bind(this)}/>
        <EmotionResults results={this.state.emotions}
                        url={this.state.canvasURL} />
      </article>
    )
  }
}
