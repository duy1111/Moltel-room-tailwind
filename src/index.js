import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import reduxStore from './redux';
const { store, persistor } = reduxStore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);


reportWebVitals();
