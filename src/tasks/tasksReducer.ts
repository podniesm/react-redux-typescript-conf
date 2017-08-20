import _ = require('lodash');
import {IAction, IEvent} from '../_core/IAction';
import initialState from '../store/initialState';
import Task from './Task';
import {tasksActionTypes} from './tasksActions';

export interface ITasksState {
    items: Task[];
    isLoading: boolean;
}

export default function tasksReducer(state: ITasksState = initialState.tasks, event: IEvent): ITasksState {
    switch (event.type) {
        case tasksActionTypes.LOAD_TASKS_STARTED:
            return _.assign<{}, ITasksState, Partial<ITasksState>>({}, state, {isLoading: true});
        case tasksActionTypes.LOAD_TASKS_SUCCESS:
            const tasks = (event as IAction<Task[]>).payload;
            return _.assign<{}, ITasksState, Partial<ITasksState>>({}, state, {isLoading: false, items: tasks});
        case tasksActionTypes.LOAD_TASKS_FAILURE:
            return _.assign<{}, ITasksState, Partial<ITasksState>>({}, state, {isLoading: false, items: []});
        default:
            return state;
    }
}
