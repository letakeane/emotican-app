import React, { Component } from 'react'
import { render } from 'react-dom'
import App from './components/App/App';

class Root extends Component {
  render() {
    return (
      <App />
    )
  }
}

render(<Root />, document.getElementById('root'))
