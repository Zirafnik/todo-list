import {createProject, createTask, addTaskToProject} from './create';
import {addProjectElement, changeTaskHeader, addTaskElement, currentProject, setFirstCurrentProject} from './dom';
import {EVaddProjBtn, EVaddTaskBtn} from './event-listener'
import {projectStorage, saveProjectToStorage} from './storage'

let sport= createProject('sport');

let football= createTask('football', 'ball with foot', 'wednesday', 'urgent', false);
let basketball= createTask('basket', 'ball in hoop', 'saturday', 'non-urgent', false);

addTaskToProject(sport, football);
addTaskToProject(sport, basketball);

addProjectElement(sport);
changeTaskHeader(sport);



let food= createProject('food');
let burek= createTask('burek', 'sirov', 'tuesday', 'urgetn', false);
addTaskToProject(food, burek);
addProjectElement(food);

sport.tasks.forEach(task => addTaskElement(task));

saveProjectToStorage(sport);

saveProjectToStorage(food);


EVaddProjBtn();
EVaddTaskBtn();

console.log(sport);


setFirstCurrentProject(projectStorage[0]);


//create.js --> objects.js**
//join dom and EV .js**