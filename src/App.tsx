import React, { lazy, Suspense } from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import RouterPath from './RouterPath';

const Posts = lazy(() => import('./pages/post/Posts'));
const Users = lazy(() => import('./pages/user/Users'));
const CountTest = lazy(() => import('./pages/CountTest'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={RouterPath.posts}>
              <Posts />
            </Route>
            <Route path={RouterPath.users}>
              <Users />
            </Route>
            <Route path="/countTest">
              <CountTest />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
