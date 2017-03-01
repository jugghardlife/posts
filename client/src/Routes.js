import React from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Post from './components/Post';

class Routes extends React.Component {
  render(){
    return(
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='/post/:_id' component={Post} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default Routes;
