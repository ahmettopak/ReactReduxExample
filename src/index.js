import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/root/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureStore from './redux/reducer/configureStore.js';

const store = configureStore();

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)