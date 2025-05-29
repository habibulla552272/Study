class TodoList {
    constructor(name) {
        this.name = `${name} Todo List`
        this.todoList = []
    }
    addTask(task) {
        this.todoList.push(task)
    }

    printTasks() {
        console.log(`Taks in ${this.name}:`);
        this.todoList.forEach((task, index) => {
            console.log(`${index + 1}...${task} `);

        })

    }
}

const personalTodoList = new TodoList('personal');
personalTodoList.addTask('buy groceries');
personalTodoList.addTask('clean the house');
personalTodoList.addTask('Finish homeWork')
personalTodoList.printTasks();

const workTodoList = new TodoList('Official');
workTodoList.addTask('preper presentation');
workTodoList.addTask('attend meetion')
workTodoList.printTasks();