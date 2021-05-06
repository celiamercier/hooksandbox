import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import UseEffectUnmountDemo from './components/UseEffectUnmountDemo';
//import App from './App';
//import FetchPaginateComponentClass from './components/pagination/FetchPaginateComponentClass';
import FetchPaginateFunctionalComponentV2 from './components/pagination/answers/FetchPaginateFunctionalComponentV2';

ReactDOM.render(
  <React.StrictMode>
    <FetchPaginateFunctionalComponentV2 />
  </React.StrictMode>,
  document.getElementById('root')
);
