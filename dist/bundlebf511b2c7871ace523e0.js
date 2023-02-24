/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Todos.js":
/*!******************************!*\
  !*** ./src/modules/Todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Todos = /*#__PURE__*/function () {
  function Todos() {
    _classCallCheck(this, Todos);
    this.tasks = [];
  }
  _createClass(Todos, [{
    key: "addTask",
    value: function addTask(description) {
      var newTask = {
        description: description,
        completed: false,
        index: this.tasks.length + 1
      };
      this.tasks.push(newTask);
      this.saveTasks();
    }
  }, {
    key: "allTodos",
    get: function get() {
      return this.tasks;
    },
    set: function set(tasks) {
      this.tasks = tasks;
      this.saveTasks();
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(index) {
      this.tasks.splice(index - 1, 1);
      this.reindexTasks();
      this.saveTasks();
    }
  }, {
    key: "editTask",
    value: function editTask(index, newDescription) {
      this.tasks[index - 1].description = newDescription;
      this.saveTasks();
    }
  }, {
    key: "reindexTasks",
    value: function reindexTasks() {
      this.tasks.forEach(function (task, index) {
        task.index = index + 1;
      });
    }
  }, {
    key: "saveTasks",
    value: function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }, {
    key: "loadTasks",
    value: function loadTasks() {
      var savedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (savedTasks) {
        this.tasks = savedTasks;
      }
    }
  }, {
    key: "clearAllTask",
    value: function clearAllTask() {
      this.tasks = [];
      this.saveTasks();
    }
  }, {
    key: "clearIncompleteTasks",
    value: function clearIncompleteTasks() {
      this.tasks = this.tasks.filter(function (task) {
        return !task.completed;
      });
      this.reindexTasks();
    }
  }]);
  return Todos;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todos);

/***/ }),

/***/ "./src/modules/addTodos.js":
/*!*********************************!*\
  !*** ./src/modules/addTodos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos.js */ "./src/modules/Todos.js");
/* harmony import */ var _displayTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodos.js */ "./src/modules/displayTodos.js");
/* harmony import */ var _editTodos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTodos.js */ "./src/modules/editTodos.js");



var todoForm = document.getElementById('todoForm');
var todoDescription = document.getElementById('todoDescription');
var todos = new _Todos_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var addTodos = function addTodos() {
  todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (todoDescription.value !== '') {
      todos.addTask(todoDescription.value);
      todoDescription.value = '';
      (0,_displayTodos_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      (0,_editTodos_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodos);

/***/ }),

/***/ "./src/modules/clearAllTask.js":
/*!*************************************!*\
  !*** ./src/modules/clearAllTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos.js */ "./src/modules/Todos.js");
/* harmony import */ var _displayTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodos.js */ "./src/modules/displayTodos.js");


var todos = new _Todos_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var clearAllTask = function clearAllTask() {
  var clearCompleted = document.querySelector('#clearCompleted');
  clearCompleted.addEventListener('click', function () {
    var todoList = JSON.parse(localStorage.getItem('tasks'));
    todoList = todoList.filter(function (task) {
      return !task.completed;
    });
    localStorage.setItem('tasks', JSON.stringify(todoList));
    (0,_displayTodos_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAllTask);

/***/ }),

/***/ "./src/modules/completeTask.js":
/*!*************************************!*\
  !*** ./src/modules/completeTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos.js */ "./src/modules/Todos.js");

var completeTask = function completeTask(index, completed) {
  var todos = new _Todos_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  todos.loadTasks();
  var tasks = todos.allTodos;
  var taskIndex = tasks.findIndex(function (task) {
    return task.index === index;
  });
  tasks[taskIndex].completed = completed;
  todos.allTodos = tasks;
  todos.saveTasks();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completeTask);

/***/ }),

/***/ "./src/modules/displayTodos.js":
/*!*************************************!*\
  !*** ./src/modules/displayTodos.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos.js */ "./src/modules/Todos.js");
/* harmony import */ var _completeTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completeTask.js */ "./src/modules/completeTask.js");
/* harmony import */ var _assets_remove_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/remove.png */ "./src/modules/assets/remove.png");



var displayTodos = function displayTodos() {
  var todos = new _Todos_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  todos.loadTasks();
  var tasks = todos.allTodos;
  var list = document.getElementById('todoList');
  list.innerHTML = '';
  tasks.sort(function (a, b) {
    return a.index - b.index;
  });
  tasks.forEach(function (task) {
    var listDiv = document.createElement('ul');
    listDiv.classList.add('list__div');
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('item__div');
    var listItem = document.createElement('li');
    listItem.className = 'list__iem';
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';
    checkbox.id = 'checkBox';
    var ellipses = document.createElement('span');
    var moveIcon = document.createElement('i');
    moveIcon.className = 'fa-solid fa-ellipsis-vertical';
    var deletebtn = document.createElement('button');
    deletebtn.className = 'deletebtn';
    deletebtn.setAttribute('data-index', task.index);
    var deleteIcon = document.createElement('img');
    deleteIcon.src = _assets_remove_png__WEBPACK_IMPORTED_MODULE_2__;
    deleteIcon.className = 'deleteIcon';
    var todoText = document.createElement('input');
    todoText.type = 'text';
    todoText.className = 'todoText ';
    todoText.readOnly = true;
    todoText.value = task.description;
    deletebtn.addEventListener('click', function () {
      var filteredTasks = tasks.filter(function (del) {
        return del.index !== task.index;
      });
      todos.allTodos = filteredTasks;
      todos.reindexTasks();
      listDiv.remove();
      todos.saveTasks();
    });
    checkbox.addEventListener('change', function () {
      (0,_completeTask_js__WEBPACK_IMPORTED_MODULE_1__["default"])(task.index, checkbox.checked);
      if (checkbox.checked) {
        todoText.classList.add('completed');
      } else {
        todoText.classList.remove('completed');
      }
    });
    list.appendChild(listDiv);
    listDiv.appendChild(itemDiv);
    itemDiv.appendChild(checkbox);
    itemDiv.appendChild(listItem);
    listItem.appendChild(todoText);
    listDiv.appendChild(ellipses);
    ellipses.appendChild(deletebtn);
    deletebtn.appendChild(deleteIcon);
    ellipses.appendChild(moveIcon);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodos);

/***/ }),

/***/ "./src/modules/editTodos.js":
/*!**********************************!*\
  !*** ./src/modules/editTodos.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos.js */ "./src/modules/Todos.js");

var todos = new _Todos_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var editTodos = function editTodos() {
  var todoText = document.querySelectorAll('.todoText');
  todoText.forEach(function (todoTxt) {
    var eventClick = function eventClick() {
      todoTxt.readOnly = false;
      todoTxt.style.background = '#c2e9f0';
    };
    todoTxt.addEventListener('click', eventClick);
    var eventFocus = function eventFocus() {
      todoTxt.style.background = 'none';
      todos.allTodos.forEach(function (task) {
        if (task.index === parseInt(todoTxt.dataset.index, 10)) {
          task.description = todoTxt.value;
          todos.saveTasks();
        }
      });
    };
    todoTxt.addEventListener('focusout', eventFocus);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodos);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.todo__section {\r\n  font-size: 18px;\r\n  box-shadow: 0 3px 3px 3px #c9c5c5;\r\n  width: 80%;\r\n}\r\n\r\n.todo__div {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo__title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 10px;\r\n}\r\n\r\nform {\r\n  border-top: 1px solid #c9c5c5;\r\n  padding: 0 10px;\r\n}\r\n\r\ninput[type=text] {\r\n  font-size: 15px;\r\n  width: 200px;\r\n  padding: 20px;\r\n  border: none;\r\n}\r\n\r\ninput[type=text]:focus {\r\n  outline: none;\r\n}\r\n\r\ninput[type=text]::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\ninput[type=checkbox] {\r\n  padding: 5px;\r\n}\r\n\r\n.form__group {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.list__div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n  list-style: none;\r\n  border-top: 1px solid #c9c5c5;\r\n  align-items: center;\r\n  padding: 0 10px;\r\n}\r\n\r\n.task__li {\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.task__ul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n.item__div {\r\n  display: flex;\r\n  gap: 5px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.clear__completed {\r\n  font-size: 18px;\r\n  border: none;\r\n  border-top: 1px solid #c9c5c5;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.todoText {\r\n  border: none;\r\n  padding: 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.todoText:focus {\r\n  outline: none;\r\n}\r\n\r\n.deletebtn {\r\n  border: none;\r\n}\r\n\r\n.deleteIcon {\r\n  width: 80%;\r\n}\r\n\r\n.submitBtn {\r\n  border: none;\r\n}\r\n\r\n#todoList {\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iCAAiC;EACjC,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,gBAAgB;EAChB,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;EACV,qBAAqB;AACvB","sourcesContent":["body {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.todo__section {\r\n  font-size: 18px;\r\n  box-shadow: 0 3px 3px 3px #c9c5c5;\r\n  width: 80%;\r\n}\r\n\r\n.todo__div {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo__title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 10px;\r\n}\r\n\r\nform {\r\n  border-top: 1px solid #c9c5c5;\r\n  padding: 0 10px;\r\n}\r\n\r\ninput[type=text] {\r\n  font-size: 15px;\r\n  width: 200px;\r\n  padding: 20px;\r\n  border: none;\r\n}\r\n\r\ninput[type=text]:focus {\r\n  outline: none;\r\n}\r\n\r\ninput[type=text]::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\ninput[type=checkbox] {\r\n  padding: 5px;\r\n}\r\n\r\n.form__group {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.list__div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n  list-style: none;\r\n  border-top: 1px solid #c9c5c5;\r\n  align-items: center;\r\n  padding: 0 10px;\r\n}\r\n\r\n.task__li {\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.task__ul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\n.item__div {\r\n  display: flex;\r\n  gap: 5px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.clear__completed {\r\n  font-size: 18px;\r\n  border: none;\r\n  border-top: 1px solid #c9c5c5;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.todoText {\r\n  border: none;\r\n  padding: 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.todoText:focus {\r\n  outline: none;\r\n}\r\n\r\n.deletebtn {\r\n  border: none;\r\n}\r\n\r\n.deleteIcon {\r\n  width: 80%;\r\n}\r\n\r\n.submitBtn {\r\n  border: none;\r\n}\r\n\r\n#todoList {\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/assets/remove.png":
/*!***************************************!*\
  !*** ./src/modules/assets/remove.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "remove.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_addTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addTodos.js */ "./src/modules/addTodos.js");
/* harmony import */ var _modules_displayTodos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayTodos.js */ "./src/modules/displayTodos.js");
/* harmony import */ var _modules_editTodos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/editTodos.js */ "./src/modules/editTodos.js");
/* harmony import */ var _modules_clearAllTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clearAllTask.js */ "./src/modules/clearAllTask.js");





(0,_modules_addTodos_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_displayTodos_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_editTodos_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_clearAllTask_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundlebf511b2c7871ace523e0.js.map