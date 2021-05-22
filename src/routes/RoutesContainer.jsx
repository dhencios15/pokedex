import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Page404 from 'pages/Page404';
import { ROUTES } from './paths';

const RoutesContainer = () => {
  return (
    <Router>
      <Switch>
        {ROUTES.map(({ name, path, component: Component }) => (
          <Route exact key={`${name} - ${path}`} path={path}>
            <Component />
          </Route>
        ))}
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default RoutesContainer;
