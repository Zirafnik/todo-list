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


export {createProject, createTask};