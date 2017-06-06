import React, { Component } from 'react';

export default class PickEmotion extends Component {
  constructor() {
    super()
    this.state = {
      pickedEmotion: ''
    }
  }

  defineClass(emotion) {
    return this.state.pickedEmotion === emotion ? `${emotion} emotion picked` : `${emotion} emotion`
  }

  pickEmotion(emotionString) {
    this.setState({ pickedEmotion: emotionString });
  }

  render () {
    return (
      <article className='pick-emotion'>
        <h2 className='pick-title'>pick an emotion to try</h2>
        <button className={this.defineClass('happy')} onClick={() => this.pickEmotion('happy')}>
          happy
        </button>
        <button className={this.defineClass('angry')} onClick={() => this.pickEmotion('angry')}>
          angry
        </button>
        <button className={this.defineClass('sad')} onClick={() => this.pickEmotion('sad')}>
          sad
        </button>
        <button className={this.defineClass('surprised')} onClick={() => this.pickEmotion('surprised')}>
          surprised
        </button>
        <button className={this.defineClass('scared')} onClick={() => this.pickEmotion('scared')}>
          scared
        </button>
      </article>
    )
  }
}
