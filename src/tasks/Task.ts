class Task {
    public readonly id: string;
    public readonly status: string;
    public readonly createdDate: Date;
    public readonly priority: string;
    public readonly category: string;

    constructor(id: string, status: string, priority: string, category: string, createdDate?: Date) {
        this.id = id;
        this.status = status;
        this.priority = priority;
        this.category = category;
        this.createdDate = createdDate || new Date();
    }

    public copy() {
        return new Task(this.id, this.status, this.priority, this.category, this.createdDate);
    }

}

export default Task;
