export interface Task{
    id : number;
    taskName : string;
    taskDescription : string;
    assignedTo : string;
    dueDate: Date;    
    isCompleted : boolean;
}

export class Convert {
    public static toTask(json: string): Task {
        return JSON.parse(json);
    }

    public static TaskToJson(value: Task): string {
        return JSON.stringify(value);
    }
}
