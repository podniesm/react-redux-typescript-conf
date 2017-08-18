import FilterData from '../_core/grids/FilterData';
import {IAction} from '../_core/IAction';
import Task from './Task';

export const tasksActionTypes = {
    ADD: 'ADD_TASK',
    FILTER: 'FILTER',
    REMOVE: 'REMOVE_TASK',
};

export interface ITasksActions {
    add(task: Task): IAction<Task>;
    remove(taskId: number): IAction<number>;
    filter(filterData: FilterData): IAction<FilterData>;
}

export const tasksActions: ITasksActions = {
    add(task: Task): IAction<Task> {
        return {
            payload: task,
            type: tasksActionTypes.ADD,
        };
    },
    remove(taskId: number): IAction<number> {
        return {
            payload: taskId,
            type: tasksActionTypes.REMOVE,
        };
    },
    filter(filterData: FilterData): IAction<FilterData> {
        return {
            payload: filterData,
            type: tasksActionTypes.FILTER,
        };
    },
};
