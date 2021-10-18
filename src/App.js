import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import About from './components/About'
import Users from './components/Users'
import StrictAcess from './components/StrictAcess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/strict-access">Strict Access</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/strict-access" render={(props) => <StrictAcess {...props} user={ { username: "joao", password: "1234" } } />} 
          />
          <Route path="/users/:id" render={( props ) => <Users {...props} greetingsMessage='Good Morning' /> } />
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
