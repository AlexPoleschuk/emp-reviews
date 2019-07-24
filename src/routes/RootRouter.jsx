import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';

export default () => (
  <>
    <Switch>
      <Route path="/" exact component={MainContainer} />
      <Redirect from="*" to="/" />
    </Switch>
  </>
);
