import React from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
// import sampleReducer from './reducers/sampleReducer'

import './index.css';
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Sample from './components/Sample';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const saveToLocalStorage = (reduxGlobalState: any) => {
  // serialization = converting js object to a string
  try {
    const serializedState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializedState);

  } catch (err) {
    console.log(err);
  }
}

// const loadFromLocalStorage = () => {
//   // deserialization --> converting string to an object
//   const state = localStorage.getItem('state');

//   if (state == null) {
//     return undefined;
//   } else {
//     return JSON.parse(state);
//   }
// }

// const persistedState = loadFromLocalStorage();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(rootReducer, persistedState, composeEnhancers());
const store = configureStore({
      reducer: rootReducer,
      middleware: getDefaultMiddleware => getDefaultMiddleware()
});

store.subscribe(() => {
  
  // happens every time there is a change to the global state
  saveToLocalStorage(store.getState())

})

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