import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Hero from './Hero';
import Nav from './Nav';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Nav />
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route exact path="/about" component={About} />
            <Route render={ () => <p>Not Found.</p> } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
