import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {

  return (
    <Router>
      <div className="App App-header">
        <nav>
          <NavLink to="/login">Login</NavLink>
          {/* {localStorage.getItem('token') && (<NavLink to="/friends">Friends</NavLink>)} */}
          <NavLink to="/friends">Friends</NavLink>
        </nav>

        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/friends" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;