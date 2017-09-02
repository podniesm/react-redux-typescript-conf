import * as _ from 'lodash';
import {IAction, IEvent} from '../_core/IAction';
import initialState from '../store/initialState';
import Task from './Task';
import {tasksActionTypes} from './tasksActions';
import TasksResponse from './TasksResponse';

export interface ITasksState {
    items: Task[];
    allItemsCount: number;
    isLoading: boolean;
}

export default function tasksReducer(state: ITasksState = initialState.tasks, event: IEvent): ITasksState {
    switch (event.type) {
        case tasksActionTypes.LOAD_TASKS_STARTED:
            return _.assign<{}, ITasksState, Partial<ITasksState>>({}, state, {isLoading: true});
        case tasksActionTypes.LOAD_TASKS_SUCCESS:
            const tasksResponse = (event as IAction<TasksResponse>).payload;
            return _.assign<{}, ITasksState, Partial<ITasksState>>({}, state, {isLoading: false, items: tasksResponse.tasks, allItemsCount: tasksResponse.allTasksCount});
        case tasksActionTypes.LOAD_TASKS_FAILURE:
            return _.assign<{}, ITasksState, Partial<ITasksState>>({}, state, {isLoading: false, items: []});
        default:
            return state;
    }
}
