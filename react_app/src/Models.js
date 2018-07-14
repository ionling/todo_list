class Todo {
    static maxId = 0;
    id;
    title;
    detail;
    done = false;
    priority;
    expires;

    constructor(title) {
        this.title = title;
        Todo.maxId++;
        this.id = Todo.maxId;
    }
}

export { Todo };
