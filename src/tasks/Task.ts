class Task {
    public static copy(task: Task): Task {
        return new Task(task._id, task._status, task._priority, task._category, task._createdDate);
    }

    private _id: string;
    private _status: string;
    private _createdDate: Date;
    private _priority: string;
    private _category: string;

    public get Id(): string { return this._id; }
    public get Status(): string { return this._id; }
    public get CreatedDate(): Date { return this._createdDate; }
    public get Priority(): string { return this._priority; }
    public get Category(): string { return this._category; }

    constructor(id: string, status: string, priority: string, category: string, createdDate?: Date) {
        this._id = id;
        this._status = status;
        this._priority = priority;
        this._category = category;
        this._createdDate = createdDate || new Date();
    }

}

export default Task;
