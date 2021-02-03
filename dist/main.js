/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add-forms.js":
/*!**************************!*\
  !*** ./src/add-forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EVaddProjBtn\": () => /* binding */ EVaddProjBtn,\n/* harmony export */   \"EVaddTaskBtn\": () => /* binding */ EVaddTaskBtn\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\nfunction EVaddProjBtn() {\n    let addProjBtn= document.getElementById('add-proj-btn');\n    addProjBtn.addEventListener('click', function() {\n        if(document.querySelector('.inputProjDiv')==null) {\n            let projects= document.getElementById('projects');\n            let headerWrap= document.querySelector('#proj-header-wrapper');\n\n            let inputDiv= document.createElement('div');\n            inputDiv.classList.add('inputProjDiv');\n            headerWrap.after(inputDiv);\n\n            let header= document.createElement('h2');\n            header.classList.add('input-header');\n            header.textContent= 'Add a project:'\n            inputDiv.appendChild(header);\n\n            let titleInput= document.createElement('input');\n            titleInput.setAttribute('type', 'text');\n            titleInput.setAttribute('placeholder', 'Title');\n            titleInput.classList.add('inputElem');\n            inputDiv.appendChild(titleInput);\n\n            let buttonsDiv= document.createElement('div');\n            buttonsDiv.classList.add('buttonsDiv');\n\n            let submit= document.createElement('button');\n            submit.classList.add('inputElem');\n            submit.textContent= 'Add';\n            submit.addEventListener('click', function() {\n                let objProj= (0,_objects__WEBPACK_IMPORTED_MODULE_1__.createProject)(titleInput.value);\n                (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectToStorage)(objProj);\n                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectElement)(objProj);\n\n                projects.removeChild(inputDiv);\n            })\n            buttonsDiv.appendChild(submit);\n\n            let cancel= document.createElement('button');\n            cancel.classList.add('inputElem');\n            cancel.textContent= 'Cancel';\n            cancel.addEventListener('click', function() {\n                projects.removeChild(inputDiv);\n            })\n            buttonsDiv.appendChild(cancel);\n\n            inputDiv.appendChild(buttonsDiv);\n\n        } else {\n            let projects= document.getElementById('projects');\n            let inputDiv= document.querySelector('.inputProjDiv');\n            projects.removeChild(inputDiv);\n        }\n    })\n}\n\nfunction EVaddTaskBtn() {\n    let addTaskBtn= document.getElementById('add-task-btn');\n    addTaskBtn.addEventListener('click', function() {\n        if(document.querySelector('.inputTaskDiv')==null) {\n            let tasks= document.getElementById('tasks');\n            let headerWrap= document.querySelector('#task-header-wrapper');\n\n            let inputDiv= document.createElement('div');\n            inputDiv.classList.add('inputTaskDiv');\n            headerWrap.after(inputDiv);\n\n            let header= document.createElement('h2');\n            header.classList.add('input-header');\n            header.textContent= 'Add a task:'\n            inputDiv.appendChild(header);\n\n            let nameInput= document.createElement('input');\n            nameInput.classList.add('inputElem');\n            nameInput.setAttribute('type', 'text');\n            nameInput.setAttribute('placeholder', 'task name');\n            inputDiv.appendChild(nameInput);\n\n            let dueDate= document.createElement('input');\n            dueDate.classList.add('inputElem');\n            dueDate.setAttribute('type', 'date');\n            dueDate.setAttribute('placeholder', 'due date');\n            inputDiv.appendChild(dueDate);\n\n            let priority= document.createElement('select');\n            priority.classList.add('inputElem');\n            let option1= document.createElement('option');\n            option1.value= 'very urgent';\n            option1.textContent= 'very urgent';\n            priority.appendChild(option1);\n\n            let option2= document.createElement('option');\n            option2.value= 'urgent';\n            option2.textContent= 'urgent';\n            priority.appendChild(option2);\n\n            let option3= document.createElement('option');\n            option3.value= 'non-urgent';\n            option3.textContent= 'non-urgent';\n            priority.appendChild(option3);\n\n            inputDiv.appendChild(priority);\n\n\n            let desription= document.createElement('textarea');\n            desription.classList.add('inputElem');\n            desription.classList.add('description');\n            desription.setAttribute('rows', '3');\n            desription.setAttribute('cols', '50');\n            desription.setAttribute('placeholder', 'description');\n            inputDiv.appendChild(desription);\n\n            let buttonsDiv= document.createElement('div');\n            buttonsDiv.classList.add('buttonsDiv');\n            \n            let submit= document.createElement('button');\n            submit.classList.add('inputElem');\n            submit.textContent= 'Add';\n            submit.addEventListener('click', function() {\n                let objTask= (0,_objects__WEBPACK_IMPORTED_MODULE_1__.createTask)(nameInput.value, dueDate.value, priority.value, desription.value, false);\n                \n                (0,_storage__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)(_dom__WEBPACK_IMPORTED_MODULE_0__.currentProject, objTask);\n\n                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addTaskElement)(objTask);\n\n                tasks.removeChild(inputDiv);\n            })\n            buttonsDiv.appendChild(submit);\n\n            let cancel= document.createElement('button');\n            cancel.classList.add('inputElem');\n            cancel.textContent= 'Cancel';\n            cancel.addEventListener('click', function() {\n                tasks.removeChild(inputDiv);\n            })\n            buttonsDiv.appendChild(cancel);\n\n            inputDiv.appendChild(buttonsDiv);\n\n        } else {\n            let tasks= document.getElementById('tasks');\n            let inputDiv= document.querySelector('.inputTaskDiv');\n            tasks.removeChild(inputDiv);\n        }\n    })\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/add-forms.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectElement\": () => /* binding */ addProjectElement,\n/* harmony export */   \"changeTaskHeader\": () => /* binding */ changeTaskHeader,\n/* harmony export */   \"addTaskElement\": () => /* binding */ addTaskElement,\n/* harmony export */   \"currentProject\": () => /* binding */ currentProject,\n/* harmony export */   \"setFirstCurrentProject\": () => /* binding */ setFirstCurrentProject,\n/* harmony export */   \"setFirstCurrentProjDiv\": () => /* binding */ setFirstCurrentProjDiv\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\nlet currentProject= null;\nlet currentDiv= null;\nfunction setFirstCurrentProject(proj) {\n    currentProject= proj;\n}\n\nfunction setFirstCurrentProjDiv() {\n    currentDiv= document.querySelectorAll('.projectDiv')[0];\n}\n\nfunction addProjectElement(projectObj) {\n    let project= document.createElement('div');\n    project.id= projectObj.name;\n    project.textContent= `${projectObj.name}`;\n    project.classList.add('projectDiv');\n\n    //EV for changing projects\n    project.addEventListener('click', function() {\n        //do this only if project still exists\n        if(document.getElementById(projectObj.name)) {\n        //remove tasks\n        let tasksDiv= document.querySelector('#tasks');\n        while (tasksDiv.children.length > 1) {\n            tasksDiv.removeChild(tasksDiv.lastChild);\n        }\n\n        //change list header\n        changeTaskHeader(projectObj.name);\n\n        //add tasks\n        projectObj.tasks.forEach(task => addTaskElement(task));\n        \n        currentDiv.classList.remove('projectDivClicked');\n\n        currentProject= projectObj;\n        currentDiv= project;\n\n        project.classList.add('projectDivClicked');\n        }\n    })\n\n    //delete button\n    let deleteBtn= document.createElement('button');\n    deleteBtn.classList.add('deleteBtn');\n\n    deleteBtn.addEventListener('click', function() {\n        //delete proj from storage\n        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(projectObj);\n\n        //remove tasks\n        let tasksDiv= document.querySelector('#tasks');\n        while (tasksDiv.children.length > 1) {\n            tasksDiv.removeChild(tasksDiv.lastChild);\n        }\n\n        //remove project\n        let projects= document.getElementById('projects');\n        projects.removeChild(project);\n\n        //remove task header\n        changeTaskHeader('');\n        \n    })\n    project.appendChild(deleteBtn);\n\n    let projects= document.getElementById('projects');\n    projects.appendChild(project);\n}\n\nfunction changeTaskHeader(projectObjName) {\n    let tasksHeader= document.getElementById('tasks-header');\n\n    tasksHeader.textContent= projectObjName;\n}\n\nfunction addTaskElement(taskObj) {\n    let task= document.createElement('div');\n    task.classList.add('taskDiv');\n\n    //urgency color background\n    if(taskObj.priority=='very urgent') {\n        task.classList.add('very-urgent');\n    } else if(taskObj.priority=='urgent') {\n        task.classList.add('urgent');\n    } else if(taskObj.priority=='non-urgent') {\n        task.classList.add('non-urgent');\n    }\n\n    let completeBtn= document.createElement('button');\n    completeBtn.textContent= 'Done';\n    completeBtn.classList.add('done');\n    completeBtn.addEventListener('click', function() {\n        task.style.textDecoration= 'line-through';\n        task.classList.add('completed');\n\n        taskObj.status= true;\n    })\n\n    let over= false;\n    completeBtn.addEventListener('mouseover', function() {\n        over=true;\n    })\n    completeBtn.addEventListener('mouseleave', function() {\n        over=false;\n    })\n\n    task.appendChild(completeBtn);\n\n    //display propreties\n    for(let prop in taskObj) {\n        if(prop=='description' || prop=='status') {\n            continue;\n        }\n        let span= document.createElement('span');\n        span.textContent= `${taskObj[prop]} `;\n        span.classList.add('span');\n        task.appendChild(span);\n    }\n\n    task.addEventListener('click', function(){\n        if(task.querySelector('.description')==null && over==false) {\n            let description= document.createElement('span');\n            description.textContent= `${taskObj.description}`;\n            description.classList.add('description');\n            task.appendChild(description);\n        } else if(task.querySelector('.description') && over==false){\n            let description= task.querySelector('.description');\n            task.removeChild(description);\n        }\n    })\n\n    let editBtn= document.createElement('button');\n    editBtn.textContent= 'Edit';\n    editBtn.addEventListener('click', function() {\n        //edit just strings??**\n    })\n\n\n    //delete button\n    let deleteBtn= document.createElement('button');\n    deleteBtn.classList.add('deleteBtn');\n\n    deleteBtn.addEventListener('click', function() {\n        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.removeTaskFromStorage)(taskObj, currentProject);\n\n        let tasks= document.getElementById('tasks');\n        tasks.removeChild(task);\n    })\n    task.appendChild(deleteBtn);\n\n    let tasks= document.getElementById('tasks');\n    tasks.appendChild(task);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _add_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-forms */ \"./src/add-forms.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\n(0,_storage__WEBPACK_IMPORTED_MODULE_3__.getLocalStorage)();\n\n(0,_add_forms__WEBPACK_IMPORTED_MODULE_2__.EVaddProjBtn)();\n(0,_add_forms__WEBPACK_IMPORTED_MODULE_2__.EVaddTaskBtn)();\n\nif(_storage__WEBPACK_IMPORTED_MODULE_3__.projectStorage.length == 0) {\nlet sport= (0,_objects__WEBPACK_IMPORTED_MODULE_0__.createProject)('sport');\n(0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveProjectToStorage)(sport);\n\nlet football= (0,_objects__WEBPACK_IMPORTED_MODULE_0__.createTask)('football', 'ball with foot', 'wednesday', 'urgent', false);\nlet basketball= (0,_objects__WEBPACK_IMPORTED_MODULE_0__.createTask)('basket', 'ball in hoop', 'saturday', 'non-urgent', false);\n\n(0,_storage__WEBPACK_IMPORTED_MODULE_3__.addTaskToProject)(sport, football);\n(0,_storage__WEBPACK_IMPORTED_MODULE_3__.addTaskToProject)(sport, basketball);\n\n\nlet food= (0,_objects__WEBPACK_IMPORTED_MODULE_0__.createProject)('food');\n(0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveProjectToStorage)(food);\nlet burek= (0,_objects__WEBPACK_IMPORTED_MODULE_0__.createTask)('burek', 'sirov', 'tuesday', 'urgetn', false);\n(0,_storage__WEBPACK_IMPORTED_MODULE_3__.addTaskToProject)(food, burek);\n}\n\n\n//display projects\n_storage__WEBPACK_IMPORTED_MODULE_3__.projectStorage.forEach(proj => (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProjectElement)(proj));\n\n//display tasks\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeTaskHeader)(_storage__WEBPACK_IMPORTED_MODULE_3__.projectStorage[0].name);\n_storage__WEBPACK_IMPORTED_MODULE_3__.projectStorage[0].tasks.forEach(task => (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addTaskElement)(task));\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.setFirstCurrentProject)(_storage__WEBPACK_IMPORTED_MODULE_3__.projectStorage[0]);\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.setFirstCurrentProjDiv)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => /* binding */ createProject,\n/* harmony export */   \"createTask\": () => /* binding */ createTask\n/* harmony export */ });\nfunction createProject(name) {\n    return {\n        name,\n        tasks: []\n    }\n}\n\nfunction createTask(name, dueDate, priority, description, status) {\n    return {\n        name,\n        dueDate,\n        priority,\n        description,\n        status\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/objects.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => /* binding */ getLocalStorage,\n/* harmony export */   \"saveProjectToStorage\": () => /* binding */ saveProjectToStorage,\n/* harmony export */   \"addTaskToProject\": () => /* binding */ addTaskToProject,\n/* harmony export */   \"deleteProject\": () => /* binding */ deleteProject,\n/* harmony export */   \"removeTaskFromStorage\": () => /* binding */ removeTaskFromStorage,\n/* harmony export */   \"projectStorage\": () => /* binding */ projectStorage\n/* harmony export */ });\nlet projectStorage= [];\n\n//LOCAL STORAGE\n//check if exists\nfunction getLocalStorage() {\n    if (typeof(Storage) !== \"undefined\" && window.localStorage.length!=0) {\n        projectStorage= JSON.parse(window.localStorage.getItem('projectsData'));\n        } else {\n        console.log('no storage support');\n    }\n}\n\nfunction updateLocalStorage() {\n    window.localStorage.clear();\n    window.localStorage.setItem('projectsData', JSON.stringify(projectStorage));  //JSON.stringify enumerates propreties, so it will not include non-enumerable\n\n    console.log(projectStorage);\n}   \n\n\nfunction saveProjectToStorage(project) {\n    projectStorage.push(project);\n\n    updateLocalStorage();\n}\n\nfunction addTaskToProject(project, task) {\n    let projectIndex= projectStorage.indexOf(project);\n\n    projectStorage[projectIndex].tasks.push(task);\n\n    updateLocalStorage();\n}\n\nfunction deleteProject(project) {\n    let index= projectStorage.indexOf(project);\n    if (index > -1) {\n        projectStorage.splice(index, 1);\n    }\n\n    updateLocalStorage();\n}\n\nfunction removeTaskFromStorage(task, currentProject) {\n    let projectIndex= projectStorage.indexOf(currentProject);\n    let taskIndex= projectStorage[projectIndex].tasks.indexOf(task);\n    if (taskIndex > -1) {\n        projectStorage[projectIndex].tasks.splice(taskIndex, 1);\n    }\n\n    updateLocalStorage();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;