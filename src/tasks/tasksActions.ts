import 'isomorphic-fetch';
import {Dispatch} from 'react-redux';
import {IAction, IEvent} from '../_core/IAction';
import HttpClient from '../common/http/HttpClient';
import Task from './Task';
import {IGridFilter} from "./TasksPage";
import TasksResponse from "./TasksResponse";

export const tasksActionTypes = {
    LOAD_TASKS_FAILURE: 'LOAD_TASKS_FAILURE',
    LOAD_TASKS_STARTED: 'LOAD_TASKS_STARTED',
    LOAD_TASKS_SUCCESS: 'LOAD_TASKS_SUCCESS',
};

export interface ITasksActions {
    load(filter: IGridFilter): any;
}

export const tasksActions: ITasksActions = {
    load(filter: IGridFilter): any {
        return (dispatch: Dispatch<any>): void => {
            dispatch(loadStarted());
            const httpClient = new HttpClient();
            httpClient.getItems(filter)
                .then((tasks: TasksResponse) => {
                    dispatch(loadSuccess(tasks));
                })
                .catch((error: Error) => {
                    dispatch(loadFailure());
                });
        };
    },
};

function loadStarted(): IEvent {
    return {
        type: tasksActionTypes.LOAD_TASKS_STARTED,
    };
}

function loadSuccess(tasks: TasksResponse): IAction<TasksResponse> {
    return {
        payload: tasks,
        type: tasksActionTypes.LOAD_TASKS_SUCCESS,
    };
}

function loadFailure(): IEvent {
    return {
        type: tasksActionTypes.LOAD_TASKS_FAILURE,
    };
}
