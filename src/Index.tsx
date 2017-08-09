import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppContainer from './components/AppContainer';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer
            name='Willson'
            quantity={0}
        />
    </Provider>,
    document.getElementById('root'),
);
