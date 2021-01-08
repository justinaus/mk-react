import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import TestList from './pages/TestList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/testlist">
            <TestList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
