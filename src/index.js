import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import UseEffectUnmountDemo from './components/UseEffectUnmountDemo';
//import App from './App';
//import FetchPaginateComponentClass from './components/pagination/FetchPaginateComponentClass';
import FetchPaginateFunctionalComponent from './components/pagination/FetchPaginateFunctionalComponent';

ReactDOM.render(
  <React.StrictMode>
    <FetchPaginateFunctionalComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
