import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";

export default function configureStore(initialState?: any) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}
