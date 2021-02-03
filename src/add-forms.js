import {addProjectElement, addTaskElement, currentProject} from './dom'
import {createProject, createTask, addTaskToProject} from './objects';
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
            titleInput.classList.add('inputElem');
            inputDiv.appendChild(titleInput);

            let buttonsDiv= document.createElement('div');
            buttonsDiv.classList.add('buttonsDiv');

            let submit= document.createElement('button');
            submit.classList.add('inputElem');
            submit.textContent= 'Add';
            submit.addEventListener('click', function() {
                let objProj= createProject(titleInput.value);
                saveProjectToStorage(objProj);
                addProjectElement(objProj);

                projects.removeChild(inputDiv);
            })
            buttonsDiv.appendChild(submit);

            let cancel= document.createElement('button');
            cancel.classList.add('inputElem');
            cancel.textContent= 'Cancel';
            cancel.addEventListener('click', function() {
                projects.removeChild(inputDiv);
            })
            buttonsDiv.appendChild(cancel);

            inputDiv.appendChild(buttonsDiv);

        } else {
            let projects= document.getElementById('projects');
            let inputDiv= document.querySelector('.inputProjDiv');
            projects.removeChild(inputDiv);
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
            nameInput.classList.add('inputElem');
            nameInput.setAttribute('type', 'text');
            nameInput.setAttribute('placeholder', 'task name');
            inputDiv.appendChild(nameInput);

            let dueDate= document.createElement('input');
            dueDate.classList.add('inputElem');
            dueDate.setAttribute('type', 'date');
            dueDate.setAttribute('placeholder', 'due date');
            inputDiv.appendChild(dueDate);

            let priority= document.createElement('select');
            priority.classList.add('inputElem');
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
            desription.classList.add('inputElem');
            desription.classList.add('description');
            desription.setAttribute('type', 'text');
            desription.setAttribute('placeholder', 'description');
            inputDiv.appendChild(desription);

            let buttonsDiv= document.createElement('div');
            buttonsDiv.classList.add('buttonsDiv');
            
            let submit= document.createElement('button');
            submit.classList.add('inputElem');
            submit.textContent= 'Add';
            submit.addEventListener('click', function() {
                let objTask= createTask(nameInput.value, dueDate.value, priority.value, desription.value, false);
                
                addTaskToProject(currentProject, objTask);

                addTaskElement(objTask);

                tasks.removeChild(inputDiv);
            })
            buttonsDiv.appendChild(submit);

            let cancel= document.createElement('button');
            cancel.classList.add('inputElem');
            cancel.textContent= 'Cancel';
            cancel.addEventListener('click', function() {
                tasks.removeChild(inputDiv);
            })
            buttonsDiv.appendChild(cancel);

            inputDiv.appendChild(buttonsDiv);

        } else {
            let tasks= document.getElementById('tasks');
            let inputDiv= document.querySelector('.inputTaskDiv');
            tasks.removeChild(inputDiv);
        }
    })
}

export {EVaddProjBtn, EVaddTaskBtn};