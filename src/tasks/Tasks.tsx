import * as React from 'react';
import Task from './Task';

export interface ITasksActionProps {
    searchTasks: () => void;
}

export interface ITasksDataProps {
    tasks: Task[];
    isLoading: boolean;
}

export interface ITasksProps extends ITasksActionProps, ITasksDataProps {}

interface IGridFilter {
    searchPhrase: string;
    sortColumn: string;
}

interface ITasksState {
    filter: IGridFilter;
}

class Tasks extends React.Component<ITasksProps, ITasksState> {
    constructor(props: ITasksProps) {
        super(props);
        this.state = {
            filter: {
                searchPhrase: '',
                sortColumn: '',
            },
        };
        this.updateTasksFilter = this.updateTasksFilter.bind(this);
    }

    public render(): JSX.Element {
        const tasksGrid = this.createTasksGrid();
        return (
            <div>
                <h1>Tasks</h1>
                <br/>
                <input
                    name='searchPhrase'
                    type='search'
                    onChange={this.updateTasksFilter}
                    value={this.state.filter.searchPhrase}
                />
                <button onClick={this.props.searchTasks}>Search</button>
                {tasksGrid}
                {this.props.isLoading && <div>Loading...</div>}
            </div>
        );
    }

    private updateTasksFilter(event: React.FormEvent<any>): void {
        const target = event.target as any;
        const field = target.name;
        const filter = this.state.filter;
        filter[field] = target.value;
        return this.setState({filter});
    }

    private createTasksGrid(): JSX.Element {
        return (
            <table>
                {this.createTasksGridHeader()}
                <tbody>
                {this.createTasksGridRows()}
                </tbody>
            </table>
        );
    }

    private createTasksGridHeader(): JSX.Element {
        return (
            <thead>
            <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Created</th>
                <th>Priority</th>
                <th>Category</th>
            </tr>
            </thead>
        );
    }

    private createTasksGridRows(): JSX.Element[] {
        if (this.props.isLoading) {
            return null;
        }
        return (this.props.tasks.map((t, index) => (
            <tr key={index}>
                <td>{t.id}</td>
                <td>{t.status}</td>
                <td>{t.createdDate}</td>
                <td>{t.priority}</td>
                <td>{t.category}</td>
            </tr>
        )));
    }
}

export default Tasks;
