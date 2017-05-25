import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Instructions } from '../Instructions/Instructions';
import Play from '../Play/Play';
import { Learn } from '../Learn/Learn';
import { Image } from '../../Image';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/image' component={Image} />
          <header>
            <Link to='/'><h1>em<img className='logo-o' src='../../assets/images/logo-o.png' alt='o' />t<span className='logo-i'>i</span>can</h1></Link>
            <Route path='/' component={NavBar}/>
          </header>
            <Route exact path='/instructions' component={Instructions}/>
            <Route exact path='/' component={Play}/>
            <Route path='/learn' component={Learn} />
        </div>
      </Router>
    )
  }
}

export default App;
