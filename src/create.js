function createProject(name) {
    return {
        name
    }
}

function createTask(title, description, dueDate, priority, status) {
    return {
        title,
        description,
        dueDate,
        priority,
        status
    }
}

let taskCounter= 0;

function addTaskToProject(project, task) {
    project[taskCounter]= task;
    taskCounter++;
}

export {createProject, createTask, addTaskToProject};