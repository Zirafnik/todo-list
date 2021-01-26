function createProject(name) {
    return {
        name,
        tasks: []
    }
}

function createTask(name, description, dueDate, priority, status) {
    return {
        name,
        description,
        dueDate,
        priority,
        status
    }
}

function addTaskToProject(project, task) {
    project.tasks.push(task);
}

export {createProject, createTask, addTaskToProject};