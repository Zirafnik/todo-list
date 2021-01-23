import {createProject, createTask, addTaskToProject} from './create';
import {addProjectElement, changeTaskHeader, renderTaskElement} from './dom';
import {EVaddProjBtn} from './event-listener'

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

sport.tasks.forEach(task => renderTaskElement(task));

EVaddProjBtn();

console.log(sport);


//create.js --> objects.js
//join dom and EV .js