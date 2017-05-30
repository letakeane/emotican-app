import React, { Component } from 'react';

export default class ImageCapture extends Component {
  constructor(props) {
    super()
    this.state = {
      constraints: { audio: false, video: { width: 300, height: 350, facingMode: 'user' } }
    }
  }

  beginImageCapture() {
    navigator.mediaDevices.getUserMedia(this.state.constraints)
    .then((mediaStream) => {
      const video = document.querySelector('video');
      video.srcObject = mediaStream;
      video.onloadedmetadata = (e) => {
        video.play();
      };
    })
    .catch((error) => {
      console.log('Problem capturing image: ', error)
    });
  }

  endImageCapture() {
console.log('trying to stop video');
    const video = document.querySelector('video');
    video.pause();
  }

  storeData(faceURL) {
    const headers = {
      "method": "POST",
      "hostname": "api.imgur.com",
      "port": null,
      "path": "/3/image",
      "headers": {
        "//authorization": "Client-ID 10c0cf1412fad3",
        "authorization": "Bearer 7887599b4a9c2cec883836f79b9612f772bb4a01"
      }
    }

    const body = {
      "image": `'${faceURL}'`,
      "album": "{M5OtG}",
      "name": 'face.png',
      "type": 'url'
    }

    const request = {
      "method": "POST",
      "headers": headers,
      "body": body
    }

    fetch('https://api.imgur.com/3/image', request)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.link);
      // this.props.analyzeEmotions(faceURL);
      })
      .catch(error => console.log('error posting to imgur: ', error))
  }

  takeSnapshot(video, ctx, canvas) {
    if (video) {
      ctx.drawImage(video, 350, 20, 600, 700, 0, 0, 300, 350);
      this.endImageCapture(video);
      canvas.toBlob((blob) => {
        let faceURL = URL.createObjectURL(blob);
        console.log(faceURL);
      })
        // this.storeData(faceURL);
    }
  }

  captureImage() {
    const video = document.querySelector('video');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    this.takeSnapshot(video, ctx, canvas);
  }

  render() {
    return (
      <article className='image-capture'>
        <button onClick={() => this.beginImageCapture()}>Start video</button>
        <video autoPlay muted='true' height='350px' width='300px'></video>
        <div className='face-oval'></div>
        <button className='take-picture'
                onClick={() => this.captureImage()}>
          take picture
        </button>
        <canvas height='350px' width='300px' hidden></canvas>
      </article>
    )
  }
}
