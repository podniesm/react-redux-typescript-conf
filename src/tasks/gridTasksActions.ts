import {IAction} from '../_core/IAction';
import Task from './Task';

export const gridTasksActionTypes = {
    ADD: 'ADD_TASK',
    REMOVE: 'REMOVE_TASK',
};

export interface IQuantityActions {
    add(task: Task): IAction<Task>;
    remove(taskId: number): IAction<number>;
}

export const gridTasksActions: IQuantityActions = {
    add(task: Task): IAction<Task> {
        return {
            payload: task,
            type: gridTasksActionTypes.ADD,
        };
    },
    remove(taskId: number): IAction<number> {
        return {
            payload: taskId,
            type: gridTasksActionTypes.REMOVE,
        };
    },
};
