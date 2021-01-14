import React, { lazy, Suspense } from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

const Posts = lazy(() => import('./pages/Posts'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/posts">
              <Posts />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
