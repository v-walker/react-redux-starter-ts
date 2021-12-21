import React from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import './index.css';
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Sample from './components/Sample';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const store = configureStore({
      reducer: rootReducer,
      middleware: getDefaultMiddleware => getDefaultMiddleware()
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/sample" element={<Sample />}/>
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {}
export type AppDispatch = typeof store.dispatch;

// ref ./hooks.ts for use and import to components