import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
    Link,
    Route,
} from 'react-router-dom';
import Main from './common/layout/Main';
import configureStore from './store/configureStore';
import initialState from './store/initialState';
import {tasksActions} from './tasks/tasksActions';
import AppContainer from './temp/AppContainer';

const store = configureStore(initialState);
store.dispatch(tasksActions.load());

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root'),
);

// ReactDOM.render(
//     <Router>
//         <Main/>
//     </Router>,
//     document.getElementById('root'),
// );
