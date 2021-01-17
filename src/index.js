import {createProject, createTask, addTaskToProject} from './create';
import {addProjectElement, renderTasKElement} from './dom';
import {EVaddProjBtn} from './event-listener'

let sport= createProject('sport');

let football= createTask('football', 'ball with foot', 'wednesday', 'urgent', 'todo');

let basketball= createTask('basket', 'ball in hoop', 'saturday', 'non-urgent', 'done');

addTaskToProject(sport, football);
addTaskToProject(sport, basketball);

addProjectElement(sport);

renderTasKElement(sport['0']);
renderTasKElement(sport['1']);

EVaddProjBtn();

console.log(sport);