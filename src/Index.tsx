import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './common/layout/Main';
import configureStore from './store/configureStore';
import AppContainer from './temp/AppContainer';

const store = configureStore();

// ReactDOM.render(
//     <Provider store={store}>
//         <AppContainer
//             name='Willson'
//             quantity={0}
//         />
//     </Provider>,
//     document.getElementById('root'),
// );

ReactDOM.render(
        <Main/>,
    document.getElementById('root'),
);
