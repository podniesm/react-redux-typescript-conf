import {combineReducers} from 'redux';
import IAppState from './IStoreState';
import quantity from '../temp/quantityReducer';

const rootReducer = combineReducers<IAppState>({
    quantity,
});

export default rootReducer;
