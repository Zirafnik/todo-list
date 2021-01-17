let projectStorage= [];

function saveProjectToStorage(project) {
    projectStorage.push(project);
    console.log(projectStorage);
}

export {saveProjectToStorage};