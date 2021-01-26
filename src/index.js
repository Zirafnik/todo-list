import {createProject, createTask, addTaskToProject} from './create';
import {addProjectElement, changeTaskHeader, addTaskElement, currentProject} from './dom';
import {EVaddProjBtn, EVaddTaskBtn} from './event-listener'
import {projectStorage, saveProjectToStorage} from './storage'

let sport= createProject('sport');

let football= createTask('football', 'ball with foot', 'wednesday', 'urgent', 'todo');
let basketball= createTask('basket', 'ball in hoop', 'saturday', 'non-urgent', 'done');

addTaskToProject(sport, football);
addTaskToProject(sport, basketball);

addProjectElement(sport);
changeTaskHeader(sport);



let food= createProject('food');
let burek= createTask('burek', 'sirov', 'tuesday', 'urgetn', 'done');
addTaskToProject(food, burek);
addProjectElement(food);

sport.tasks.forEach(task => addTaskElement(task));

saveProjectToStorage(sport);

saveProjectToStorage(food);


EVaddProjBtn();
EVaddTaskBtn();

console.log(sport);


currentProject= projectStorage[0];
console.log(projectStorage.length);
console.log(currentProject);


//create.js --> objects.js**
//join dom and EV .js**