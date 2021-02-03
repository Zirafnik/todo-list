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
}   


function saveProjectToStorage(project) {
    projectStorage.push(project);
    console.log(projectStorage);

    updateLocalStorage();
}

function deleteProject() {

}

export {saveProjectToStorage, projectStorage};