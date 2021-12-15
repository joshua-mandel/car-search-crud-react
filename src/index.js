import React from 'react';
import ReactDOM from 'react-dom';

import Seed from './Seed';
import ObscureMarvelCharacters from './ObscureMarvelCharacters';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="text-center mb-3">
      <h1>React Portfolio</h1>
    </div>
    <div id="mainCont" className="rounded-3 container">
      <div>
        <div>
          <Seed />
        </div>
        <div>
          <ObscureMarvelCharacters />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
