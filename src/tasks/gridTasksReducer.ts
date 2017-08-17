import {IAction, IEvent} from '../_core/IAction';
import {gridTasksActionTypes} from './gridTasksActions';
import Task from './Task';

export default function gridTasksReducer(state: Task[] = [], action: IEvent): Task[] {
    switch (action.type) {
        case gridTasksActionTypes.ADD:
            const task = (action as IAction<Task>).payload;
            return [...state, Task.copy(task)];
        case gridTasksActionTypes.REMOVE:
            const removingTaskId = (action as IAction<string>).payload;
            return state.map((t) => {
                if (t.Id !== removingTaskId) {
                    return t;
                }
            });
        default:
            return state;
    }
}
