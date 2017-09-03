import * as React from 'react';
import Task from './Task';
import TasksGrid, {IGridFilter} from './TasksGrid';

export interface ITasksPageActionProps {
    searchTasks: (filter: IGridFilter) => void;
}

export interface ITasksDataProps {
    tasks: Task[];
    isLoading: boolean;
    allTasksCount: number;
}

export interface ITasksProps extends ITasksPageActionProps, ITasksDataProps {}

interface ITasksPageState {
    filter: IGridFilter;
}

class TasksPage extends React.Component<ITasksProps, ITasksPageState> {
    public render(): JSX.Element {
        return (
            <div>
                <h1>Tasks</h1>
                <br/>
                <TasksGrid allTasksCount={this.props.allTasksCount}
                           tasks={this.props.tasks}
                           searchTasks={this.props.searchTasks}
                           isLoading={this.props.isLoading}/>
                {this.props.isLoading && <div>Loading...</div>}
            </div>
        );
    }
}

export default TasksPage;
