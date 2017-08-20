import {applyMiddleware, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thnuk from 'redux-thunk';
import rootReducer from './rootReducer';

export default function configureStore(initialState?: any) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thnuk, reduxImmutableStateInvariant()),
    );
}
