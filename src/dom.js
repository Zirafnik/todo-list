function addProjectElement(projectObj) {
    let project= document.createElement('div');
    project.textContent= `${projectObj.name}`;
    project.classList.add('projectDiv');

    //EV for changing projects
    project.addEventListener('click', function() {
        //remove tasks
        let tasksDiv= document.querySelector('#tasks');
        while (tasksDiv.children.length > 1) {
            tasksDiv.removeChild(tasksDiv.lastChild);
        }

        //change header
        let tasksHeader= document.getElementById('tasks-header');
        tasksHeader.textContent= projectObj.name;

        //add tasks
        projectObj.tasks.forEach(task => renderTaskElement(task));
        
        
    })

    let projects= document.getElementById('projects');
    projects.appendChild(project);
}

function renderTaskElement(taskObj) {
    let task= document.createElement('div');
    //all propreties
    task.textContent= `${taskObj.title}`;
    task.classList.add('taskDiv');

    let tasks= document.getElementById('tasks');
    tasks.appendChild(task);
}


export {addProjectElement, renderTaskElement};