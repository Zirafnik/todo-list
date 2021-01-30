let currentProject= null;
function setFirstCurrentProject(proj) {
    currentProject= proj;
}

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
        projectObj.tasks.forEach(task => addTaskElement(task));  
        
        currentProject= projectObj;
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

    let completeBtn= document.createElement('button');
    completeBtn.textContent= 'Done';
    completeBtn.addEventListener('click', function() {
        task.style.backgroundColor= 'lightgray';
        task.style.textDecoration= 'line-through';
        task.classList.add('completed');

        taskObj.status= true;
    })

    task.appendChild(completeBtn);

    //display propreties
    for(let prop in taskObj) {
        if(prop=='description' || prop=='status') {
            continue;
        }
        let span= document.createElement('span');
        span.textContent= `${taskObj[prop]} `;
        span.classList.add('span');
        task.appendChild(span);
    }

    task.addEventListener('click', function(){
        console.log(task.querySelector('.description'));
        if(task.querySelector('.description')==null) {
            let description= document.createElement('span');
            description.textContent= `${taskObj.description}`;
            description.classList.add('description');
            task.appendChild(description);
        } else {
            let description= task.querySelector('.description');
            task.removeChild(description);
        }
    })

    let editBtn= document.createElement('button');
    editBtn.textContent= 'Edit';
    editBtn.addEventListener('click', function() {
        //edit just strings??**
    })


    //use svg to load 
    //change CSS to change color of svg on hover
    let deleteBtn= document.createElement('svg');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', function() {
        let tasks= document.getElementById('tasks');
        tasks.removeChild(task);
    })
    task.appendChild(deleteBtn);

    let tasks= document.getElementById('tasks');
    tasks.appendChild(task);
}


export {addProjectElement, changeTaskHeader, addTaskElement, currentProject, setFirstCurrentProject};