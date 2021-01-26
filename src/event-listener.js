import {addProjectElement, addTaskElement, currentProject} from './dom'
import {createProject, createTask, addTaskToProject} from './create';
import {saveProjectToStorage} from './storage'

function EVaddProjBtn() {
    let addProjBtn= document.getElementById('add-proj-btn');
    addProjBtn.addEventListener('click', function() {
        if(document.querySelector('.inputProjDiv')==null) {
            let projects= document.getElementById('projects');
            let headerWrap= document.querySelector('#proj-header-wrapper');

            let inputDiv= document.createElement('div');
            inputDiv.classList.add('inputProjDiv');
            headerWrap.after(inputDiv);

            let titleInput= document.createElement('input');
            titleInput.setAttribute('type', 'text');
            titleInput.setAttribute('placeholder', 'Title');
            inputDiv.appendChild(titleInput);

            let submit= document.createElement('button');
            submit.textContent= 'Add';
            submit.addEventListener('click', function() {
                let objProj= createProject(titleInput.value);
                saveProjectToStorage(objProj);
                addProjectElement(objProj);

                projects.removeChild(inputDiv);
            })
            inputDiv.appendChild(submit);

            let cancel= document.createElement('button');
            cancel.textContent= 'Cancel';
            cancel.addEventListener('click', function() {
                projects.removeChild(inputDiv);
            })
            inputDiv.appendChild(cancel);
        }
    })
}

function EVaddTaskBtn() {
    let addTaskBtn= document.getElementById('add-task-btn');
    addTaskBtn.addEventListener('click', function() {
        if(document.querySelector('.inputTaskDiv')==null) {
            let tasks= document.getElementById('tasks');
            let headerWrap= document.querySelector('#task-header-wrapper');

            let inputDiv= document.createElement('div');
            inputDiv.classList.add('inputTaskDiv');
            headerWrap.after(inputDiv);

            let nameInput= document.createElement('input');
            nameInput.setAttribute('type', 'text');
            nameInput.setAttribute('placeholder', 'task name');
            inputDiv.appendChild(nameInput);

            let dueDate= document.createElement('input');
            dueDate.setAttribute('type', 'date');
            dueDate.setAttribute('placeholder', 'due date');
            inputDiv.appendChild(dueDate);

            let priority= document.createElement('select');
            let option1= document.createElement('option');
            option1.value= 'very urgent';
            option1.textContent= 'very urgent';
            priority.appendChild(option1);

            let option2= document.createElement('option');
            option2.value= 'urgent';
            option2.textContent= 'urgent';
            priority.appendChild(option2);

            let option3= document.createElement('option');
            option3.value= 'non-urgent';
            option3.textContent= 'non-urgent';
            priority.appendChild(option3);

            inputDiv.appendChild(priority);


            let desription= document.createElement('input');
            desription.setAttribute('type', 'text');
            desription.setAttribute('placeholder', 'description');
            inputDiv.appendChild(desription);
            
            let submit= document.createElement('button');
            submit.textContent= 'Add';
            submit.addEventListener('click', function() {
                let objTask= createTask(nameInput.value, dueDate.value, priority.value, desription.value, false);
                console.log(currentProject);
                addTaskToProject(currentProject, objTask);

                addTaskElement(objTask);

                tasks.removeChild(inputDiv);
            })
            inputDiv.appendChild(submit);

            let cancel= document.createElement('button');
            cancel.textContent= 'Cancel';
            cancel.addEventListener('click', function() {
                tasks.removeChild(inputDiv);
            })
            inputDiv.appendChild(cancel);
        }
    })
}

export {EVaddProjBtn, EVaddTaskBtn};