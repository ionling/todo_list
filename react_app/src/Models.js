class Todo {
    static maxId = 0;
    id;
    title;
    detail;
    done = false;
    priority;
    expires;

    // Inited in Todo.js when POST a new Todo.
    lastUpdate;
    lastUpload;

    constructor(title) {
        this.title = title;
        Todo.maxId++;
        this.id = Todo.maxId;
    }
}

export { Todo };
