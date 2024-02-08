import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './components/store';
import './styles/reset.css';
import './styles/index.scss';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

const rootReactElement = (
    <Provider store={store}>
      <App />
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(rootReactElement);

reportWebVitals();
