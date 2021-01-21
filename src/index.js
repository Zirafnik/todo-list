import {createProject, createTask, addTaskToProject} from './create';
import {addProjectElement, renderTasKElement} from './dom';
import {EVaddProjBtn} from './event-listener'

let sport= createProject('sport');

let football= createTask('football', 'ball with foot', 'wednesday', 'urgent', 'todo');
let basketball= createTask('basket', 'ball in hoop', 'saturday', 'non-urgent', 'done');

addTaskToProject(sport, football);
addTaskToProject(sport, basketball);

addProjectElement(sport);



let food= createProject('food');
let burek= createTask('burek', 'sirov', 'tuesday', 'urgetn', 'done');
addTaskToProject(food, burek);
addProjectElement(food);


renderTasKElement(sport['0']);
renderTasKElement(sport['1']);

EVaddProjBtn();

console.log(sport);


//create.js --> objects.js
//join dom and EV .js