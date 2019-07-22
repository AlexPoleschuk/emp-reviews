import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

export default () => (
  <>
    <Switch>
      <Redirect from="*" to="/" />
    </Switch>
  </>
);
