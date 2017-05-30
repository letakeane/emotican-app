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

  endImageCapture(video) {
    video.pause();
  }

  dataURItoBlob(dataURI) {
      let binary = atob(dataURI.split(',')[1]);
      let array = [];
      for(let i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  }

  captureImage() {
    const video = document.querySelector('video');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    // if (video) {
      ctx.drawImage(video, 350, 20, 600, 700, 0, 0, 300, 350);
      this.endImageCapture(video);

      let dataUrl = canvas.toDataURL("image/jpeg");
      let blobData = this.dataURItoBlob(dataUrl);
      this.props.analyzeEmotions(blobData);
    // }
    // let faceData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    // let faceData = canvas.toDataURL("image/png");
    // canvas.toBlob((blob) => {
    //   let faceURL = URL.createObjectURL(blob);
    // })
    // console.log(window.location.href=faceImage);
      // this.props.analyzeEmotions(faceData);
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
