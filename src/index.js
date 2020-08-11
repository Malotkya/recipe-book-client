import 'bootstrap/dist/css/bootstrap.min.css';
import './master.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MobileApp from './MobileApp'
import {Container} from 'reactstrap';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Container className="App" fluid={true}>
        <MobileApp />
        <App />
    </Container>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
