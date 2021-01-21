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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => /* binding */ createProject,\n/* harmony export */   \"createTask\": () => /* binding */ createTask,\n/* harmony export */   \"addTaskToProject\": () => /* binding */ addTaskToProject\n/* harmony export */ });\nfunction createProject(name) {\n    return {\n        name,\n        tasks: []\n    }\n}\n\nfunction createTask(title, description, dueDate, priority, status) {\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        status\n    }\n}\n\nlet taskCounter= 0;\n\nfunction addTaskToProject(project, task) {\n    project[taskCounter]= task;\n    taskCounter++;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/create.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectElement\": () => /* binding */ addProjectElement,\n/* harmony export */   \"renderTasKElement\": () => /* binding */ renderTasKElement\n/* harmony export */ });\nfunction addProjectElement(projectObj) {\n    let project= document.createElement('div');\n    project.textContent= `${projectObj.name}`;\n    project.classList.add('projectDiv');\n\n    project.addEventListener('click', function() {\n        //clear tasks div\n\n        let tasksHeader= document.getElementById('tasks-header');\n        tasksHeader.textContent= projectObj.name;\n\n        for(let i=0; i<projectObj.length; i++) {\n            console.log('rendering tasks');\n            renderTasKElement(projectObj[i]);\n        }\n    })\n\n    let projects= document.getElementById('projects');\n    projects.appendChild(project);\n}\n\nfunction renderTasKElement(taskObj) {\n    let task= document.createElement('div');\n    //all propreties\n    task.textContent= `${taskObj.title}`;\n    task.classList.add('taskDiv');\n\n    let tasks= document.getElementById('tasks');\n    tasks.appendChild(task);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/event-listener.js":
/*!*******************************!*\
  !*** ./src/event-listener.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EVaddProjBtn\": () => /* binding */ EVaddProjBtn\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\nfunction EVaddProjBtn() {\n    let addProjBtn= document.getElementById('add-proj-btn');\n    addProjBtn.addEventListener('click', function() {\n        if(document.querySelector('.inputProjDiv')==null) {\n            let projects= document.getElementById('projects');\n            let headerWrap= document.querySelector('#header-wrapper');\n\n            let inputDiv= document.createElement('div');\n            inputDiv.classList.add('inputProjDiv');\n            headerWrap.after(inputDiv);\n\n            let titleInput= document.createElement('input');\n            titleInput.setAttribute('type', 'text');\n            titleInput.setAttribute('placeholder', 'Title');\n            inputDiv.appendChild(titleInput);\n\n            let submit= document.createElement('button');\n            submit.textContent= 'Add';\n            submit.addEventListener('click', function() {\n                let obj= (0,_create__WEBPACK_IMPORTED_MODULE_1__.createProject)(titleInput.value);\n                (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectToStorage)(obj);\n                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectElement)(obj);\n\n                projects.removeChild(inputDiv);\n            })\n            inputDiv.appendChild(submit);\n\n            let cancel= document.createElement('button');\n            cancel.textContent= 'Cancel';\n            cancel.addEventListener('click', function() {\n                projects.removeChild(inputDiv);\n            })\n            inputDiv.appendChild(cancel);\n        }\n    })\n}\n\nfunction EVaddTaskBtn() {\n    let addTaskBtn= document.getElementById('add-task-btn');\n    addTaskBtn.addEventListener('click', function() {\n        //create task\n        //get current project\n        //add task to project\n        //dipslay tasks\n    })\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/event-listener.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _event_listener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-listener */ \"./src/event-listener.js\");\n\n\n\n\nlet sport= (0,_create__WEBPACK_IMPORTED_MODULE_0__.createProject)('sport');\n\nlet football= (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)('football', 'ball with foot', 'wednesday', 'urgent', 'todo');\nlet basketball= (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)('basket', 'ball in hoop', 'saturday', 'non-urgent', 'done');\n\n(0,_create__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(sport, football);\n(0,_create__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(sport, basketball);\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProjectElement)(sport);\n\n\n\nlet food= (0,_create__WEBPACK_IMPORTED_MODULE_0__.createProject)('food');\nlet burek= (0,_create__WEBPACK_IMPORTED_MODULE_0__.createTask)('burek', 'sirov', 'tuesday', 'urgetn', 'done');\n(0,_create__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(food, burek);\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProjectElement)(food);\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderTasKElement)(sport['0']);\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderTasKElement)(sport['1']);\n\n(0,_event_listener__WEBPACK_IMPORTED_MODULE_2__.EVaddProjBtn)();\n\nconsole.log(sport);\n\n\n//create.js --> objects.js\n//join dom and EV .js\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveProjectToStorage\": () => /* binding */ saveProjectToStorage\n/* harmony export */ });\nlet projectStorage= [];\n\nfunction saveProjectToStorage(project) {\n    projectStorage.push(project);\n    console.log(projectStorage);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

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