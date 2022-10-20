import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import exercise0 from './ex0'
import exercise01 from './ex01';
import exercise02 from './ex02';
import exercise04 from './ex04';
import reportWebVitals from './reportWebVitals';

import MySection from './MySection';
import MyButton from './MyButton';
import MyComponent from './ex1';
import exercise11 from './ex11';
import exercise12 from './ex12';
import exercise13 from './ex13';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <exercise0 />
    <exercise01 />
    <exercise02 />
    <MySection>
      <MyButton>My Button Text</MyButton>
    </MySection>
    <exercise04 />
    <MyComponent/>
    <exercise11/>
    <exercise12/>
    <exercise13/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
