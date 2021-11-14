import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
const arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i >= 0; i--) {
  arr[arr.length] = arr[i];
}
for (let e = 0; e < arr.length / 2; e++) {
  arr[e] = arr[arr.length / 2 + e];
}
arr.length = arr.length / 2;
console.log(arr);
