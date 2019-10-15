import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import List from './List';
import Store from './Store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={Store}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
