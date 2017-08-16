import {combineReducers} from 'redux';
import quantity from '../temp/quantityReducer';
import IAppState from './IStoreState';

const rootReducer = combineReducers<IAppState>({
    quantity,
});

export default rootReducer;
