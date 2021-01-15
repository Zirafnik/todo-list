import {createProject, createTask, addTaskToProject} from './create';
import {addProjectElement} from './dom';

let sport= createProject('sport');

let football= createTask('football', 'ball with foot', 'wednesday', 'urgent', 'todo');

addTaskToProject(sport, football);

addProjectElement(sport);

console.log(sport);