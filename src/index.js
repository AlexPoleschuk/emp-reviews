import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import getStore from './store';
import RootRouter from './routes/RootRouter';

const store = getStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <RootRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
