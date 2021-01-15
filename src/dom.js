function addProjectElement(projectObj) {
    let project= document.createElement('div');
    project.textContent= `${projectObj.name}`;
    project.classList.add('projectDiv');

    let content= document.getElementById('content');
    content.appendChild(project);
}

export {addProjectElement};