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

        //change list header
        changeTaskHeader(projectObj);

        //add tasks
        projectObj.tasks.forEach(task => renderTaskElement(task));
        
        
    })

    let projects= document.getElementById('projects');
    projects.appendChild(project);
}

function changeTaskHeader(projectObj) {
    let tasksHeader= document.getElementById('tasks-header');
    tasksHeader.textContent= projectObj.name;
}

function addTaskElement(taskObj) {
    let task= document.createElement('div');
    task.classList.add('taskDiv');

    //display propreties
    for(let prop in taskObj) {
        let span= document.createElement('span');
        span.textContent= `${taskObj[prop]} `;
        span.classList.add('span');
        task.appendChild(span);
    }

    task.addEventListener('click', function(){
        
    })

    let tasks= document.getElementById('tasks');
    tasks.appendChild(task);
}


export {addProjectElement, changeTaskHeader, addTaskElement};