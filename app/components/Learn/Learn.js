import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LearnNav } from './LearnNav';
import { Emotions } from './Emotions';
import { Happiness } from './emotions/Happiness';
import { Anger } from './emotions/Anger';
import { Sadness } from './emotions/Sadness';
import { Surprise } from './emotions/Surprise';
import { Fear } from './emotions/Fear';
import { About } from './About';

export const Learn = () => {
  return (
    <Router>
      <div>
        <div className='learn-nav'>
          <Route path='/learn' component={LearnNav} />
        </div>
        <Route exact path='/learn' component={Emotions} />
        <Route exact path='/learn/happiness' component={Happiness} />
        <Route exact path='/learn/anger' component={Anger} />
        <Route exact path='/learn/sadness' component={Sadness} />
        <Route exact path='/learn/surprise' component={Surprise} />
        <Route exact path='/learn/fear' component={Fear} />
        <Route exact path='/learn/about' component={About} />
      </div>
    </Router>
  )
}
