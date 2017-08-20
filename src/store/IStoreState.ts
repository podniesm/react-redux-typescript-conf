import {ITasksState} from '../tasks/tasksReducer';

interface IStoreState {
    quantity: number;
    tasks: ITasksState;
}

export default IStoreState;
