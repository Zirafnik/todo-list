function addProjectElement(projectObj) {
    let project= document.createElement('div');
    project.textContent= `${projectObj.name}`;
    project.classList.add('projectDiv');

    project.addEventListener('click', function() {
        //clear tasks div

        let tasksHeader= document.getElementById('tasks-header');
        tasksHeader.textContent= projectObj.name;

        for(let i=0; i<projectObj.length; i++) {
            console.log('rendering tasks');
            renderTasKElement(projectObj[i]);
        }
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