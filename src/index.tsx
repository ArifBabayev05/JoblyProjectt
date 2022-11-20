import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Assets/Styles/Colors.css";
import "./Assets/Styles/index.css"
import store from "./Redux/store"
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
// import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    
      <App />
    
  </Provider>
);

reportWebVitals();
