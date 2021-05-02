import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import UseEffectUnmountDemo from './components/UseEffectUnmountDemo';
//import App from './App';
import FetchPaginateComponentClass from './components/pagination/FetchPaginateComponentClass';

ReactDOM.render(
  <React.StrictMode>
    <FetchPaginateComponentClass />
  </React.StrictMode>,
  document.getElementById('root')
);
