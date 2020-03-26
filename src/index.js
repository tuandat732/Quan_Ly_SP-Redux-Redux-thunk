import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import RootReducer from './reducers/index'
import thunk from 'redux-thunk'


const store = createStore(RootReducer,
  compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )
  //có thể truyền nhiều trong hàm apply luôn

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
