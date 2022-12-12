import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import reducers from './reducers';

// The provider is a react component that we get from the react-redux library
import { Provider } from 'react-redux';

// It is specifically designed to work with react plain redux.
import { legacy_createStore as createStore } from 'redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>

);
