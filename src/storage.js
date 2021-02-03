let projectStorage= [];

//LOCAL STORAGE
//check if exists
function getLocalStorage() {
    if (typeof(Storage) !== "undefined" && window.localStorage.length!=0) {
        projectStorage= JSON.parse(window.localStorage.getItem('projectsData'));
        } else {
        console.log('no storage support');
    }
}

function updateLocalStorage() {
    window.localStorage.clear();
    window.localStorage.setItem('projectsData', JSON.stringify(projectStorage));  //JSON.stringify enumerates propreties, so it will not include non-enumerable

    console.log(projectStorage);
}   


function saveProjectToStorage(project) {
    projectStorage.push(project);

    updateLocalStorage();
}

function addTaskToProject(project, task) {
    let projectIndex= projectStorage.indexOf(project);

    projectStorage[projectIndex].tasks.push(task);

    updateLocalStorage();
}

function deleteProject(project) {
    let index= projectStorage.indexOf(project);
    if (index > -1) {
        projectStorage.splice(index, 1);
    }

    updateLocalStorage();
}

function removeTaskFromStorage(task, currentProject) {
    let projectIndex= projectStorage.indexOf(currentProject);
    let taskIndex= projectStorage[projectIndex].tasks.indexOf(task);
    if (taskIndex > -1) {
        projectStorage[projectIndex].tasks.splice(taskIndex, 1);
    }

    updateLocalStorage();
}

export {getLocalStorage, saveProjectToStorage, addTaskToProject, deleteProject, removeTaskFromStorage, projectStorage};