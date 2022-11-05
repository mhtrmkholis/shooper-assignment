import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Navigation from './src/navigation';
import reducer from './src/stores/reducers';
// import 

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store} >
      <Navigation />
    </Provider>
  );
};