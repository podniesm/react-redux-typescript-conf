import FilterData from '../_core/grids/FilterData';
import {IAction, IEvent} from '../_core/IAction';
import Task from './Task';
import {tasksActionTypes} from './tasksActions';

export default function tasksReducer(state: Task[] = [], event: IEvent): Task[] {
    switch (event.type) {
        case tasksActionTypes.ADD:
            return addHandler(event as IAction<Task>);
        case tasksActionTypes.REMOVE:
            return removeHandler(event as IAction<string>);
        case tasksActionTypes.FILTER:
            return filterHandler(event as IAction<FilterData>);
        default:
            return state;
    }

    function addHandler(action: IAction<Task>): Task[] {
        const task = action.payload;
        return [...state, task];
    }

    function removeHandler(action: IAction<string>): Task[] {
        const removingTaskId = action.payload;
        return state.map((t) => {
            if (t.id !== removingTaskId) {
                return t;
            }
        });
    }

    function filterHandler(action: IAction<FilterData>): Task[] {
        const filterData = action.payload;
        return state;
    }

}
