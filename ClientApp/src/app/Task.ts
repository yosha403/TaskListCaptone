export interface Task{
    id : number;
    taskname : string;
    taskdescription : string;
    assignedto : string;
    duedate: Date;    
    iscompleted : boolean;
}

export class Convert {
    public static toMovie(json: string): Task {
        return JSON.parse(json);
    }

    public static MovieToJson(value: Task): string {
        return JSON.stringify(value);
    }
}