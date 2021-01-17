import {addProjectElement} from './dom'
import {createProject} from './create';
import {saveProjectToStorage} from './storage'

function EVaddProjBtn() {
    let addProjBtn= document.getElementById('add-proj-btn');
    addProjBtn.addEventListener('click', function() {
        if(document.querySelector('.inputDiv')==null) {
            let projects= document.getElementById('projects');
            let headerWrap= document.querySelector('#header-wrapper');

            let inputDiv= document.createElement('div');
            inputDiv.classList.add('inputDiv');
            headerWrap.after(inputDiv);

            let titleInput= document.createElement('input');
            titleInput.setAttribute('type', 'text');
            titleInput.setAttribute('placeholder', 'Title');
            inputDiv.appendChild(titleInput);

            let submit= document.createElement('button');
            submit.textContent= 'Add';
            submit.addEventListener('click', function() {
                let obj= createProject(titleInput.value);
                saveProjectToStorage(obj);
                addProjectElement(obj);

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

    })
}

export {EVaddProjBtn};