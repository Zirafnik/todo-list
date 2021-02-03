import {createProject, createTask} from './objects';
import {addProjectElement, changeTaskHeader, addTaskElement, currentProject, setFirstCurrentProject, setFirstCurrentProjDiv} from './dom';
import {EVaddProjBtn, EVaddTaskBtn} from './add-forms'
import {projectStorage, saveProjectToStorage, addTaskToProject, getLocalStorage} from './storage'

getLocalStorage();

EVaddProjBtn();
EVaddTaskBtn();

if(projectStorage.length == 0) {
let sport= createProject('sport');
saveProjectToStorage(sport);

let football= createTask('football', 'ball with foot', 'wednesday', 'urgent', false);
let basketball= createTask('basket', 'ball in hoop', 'saturday', 'non-urgent', false);

addTaskToProject(sport, football);
addTaskToProject(sport, basketball);


let food= createProject('food');
saveProjectToStorage(food);
let burek= createTask('burek', 'sirov', 'tuesday', 'urgetn', false);
addTaskToProject(food, burek);
}


//display projects
projectStorage.forEach(proj => addProjectElement(proj));

//display tasks
changeTaskHeader(projectStorage[0].name);
projectStorage[0].tasks.forEach(task => addTaskElement(task));


setFirstCurrentProject(projectStorage[0]);
setFirstCurrentProjDiv();