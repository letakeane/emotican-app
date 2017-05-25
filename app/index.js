import React, { Component } from 'react'
import { render } from 'react-dom'
import App from './components/App/App';

class Root extends Component {
  componentDidMount() {
    // INSERT API CALL TO YOUR INTERNAL API
  }

  render() {
    return (
      <App />
    )
  }
}

render(<Root />, document.getElementById('root'))
