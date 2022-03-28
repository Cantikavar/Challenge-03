import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './Pages/Layout';
import { AlertsDefault } from './Assets/Components/Alerts/AlertsDefault';






ReactDOM.render(
  <React.StrictMode>
  <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);