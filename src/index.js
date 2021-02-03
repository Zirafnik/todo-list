import {createProject, createTask} from './objects';
import {addProjectElement, changeTaskHeader, addTaskElement, currentProject, setFirstCurrentProject, setFirstCurrentProjDiv} from './dom';
import {EVaddProjBtn, EVaddTaskBtn} from './add-forms'
import {projectStorage, saveProjectToStorage, addTaskToProject, getLocalStorage} from './storage'

getLocalStorage();

EVaddProjBtn();
EVaddTaskBtn();

if(projectStorage.length == 0) {
    let defaultProj= createProject('Default');
    saveProjectToStorage(defaultProj);

    let demoTask1= createTask('demoTask', '2021-01-01', 'urgent', 'This is an example task', false);
    let demoTask2= createTask('demoTask2', '2021-02-02', 'very urgent', 'This is another example task', false);
    let demoTask3= createTask('demoTask3', '2021-03-03', 'non-urgent', 'Another example, this one non-urgent', false);

    addTaskToProject(defaultProj, demoTask1);
    addTaskToProject(defaultProj, demoTask2);
    addTaskToProject(defaultProj, demoTask3);


    let anotherProj= createProject('another');
    saveProjectToStorage(anotherProj);

    let demoTask4= createTask('demoTask4', '2021-04-04', 'urgent', 'Another list example', false);
    addTaskToProject(anotherProj, demoTask4);
}


//display projects
projectStorage.forEach(proj => addProjectElement(proj));

//display tasks
changeTaskHeader(projectStorage[0].name);
projectStorage[0].tasks.forEach(task => addTaskElement(task));


setFirstCurrentProject(projectStorage[0]);
setFirstCurrentProjDiv();