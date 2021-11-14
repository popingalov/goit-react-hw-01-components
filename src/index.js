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
/* const test = [1, 1, 2, 2, 3, 3, 4, 6, 9, 9];
const test2 = () => {
  for (let i = 0; i < test.length; i += 1) {
    console.log(test[i]);
    let a = test[i];
    let b = test[i + 1];
    if ((a ^= test[i]) === 1) {
      return test[i];
    }
  }
};

console.log(test, test2()); */
function testXor(numbers) {
  return numbers.reduce((acc, e) => {
    console.log(acc, e);
    return acc ^ e;
  });
}
const test = [1, 2, 2, 2, 3, 3, 8, 9, 9, 1, 1, 1, 2];
console.log(testXor(test));
