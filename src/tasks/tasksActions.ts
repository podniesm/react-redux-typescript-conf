import 'isomorphic-fetch';
import {Dispatch} from 'react-redux';
import {IAction, IEvent} from '../_core/IAction';
import Task from './Task';

export const tasksActionTypes = {
    LOAD_TASKS_FAILURE: 'LOAD_TASKS_FAILURE',
    LOAD_TASKS_STARTED: 'LOAD_TASKS_STARTED',
    LOAD_TASKS_SUCCESS: 'LOAD_TASKS_SUCCESS',
    TEMP: 'TEMP',
};

export interface ITasksActions {
    load(): any;
    temp(): any;
}

export const tasksActions: ITasksActions = {
    load(): any {
        return (dispatch: Dispatch<any>): void => {
            dispatch(loadStarted());
            fetch('/items')
                .then((response: Response) => response.json())
                .then((tasks: Task[]) => {
                    dispatch(loadSuccess(tasks));
                })
                .catch((error: Error) => {
                    dispatch(loadFailure());
                });
        };
    },
    temp(): any {
        return (dispatch: Dispatch<any>): void => {
            dispatch(loadStarted());
            fetch('/temp')
                .then((response: Response) => response.text())
                .then((t) => console.log(t))
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

function loadSuccess(tasks: Task[]): IAction<Task[]> {
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
