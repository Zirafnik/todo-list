import {deleteProject, removeTaskFromStorage} from './storage'

let currentProject= null;
let currentDiv= null;
function setFirstCurrentProject(proj) {
    currentProject= proj;
}

function setFirstCurrentProjDiv() {
    currentDiv= document.querySelectorAll('.projectDiv')[0];
}

function addProjectElement(projectObj) {
    let project= document.createElement('div');
    project.id= projectObj.name;
    project.textContent= `${projectObj.name}`;
    project.classList.add('projectDiv');

    //EV for changing projects
    project.addEventListener('click', function() {
        //do this only if project still exists
        if(document.getElementById(projectObj.name)) {
        //remove tasks
        let tasksDiv= document.querySelector('#tasks');
        while (tasksDiv.children.length > 1) {
            tasksDiv.removeChild(tasksDiv.lastChild);
        }

        //change list header
        changeTaskHeader(projectObj.name);

        //add tasks
        projectObj.tasks.forEach(task => addTaskElement(task));
        
        currentDiv.classList.remove('projectDivClicked');

        currentProject= projectObj;
        currentDiv= project;

        project.classList.add('projectDivClicked');
        }
    })

    //delete button
    let deleteBtn= document.createElement('button');
    deleteBtn.classList.add('deleteBtn');

    deleteBtn.addEventListener('click', function() {
        //delete proj from storage
        deleteProject(projectObj);

        //remove tasks
        let tasksDiv= document.querySelector('#tasks');
        while (tasksDiv.children.length > 1) {
            tasksDiv.removeChild(tasksDiv.lastChild);
        }

        //remove project
        let projects= document.getElementById('projects');
        projects.removeChild(project);

        //remove task header
        changeTaskHeader('');
        
    })
    project.appendChild(deleteBtn);

    let projects= document.getElementById('projects');
    projects.appendChild(project);
}

function changeTaskHeader(projectObjName) {
    let tasksHeader= document.getElementById('tasks-header');

    tasksHeader.textContent= projectObjName;
}

function addTaskElement(taskObj) {
    let task= document.createElement('div');
    task.classList.add('taskDiv');

    //urgency color background
    if(taskObj.priority=='very urgent') {
        task.classList.add('very-urgent');
    } else if(taskObj.priority=='urgent') {
        task.classList.add('urgent');
    } else if(taskObj.priority=='non-urgent') {
        task.classList.add('non-urgent');
    }

    let completeBtn= document.createElement('button');
    completeBtn.textContent= 'Done';
    completeBtn.classList.add('done');
    completeBtn.addEventListener('click', function() {
        task.style.textDecoration= 'line-through';
        task.classList.add('completed');

        taskObj.status= true;
    })

    let over= false;
    completeBtn.addEventListener('mouseover', function() {
        over=true;
    })
    completeBtn.addEventListener('mouseleave', function() {
        over=false;
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
        if(task.querySelector('.description')==null && over==false) {
            let description= document.createElement('span');
            description.textContent= `${taskObj.description}`;
            description.classList.add('description');
            task.appendChild(description);
        } else if(task.querySelector('.description') && over==false){
            let description= task.querySelector('.description');
            task.removeChild(description);
        }
    })

    let editBtn= document.createElement('button');
    editBtn.textContent= 'Edit';
    editBtn.addEventListener('click', function() {
        //edit just strings??**
    })


    //delete button
    let deleteBtn= document.createElement('button');
    deleteBtn.classList.add('deleteBtn');

    deleteBtn.addEventListener('click', function() {
        removeTaskFromStorage(taskObj, currentProject);

        let tasks= document.getElementById('tasks');
        tasks.removeChild(task);
    })
    task.appendChild(deleteBtn);

    let tasks= document.getElementById('tasks');
    tasks.appendChild(task);
}


export {addProjectElement, changeTaskHeader, addTaskElement, currentProject, setFirstCurrentProject, setFirstCurrentProjDiv};