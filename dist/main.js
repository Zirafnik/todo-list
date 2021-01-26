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

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => /* binding */ createProject,\n/* harmony export */   \"createTask\": () => /* binding */ createTask,\n/* harmony export */   \"addTaskToProject\": () => /* binding */ addTaskToProject\n/* harmony export */ });\nfunction createProject(name) {\n    return {\n        name,\n        tasks: []\n    }\n}\n\nfunction createTask(name, dueDate, priority, description, status) {\n    return {\n        name,\n        dueDate,\n        priority,\n        description,\n        status\n    }\n}\n\nfunction addTaskToProject(project, task) {\n    project.tasks.push(task);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/create.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectElement\": () => /* binding */ addProjectElement,\n/* harmony export */   \"changeTaskHeader\": () => /* binding */ changeTaskHeader,\n/* harmony export */   \"addTaskElement\": () => /* binding */ addTaskElement,\n/* harmony export */   \"currentProject\": () => /* binding */ currentProject,\n/* harmony export */   \"setFirstCurrentProject\": () => /* binding */ setFirstCurrentProject\n/* harmony export */ });\nlet currentProject= null;\nfunction setFirstCurrentProject(proj) {\n    currentProject= proj;\n}\n\nfunction addProjectElement(projectObj) {\n    let project= document.createElement('div');\n    project.textContent= `${projectObj.name}`;\n    project.classList.add('projectDiv');\n\n    //EV for changing projects\n    project.addEventListener('click', function() {\n        //remove tasks\n        let tasksDiv= document.querySelector('#tasks');\n        while (tasksDiv.children.length > 1) {\n            tasksDiv.removeChild(tasksDiv.lastChild);\n        }\n\n        //change list header\n        changeTaskHeader(projectObj);\n\n        //add tasks\n        projectObj.tasks.forEach(task => addTaskElement(task));  \n        \n        currentProject= projectObj;\n    })\n\n    let projects= document.getElementById('projects');\n    projects.appendChild(project);\n}\n\nfunction changeTaskHeader(projectObj) {\n    let tasksHeader= document.getElementById('tasks-header');\n    tasksHeader.textContent= projectObj.name;\n}\n\nfunction addTaskElement(taskObj) {\n    let task= document.createElement('div');\n    task.classList.add('taskDiv');\n\n    let completeBtn= document.createElement('button');\n    completeBtn.textContent= 'Done';\n    completeBtn.addEventListener('click', function() {\n        task.style.backgroundColor= 'lightgray';\n        task.style.textDecoration= 'line-through';\n        task.classList.add('completed');\n    })\n\n    task.appendChild(completeBtn);\n\n    //display propreties\n    for(let prop in taskObj) {\n        let span= document.createElement('span');\n        span.textContent= `${taskObj[prop]} `;\n        span.classList.add('span');\n        task.appendChild(span);\n    }\n\n    task.addEventListener('click', function(){\n        //display more detailed description**\n        //edit task**\n        //delete task**\n    })\n\n    let tasks= document.getElementById('tasks');\n    tasks.appendChild(task);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/event-listener.js":
/*!*******************************!*\
  !*** ./src/event-listener.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EVaddProjBtn\": () => /* binding */ EVaddProjBtn,\n/* harmony export */   \"EVaddTaskBtn\": () => /* binding */ EVaddTaskBtn\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\nfunction EVaddProjBtn() {\n    let addProjBtn= document.getElementById('add-proj-btn');\n    addProjBtn.addEventListener('click', function() {\n        if(document.querySelector('.inputProjDiv')==null) {\n            let projects= document.getElementById('projects');\n            let headerWrap= document.querySelector('#proj-header-wrapper');\n\n            let inputDiv= document.createElement('div');\n            inputDiv.classList.add('inputProjDiv');\n            headerWrap.after(inputDiv);\n\n            let titleInput= document.createElement('input');\n            titleInput.setAttribute('type', 'text');\n            titleInput.setAttribute('placeholder', 'Title');\n            inputDiv.appendChild(titleInput);\n\n            let submit= document.createElement('button');\n            submit.textContent= 'Add';\n            submit.addEventListener('click', function() {\n                let objProj= (0,_create__WEBPACK_IMPORTED_MODULE_1__.createProject)(titleInput.value);\n                (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectToStorage)(objProj);\n                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectElement)(objProj);\n\n                projects.removeChild(inputDiv);\n            })\n            inputDiv.appendChild(submit);\n\n            let cancel= document.createElement('button');\n            cancel.textContent= 'Cancel';\n            cancel.addEventListener('click', function() {\n                projects.removeChild(inputDiv);\n            })\n            inputDiv.appendChild(cancel);\n        }\n    })\n}\n\nfunction EVaddTaskBtn() {\n    let addTaskBtn= document.getElementById('add-task-btn');\n    addTaskBtn.addEventListener('click', function() {\n        if(document.querySelector('.inputTaskDiv')==null) {\n            let tasks= document.getElementById('tasks');\n            let headerWrap= document.querySelector('#task-header-wrapper');\n\n            let inputDiv= document.createElement('div');\n            inputDiv.classList.add('inputTaskDiv');\n            headerWrap.after(inputDiv);\n\n            let nameInput= document.createElement('input');\n            nameInput.setAttribute('type', 'text');\n            nameInput.setAttribute('placeholder', 'task name');\n            inputDiv.appendChild(nameInput);\n\n            let dueDate= document.createElement('input');\n            dueDate.setAttribute('type', 'date');\n            dueDate.setAttribute('placeholder', 'due date');\n            inputDiv.appendChild(dueDate);\n\n            let priority= document.createElement('select');\n            let option1= document.createElement('option');\n            option1.value= 'very urgent';\n            option1.textContent= 'very urgent';\n            priority.appendChild(option1);\n\n            let option2= document.createElement('option');\n            option2.value= 'urgent';\n            option2.textContent= 'urgent';\n            priority.appendChild(option2);\n\n            let option3= document.createElement('option');\n            option3.value= 'non-urgent';\n            option3.textContent= 'non-urgent';\n            priority.appendChild(option3);\n\n            inputDiv.appendChild(priority);\n\n\n            let desription= document.createElement('input');\n            desription.setAttribute('type', 'text');\n            desription.setAttribute('placeholder', 'description');\n            inputDiv.appendChild(desription);\n            \n            let submit= document.createElement('button');\n            submit.textContent= 'Add';\n            submit.addEventListener('click', function() {\n                let objTask= (0,_create__WEBPACK_IMPORTED_MODULE_1__.createTask)(nameInput.value, dueDate.value, priority.value, desription.value, false);\n                console.log(_dom__WEBPACK_IMPORTED_MODULE_0__.currentProject);\n                (0,_create__WEBPACK_IMPORTED_MODULE_1__.addTaskToProject)(_dom__WEBPACK_IMPORTED_MODULE_0__.currentProject, objTask);\n\n                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addTaskElement)(objTask);\n\n                tasks.removeChild(inputDiv);\n            })\n            inputDiv.appendChild(submit);\n\n            let cancel= document.createElement('button');\n            cancel.textContent= 'Cancel';\n            cancel.addEventListener('click', function() {\n                tasks.removeChild(inputDiv);\n            })\n            inputDiv.appendChild(cancel);\n        }\n    })\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/event-listener.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _event_listener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-listener */ \"./src/event-listener.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nlet sport= (0,_create__WEBPACK_IMPORTED_MODULE_0__.createProject)('sport');\n\nlet football= (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)('football', 'ball with foot', 'wednesday', 'urgent', 'todo');\nlet basketball= (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)('basket', 'ball in hoop', 'saturday', 'non-urgent', 'done');\n\n(0,_create__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(sport, football);\n(0,_create__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(sport, basketball);\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProjectElement)(sport);\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeTaskHeader)(sport);\n\n\n\nlet food= (0,_create__WEBPACK_IMPORTED_MODULE_0__.createProject)('food');\nlet burek= (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)('burek', 'sirov', 'tuesday', 'urgetn', 'done');\n(0,_create__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(food, burek);\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProjectElement)(food);\n\nsport.tasks.forEach(task => (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addTaskElement)(task));\n\n(0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveProjectToStorage)(sport);\n\n(0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveProjectToStorage)(food);\n\n\n(0,_event_listener__WEBPACK_IMPORTED_MODULE_2__.EVaddProjBtn)();\n(0,_event_listener__WEBPACK_IMPORTED_MODULE_2__.EVaddTaskBtn)();\n\nconsole.log(sport);\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.setFirstCurrentProject)(_storage__WEBPACK_IMPORTED_MODULE_3__.projectStorage[0]);\n\n\n//create.js --> objects.js**\n//join dom and EV .js**\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveProjectToStorage\": () => /* binding */ saveProjectToStorage,\n/* harmony export */   \"projectStorage\": () => /* binding */ projectStorage\n/* harmony export */ });\nlet projectStorage= [];\n\nfunction saveProjectToStorage(project) {\n    projectStorage.push(project);\n    console.log(projectStorage);\n}\n\n//change task propreties**\n\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

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