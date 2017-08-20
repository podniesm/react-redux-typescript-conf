import {combineReducers} from 'redux';
import tasks from '../tasks/tasksReducer';
import quantity from '../temp/quantityReducer';
import IAppState from './IStoreState';

const rootReducer = combineReducers<IAppState>({
    quantity,
    tasks,
});

export default rootReducer;
