import React from 'react';
import { Provider } from 'react-redux';
import Homepage from './Core/Homepage';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}
