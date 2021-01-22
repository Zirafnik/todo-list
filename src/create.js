function createProject(name) {
    return {
        name,
        tasks: []
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

function addTaskToProject(project, task) {
    project.tasks.push(task);
}

export {createProject, createTask, addTaskToProject};