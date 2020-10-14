import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Page01 from './Page01';

const Components: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/page01'} component={Page01} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Components;
