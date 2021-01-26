function createProject(name) {
    return {
        name,
        tasks: []
    }
}

function createTask(name, dueDate, priority, description, status) {
    return {
        name,
        dueDate,
        priority,
        description,
        status
    }
}

function addTaskToProject(project, task) {
    project.tasks.push(task);
}

export {createProject, createTask, addTaskToProject};