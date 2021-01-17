function addProjectElement(projectObj) {
    let project= document.createElement('div');
    project.textContent= `${projectObj.name}`;
    project.classList.add('projectDiv');

    let projects= document.getElementById('projects');
    projects.appendChild(project);
}

function renderTasKElement(taskObj) {
    let task= document.createElement('div');
    //all propreties
    task.textContent= `${taskObj.title}`;
    task.classList.add('taskDiv');

    let tasks= document.getElementById('tasks');
    tasks.appendChild(task);
}


export {addProjectElement, renderTasKElement};