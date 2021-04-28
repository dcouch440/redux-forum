import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reducer from './reducers/combine-reducers';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({type: 'ADD_POST', ...{id: 5, title: 'cats', body: 'sdfsdfsdf'}})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
