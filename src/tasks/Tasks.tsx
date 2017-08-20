import * as React from 'react';
import Task from './Task';

export interface ITasksActionProps {
    searchTasks: () => void;
    temp: () => void;
}

export interface ITasksDataProps {
    tasks: Task[];
    isLoading: boolean;
}

export interface ITasksProps extends ITasksActionProps, ITasksDataProps {}

interface ITasksState {
    tasks: Task[];
    isLoading: boolean;
}

class Tasks extends React.Component<ITasksProps, Partial<ITasksState>> {
    constructor(props: ITasksProps) {
        super(props);
        this.createTasksGrid = this.createTasksGrid.bind(this);
    }

    public render(): JSX.Element {
        const grid = this.props.isLoading ? <div>Loading</div> : this.createTasksGrid(this.props.tasks);
        return (
            <div>
                <h1>Tasks</h1>
                <br/>
                <button onClick={this.props.searchTasks}>Search</button>
                <button onClick={this.props.temp}>Search</button>
                {grid}
            </div>
        );
    }

    private createTasksGrid(tasks: Task[]): JSX.Element[] {
        return tasks.map((t, index) => (
            <div key={index}>
                <div>{t.id}</div>
                <div>{t.category}</div>
            </div>
        ));
    }
}

export default Tasks;
