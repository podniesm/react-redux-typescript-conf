import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <App name='Willson' />,
    document.getElementById('root'),
);
