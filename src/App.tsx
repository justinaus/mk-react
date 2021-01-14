import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import Posts from './pages/Posts';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
