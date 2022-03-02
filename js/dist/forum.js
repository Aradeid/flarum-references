module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/orderedmap/index.es.js":
/*!*********************************************!*\
  !*** ./node_modules/orderedmap/index.es.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// ::- Persistent data structure representing an ordered mapping from
// strings to values, with some convenient update methods.
function OrderedMap(content) {
  this.content = content;
}

OrderedMap.prototype = {
  constructor: OrderedMap,
  find: function find(key) {
    for (var i = 0; i < this.content.length; i += 2) {
      if (this.content[i] === key) return i;
    }

    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function get(key) {
    var found = this.find(key);
    return found == -1 ? undefined : this.content[found + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function update(key, value, newKey) {
    var self = newKey && newKey != key ? this.remove(newKey) : this;
    var found = self.find(key),
        content = self.content.slice();

    if (found == -1) {
      content.push(newKey || key, value);
    } else {
      content[found + 1] = value;
      if (newKey) content[found] = newKey;
    }

    return new OrderedMap(content);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function remove(key) {
    var found = this.find(key);
    if (found == -1) return this;
    var content = this.content.slice();
    content.splice(found, 2);
    return new OrderedMap(content);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function addToStart(key, value) {
    return new OrderedMap([key, value].concat(this.remove(key).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function addToEnd(key, value) {
    var content = this.remove(key).content.slice();
    content.push(key, value);
    return new OrderedMap(content);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function addBefore(place, key, value) {
    var without = this.remove(key),
        content = without.content.slice();
    var found = without.find(place);
    content.splice(found == -1 ? content.length : found, 0, key, value);
    return new OrderedMap(content);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function forEach(f) {
    for (var i = 0; i < this.content.length; i += 2) {
      f(this.content[i], this.content[i + 1]);
    }
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function prepend(map) {
    map = OrderedMap.from(map);
    if (!map.size) return this;
    return new OrderedMap(map.content.concat(this.subtract(map).content));
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function append(map) {
    map = OrderedMap.from(map);
    if (!map.size) return this;
    return new OrderedMap(this.subtract(map).content.concat(map.content));
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function subtract(map) {
    var result = this;
    map = OrderedMap.from(map);

    for (var i = 0; i < map.content.length; i += 2) {
      result = result.remove(map.content[i]);
    }

    return result;
  },

  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }

}; // :: (?union<Object, OrderedMap>) → OrderedMap
// Return a map with the given content. If null, create an empty
// map. If given an ordered map, return that map itself. If given an
// object, create a map from the object's properties.

OrderedMap.from = function (value) {
  if (value instanceof OrderedMap) return value;
  var content = [];
  if (value) for (var prop in value) {
    content.push(prop, value[prop]);
  }
  return new OrderedMap(content);
};

var orderedmap = OrderedMap;
/* harmony default export */ __webpack_exports__["default"] = (orderedmap);

/***/ }),

/***/ "./node_modules/prosemirror-commands/dist/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/prosemirror-commands/dist/index.es.js ***!
  \************************************************************/
/*! exports provided: autoJoin, baseKeymap, chainCommands, createParagraphNear, deleteSelection, exitCode, joinBackward, joinDown, joinForward, joinUp, lift, liftEmptyBlock, macBaseKeymap, newlineInCode, pcBaseKeymap, selectAll, selectNodeBackward, selectNodeForward, selectParentNode, selectTextblockEnd, selectTextblockStart, setBlockType, splitBlock, splitBlockKeepMarks, toggleMark, wrapIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoJoin", function() { return autoJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseKeymap", function() { return baseKeymap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainCommands", function() { return chainCommands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParagraphNear", function() { return createParagraphNear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSelection", function() { return deleteSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitCode", function() { return exitCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinBackward", function() { return joinBackward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinDown", function() { return joinDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinForward", function() { return joinForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinUp", function() { return joinUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lift", function() { return lift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liftEmptyBlock", function() { return liftEmptyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macBaseKeymap", function() { return macBaseKeymap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newlineInCode", function() { return newlineInCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pcBaseKeymap", function() { return pcBaseKeymap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNodeBackward", function() { return selectNodeBackward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNodeForward", function() { return selectNodeForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectParentNode", function() { return selectParentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTextblockEnd", function() { return selectTextblockEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTextblockStart", function() { return selectTextblockStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBlockType", function() { return setBlockType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitBlock", function() { return splitBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitBlockKeepMarks", function() { return splitBlockKeepMarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMark", function() { return toggleMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapIn", function() { return wrapIn; });
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-transform */ "./node_modules/prosemirror-transform/dist/index.es.js");
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-model */ "./node_modules/prosemirror-model/dist/index.es.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.es.js");


 // :: (EditorState, ?(tr: Transaction)) → bool
// Delete the selection, if there is one.

function deleteSelection(state, dispatch) {
  if (state.selection.empty) {
    return false;
  }

  if (dispatch) {
    dispatch(state.tr.deleteSelection().scrollIntoView());
  }

  return true;
} // :: (EditorState, ?(tr: Transaction), ?EditorView) → bool
// If the selection is empty and at the start of a textblock, try to
// reduce the distance between that block and the one before it—if
// there's a block directly before it that can be joined, join them.
// If not, try to move the selected block closer to the next one in
// the document structure by lifting it out of its parent or moving it
// into a parent of the previous block. Will use the view for accurate
// (bidi-aware) start-of-textblock detection if given.


function joinBackward(state, dispatch, view) {
  var ref = state.selection;
  var $cursor = ref.$cursor;

  if (!$cursor || (view ? !view.endOfTextblock("backward", state) : $cursor.parentOffset > 0)) {
    return false;
  }

  var $cut = findCutBefore($cursor); // If there is no node before this, try to lift

  if (!$cut) {
    var range = $cursor.blockRange(),
        target = range && Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["liftTarget"])(range);

    if (target == null) {
      return false;
    }

    if (dispatch) {
      dispatch(state.tr.lift(range, target).scrollIntoView());
    }

    return true;
  }

  var before = $cut.nodeBefore; // Apply the joining algorithm

  if (!before.type.spec.isolating && deleteBarrier(state, $cut, dispatch)) {
    return true;
  } // If the node below has no content and the node above is
  // selectable, delete the node below and select the one above.


  if ($cursor.parent.content.size == 0 && (textblockAt(before, "end") || prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"].isSelectable(before))) {
    var delStep = Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["replaceStep"])(state.doc, $cursor.before(), $cursor.after(), prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Slice"].empty);

    if (delStep.slice.size < delStep.to - delStep.from) {
      if (dispatch) {
        var tr = state.tr.step(delStep);
        tr.setSelection(textblockAt(before, "end") ? prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["Selection"].findFrom(tr.doc.resolve(tr.mapping.map($cut.pos, -1)), -1) : prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"].create(tr.doc, $cut.pos - before.nodeSize));
        dispatch(tr.scrollIntoView());
      }

      return true;
    }
  } // If the node before is an atom, delete it


  if (before.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) {
      dispatch(state.tr["delete"]($cut.pos - before.nodeSize, $cut.pos).scrollIntoView());
    }

    return true;
  }

  return false;
}

function textblockAt(node, side, only) {
  for (; node; node = side == "start" ? node.firstChild : node.lastChild) {
    if (node.isTextblock) {
      return true;
    }

    if (only && node.childCount != 1) {
      return false;
    }
  }

  return false;
} // :: (EditorState, ?(tr: Transaction), ?EditorView) → bool
// When the selection is empty and at the start of a textblock, select
// the node before that textblock, if possible. This is intended to be
// bound to keys like backspace, after
// [`joinBackward`](#commands.joinBackward) or other deleting
// commands, as a fall-back behavior when the schema doesn't allow
// deletion at the selected point.


function selectNodeBackward(state, dispatch, view) {
  var ref = state.selection;
  var $head = ref.$head;
  var empty = ref.empty;
  var $cut = $head;

  if (!empty) {
    return false;
  }

  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("backward", state) : $head.parentOffset > 0) {
      return false;
    }

    $cut = findCutBefore($head);
  }

  var node = $cut && $cut.nodeBefore;

  if (!node || !prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"].isSelectable(node)) {
    return false;
  }

  if (dispatch) {
    dispatch(state.tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"].create(state.doc, $cut.pos - node.nodeSize)).scrollIntoView());
  }

  return true;
}

function findCutBefore($pos) {
  if (!$pos.parent.type.spec.isolating) {
    for (var i = $pos.depth - 1; i >= 0; i--) {
      if ($pos.index(i) > 0) {
        return $pos.doc.resolve($pos.before(i + 1));
      }

      if ($pos.node(i).type.spec.isolating) {
        break;
      }
    }
  }

  return null;
} // :: (EditorState, ?(tr: Transaction), ?EditorView) → bool
// If the selection is empty and the cursor is at the end of a
// textblock, try to reduce or remove the boundary between that block
// and the one after it, either by joining them or by moving the other
// block closer to this one in the tree structure. Will use the view
// for accurate start-of-textblock detection if given.


function joinForward(state, dispatch, view) {
  var ref = state.selection;
  var $cursor = ref.$cursor;

  if (!$cursor || (view ? !view.endOfTextblock("forward", state) : $cursor.parentOffset < $cursor.parent.content.size)) {
    return false;
  }

  var $cut = findCutAfter($cursor); // If there is no node after this, there's nothing to do

  if (!$cut) {
    return false;
  }

  var after = $cut.nodeAfter; // Try the joining algorithm

  if (deleteBarrier(state, $cut, dispatch)) {
    return true;
  } // If the node above has no content and the node below is
  // selectable, delete the node above and select the one below.


  if ($cursor.parent.content.size == 0 && (textblockAt(after, "start") || prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"].isSelectable(after))) {
    var delStep = Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["replaceStep"])(state.doc, $cursor.before(), $cursor.after(), prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Slice"].empty);

    if (delStep.slice.size < delStep.to - delStep.from) {
      if (dispatch) {
        var tr = state.tr.step(delStep);
        tr.setSelection(textblockAt(after, "start") ? prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["Selection"].findFrom(tr.doc.resolve(tr.mapping.map($cut.pos)), 1) : prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"].create(tr.doc, tr.mapping.map($cut.pos)));
        dispatch(tr.scrollIntoView());
      }

      return true;
    }
  } // If the next node is an atom, delete it


  if (after.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) {
      dispatch(state.tr["delete"]($cut.pos, $cut.pos + after.nodeSize).scrollIntoView());
    }

    return true;
  }

  return false;
} // :: (EditorState, ?(tr: Transaction), ?EditorView) → bool
// When the selection is empty and at the end of a textblock, select
// the node coming after that textblock, if possible. This is intended
// to be bound to keys like delete, after
// [`joinForward`](#commands.joinForward) and similar deleting
// commands, to provide a fall-back behavior when the schema doesn't
// allow deletion at the selected point.


function selectNodeForward(state, dispatch, view) {
  var ref = state.selection;
  var $head = ref.$head;
  var empty = ref.empty;
  var $cut = $head;

  if (!empty) {
    return false;
  }

  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("forward", state) : $head.parentOffset < $head.parent.content.size) {
      return false;
    }

    $cut = findCutAfter($head);
  }

  var node = $cut && $cut.nodeAfter;

  if (!node || !prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"].isSelectable(node)) {
    return false;
  }

  if (dispatch) {
    dispatch(state.tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"].create(state.doc, $cut.pos)).scrollIntoView());
  }

  return true;
}

function findCutAfter($pos) {
  if (!$pos.parent.type.spec.isolating) {
    for (var i = $pos.depth - 1; i >= 0; i--) {
      var parent = $pos.node(i);

      if ($pos.index(i) + 1 < parent.childCount) {
        return $pos.doc.resolve($pos.after(i + 1));
      }

      if (parent.type.spec.isolating) {
        break;
      }
    }
  }

  return null;
} // :: (EditorState, ?(tr: Transaction)) → bool
// Join the selected block or, if there is a text selection, the
// closest ancestor block of the selection that can be joined, with
// the sibling above it.


function joinUp(state, dispatch) {
  var sel = state.selection,
      nodeSel = sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"],
      point;

  if (nodeSel) {
    if (sel.node.isTextblock || !Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["canJoin"])(state.doc, sel.from)) {
      return false;
    }

    point = sel.from;
  } else {
    point = Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["joinPoint"])(state.doc, sel.from, -1);

    if (point == null) {
      return false;
    }
  }

  if (dispatch) {
    var tr = state.tr.join(point);

    if (nodeSel) {
      tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"].create(tr.doc, point - state.doc.resolve(point).nodeBefore.nodeSize));
    }

    dispatch(tr.scrollIntoView());
  }

  return true;
} // :: (EditorState, ?(tr: Transaction)) → bool
// Join the selected block, or the closest ancestor of the selection
// that can be joined, with the sibling after it.


function joinDown(state, dispatch) {
  var sel = state.selection,
      point;

  if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"]) {
    if (sel.node.isTextblock || !Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["canJoin"])(state.doc, sel.to)) {
      return false;
    }

    point = sel.to;
  } else {
    point = Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["joinPoint"])(state.doc, sel.to, 1);

    if (point == null) {
      return false;
    }
  }

  if (dispatch) {
    dispatch(state.tr.join(point).scrollIntoView());
  }

  return true;
} // :: (EditorState, ?(tr: Transaction)) → bool
// Lift the selected block, or the closest ancestor block of the
// selection that can be lifted, out of its parent node.


function lift(state, dispatch) {
  var ref = state.selection;
  var $from = ref.$from;
  var $to = ref.$to;
  var range = $from.blockRange($to),
      target = range && Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["liftTarget"])(range);

  if (target == null) {
    return false;
  }

  if (dispatch) {
    dispatch(state.tr.lift(range, target).scrollIntoView());
  }

  return true;
} // :: (EditorState, ?(tr: Transaction)) → bool
// If the selection is in a node whose type has a truthy
// [`code`](#model.NodeSpec.code) property in its spec, replace the
// selection with a newline character.


function newlineInCode(state, dispatch) {
  var ref = state.selection;
  var $head = ref.$head;
  var $anchor = ref.$anchor;

  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) {
    return false;
  }

  if (dispatch) {
    dispatch(state.tr.insertText("\n").scrollIntoView());
  }

  return true;
}

function defaultBlockAt(match) {
  for (var i = 0; i < match.edgeCount; i++) {
    var ref = match.edge(i);
    var type = ref.type;

    if (type.isTextblock && !type.hasRequiredAttrs()) {
      return type;
    }
  }

  return null;
} // :: (EditorState, ?(tr: Transaction)) → bool
// When the selection is in a node with a truthy
// [`code`](#model.NodeSpec.code) property in its spec, create a
// default block after the code block, and move the cursor there.


function exitCode(state, dispatch) {
  var ref = state.selection;
  var $head = ref.$head;
  var $anchor = ref.$anchor;

  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) {
    return false;
  }

  var above = $head.node(-1),
      after = $head.indexAfter(-1),
      type = defaultBlockAt(above.contentMatchAt(after));

  if (!above.canReplaceWith(after, after, type)) {
    return false;
  }

  if (dispatch) {
    var pos = $head.after(),
        tr = state.tr.replaceWith(pos, pos, type.createAndFill());
    tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["Selection"].near(tr.doc.resolve(pos), 1));
    dispatch(tr.scrollIntoView());
  }

  return true;
} // :: (EditorState, ?(tr: Transaction)) → bool
// If a block node is selected, create an empty paragraph before (if
// it is its parent's first child) or after it.


function createParagraphNear(state, dispatch) {
  var sel = state.selection;
  var $from = sel.$from;
  var $to = sel.$to;

  if (sel instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["AllSelection"] || $from.parent.inlineContent || $to.parent.inlineContent) {
    return false;
  }

  var type = defaultBlockAt($to.parent.contentMatchAt($to.indexAfter()));

  if (!type || !type.isTextblock) {
    return false;
  }

  if (dispatch) {
    var side = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos;
    var tr = state.tr.insert(side, type.createAndFill());
    tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["TextSelection"].create(tr.doc, side + 1));
    dispatch(tr.scrollIntoView());
  }

  return true;
} // :: (EditorState, ?(tr: Transaction)) → bool
// If the cursor is in an empty textblock that can be lifted, lift the
// block.


function liftEmptyBlock(state, dispatch) {
  var ref = state.selection;
  var $cursor = ref.$cursor;

  if (!$cursor || $cursor.parent.content.size) {
    return false;
  }

  if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
    var before = $cursor.before();

    if (Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["canSplit"])(state.doc, before)) {
      if (dispatch) {
        dispatch(state.tr.split(before).scrollIntoView());
      }

      return true;
    }
  }

  var range = $cursor.blockRange(),
      target = range && Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["liftTarget"])(range);

  if (target == null) {
    return false;
  }

  if (dispatch) {
    dispatch(state.tr.lift(range, target).scrollIntoView());
  }

  return true;
} // :: (EditorState, ?(tr: Transaction)) → bool
// Split the parent block of the selection. If the selection is a text
// selection, also delete its content.


function splitBlock(state, dispatch) {
  var ref = state.selection;
  var $from = ref.$from;
  var $to = ref.$to;

  if (state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"] && state.selection.node.isBlock) {
    if (!$from.parentOffset || !Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["canSplit"])(state.doc, $from.pos)) {
      return false;
    }

    if (dispatch) {
      dispatch(state.tr.split($from.pos).scrollIntoView());
    }

    return true;
  }

  if (!$from.parent.isBlock) {
    return false;
  }

  if (dispatch) {
    var atEnd = $to.parentOffset == $to.parent.content.size;
    var tr = state.tr;

    if (state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["TextSelection"] || state.selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["AllSelection"]) {
      tr.deleteSelection();
    }

    var deflt = $from.depth == 0 ? null : defaultBlockAt($from.node(-1).contentMatchAt($from.indexAfter(-1)));
    var types = atEnd && deflt ? [{
      type: deflt
    }] : null;
    var can = Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["canSplit"])(tr.doc, tr.mapping.map($from.pos), 1, types);

    if (!types && !can && Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["canSplit"])(tr.doc, tr.mapping.map($from.pos), 1, deflt && [{
      type: deflt
    }])) {
      types = [{
        type: deflt
      }];
      can = true;
    }

    if (can) {
      tr.split(tr.mapping.map($from.pos), 1, types);

      if (!atEnd && !$from.parentOffset && $from.parent.type != deflt) {
        var first = tr.mapping.map($from.before()),
            $first = tr.doc.resolve(first);

        if ($from.node(-1).canReplaceWith($first.index(), $first.index() + 1, deflt)) {
          tr.setNodeMarkup(tr.mapping.map($from.before()), deflt);
        }
      }
    }

    dispatch(tr.scrollIntoView());
  }

  return true;
} // :: (EditorState, ?(tr: Transaction)) → bool
// Acts like [`splitBlock`](#commands.splitBlock), but without
// resetting the set of active marks at the cursor.


function splitBlockKeepMarks(state, dispatch) {
  return splitBlock(state, dispatch && function (tr) {
    var marks = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();

    if (marks) {
      tr.ensureMarks(marks);
    }

    dispatch(tr);
  });
} // :: (EditorState, ?(tr: Transaction)) → bool
// Move the selection to the node wrapping the current selection, if
// any. (Will not select the document node.)


function selectParentNode(state, dispatch) {
  var ref = state.selection;
  var $from = ref.$from;
  var to = ref.to;
  var pos;
  var same = $from.sharedDepth(to);

  if (same == 0) {
    return false;
  }

  pos = $from.before(same);

  if (dispatch) {
    dispatch(state.tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["NodeSelection"].create(state.doc, pos)));
  }

  return true;
} // :: (EditorState, ?(tr: Transaction)) → bool
// Select the whole document.


function selectAll(state, dispatch) {
  if (dispatch) {
    dispatch(state.tr.setSelection(new prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["AllSelection"](state.doc)));
  }

  return true;
}

function joinMaybeClear(state, $pos, dispatch) {
  var before = $pos.nodeBefore,
      after = $pos.nodeAfter,
      index = $pos.index();

  if (!before || !after || !before.type.compatibleContent(after.type)) {
    return false;
  }

  if (!before.content.size && $pos.parent.canReplace(index - 1, index)) {
    if (dispatch) {
      dispatch(state.tr["delete"]($pos.pos - before.nodeSize, $pos.pos).scrollIntoView());
    }

    return true;
  }

  if (!$pos.parent.canReplace(index, index + 1) || !(after.isTextblock || Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["canJoin"])(state.doc, $pos.pos))) {
    return false;
  }

  if (dispatch) {
    dispatch(state.tr.clearIncompatible($pos.pos, before.type, before.contentMatchAt(before.childCount)).join($pos.pos).scrollIntoView());
  }

  return true;
}

function deleteBarrier(state, $cut, dispatch) {
  var before = $cut.nodeBefore,
      after = $cut.nodeAfter,
      conn,
      match;

  if (before.type.spec.isolating || after.type.spec.isolating) {
    return false;
  }

  if (joinMaybeClear(state, $cut, dispatch)) {
    return true;
  }

  var canDelAfter = $cut.parent.canReplace($cut.index(), $cut.index() + 1);

  if (canDelAfter && (conn = (match = before.contentMatchAt(before.childCount)).findWrapping(after.type)) && match.matchType(conn[0] || after.type).validEnd) {
    if (dispatch) {
      var end = $cut.pos + after.nodeSize,
          wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].empty;

      for (var i = conn.length - 1; i >= 0; i--) {
        wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from(conn[i].create(null, wrap));
      }

      wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from(before.copy(wrap));
      var tr = state.tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["ReplaceAroundStep"]($cut.pos - 1, end, $cut.pos, end, new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Slice"](wrap, 1, 0), conn.length, true));
      var joinAt = end + 2 * conn.length;

      if (Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["canJoin"])(tr.doc, joinAt)) {
        tr.join(joinAt);
      }

      dispatch(tr.scrollIntoView());
    }

    return true;
  }

  var selAfter = prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["Selection"].findFrom($cut, 1);
  var range = selAfter && selAfter.$from.blockRange(selAfter.$to),
      target = range && Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["liftTarget"])(range);

  if (target != null && target >= $cut.depth) {
    if (dispatch) {
      dispatch(state.tr.lift(range, target).scrollIntoView());
    }

    return true;
  }

  if (canDelAfter && textblockAt(after, "start", true) && textblockAt(before, "end")) {
    var at = before,
        wrap$1 = [];

    for (;;) {
      wrap$1.push(at);

      if (at.isTextblock) {
        break;
      }

      at = at.lastChild;
    }

    var afterText = after,
        afterDepth = 1;

    for (; !afterText.isTextblock; afterText = afterText.firstChild) {
      afterDepth++;
    }

    if (at.canReplace(at.childCount, at.childCount, afterText.content)) {
      if (dispatch) {
        var end$1 = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].empty;

        for (var i$1 = wrap$1.length - 1; i$1 >= 0; i$1--) {
          end$1 = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from(wrap$1[i$1].copy(end$1));
        }

        var tr$1 = state.tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["ReplaceAroundStep"]($cut.pos - wrap$1.length, $cut.pos + after.nodeSize, $cut.pos + afterDepth, $cut.pos + after.nodeSize - afterDepth, new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Slice"](end$1, wrap$1.length, 0), 0, true));
        dispatch(tr$1.scrollIntoView());
      }

      return true;
    }
  }

  return false;
}

function selectTextblockSide(side) {
  return function (state, dispatch) {
    var sel = state.selection,
        $pos = side < 0 ? sel.$from : sel.$to;
    var depth = $pos.depth;

    while ($pos.node(depth).isInline) {
      if (!depth) {
        return false;
      }

      depth--;
    }

    if (!$pos.node(depth).isTextblock) {
      return false;
    }

    if (dispatch) {
      dispatch(state.tr.setSelection(prosemirror_state__WEBPACK_IMPORTED_MODULE_2__["TextSelection"].create(state.doc, side < 0 ? $pos.start(depth) : $pos.end(depth))));
    }

    return true;
  };
} // :: (EditorState, ?(tr: Transaction)) → bool
// Moves the cursor to the start of current text block.


var selectTextblockStart = selectTextblockSide(-1); // :: (EditorState, ?(tr: Transaction)) → bool
// Moves the cursor to the end of current text block.

var selectTextblockEnd = selectTextblockSide(1); // Parameterized commands
// :: (NodeType, ?Object) → (state: EditorState, dispatch: ?(tr: Transaction)) → bool
// Wrap the selection in a node of the given type with the given
// attributes.

function wrapIn(nodeType, attrs) {
  return function (state, dispatch) {
    var ref = state.selection;
    var $from = ref.$from;
    var $to = ref.$to;
    var range = $from.blockRange($to),
        wrapping = range && Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["findWrapping"])(range, nodeType, attrs);

    if (!wrapping) {
      return false;
    }

    if (dispatch) {
      dispatch(state.tr.wrap(range, wrapping).scrollIntoView());
    }

    return true;
  };
} // :: (NodeType, ?Object) → (state: EditorState, dispatch: ?(tr: Transaction)) → bool
// Returns a command that tries to set the selected textblocks to the
// given node type with the given attributes.


function setBlockType(nodeType, attrs) {
  return function (state, dispatch) {
    var ref = state.selection;
    var from = ref.from;
    var to = ref.to;
    var applicable = false;
    state.doc.nodesBetween(from, to, function (node, pos) {
      if (applicable) {
        return false;
      }

      if (!node.isTextblock || node.hasMarkup(nodeType, attrs)) {
        return;
      }

      if (node.type == nodeType) {
        applicable = true;
      } else {
        var $pos = state.doc.resolve(pos),
            index = $pos.index();
        applicable = $pos.parent.canReplaceWith(index, index + 1, nodeType);
      }
    });

    if (!applicable) {
      return false;
    }

    if (dispatch) {
      dispatch(state.tr.setBlockType(from, to, nodeType, attrs).scrollIntoView());
    }

    return true;
  };
}

function markApplies(doc, ranges, type) {
  var loop = function loop(i) {
    var ref = ranges[i];
    var $from = ref.$from;
    var $to = ref.$to;
    var can = $from.depth == 0 ? doc.type.allowsMarkType(type) : false;
    doc.nodesBetween($from.pos, $to.pos, function (node) {
      if (can) {
        return false;
      }

      can = node.inlineContent && node.type.allowsMarkType(type);
    });

    if (can) {
      return {
        v: true
      };
    }
  };

  for (var i = 0; i < ranges.length; i++) {
    var returned = loop(i);
    if (returned) return returned.v;
  }

  return false;
} // :: (MarkType, ?Object) → (state: EditorState, dispatch: ?(tr: Transaction)) → bool
// Create a command function that toggles the given mark with the
// given attributes. Will return `false` when the current selection
// doesn't support that mark. This will remove the mark if any marks
// of that type exist in the selection, or add it otherwise. If the
// selection is empty, this applies to the [stored
// marks](#state.EditorState.storedMarks) instead of a range of the
// document.


function toggleMark(markType, attrs) {
  return function (state, dispatch) {
    var ref = state.selection;
    var empty = ref.empty;
    var $cursor = ref.$cursor;
    var ranges = ref.ranges;

    if (empty && !$cursor || !markApplies(state.doc, ranges, markType)) {
      return false;
    }

    if (dispatch) {
      if ($cursor) {
        if (markType.isInSet(state.storedMarks || $cursor.marks())) {
          dispatch(state.tr.removeStoredMark(markType));
        } else {
          dispatch(state.tr.addStoredMark(markType.create(attrs)));
        }
      } else {
        var has = false,
            tr = state.tr;

        for (var i = 0; !has && i < ranges.length; i++) {
          var ref$1 = ranges[i];
          var $from = ref$1.$from;
          var $to = ref$1.$to;
          has = state.doc.rangeHasMark($from.pos, $to.pos, markType);
        }

        for (var i$1 = 0; i$1 < ranges.length; i$1++) {
          var ref$2 = ranges[i$1];
          var $from$1 = ref$2.$from;
          var $to$1 = ref$2.$to;

          if (has) {
            tr.removeMark($from$1.pos, $to$1.pos, markType);
          } else {
            var from = $from$1.pos,
                to = $to$1.pos,
                start = $from$1.nodeAfter,
                end = $to$1.nodeBefore;
            var spaceStart = start && start.isText ? /^\s*/.exec(start.text)[0].length : 0;
            var spaceEnd = end && end.isText ? /\s*$/.exec(end.text)[0].length : 0;

            if (from + spaceStart < to) {
              from += spaceStart;
              to -= spaceEnd;
            }

            tr.addMark(from, to, markType.create(attrs));
          }
        }

        dispatch(tr.scrollIntoView());
      }
    }

    return true;
  };
}

function wrapDispatchForJoin(dispatch, isJoinable) {
  return function (tr) {
    if (!tr.isGeneric) {
      return dispatch(tr);
    }

    var ranges = [];

    for (var i = 0; i < tr.mapping.maps.length; i++) {
      var map = tr.mapping.maps[i];

      for (var j = 0; j < ranges.length; j++) {
        ranges[j] = map.map(ranges[j]);
      }

      map.forEach(function (_s, _e, from, to) {
        return ranges.push(from, to);
      });
    } // Figure out which joinable points exist inside those ranges,
    // by checking all node boundaries in their parent nodes.


    var joinable = [];

    for (var i$1 = 0; i$1 < ranges.length; i$1 += 2) {
      var from = ranges[i$1],
          to = ranges[i$1 + 1];
      var $from = tr.doc.resolve(from),
          depth = $from.sharedDepth(to),
          parent = $from.node(depth);

      for (var index = $from.indexAfter(depth), pos = $from.after(depth + 1); pos <= to; ++index) {
        var after = parent.maybeChild(index);

        if (!after) {
          break;
        }

        if (index && joinable.indexOf(pos) == -1) {
          var before = parent.child(index - 1);

          if (before.type == after.type && isJoinable(before, after)) {
            joinable.push(pos);
          }
        }

        pos += after.nodeSize;
      }
    } // Join the joinable points


    joinable.sort(function (a, b) {
      return a - b;
    });

    for (var i$2 = joinable.length - 1; i$2 >= 0; i$2--) {
      if (Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["canJoin"])(tr.doc, joinable[i$2])) {
        tr.join(joinable[i$2]);
      }
    }

    dispatch(tr);
  };
} // :: ((state: EditorState, ?(tr: Transaction)) → bool, union<(before: Node, after: Node) → bool, [string]>) → (state: EditorState, ?(tr: Transaction)) → bool
// Wrap a command so that, when it produces a transform that causes
// two joinable nodes to end up next to each other, those are joined.
// Nodes are considered joinable when they are of the same type and
// when the `isJoinable` predicate returns true for them or, if an
// array of strings was passed, if their node type name is in that
// array.


function autoJoin(command, isJoinable) {
  if (Array.isArray(isJoinable)) {
    var types = isJoinable;

    isJoinable = function isJoinable(node) {
      return types.indexOf(node.type.name) > -1;
    };
  }

  return function (state, dispatch, view) {
    return command(state, dispatch && wrapDispatchForJoin(dispatch, isJoinable), view);
  };
} // :: (...[(EditorState, ?(tr: Transaction), ?EditorView) → bool]) → (EditorState, ?(tr: Transaction), ?EditorView) → bool
// Combine a number of command functions into a single function (which
// calls them one by one until one returns true).


function chainCommands() {
  var commands = [],
      len = arguments.length;

  while (len--) {
    commands[len] = arguments[len];
  }

  return function (state, dispatch, view) {
    for (var i = 0; i < commands.length; i++) {
      if (commands[i](state, dispatch, view)) {
        return true;
      }
    }

    return false;
  };
}

var backspace = chainCommands(deleteSelection, joinBackward, selectNodeBackward);
var del = chainCommands(deleteSelection, joinForward, selectNodeForward); // :: Object
// A basic keymap containing bindings not specific to any schema.
// Binds the following keys (when multiple commands are listed, they
// are chained with [`chainCommands`](#commands.chainCommands)):
//
// * **Enter** to `newlineInCode`, `createParagraphNear`, `liftEmptyBlock`, `splitBlock`
// * **Mod-Enter** to `exitCode`
// * **Backspace** and **Mod-Backspace** to `deleteSelection`, `joinBackward`, `selectNodeBackward`
// * **Delete** and **Mod-Delete** to `deleteSelection`, `joinForward`, `selectNodeForward`
// * **Mod-Delete** to `deleteSelection`, `joinForward`, `selectNodeForward`
// * **Mod-a** to `selectAll`

var pcBaseKeymap = {
  "Enter": chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
  "Mod-Enter": exitCode,
  "Backspace": backspace,
  "Mod-Backspace": backspace,
  "Shift-Backspace": backspace,
  "Delete": del,
  "Mod-Delete": del,
  "Mod-a": selectAll
}; // :: Object
// A copy of `pcBaseKeymap` that also binds **Ctrl-h** like Backspace,
// **Ctrl-d** like Delete, **Alt-Backspace** like Ctrl-Backspace, and
// **Ctrl-Alt-Backspace**, **Alt-Delete**, and **Alt-d** like
// Ctrl-Delete.

var macBaseKeymap = {
  "Ctrl-h": pcBaseKeymap["Backspace"],
  "Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
  "Ctrl-d": pcBaseKeymap["Delete"],
  "Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
  "Alt-Delete": pcBaseKeymap["Mod-Delete"],
  "Alt-d": pcBaseKeymap["Mod-Delete"],
  "Ctrl-a": selectTextblockStart,
  "Ctrl-e": selectTextblockEnd
};

for (var key in pcBaseKeymap) {
  macBaseKeymap[key] = pcBaseKeymap[key];
}

pcBaseKeymap.Home = selectTextblockStart;
pcBaseKeymap.End = selectTextblockEnd; // declare global: os, navigator

var mac = typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os != "undefined" ? os.platform() == "darwin" : false; // :: Object
// Depending on the detected platform, this will hold
// [`pcBasekeymap`](#commands.pcBaseKeymap) or
// [`macBaseKeymap`](#commands.macBaseKeymap).

var baseKeymap = mac ? macBaseKeymap : pcBaseKeymap;


/***/ }),

/***/ "./node_modules/prosemirror-inputrules/dist/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/prosemirror-inputrules/dist/index.es.js ***!
  \**************************************************************/
/*! exports provided: InputRule, closeDoubleQuote, closeSingleQuote, ellipsis, emDash, inputRules, openDoubleQuote, openSingleQuote, smartQuotes, textblockTypeInputRule, undoInputRule, wrappingInputRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRule", function() { return InputRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeDoubleQuote", function() { return closeDoubleQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSingleQuote", function() { return closeSingleQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipsis", function() { return ellipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emDash", function() { return emDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputRules", function() { return inputRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDoubleQuote", function() { return openDoubleQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSingleQuote", function() { return openSingleQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smartQuotes", function() { return smartQuotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textblockTypeInputRule", function() { return textblockTypeInputRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoInputRule", function() { return undoInputRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrappingInputRule", function() { return wrappingInputRule; });
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.es.js");
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-transform */ "./node_modules/prosemirror-transform/dist/index.es.js");

 // ::- Input rules are regular expressions describing a piece of text
// that, when typed, causes something to happen. This might be
// changing two dashes into an emdash, wrapping a paragraph starting
// with `"> "` into a blockquote, or something entirely different.

var InputRule = function InputRule(match, handler) {
  this.match = match;
  this.handler = typeof handler == "string" ? stringHandler(handler) : handler;
};

function stringHandler(string) {
  return function (state, match, start, end) {
    var insert = string;

    if (match[1]) {
      var offset = match[0].lastIndexOf(match[1]);
      insert += match[0].slice(offset + match[1].length);
      start += offset;
      var cutOff = start - end;

      if (cutOff > 0) {
        insert = match[0].slice(offset - cutOff, offset) + insert;
        start = end;
      }
    }

    return state.tr.insertText(insert, start, end);
  };
}

var MAX_MATCH = 500; // :: (config: {rules: [InputRule]}) → Plugin
// Create an input rules plugin. When enabled, it will cause text
// input that matches any of the given rules to trigger the rule's
// action.

function inputRules(ref) {
  var rules = ref.rules;
  var plugin = new prosemirror_state__WEBPACK_IMPORTED_MODULE_0__["Plugin"]({
    state: {
      init: function init() {
        return null;
      },
      apply: function apply(tr, prev) {
        var stored = tr.getMeta(this);

        if (stored) {
          return stored;
        }

        return tr.selectionSet || tr.docChanged ? null : prev;
      }
    },
    props: {
      handleTextInput: function handleTextInput(view, from, to, text) {
        return run(view, from, to, text, rules, plugin);
      },
      handleDOMEvents: {
        compositionend: function compositionend(view) {
          setTimeout(function () {
            var ref = view.state.selection;
            var $cursor = ref.$cursor;

            if ($cursor) {
              run(view, $cursor.pos, $cursor.pos, "", rules, plugin);
            }
          });
        }
      }
    },
    isInputRules: true
  });
  return plugin;
}

function run(view, from, to, text, rules, plugin) {
  if (view.composing) {
    return false;
  }

  var state = view.state,
      $from = state.doc.resolve(from);

  if ($from.parent.type.spec.code) {
    return false;
  }

  var textBefore = $from.parent.textBetween(Math.max(0, $from.parentOffset - MAX_MATCH), $from.parentOffset, null, "\uFFFC") + text;

  for (var i = 0; i < rules.length; i++) {
    var match = rules[i].match.exec(textBefore);
    var tr = match && rules[i].handler(state, match, from - (match[0].length - text.length), to);

    if (!tr) {
      continue;
    }

    view.dispatch(tr.setMeta(plugin, {
      transform: tr,
      from: from,
      to: to,
      text: text
    }));
    return true;
  }

  return false;
} // :: (EditorState, ?(Transaction)) → bool
// This is a command that will undo an input rule, if applying such a
// rule was the last thing that the user did.


function undoInputRule(state, dispatch) {
  var plugins = state.plugins;

  for (var i = 0; i < plugins.length; i++) {
    var plugin = plugins[i],
        undoable = void 0;

    if (plugin.spec.isInputRules && (undoable = plugin.getState(state))) {
      if (dispatch) {
        var tr = state.tr,
            toUndo = undoable.transform;

        for (var j = toUndo.steps.length - 1; j >= 0; j--) {
          tr.step(toUndo.steps[j].invert(toUndo.docs[j]));
        }

        if (undoable.text) {
          var marks = tr.doc.resolve(undoable.from).marks();
          tr.replaceWith(undoable.from, undoable.to, state.schema.text(undoable.text, marks));
        } else {
          tr["delete"](undoable.from, undoable.to);
        }

        dispatch(tr);
      }

      return true;
    }
  }

  return false;
} // :: InputRule Converts double dashes to an emdash.


var emDash = new InputRule(/--$/, "—"); // :: InputRule Converts three dots to an ellipsis character.

var ellipsis = new InputRule(/\.\.\.$/, "…"); // :: InputRule “Smart” opening double quotes.

var openDoubleQuote = new InputRule(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "“"); // :: InputRule “Smart” closing double quotes.

var closeDoubleQuote = new InputRule(/"$/, "”"); // :: InputRule “Smart” opening single quotes.

var openSingleQuote = new InputRule(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "‘"); // :: InputRule “Smart” closing single quotes.

var closeSingleQuote = new InputRule(/'$/, "’"); // :: [InputRule] Smart-quote related input rules.

var smartQuotes = [openDoubleQuote, closeDoubleQuote, openSingleQuote, closeSingleQuote]; // :: (RegExp, NodeType, ?union<Object, ([string]) → ?Object>, ?([string], Node) → bool) → InputRule
// Build an input rule for automatically wrapping a textblock when a
// given string is typed. The `regexp` argument is
// directly passed through to the `InputRule` constructor. You'll
// probably want the regexp to start with `^`, so that the pattern can
// only occur at the start of a textblock.
//
// `nodeType` is the type of node to wrap in. If it needs attributes,
// you can either pass them directly, or pass a function that will
// compute them from the regular expression match.
//
// By default, if there's a node with the same type above the newly
// wrapped node, the rule will try to [join](#transform.Transform.join) those
// two nodes. You can pass a join predicate, which takes a regular
// expression match and the node before the wrapped node, and can
// return a boolean to indicate whether a join should happen.

function wrappingInputRule(regexp, nodeType, getAttrs, joinPredicate) {
  return new InputRule(regexp, function (state, match, start, end) {
    var attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    var tr = state.tr["delete"](start, end);
    var $start = tr.doc.resolve(start),
        range = $start.blockRange(),
        wrapping = range && Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__["findWrapping"])(range, nodeType, attrs);

    if (!wrapping) {
      return null;
    }

    tr.wrap(range, wrapping);
    var before = tr.doc.resolve(start - 1).nodeBefore;

    if (before && before.type == nodeType && Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__["canJoin"])(tr.doc, start - 1) && (!joinPredicate || joinPredicate(match, before))) {
      tr.join(start - 1);
    }

    return tr;
  });
} // :: (RegExp, NodeType, ?union<Object, ([string]) → ?Object>) → InputRule
// Build an input rule that changes the type of a textblock when the
// matched text is typed into it. You'll usually want to start your
// regexp with `^` to that it is only matched at the start of a
// textblock. The optional `getAttrs` parameter can be used to compute
// the new node's attributes, and works the same as in the
// `wrappingInputRule` function.


function textblockTypeInputRule(regexp, nodeType, getAttrs) {
  return new InputRule(regexp, function (state, match, start, end) {
    var $start = state.doc.resolve(start);
    var attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;

    if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), nodeType)) {
      return null;
    }

    return state.tr["delete"](start, end).setBlockType(start, start, nodeType, attrs);
  });
}



/***/ }),

/***/ "./node_modules/prosemirror-model/dist/index.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/prosemirror-model/dist/index.es.js ***!
  \*********************************************************/
/*! exports provided: ContentMatch, DOMParser, DOMSerializer, Fragment, Mark, MarkType, Node, NodeRange, NodeType, ReplaceError, ResolvedPos, Schema, Slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentMatch", function() { return ContentMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMParser", function() { return DOMParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMSerializer", function() { return DOMSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mark", function() { return Mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkType", function() { return MarkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeRange", function() { return NodeRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceError", function() { return ReplaceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolvedPos", function() { return ResolvedPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schema", function() { return Schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slice", function() { return Slice; });
/* harmony import */ var orderedmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orderedmap */ "./node_modules/orderedmap/index.es.js");


function findDiffStart(a, b, pos) {
  for (var i = 0;; i++) {
    if (i == a.childCount || i == b.childCount) {
      return a.childCount == b.childCount ? null : pos;
    }

    var childA = a.child(i),
        childB = b.child(i);

    if (childA == childB) {
      pos += childA.nodeSize;
      continue;
    }

    if (!childA.sameMarkup(childB)) {
      return pos;
    }

    if (childA.isText && childA.text != childB.text) {
      for (var j = 0; childA.text[j] == childB.text[j]; j++) {
        pos++;
      }

      return pos;
    }

    if (childA.content.size || childB.content.size) {
      var inner = findDiffStart(childA.content, childB.content, pos + 1);

      if (inner != null) {
        return inner;
      }
    }

    pos += childA.nodeSize;
  }
}

function findDiffEnd(a, b, posA, posB) {
  for (var iA = a.childCount, iB = b.childCount;;) {
    if (iA == 0 || iB == 0) {
      return iA == iB ? null : {
        a: posA,
        b: posB
      };
    }

    var childA = a.child(--iA),
        childB = b.child(--iB),
        size = childA.nodeSize;

    if (childA == childB) {
      posA -= size;
      posB -= size;
      continue;
    }

    if (!childA.sameMarkup(childB)) {
      return {
        a: posA,
        b: posB
      };
    }

    if (childA.isText && childA.text != childB.text) {
      var same = 0,
          minSize = Math.min(childA.text.length, childB.text.length);

      while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
        same++;
        posA--;
        posB--;
      }

      return {
        a: posA,
        b: posB
      };
    }

    if (childA.content.size || childB.content.size) {
      var inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);

      if (inner) {
        return inner;
      }
    }

    posA -= size;
    posB -= size;
  }
} // ::- A fragment represents a node's collection of child nodes.
//
// Like nodes, fragments are persistent data structures, and you
// should not mutate them or their content. Rather, you create new
// instances whenever needed. The API tries to make this easy.


var Fragment = function Fragment(content, size) {
  this.content = content; // :: number
  // The size of the fragment, which is the total of the size of its
  // content nodes.

  this.size = size || 0;

  if (size == null) {
    for (var i = 0; i < content.length; i++) {
      this.size += content[i].nodeSize;
    }
  }
};

var prototypeAccessors = {
  firstChild: {
    configurable: true
  },
  lastChild: {
    configurable: true
  },
  childCount: {
    configurable: true
  }
}; // :: (number, number, (node: Node, start: number, parent: Node, index: number) → ?bool, ?number)
// Invoke a callback for all descendant nodes between the given two
// positions (relative to start of this fragment). Doesn't descend
// into a node when the callback returns `false`.

Fragment.prototype.nodesBetween = function nodesBetween(from, to, f, nodeStart, parent) {
  if (nodeStart === void 0) nodeStart = 0;

  for (var i = 0, pos = 0; pos < to; i++) {
    var child = this.content[i],
        end = pos + child.nodeSize;

    if (end > from && f(child, nodeStart + pos, parent, i) !== false && child.content.size) {
      var start = pos + 1;
      child.nodesBetween(Math.max(0, from - start), Math.min(child.content.size, to - start), f, nodeStart + start);
    }

    pos = end;
  }
}; // :: ((node: Node, pos: number, parent: Node) → ?bool)
// Call the given callback for every descendant node. The callback
// may return `false` to prevent traversal of a given node's children.


Fragment.prototype.descendants = function descendants(f) {
  this.nodesBetween(0, this.size, f);
}; // :: (number, number, ?string, ?union<string, (leafNode: Node) → string>) → string
// Extract the text between `from` and `to`. See the same method on
// [`Node`](#model.Node.textBetween).


Fragment.prototype.textBetween = function textBetween(from, to, blockSeparator, leafText) {
  var text = "",
      separated = true;
  this.nodesBetween(from, to, function (node, pos) {
    if (node.isText) {
      text += node.text.slice(Math.max(from, pos) - pos, to - pos);
      separated = !blockSeparator;
    } else if (node.isLeaf && leafText) {
      text += typeof leafText === 'function' ? leafText(node) : leafText;
      separated = !blockSeparator;
    } else if (!separated && node.isBlock) {
      text += blockSeparator;
      separated = true;
    }
  }, 0);
  return text;
}; // :: (Fragment) → Fragment
// Create a new fragment containing the combined content of this
// fragment and the other.


Fragment.prototype.append = function append(other) {
  if (!other.size) {
    return this;
  }

  if (!this.size) {
    return other;
  }

  var last = this.lastChild,
      first = other.firstChild,
      content = this.content.slice(),
      i = 0;

  if (last.isText && last.sameMarkup(first)) {
    content[content.length - 1] = last.withText(last.text + first.text);
    i = 1;
  }

  for (; i < other.content.length; i++) {
    content.push(other.content[i]);
  }

  return new Fragment(content, this.size + other.size);
}; // :: (number, ?number) → Fragment
// Cut out the sub-fragment between the two given positions.


Fragment.prototype.cut = function cut(from, to) {
  if (to == null) {
    to = this.size;
  }

  if (from == 0 && to == this.size) {
    return this;
  }

  var result = [],
      size = 0;

  if (to > from) {
    for (var i = 0, pos = 0; pos < to; i++) {
      var child = this.content[i],
          end = pos + child.nodeSize;

      if (end > from) {
        if (pos < from || end > to) {
          if (child.isText) {
            child = child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos));
          } else {
            child = child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1));
          }
        }

        result.push(child);
        size += child.nodeSize;
      }

      pos = end;
    }
  }

  return new Fragment(result, size);
};

Fragment.prototype.cutByIndex = function cutByIndex(from, to) {
  if (from == to) {
    return Fragment.empty;
  }

  if (from == 0 && to == this.content.length) {
    return this;
  }

  return new Fragment(this.content.slice(from, to));
}; // :: (number, Node) → Fragment
// Create a new fragment in which the node at the given index is
// replaced by the given node.


Fragment.prototype.replaceChild = function replaceChild(index, node) {
  var current = this.content[index];

  if (current == node) {
    return this;
  }

  var copy = this.content.slice();
  var size = this.size + node.nodeSize - current.nodeSize;
  copy[index] = node;
  return new Fragment(copy, size);
}; // : (Node) → Fragment
// Create a new fragment by prepending the given node to this
// fragment.


Fragment.prototype.addToStart = function addToStart(node) {
  return new Fragment([node].concat(this.content), this.size + node.nodeSize);
}; // : (Node) → Fragment
// Create a new fragment by appending the given node to this
// fragment.


Fragment.prototype.addToEnd = function addToEnd(node) {
  return new Fragment(this.content.concat(node), this.size + node.nodeSize);
}; // :: (Fragment) → bool
// Compare this fragment to another one.


Fragment.prototype.eq = function eq(other) {
  if (this.content.length != other.content.length) {
    return false;
  }

  for (var i = 0; i < this.content.length; i++) {
    if (!this.content[i].eq(other.content[i])) {
      return false;
    }
  }

  return true;
}; // :: ?Node
// The first child of the fragment, or `null` if it is empty.


prototypeAccessors.firstChild.get = function () {
  return this.content.length ? this.content[0] : null;
}; // :: ?Node
// The last child of the fragment, or `null` if it is empty.


prototypeAccessors.lastChild.get = function () {
  return this.content.length ? this.content[this.content.length - 1] : null;
}; // :: number
// The number of child nodes in this fragment.


prototypeAccessors.childCount.get = function () {
  return this.content.length;
}; // :: (number) → Node
// Get the child node at the given index. Raise an error when the
// index is out of range.


Fragment.prototype.child = function child(index) {
  var found = this.content[index];

  if (!found) {
    throw new RangeError("Index " + index + " out of range for " + this);
  }

  return found;
}; // :: (number) → ?Node
// Get the child node at the given index, if it exists.


Fragment.prototype.maybeChild = function maybeChild(index) {
  return this.content[index];
}; // :: ((node: Node, offset: number, index: number))
// Call `f` for every child node, passing the node, its offset
// into this parent node, and its index.


Fragment.prototype.forEach = function forEach(f) {
  for (var i = 0, p = 0; i < this.content.length; i++) {
    var child = this.content[i];
    f(child, p, i);
    p += child.nodeSize;
  }
}; // :: (Fragment) → ?number
// Find the first position at which this fragment and another
// fragment differ, or `null` if they are the same.


Fragment.prototype.findDiffStart = function findDiffStart$1(other, pos) {
  if (pos === void 0) pos = 0;
  return findDiffStart(this, other, pos);
}; // :: (Fragment) → ?{a: number, b: number}
// Find the first position, searching from the end, at which this
// fragment and the given fragment differ, or `null` if they are the
// same. Since this position will not be the same in both nodes, an
// object with two separate positions is returned.


Fragment.prototype.findDiffEnd = function findDiffEnd$1(other, pos, otherPos) {
  if (pos === void 0) pos = this.size;
  if (otherPos === void 0) otherPos = other.size;
  return findDiffEnd(this, other, pos, otherPos);
}; // : (number, ?number) → {index: number, offset: number}
// Find the index and inner offset corresponding to a given relative
// position in this fragment. The result object will be reused
// (overwritten) the next time the function is called. (Not public.)


Fragment.prototype.findIndex = function findIndex(pos, round) {
  if (round === void 0) round = -1;

  if (pos == 0) {
    return retIndex(0, pos);
  }

  if (pos == this.size) {
    return retIndex(this.content.length, pos);
  }

  if (pos > this.size || pos < 0) {
    throw new RangeError("Position " + pos + " outside of fragment (" + this + ")");
  }

  for (var i = 0, curPos = 0;; i++) {
    var cur = this.child(i),
        end = curPos + cur.nodeSize;

    if (end >= pos) {
      if (end == pos || round > 0) {
        return retIndex(i + 1, end);
      }

      return retIndex(i, curPos);
    }

    curPos = end;
  }
}; // :: () → string
// Return a debugging string that describes this fragment.


Fragment.prototype.toString = function toString() {
  return "<" + this.toStringInner() + ">";
};

Fragment.prototype.toStringInner = function toStringInner() {
  return this.content.join(", ");
}; // :: () → ?Object
// Create a JSON-serializeable representation of this fragment.


Fragment.prototype.toJSON = function toJSON() {
  return this.content.length ? this.content.map(function (n) {
    return n.toJSON();
  }) : null;
}; // :: (Schema, ?Object) → Fragment
// Deserialize a fragment from its JSON representation.


Fragment.fromJSON = function fromJSON(schema, value) {
  if (!value) {
    return Fragment.empty;
  }

  if (!Array.isArray(value)) {
    throw new RangeError("Invalid input for Fragment.fromJSON");
  }

  return new Fragment(value.map(schema.nodeFromJSON));
}; // :: ([Node]) → Fragment
// Build a fragment from an array of nodes. Ensures that adjacent
// text nodes with the same marks are joined together.


Fragment.fromArray = function fromArray(array) {
  if (!array.length) {
    return Fragment.empty;
  }

  var joined,
      size = 0;

  for (var i = 0; i < array.length; i++) {
    var node = array[i];
    size += node.nodeSize;

    if (i && node.isText && array[i - 1].sameMarkup(node)) {
      if (!joined) {
        joined = array.slice(0, i);
      }

      joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
    } else if (joined) {
      joined.push(node);
    }
  }

  return new Fragment(joined || array, size);
}; // :: (?union<Fragment, Node, [Node]>) → Fragment
// Create a fragment from something that can be interpreted as a set
// of nodes. For `null`, it returns the empty fragment. For a
// fragment, the fragment itself. For a node or array of nodes, a
// fragment containing those nodes.


Fragment.from = function from(nodes) {
  if (!nodes) {
    return Fragment.empty;
  }

  if (nodes instanceof Fragment) {
    return nodes;
  }

  if (Array.isArray(nodes)) {
    return this.fromArray(nodes);
  }

  if (nodes.attrs) {
    return new Fragment([nodes], nodes.nodeSize);
  }

  throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
};

Object.defineProperties(Fragment.prototype, prototypeAccessors);
var found = {
  index: 0,
  offset: 0
};

function retIndex(index, offset) {
  found.index = index;
  found.offset = offset;
  return found;
} // :: Fragment
// An empty fragment. Intended to be reused whenever a node doesn't
// contain anything (rather than allocating a new empty fragment for
// each leaf node).


Fragment.empty = new Fragment([], 0);

function compareDeep(a, b) {
  if (a === b) {
    return true;
  }

  if (!(a && typeof a == "object") || !(b && typeof b == "object")) {
    return false;
  }

  var array = Array.isArray(a);

  if (Array.isArray(b) != array) {
    return false;
  }

  if (array) {
    if (a.length != b.length) {
      return false;
    }

    for (var i = 0; i < a.length; i++) {
      if (!compareDeep(a[i], b[i])) {
        return false;
      }
    }
  } else {
    for (var p in a) {
      if (!(p in b) || !compareDeep(a[p], b[p])) {
        return false;
      }
    }

    for (var p$1 in b) {
      if (!(p$1 in a)) {
        return false;
      }
    }
  }

  return true;
} // ::- A mark is a piece of information that can be attached to a node,
// such as it being emphasized, in code font, or a link. It has a type
// and optionally a set of attributes that provide further information
// (such as the target of the link). Marks are created through a
// `Schema`, which controls which types exist and which
// attributes they have.


var Mark = function Mark(type, attrs) {
  // :: MarkType
  // The type of this mark.
  this.type = type; // :: Object
  // The attributes associated with this mark.

  this.attrs = attrs;
}; // :: ([Mark]) → [Mark]
// Given a set of marks, create a new set which contains this one as
// well, in the right position. If this mark is already in the set,
// the set itself is returned. If any marks that are set to be
// [exclusive](#model.MarkSpec.excludes) with this mark are present,
// those are replaced by this one.


Mark.prototype.addToSet = function addToSet(set) {
  var copy,
      placed = false;

  for (var i = 0; i < set.length; i++) {
    var other = set[i];

    if (this.eq(other)) {
      return set;
    }

    if (this.type.excludes(other.type)) {
      if (!copy) {
        copy = set.slice(0, i);
      }
    } else if (other.type.excludes(this.type)) {
      return set;
    } else {
      if (!placed && other.type.rank > this.type.rank) {
        if (!copy) {
          copy = set.slice(0, i);
        }

        copy.push(this);
        placed = true;
      }

      if (copy) {
        copy.push(other);
      }
    }
  }

  if (!copy) {
    copy = set.slice();
  }

  if (!placed) {
    copy.push(this);
  }

  return copy;
}; // :: ([Mark]) → [Mark]
// Remove this mark from the given set, returning a new set. If this
// mark is not in the set, the set itself is returned.


Mark.prototype.removeFromSet = function removeFromSet(set) {
  for (var i = 0; i < set.length; i++) {
    if (this.eq(set[i])) {
      return set.slice(0, i).concat(set.slice(i + 1));
    }
  }

  return set;
}; // :: ([Mark]) → bool
// Test whether this mark is in the given set of marks.


Mark.prototype.isInSet = function isInSet(set) {
  for (var i = 0; i < set.length; i++) {
    if (this.eq(set[i])) {
      return true;
    }
  }

  return false;
}; // :: (Mark) → bool
// Test whether this mark has the same type and attributes as
// another mark.


Mark.prototype.eq = function eq(other) {
  return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
}; // :: () → Object
// Convert this mark to a JSON-serializeable representation.


Mark.prototype.toJSON = function toJSON() {
  var obj = {
    type: this.type.name
  };

  for (var _ in this.attrs) {
    obj.attrs = this.attrs;
    break;
  }

  return obj;
}; // :: (Schema, Object) → Mark


Mark.fromJSON = function fromJSON(schema, json) {
  if (!json) {
    throw new RangeError("Invalid input for Mark.fromJSON");
  }

  var type = schema.marks[json.type];

  if (!type) {
    throw new RangeError("There is no mark type " + json.type + " in this schema");
  }

  return type.create(json.attrs);
}; // :: ([Mark], [Mark]) → bool
// Test whether two sets of marks are identical.


Mark.sameSet = function sameSet(a, b) {
  if (a == b) {
    return true;
  }

  if (a.length != b.length) {
    return false;
  }

  for (var i = 0; i < a.length; i++) {
    if (!a[i].eq(b[i])) {
      return false;
    }
  }

  return true;
}; // :: (?union<Mark, [Mark]>) → [Mark]
// Create a properly sorted mark set from null, a single mark, or an
// unsorted array of marks.


Mark.setFrom = function setFrom(marks) {
  if (!marks || marks.length == 0) {
    return Mark.none;
  }

  if (marks instanceof Mark) {
    return [marks];
  }

  var copy = marks.slice();
  copy.sort(function (a, b) {
    return a.type.rank - b.type.rank;
  });
  return copy;
}; // :: [Mark] The empty set of marks.


Mark.none = []; // ReplaceError:: class extends Error
// Error type raised by [`Node.replace`](#model.Node.replace) when
// given an invalid replacement.

function ReplaceError(message) {
  var err = Error.call(this, message);
  err.__proto__ = ReplaceError.prototype;
  return err;
}

ReplaceError.prototype = Object.create(Error.prototype);
ReplaceError.prototype.constructor = ReplaceError;
ReplaceError.prototype.name = "ReplaceError"; // ::- A slice represents a piece cut out of a larger document. It
// stores not only a fragment, but also the depth up to which nodes on
// both side are ‘open’ (cut through).

var Slice = function Slice(content, openStart, openEnd) {
  // :: Fragment The slice's content.
  this.content = content; // :: number The open depth at the start.

  this.openStart = openStart; // :: number The open depth at the end.

  this.openEnd = openEnd;
};

var prototypeAccessors$1 = {
  size: {
    configurable: true
  }
}; // :: number
// The size this slice would add when inserted into a document.

prototypeAccessors$1.size.get = function () {
  return this.content.size - this.openStart - this.openEnd;
};

Slice.prototype.insertAt = function insertAt(pos, fragment) {
  var content = insertInto(this.content, pos + this.openStart, fragment, null);
  return content && new Slice(content, this.openStart, this.openEnd);
};

Slice.prototype.removeBetween = function removeBetween(from, to) {
  return new Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd);
}; // :: (Slice) → bool
// Tests whether this slice is equal to another slice.


Slice.prototype.eq = function eq(other) {
  return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
};

Slice.prototype.toString = function toString() {
  return this.content + "(" + this.openStart + "," + this.openEnd + ")";
}; // :: () → ?Object
// Convert a slice to a JSON-serializable representation.


Slice.prototype.toJSON = function toJSON() {
  if (!this.content.size) {
    return null;
  }

  var json = {
    content: this.content.toJSON()
  };

  if (this.openStart > 0) {
    json.openStart = this.openStart;
  }

  if (this.openEnd > 0) {
    json.openEnd = this.openEnd;
  }

  return json;
}; // :: (Schema, ?Object) → Slice
// Deserialize a slice from its JSON representation.


Slice.fromJSON = function fromJSON(schema, json) {
  if (!json) {
    return Slice.empty;
  }

  var openStart = json.openStart || 0,
      openEnd = json.openEnd || 0;

  if (typeof openStart != "number" || typeof openEnd != "number") {
    throw new RangeError("Invalid input for Slice.fromJSON");
  }

  return new Slice(Fragment.fromJSON(schema, json.content), openStart, openEnd);
}; // :: (Fragment, ?bool) → Slice
// Create a slice from a fragment by taking the maximum possible
// open value on both side of the fragment.


Slice.maxOpen = function maxOpen(fragment, openIsolating) {
  if (openIsolating === void 0) openIsolating = true;
  var openStart = 0,
      openEnd = 0;

  for (var n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild) {
    openStart++;
  }

  for (var n$1 = fragment.lastChild; n$1 && !n$1.isLeaf && (openIsolating || !n$1.type.spec.isolating); n$1 = n$1.lastChild) {
    openEnd++;
  }

  return new Slice(fragment, openStart, openEnd);
};

Object.defineProperties(Slice.prototype, prototypeAccessors$1);

function removeRange(content, from, to) {
  var ref = content.findIndex(from);
  var index = ref.index;
  var offset = ref.offset;
  var child = content.maybeChild(index);
  var ref$1 = content.findIndex(to);
  var indexTo = ref$1.index;
  var offsetTo = ref$1.offset;

  if (offset == from || child.isText) {
    if (offsetTo != to && !content.child(indexTo).isText) {
      throw new RangeError("Removing non-flat range");
    }

    return content.cut(0, from).append(content.cut(to));
  }

  if (index != indexTo) {
    throw new RangeError("Removing non-flat range");
  }

  return content.replaceChild(index, child.copy(removeRange(child.content, from - offset - 1, to - offset - 1)));
}

function insertInto(content, dist, insert, parent) {
  var ref = content.findIndex(dist);
  var index = ref.index;
  var offset = ref.offset;
  var child = content.maybeChild(index);

  if (offset == dist || child.isText) {
    if (parent && !parent.canReplace(index, index, insert)) {
      return null;
    }

    return content.cut(0, dist).append(insert).append(content.cut(dist));
  }

  var inner = insertInto(child.content, dist - offset - 1, insert);
  return inner && content.replaceChild(index, child.copy(inner));
} // :: Slice
// The empty slice.


Slice.empty = new Slice(Fragment.empty, 0, 0);

function replace($from, $to, slice) {
  if (slice.openStart > $from.depth) {
    throw new ReplaceError("Inserted content deeper than insertion position");
  }

  if ($from.depth - slice.openStart != $to.depth - slice.openEnd) {
    throw new ReplaceError("Inconsistent open depths");
  }

  return replaceOuter($from, $to, slice, 0);
}

function replaceOuter($from, $to, slice, depth) {
  var index = $from.index(depth),
      node = $from.node(depth);

  if (index == $to.index(depth) && depth < $from.depth - slice.openStart) {
    var inner = replaceOuter($from, $to, slice, depth + 1);
    return node.copy(node.content.replaceChild(index, inner));
  } else if (!slice.content.size) {
    return close(node, replaceTwoWay($from, $to, depth));
  } else if (!slice.openStart && !slice.openEnd && $from.depth == depth && $to.depth == depth) {
    // Simple, flat case
    var parent = $from.parent,
        content = parent.content;
    return close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)));
  } else {
    var ref = prepareSliceForReplace(slice, $from);
    var start = ref.start;
    var end = ref.end;
    return close(node, replaceThreeWay($from, start, end, $to, depth));
  }
}

function checkJoin(main, sub) {
  if (!sub.type.compatibleContent(main.type)) {
    throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name);
  }
}

function joinable($before, $after, depth) {
  var node = $before.node(depth);
  checkJoin(node, $after.node(depth));
  return node;
}

function addNode(child, target) {
  var last = target.length - 1;

  if (last >= 0 && child.isText && child.sameMarkup(target[last])) {
    target[last] = child.withText(target[last].text + child.text);
  } else {
    target.push(child);
  }
}

function addRange($start, $end, depth, target) {
  var node = ($end || $start).node(depth);
  var startIndex = 0,
      endIndex = $end ? $end.index(depth) : node.childCount;

  if ($start) {
    startIndex = $start.index(depth);

    if ($start.depth > depth) {
      startIndex++;
    } else if ($start.textOffset) {
      addNode($start.nodeAfter, target);
      startIndex++;
    }
  }

  for (var i = startIndex; i < endIndex; i++) {
    addNode(node.child(i), target);
  }

  if ($end && $end.depth == depth && $end.textOffset) {
    addNode($end.nodeBefore, target);
  }
}

function close(node, content) {
  if (!node.type.validContent(content)) {
    throw new ReplaceError("Invalid content for node " + node.type.name);
  }

  return node.copy(content);
}

function replaceThreeWay($from, $start, $end, $to, depth) {
  var openStart = $from.depth > depth && joinable($from, $start, depth + 1);
  var openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
  var content = [];
  addRange(null, $from, depth, content);

  if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
    checkJoin(openStart, openEnd);
    addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
  } else {
    if (openStart) {
      addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
    }

    addRange($start, $end, depth, content);

    if (openEnd) {
      addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
    }
  }

  addRange($to, null, depth, content);
  return new Fragment(content);
}

function replaceTwoWay($from, $to, depth) {
  var content = [];
  addRange(null, $from, depth, content);

  if ($from.depth > depth) {
    var type = joinable($from, $to, depth + 1);
    addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
  }

  addRange($to, null, depth, content);
  return new Fragment(content);
}

function prepareSliceForReplace(slice, $along) {
  var extra = $along.depth - slice.openStart,
      parent = $along.node(extra);
  var node = parent.copy(slice.content);

  for (var i = extra - 1; i >= 0; i--) {
    node = $along.node(i).copy(Fragment.from(node));
  }

  return {
    start: node.resolveNoCache(slice.openStart + extra),
    end: node.resolveNoCache(node.content.size - slice.openEnd - extra)
  };
} // ::- You can [_resolve_](#model.Node.resolve) a position to get more
// information about it. Objects of this class represent such a
// resolved position, providing various pieces of context information,
// and some helper methods.
//
// Throughout this interface, methods that take an optional `depth`
// parameter will interpret undefined as `this.depth` and negative
// numbers as `this.depth + value`.


var ResolvedPos = function ResolvedPos(pos, path, parentOffset) {
  // :: number The position that was resolved.
  this.pos = pos;
  this.path = path; // :: number
  // The number of levels the parent node is from the root. If this
  // position points directly into the root node, it is 0. If it
  // points into a top-level paragraph, 1, and so on.

  this.depth = path.length / 3 - 1; // :: number The offset this position has into its parent node.

  this.parentOffset = parentOffset;
};

var prototypeAccessors$2 = {
  parent: {
    configurable: true
  },
  doc: {
    configurable: true
  },
  textOffset: {
    configurable: true
  },
  nodeAfter: {
    configurable: true
  },
  nodeBefore: {
    configurable: true
  }
};

ResolvedPos.prototype.resolveDepth = function resolveDepth(val) {
  if (val == null) {
    return this.depth;
  }

  if (val < 0) {
    return this.depth + val;
  }

  return val;
}; // :: Node
// The parent node that the position points into. Note that even if
// a position points into a text node, that node is not considered
// the parent—text nodes are ‘flat’ in this model, and have no content.


prototypeAccessors$2.parent.get = function () {
  return this.node(this.depth);
}; // :: Node
// The root node in which the position was resolved.


prototypeAccessors$2.doc.get = function () {
  return this.node(0);
}; // :: (?number) → Node
// The ancestor node at the given level. `p.node(p.depth)` is the
// same as `p.parent`.


ResolvedPos.prototype.node = function node(depth) {
  return this.path[this.resolveDepth(depth) * 3];
}; // :: (?number) → number
// The index into the ancestor at the given level. If this points at
// the 3rd node in the 2nd paragraph on the top level, for example,
// `p.index(0)` is 1 and `p.index(1)` is 2.


ResolvedPos.prototype.index = function index(depth) {
  return this.path[this.resolveDepth(depth) * 3 + 1];
}; // :: (?number) → number
// The index pointing after this position into the ancestor at the
// given level.


ResolvedPos.prototype.indexAfter = function indexAfter(depth) {
  depth = this.resolveDepth(depth);
  return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
}; // :: (?number) → number
// The (absolute) position at the start of the node at the given
// level.


ResolvedPos.prototype.start = function start(depth) {
  depth = this.resolveDepth(depth);
  return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
}; // :: (?number) → number
// The (absolute) position at the end of the node at the given
// level.


ResolvedPos.prototype.end = function end(depth) {
  depth = this.resolveDepth(depth);
  return this.start(depth) + this.node(depth).content.size;
}; // :: (?number) → number
// The (absolute) position directly before the wrapping node at the
// given level, or, when `depth` is `this.depth + 1`, the original
// position.


ResolvedPos.prototype.before = function before(depth) {
  depth = this.resolveDepth(depth);

  if (!depth) {
    throw new RangeError("There is no position before the top-level node");
  }

  return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
}; // :: (?number) → number
// The (absolute) position directly after the wrapping node at the
// given level, or the original position when `depth` is `this.depth + 1`.


ResolvedPos.prototype.after = function after(depth) {
  depth = this.resolveDepth(depth);

  if (!depth) {
    throw new RangeError("There is no position after the top-level node");
  }

  return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
}; // :: number
// When this position points into a text node, this returns the
// distance between the position and the start of the text node.
// Will be zero for positions that point between nodes.


prototypeAccessors$2.textOffset.get = function () {
  return this.pos - this.path[this.path.length - 1];
}; // :: ?Node
// Get the node directly after the position, if any. If the position
// points into a text node, only the part of that node after the
// position is returned.


prototypeAccessors$2.nodeAfter.get = function () {
  var parent = this.parent,
      index = this.index(this.depth);

  if (index == parent.childCount) {
    return null;
  }

  var dOff = this.pos - this.path[this.path.length - 1],
      child = parent.child(index);
  return dOff ? parent.child(index).cut(dOff) : child;
}; // :: ?Node
// Get the node directly before the position, if any. If the
// position points into a text node, only the part of that node
// before the position is returned.


prototypeAccessors$2.nodeBefore.get = function () {
  var index = this.index(this.depth);
  var dOff = this.pos - this.path[this.path.length - 1];

  if (dOff) {
    return this.parent.child(index).cut(0, dOff);
  }

  return index == 0 ? null : this.parent.child(index - 1);
}; // :: (number, ?number) → number
// Get the position at the given index in the parent node at the
// given depth (which defaults to `this.depth`).


ResolvedPos.prototype.posAtIndex = function posAtIndex(index, depth) {
  depth = this.resolveDepth(depth);
  var node = this.path[depth * 3],
      pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;

  for (var i = 0; i < index; i++) {
    pos += node.child(i).nodeSize;
  }

  return pos;
}; // :: () → [Mark]
// Get the marks at this position, factoring in the surrounding
// marks' [`inclusive`](#model.MarkSpec.inclusive) property. If the
// position is at the start of a non-empty node, the marks of the
// node after it (if any) are returned.


ResolvedPos.prototype.marks = function marks() {
  var parent = this.parent,
      index = this.index(); // In an empty parent, return the empty array

  if (parent.content.size == 0) {
    return Mark.none;
  } // When inside a text node, just return the text node's marks


  if (this.textOffset) {
    return parent.child(index).marks;
  }

  var main = parent.maybeChild(index - 1),
      other = parent.maybeChild(index); // If the `after` flag is true of there is no node before, make
  // the node after this position the main reference.

  if (!main) {
    var tmp = main;
    main = other;
    other = tmp;
  } // Use all marks in the main node, except those that have
  // `inclusive` set to false and are not present in the other node.


  var marks = main.marks;

  for (var i = 0; i < marks.length; i++) {
    if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks))) {
      marks = marks[i--].removeFromSet(marks);
    }
  }

  return marks;
}; // :: (ResolvedPos) → ?[Mark]
// Get the marks after the current position, if any, except those
// that are non-inclusive and not present at position `$end`. This
// is mostly useful for getting the set of marks to preserve after a
// deletion. Will return `null` if this position is at the end of
// its parent node or its parent node isn't a textblock (in which
// case no marks should be preserved).


ResolvedPos.prototype.marksAcross = function marksAcross($end) {
  var after = this.parent.maybeChild(this.index());

  if (!after || !after.isInline) {
    return null;
  }

  var marks = after.marks,
      next = $end.parent.maybeChild($end.index());

  for (var i = 0; i < marks.length; i++) {
    if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks))) {
      marks = marks[i--].removeFromSet(marks);
    }
  }

  return marks;
}; // :: (number) → number
// The depth up to which this position and the given (non-resolved)
// position share the same parent nodes.


ResolvedPos.prototype.sharedDepth = function sharedDepth(pos) {
  for (var depth = this.depth; depth > 0; depth--) {
    if (this.start(depth) <= pos && this.end(depth) >= pos) {
      return depth;
    }
  }

  return 0;
}; // :: (?ResolvedPos, ?(Node) → bool) → ?NodeRange
// Returns a range based on the place where this position and the
// given position diverge around block content. If both point into
// the same textblock, for example, a range around that textblock
// will be returned. If they point into different blocks, the range
// around those blocks in their shared ancestor is returned. You can
// pass in an optional predicate that will be called with a parent
// node to see if a range into that parent is acceptable.


ResolvedPos.prototype.blockRange = function blockRange(other, pred) {
  if (other === void 0) other = this;

  if (other.pos < this.pos) {
    return other.blockRange(this);
  }

  for (var d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--) {
    if (other.pos <= this.end(d) && (!pred || pred(this.node(d)))) {
      return new NodeRange(this, other, d);
    }
  }
}; // :: (ResolvedPos) → bool
// Query whether the given position shares the same parent node.


ResolvedPos.prototype.sameParent = function sameParent(other) {
  return this.pos - this.parentOffset == other.pos - other.parentOffset;
}; // :: (ResolvedPos) → ResolvedPos
// Return the greater of this and the given position.


ResolvedPos.prototype.max = function max(other) {
  return other.pos > this.pos ? other : this;
}; // :: (ResolvedPos) → ResolvedPos
// Return the smaller of this and the given position.


ResolvedPos.prototype.min = function min(other) {
  return other.pos < this.pos ? other : this;
};

ResolvedPos.prototype.toString = function toString() {
  var str = "";

  for (var i = 1; i <= this.depth; i++) {
    str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
  }

  return str + ":" + this.parentOffset;
};

ResolvedPos.resolve = function resolve(doc, pos) {
  if (!(pos >= 0 && pos <= doc.content.size)) {
    throw new RangeError("Position " + pos + " out of range");
  }

  var path = [];
  var start = 0,
      parentOffset = pos;

  for (var node = doc;;) {
    var ref = node.content.findIndex(parentOffset);
    var index = ref.index;
    var offset = ref.offset;
    var rem = parentOffset - offset;
    path.push(node, index, start + offset);

    if (!rem) {
      break;
    }

    node = node.child(index);

    if (node.isText) {
      break;
    }

    parentOffset = rem - 1;
    start += offset + 1;
  }

  return new ResolvedPos(pos, path, parentOffset);
};

ResolvedPos.resolveCached = function resolveCached(doc, pos) {
  for (var i = 0; i < resolveCache.length; i++) {
    var cached = resolveCache[i];

    if (cached.pos == pos && cached.doc == doc) {
      return cached;
    }
  }

  var result = resolveCache[resolveCachePos] = ResolvedPos.resolve(doc, pos);
  resolveCachePos = (resolveCachePos + 1) % resolveCacheSize;
  return result;
};

Object.defineProperties(ResolvedPos.prototype, prototypeAccessors$2);
var resolveCache = [],
    resolveCachePos = 0,
    resolveCacheSize = 12; // ::- Represents a flat range of content, i.e. one that starts and
// ends in the same node.

var NodeRange = function NodeRange($from, $to, depth) {
  // :: ResolvedPos A resolved position along the start of the
  // content. May have a `depth` greater than this object's `depth`
  // property, since these are the positions that were used to
  // compute the range, not re-resolved positions directly at its
  // boundaries.
  this.$from = $from; // :: ResolvedPos A position along the end of the content. See
  // caveat for [`$from`](#model.NodeRange.$from).

  this.$to = $to; // :: number The depth of the node that this range points into.

  this.depth = depth;
};

var prototypeAccessors$1$1 = {
  start: {
    configurable: true
  },
  end: {
    configurable: true
  },
  parent: {
    configurable: true
  },
  startIndex: {
    configurable: true
  },
  endIndex: {
    configurable: true
  }
}; // :: number The position at the start of the range.

prototypeAccessors$1$1.start.get = function () {
  return this.$from.before(this.depth + 1);
}; // :: number The position at the end of the range.


prototypeAccessors$1$1.end.get = function () {
  return this.$to.after(this.depth + 1);
}; // :: Node The parent node that the range points into.


prototypeAccessors$1$1.parent.get = function () {
  return this.$from.node(this.depth);
}; // :: number The start index of the range in the parent node.


prototypeAccessors$1$1.startIndex.get = function () {
  return this.$from.index(this.depth);
}; // :: number The end index of the range in the parent node.


prototypeAccessors$1$1.endIndex.get = function () {
  return this.$to.indexAfter(this.depth);
};

Object.defineProperties(NodeRange.prototype, prototypeAccessors$1$1);
var emptyAttrs = Object.create(null); // ::- This class represents a node in the tree that makes up a
// ProseMirror document. So a document is an instance of `Node`, with
// children that are also instances of `Node`.
//
// Nodes are persistent data structures. Instead of changing them, you
// create new ones with the content you want. Old ones keep pointing
// at the old document shape. This is made cheaper by sharing
// structure between the old and new data as much as possible, which a
// tree shape like this (without back pointers) makes easy.
//
// **Do not** directly mutate the properties of a `Node` object. See
// [the guide](/docs/guide/#doc) for more information.

var Node = function Node(type, attrs, content, marks) {
  // :: NodeType
  // The type of node that this is.
  this.type = type; // :: Object
  // An object mapping attribute names to values. The kind of
  // attributes allowed and required are
  // [determined](#model.NodeSpec.attrs) by the node type.

  this.attrs = attrs; // :: Fragment
  // A container holding the node's children.

  this.content = content || Fragment.empty; // :: [Mark]
  // The marks (things like whether it is emphasized or part of a
  // link) applied to this node.

  this.marks = marks || Mark.none;
};

var prototypeAccessors$3 = {
  nodeSize: {
    configurable: true
  },
  childCount: {
    configurable: true
  },
  textContent: {
    configurable: true
  },
  firstChild: {
    configurable: true
  },
  lastChild: {
    configurable: true
  },
  isBlock: {
    configurable: true
  },
  isTextblock: {
    configurable: true
  },
  inlineContent: {
    configurable: true
  },
  isInline: {
    configurable: true
  },
  isText: {
    configurable: true
  },
  isLeaf: {
    configurable: true
  },
  isAtom: {
    configurable: true
  }
}; // text:: ?string
// For text nodes, this contains the node's text content.
// :: number
// The size of this node, as defined by the integer-based [indexing
// scheme](/docs/guide/#doc.indexing). For text nodes, this is the
// amount of characters. For other leaf nodes, it is one. For
// non-leaf nodes, it is the size of the content plus two (the start
// and end token).

prototypeAccessors$3.nodeSize.get = function () {
  return this.isLeaf ? 1 : 2 + this.content.size;
}; // :: number
// The number of children that the node has.


prototypeAccessors$3.childCount.get = function () {
  return this.content.childCount;
}; // :: (number) → Node
// Get the child node at the given index. Raises an error when the
// index is out of range.


Node.prototype.child = function child(index) {
  return this.content.child(index);
}; // :: (number) → ?Node
// Get the child node at the given index, if it exists.


Node.prototype.maybeChild = function maybeChild(index) {
  return this.content.maybeChild(index);
}; // :: ((node: Node, offset: number, index: number))
// Call `f` for every child node, passing the node, its offset
// into this parent node, and its index.


Node.prototype.forEach = function forEach(f) {
  this.content.forEach(f);
}; // :: (number, number, (node: Node, pos: number, parent: Node, index: number) → ?bool, ?number)
// Invoke a callback for all descendant nodes recursively between
// the given two positions that are relative to start of this node's
// content. The callback is invoked with the node, its
// parent-relative position, its parent node, and its child index.
// When the callback returns false for a given node, that node's
// children will not be recursed over. The last parameter can be
// used to specify a starting position to count from.


Node.prototype.nodesBetween = function nodesBetween(from, to, f, startPos) {
  if (startPos === void 0) startPos = 0;
  this.content.nodesBetween(from, to, f, startPos, this);
}; // :: ((node: Node, pos: number, parent: Node, index: number) → ?bool)
// Call the given callback for every descendant node. Doesn't
// descend into a node when the callback returns `false`.


Node.prototype.descendants = function descendants(f) {
  this.nodesBetween(0, this.content.size, f);
}; // :: string
// Concatenates all the text nodes found in this fragment and its
// children.


prototypeAccessors$3.textContent.get = function () {
  return this.textBetween(0, this.content.size, "");
}; // :: (number, number, ?string, ?union<string, ?(leafNode: Node) -> string>) → string
// Get all text between positions `from` and `to`. When
// `blockSeparator` is given, it will be inserted to separate text
// from different block nodes. When `leafText` is given, it'll be
// inserted for every non-text leaf node encountered.


Node.prototype.textBetween = function textBetween(from, to, blockSeparator, leafText) {
  return this.content.textBetween(from, to, blockSeparator, leafText);
}; // :: ?Node
// Returns this node's first child, or `null` if there are no
// children.


prototypeAccessors$3.firstChild.get = function () {
  return this.content.firstChild;
}; // :: ?Node
// Returns this node's last child, or `null` if there are no
// children.


prototypeAccessors$3.lastChild.get = function () {
  return this.content.lastChild;
}; // :: (Node) → bool
// Test whether two nodes represent the same piece of document.


Node.prototype.eq = function eq(other) {
  return this == other || this.sameMarkup(other) && this.content.eq(other.content);
}; // :: (Node) → bool
// Compare the markup (type, attributes, and marks) of this node to
// those of another. Returns `true` if both have the same markup.


Node.prototype.sameMarkup = function sameMarkup(other) {
  return this.hasMarkup(other.type, other.attrs, other.marks);
}; // :: (NodeType, ?Object, ?[Mark]) → bool
// Check whether this node's markup correspond to the given type,
// attributes, and marks.


Node.prototype.hasMarkup = function hasMarkup(type, attrs, marks) {
  return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks || Mark.none);
}; // :: (?Fragment) → Node
// Create a new node with the same markup as this node, containing
// the given content (or empty, if no content is given).


Node.prototype.copy = function copy(content) {
  if (content === void 0) content = null;

  if (content == this.content) {
    return this;
  }

  return new this.constructor(this.type, this.attrs, content, this.marks);
}; // :: ([Mark]) → Node
// Create a copy of this node, with the given set of marks instead
// of the node's own marks.


Node.prototype.mark = function mark(marks) {
  return marks == this.marks ? this : new this.constructor(this.type, this.attrs, this.content, marks);
}; // :: (number, ?number) → Node
// Create a copy of this node with only the content between the
// given positions. If `to` is not given, it defaults to the end of
// the node.


Node.prototype.cut = function cut(from, to) {
  if (from == 0 && to == this.content.size) {
    return this;
  }

  return this.copy(this.content.cut(from, to));
}; // :: (number, ?number) → Slice
// Cut out the part of the document between the given positions, and
// return it as a `Slice` object.


Node.prototype.slice = function slice(from, to, includeParents) {
  if (to === void 0) to = this.content.size;
  if (includeParents === void 0) includeParents = false;

  if (from == to) {
    return Slice.empty;
  }

  var $from = this.resolve(from),
      $to = this.resolve(to);
  var depth = includeParents ? 0 : $from.sharedDepth(to);
  var start = $from.start(depth),
      node = $from.node(depth);
  var content = node.content.cut($from.pos - start, $to.pos - start);
  return new Slice(content, $from.depth - depth, $to.depth - depth);
}; // :: (number, number, Slice) → Node
// Replace the part of the document between the given positions with
// the given slice. The slice must 'fit', meaning its open sides
// must be able to connect to the surrounding content, and its
// content nodes must be valid children for the node they are placed
// into. If any of this is violated, an error of type
// [`ReplaceError`](#model.ReplaceError) is thrown.


Node.prototype.replace = function replace$1(from, to, slice) {
  return replace(this.resolve(from), this.resolve(to), slice);
}; // :: (number) → ?Node
// Find the node directly after the given position.


Node.prototype.nodeAt = function nodeAt(pos) {
  for (var node = this;;) {
    var ref = node.content.findIndex(pos);
    var index = ref.index;
    var offset = ref.offset;
    node = node.maybeChild(index);

    if (!node) {
      return null;
    }

    if (offset == pos || node.isText) {
      return node;
    }

    pos -= offset + 1;
  }
}; // :: (number) → {node: ?Node, index: number, offset: number}
// Find the (direct) child node after the given offset, if any,
// and return it along with its index and offset relative to this
// node.


Node.prototype.childAfter = function childAfter(pos) {
  var ref = this.content.findIndex(pos);
  var index = ref.index;
  var offset = ref.offset;
  return {
    node: this.content.maybeChild(index),
    index: index,
    offset: offset
  };
}; // :: (number) → {node: ?Node, index: number, offset: number}
// Find the (direct) child node before the given offset, if any,
// and return it along with its index and offset relative to this
// node.


Node.prototype.childBefore = function childBefore(pos) {
  if (pos == 0) {
    return {
      node: null,
      index: 0,
      offset: 0
    };
  }

  var ref = this.content.findIndex(pos);
  var index = ref.index;
  var offset = ref.offset;

  if (offset < pos) {
    return {
      node: this.content.child(index),
      index: index,
      offset: offset
    };
  }

  var node = this.content.child(index - 1);
  return {
    node: node,
    index: index - 1,
    offset: offset - node.nodeSize
  };
}; // :: (number) → ResolvedPos
// Resolve the given position in the document, returning an
// [object](#model.ResolvedPos) with information about its context.


Node.prototype.resolve = function resolve(pos) {
  return ResolvedPos.resolveCached(this, pos);
};

Node.prototype.resolveNoCache = function resolveNoCache(pos) {
  return ResolvedPos.resolve(this, pos);
}; // :: (number, number, union<Mark, MarkType>) → bool
// Test whether a given mark or mark type occurs in this document
// between the two given positions.


Node.prototype.rangeHasMark = function rangeHasMark(from, to, type) {
  var found = false;

  if (to > from) {
    this.nodesBetween(from, to, function (node) {
      if (type.isInSet(node.marks)) {
        found = true;
      }

      return !found;
    });
  }

  return found;
}; // :: bool
// True when this is a block (non-inline node)


prototypeAccessors$3.isBlock.get = function () {
  return this.type.isBlock;
}; // :: bool
// True when this is a textblock node, a block node with inline
// content.


prototypeAccessors$3.isTextblock.get = function () {
  return this.type.isTextblock;
}; // :: bool
// True when this node allows inline content.


prototypeAccessors$3.inlineContent.get = function () {
  return this.type.inlineContent;
}; // :: bool
// True when this is an inline node (a text node or a node that can
// appear among text).


prototypeAccessors$3.isInline.get = function () {
  return this.type.isInline;
}; // :: bool
// True when this is a text node.


prototypeAccessors$3.isText.get = function () {
  return this.type.isText;
}; // :: bool
// True when this is a leaf node.


prototypeAccessors$3.isLeaf.get = function () {
  return this.type.isLeaf;
}; // :: bool
// True when this is an atom, i.e. when it does not have directly
// editable content. This is usually the same as `isLeaf`, but can
// be configured with the [`atom` property](#model.NodeSpec.atom) on
// a node's spec (typically used when the node is displayed as an
// uneditable [node view](#view.NodeView)).


prototypeAccessors$3.isAtom.get = function () {
  return this.type.isAtom;
}; // :: () → string
// Return a string representation of this node for debugging
// purposes.


Node.prototype.toString = function toString() {
  if (this.type.spec.toDebugString) {
    return this.type.spec.toDebugString(this);
  }

  var name = this.type.name;

  if (this.content.size) {
    name += "(" + this.content.toStringInner() + ")";
  }

  return wrapMarks(this.marks, name);
}; // :: (number) → ContentMatch
// Get the content match in this node at the given index.


Node.prototype.contentMatchAt = function contentMatchAt(index) {
  var match = this.type.contentMatch.matchFragment(this.content, 0, index);

  if (!match) {
    throw new Error("Called contentMatchAt on a node with invalid content");
  }

  return match;
}; // :: (number, number, ?Fragment, ?number, ?number) → bool
// Test whether replacing the range between `from` and `to` (by
// child index) with the given replacement fragment (which defaults
// to the empty fragment) would leave the node's content valid. You
// can optionally pass `start` and `end` indices into the
// replacement fragment.


Node.prototype.canReplace = function canReplace(from, to, replacement, start, end) {
  if (replacement === void 0) replacement = Fragment.empty;
  if (start === void 0) start = 0;
  if (end === void 0) end = replacement.childCount;
  var one = this.contentMatchAt(from).matchFragment(replacement, start, end);
  var two = one && one.matchFragment(this.content, to);

  if (!two || !two.validEnd) {
    return false;
  }

  for (var i = start; i < end; i++) {
    if (!this.type.allowsMarks(replacement.child(i).marks)) {
      return false;
    }
  }

  return true;
}; // :: (number, number, NodeType, ?[Mark]) → bool
// Test whether replacing the range `from` to `to` (by index) with a
// node of the given type would leave the node's content valid.


Node.prototype.canReplaceWith = function canReplaceWith(from, to, type, marks) {
  if (marks && !this.type.allowsMarks(marks)) {
    return false;
  }

  var start = this.contentMatchAt(from).matchType(type);
  var end = start && start.matchFragment(this.content, to);
  return end ? end.validEnd : false;
}; // :: (Node) → bool
// Test whether the given node's content could be appended to this
// node. If that node is empty, this will only return true if there
// is at least one node type that can appear in both nodes (to avoid
// merging completely incompatible nodes).


Node.prototype.canAppend = function canAppend(other) {
  if (other.content.size) {
    return this.canReplace(this.childCount, this.childCount, other.content);
  } else {
    return this.type.compatibleContent(other.type);
  }
}; // :: ()
// Check whether this node and its descendants conform to the
// schema, and raise error when they do not.


Node.prototype.check = function check() {
  if (!this.type.validContent(this.content)) {
    throw new RangeError("Invalid content for node " + this.type.name + ": " + this.content.toString().slice(0, 50));
  }

  var copy = Mark.none;

  for (var i = 0; i < this.marks.length; i++) {
    copy = this.marks[i].addToSet(copy);
  }

  if (!Mark.sameSet(copy, this.marks)) {
    throw new RangeError("Invalid collection of marks for node " + this.type.name + ": " + this.marks.map(function (m) {
      return m.type.name;
    }));
  }

  this.content.forEach(function (node) {
    return node.check();
  });
}; // :: () → Object
// Return a JSON-serializeable representation of this node.


Node.prototype.toJSON = function toJSON() {
  var obj = {
    type: this.type.name
  };

  for (var _ in this.attrs) {
    obj.attrs = this.attrs;
    break;
  }

  if (this.content.size) {
    obj.content = this.content.toJSON();
  }

  if (this.marks.length) {
    obj.marks = this.marks.map(function (n) {
      return n.toJSON();
    });
  }

  return obj;
}; // :: (Schema, Object) → Node
// Deserialize a node from its JSON representation.


Node.fromJSON = function fromJSON(schema, json) {
  if (!json) {
    throw new RangeError("Invalid input for Node.fromJSON");
  }

  var marks = null;

  if (json.marks) {
    if (!Array.isArray(json.marks)) {
      throw new RangeError("Invalid mark data for Node.fromJSON");
    }

    marks = json.marks.map(schema.markFromJSON);
  }

  if (json.type == "text") {
    if (typeof json.text != "string") {
      throw new RangeError("Invalid text node in JSON");
    }

    return schema.text(json.text, marks);
  }

  var content = Fragment.fromJSON(schema, json.content);
  return schema.nodeType(json.type).create(json.attrs, content, marks);
};

Object.defineProperties(Node.prototype, prototypeAccessors$3);

var TextNode = /*@__PURE__*/function (Node) {
  function TextNode(type, attrs, content, marks) {
    Node.call(this, type, attrs, null, marks);

    if (!content) {
      throw new RangeError("Empty text nodes are not allowed");
    }

    this.text = content;
  }

  if (Node) TextNode.__proto__ = Node;
  TextNode.prototype = Object.create(Node && Node.prototype);
  TextNode.prototype.constructor = TextNode;
  var prototypeAccessors$1 = {
    textContent: {
      configurable: true
    },
    nodeSize: {
      configurable: true
    }
  };

  TextNode.prototype.toString = function toString() {
    if (this.type.spec.toDebugString) {
      return this.type.spec.toDebugString(this);
    }

    return wrapMarks(this.marks, JSON.stringify(this.text));
  };

  prototypeAccessors$1.textContent.get = function () {
    return this.text;
  };

  TextNode.prototype.textBetween = function textBetween(from, to) {
    return this.text.slice(from, to);
  };

  prototypeAccessors$1.nodeSize.get = function () {
    return this.text.length;
  };

  TextNode.prototype.mark = function mark(marks) {
    return marks == this.marks ? this : new TextNode(this.type, this.attrs, this.text, marks);
  };

  TextNode.prototype.withText = function withText(text) {
    if (text == this.text) {
      return this;
    }

    return new TextNode(this.type, this.attrs, text, this.marks);
  };

  TextNode.prototype.cut = function cut(from, to) {
    if (from === void 0) from = 0;
    if (to === void 0) to = this.text.length;

    if (from == 0 && to == this.text.length) {
      return this;
    }

    return this.withText(this.text.slice(from, to));
  };

  TextNode.prototype.eq = function eq(other) {
    return this.sameMarkup(other) && this.text == other.text;
  };

  TextNode.prototype.toJSON = function toJSON() {
    var base = Node.prototype.toJSON.call(this);
    base.text = this.text;
    return base;
  };

  Object.defineProperties(TextNode.prototype, prototypeAccessors$1);
  return TextNode;
}(Node);

function wrapMarks(marks, str) {
  for (var i = marks.length - 1; i >= 0; i--) {
    str = marks[i].type.name + "(" + str + ")";
  }

  return str;
} // ::- Instances of this class represent a match state of a node
// type's [content expression](#model.NodeSpec.content), and can be
// used to find out whether further content matches here, and whether
// a given position is a valid end of the node.


var ContentMatch = function ContentMatch(validEnd) {
  // :: bool
  // True when this match state represents a valid end of the node.
  this.validEnd = validEnd;
  this.next = [];
  this.wrapCache = [];
};

var prototypeAccessors$4 = {
  inlineContent: {
    configurable: true
  },
  defaultType: {
    configurable: true
  },
  edgeCount: {
    configurable: true
  }
};

ContentMatch.parse = function parse(string, nodeTypes) {
  var stream = new TokenStream(string, nodeTypes);

  if (stream.next == null) {
    return ContentMatch.empty;
  }

  var expr = parseExpr(stream);

  if (stream.next) {
    stream.err("Unexpected trailing text");
  }

  var match = dfa(nfa(expr));
  checkForDeadEnds(match, stream);
  return match;
}; // :: (NodeType) → ?ContentMatch
// Match a node type, returning a match after that node if
// successful.


ContentMatch.prototype.matchType = function matchType(type) {
  for (var i = 0; i < this.next.length; i += 2) {
    if (this.next[i] == type) {
      return this.next[i + 1];
    }
  }

  return null;
}; // :: (Fragment, ?number, ?number) → ?ContentMatch
// Try to match a fragment. Returns the resulting match when
// successful.


ContentMatch.prototype.matchFragment = function matchFragment(frag, start, end) {
  if (start === void 0) start = 0;
  if (end === void 0) end = frag.childCount;
  var cur = this;

  for (var i = start; cur && i < end; i++) {
    cur = cur.matchType(frag.child(i).type);
  }

  return cur;
};

prototypeAccessors$4.inlineContent.get = function () {
  var first = this.next[0];
  return first ? first.isInline : false;
}; // :: ?NodeType
// Get the first matching node type at this match position that can
// be generated.


prototypeAccessors$4.defaultType.get = function () {
  for (var i = 0; i < this.next.length; i += 2) {
    var type = this.next[i];

    if (!(type.isText || type.hasRequiredAttrs())) {
      return type;
    }
  }
};

ContentMatch.prototype.compatible = function compatible(other) {
  for (var i = 0; i < this.next.length; i += 2) {
    for (var j = 0; j < other.next.length; j += 2) {
      if (this.next[i] == other.next[j]) {
        return true;
      }
    }
  }

  return false;
}; // :: (Fragment, bool, ?number) → ?Fragment
// Try to match the given fragment, and if that fails, see if it can
// be made to match by inserting nodes in front of it. When
// successful, return a fragment of inserted nodes (which may be
// empty if nothing had to be inserted). When `toEnd` is true, only
// return a fragment if the resulting match goes to the end of the
// content expression.


ContentMatch.prototype.fillBefore = function fillBefore(after, toEnd, startIndex) {
  if (toEnd === void 0) toEnd = false;
  if (startIndex === void 0) startIndex = 0;
  var seen = [this];

  function search(match, types) {
    var finished = match.matchFragment(after, startIndex);

    if (finished && (!toEnd || finished.validEnd)) {
      return Fragment.from(types.map(function (tp) {
        return tp.createAndFill();
      }));
    }

    for (var i = 0; i < match.next.length; i += 2) {
      var type = match.next[i],
          next = match.next[i + 1];

      if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
        seen.push(next);
        var found = search(next, types.concat(type));

        if (found) {
          return found;
        }
      }
    }
  }

  return search(this, []);
}; // :: (NodeType) → ?[NodeType]
// Find a set of wrapping node types that would allow a node of the
// given type to appear at this position. The result may be empty
// (when it fits directly) and will be null when no such wrapping
// exists.


ContentMatch.prototype.findWrapping = function findWrapping(target) {
  for (var i = 0; i < this.wrapCache.length; i += 2) {
    if (this.wrapCache[i] == target) {
      return this.wrapCache[i + 1];
    }
  }

  var computed = this.computeWrapping(target);
  this.wrapCache.push(target, computed);
  return computed;
};

ContentMatch.prototype.computeWrapping = function computeWrapping(target) {
  var seen = Object.create(null),
      active = [{
    match: this,
    type: null,
    via: null
  }];

  while (active.length) {
    var current = active.shift(),
        match = current.match;

    if (match.matchType(target)) {
      var result = [];

      for (var obj = current; obj.type; obj = obj.via) {
        result.push(obj.type);
      }

      return result.reverse();
    }

    for (var i = 0; i < match.next.length; i += 2) {
      var type = match.next[i];

      if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || match.next[i + 1].validEnd)) {
        active.push({
          match: type.contentMatch,
          type: type,
          via: current
        });
        seen[type.name] = true;
      }
    }
  }
}; // :: number
// The number of outgoing edges this node has in the finite
// automaton that describes the content expression.


prototypeAccessors$4.edgeCount.get = function () {
  return this.next.length >> 1;
}; // :: (number) → {type: NodeType, next: ContentMatch}
// Get the _n_​th outgoing edge from this node in the finite
// automaton that describes the content expression.


ContentMatch.prototype.edge = function edge(n) {
  var i = n << 1;

  if (i >= this.next.length) {
    throw new RangeError("There's no " + n + "th edge in this content match");
  }

  return {
    type: this.next[i],
    next: this.next[i + 1]
  };
};

ContentMatch.prototype.toString = function toString() {
  var seen = [];

  function scan(m) {
    seen.push(m);

    for (var i = 1; i < m.next.length; i += 2) {
      if (seen.indexOf(m.next[i]) == -1) {
        scan(m.next[i]);
      }
    }
  }

  scan(this);
  return seen.map(function (m, i) {
    var out = i + (m.validEnd ? "*" : " ") + " ";

    for (var i$1 = 0; i$1 < m.next.length; i$1 += 2) {
      out += (i$1 ? ", " : "") + m.next[i$1].name + "->" + seen.indexOf(m.next[i$1 + 1]);
    }

    return out;
  }).join("\n");
};

Object.defineProperties(ContentMatch.prototype, prototypeAccessors$4);
ContentMatch.empty = new ContentMatch(true);

var TokenStream = function TokenStream(string, nodeTypes) {
  this.string = string;
  this.nodeTypes = nodeTypes;
  this.inline = null;
  this.pos = 0;
  this.tokens = string.split(/\s*(?=\b|\W|$)/);

  if (this.tokens[this.tokens.length - 1] == "") {
    this.tokens.pop();
  }

  if (this.tokens[0] == "") {
    this.tokens.shift();
  }
};

var prototypeAccessors$1$2 = {
  next: {
    configurable: true
  }
};

prototypeAccessors$1$2.next.get = function () {
  return this.tokens[this.pos];
};

TokenStream.prototype.eat = function eat(tok) {
  return this.next == tok && (this.pos++ || true);
};

TokenStream.prototype.err = function err(str) {
  throw new SyntaxError(str + " (in content expression '" + this.string + "')");
};

Object.defineProperties(TokenStream.prototype, prototypeAccessors$1$2);

function parseExpr(stream) {
  var exprs = [];

  do {
    exprs.push(parseExprSeq(stream));
  } while (stream.eat("|"));

  return exprs.length == 1 ? exprs[0] : {
    type: "choice",
    exprs: exprs
  };
}

function parseExprSeq(stream) {
  var exprs = [];

  do {
    exprs.push(parseExprSubscript(stream));
  } while (stream.next && stream.next != ")" && stream.next != "|");

  return exprs.length == 1 ? exprs[0] : {
    type: "seq",
    exprs: exprs
  };
}

function parseExprSubscript(stream) {
  var expr = parseExprAtom(stream);

  for (;;) {
    if (stream.eat("+")) {
      expr = {
        type: "plus",
        expr: expr
      };
    } else if (stream.eat("*")) {
      expr = {
        type: "star",
        expr: expr
      };
    } else if (stream.eat("?")) {
      expr = {
        type: "opt",
        expr: expr
      };
    } else if (stream.eat("{")) {
      expr = parseExprRange(stream, expr);
    } else {
      break;
    }
  }

  return expr;
}

function parseNum(stream) {
  if (/\D/.test(stream.next)) {
    stream.err("Expected number, got '" + stream.next + "'");
  }

  var result = Number(stream.next);
  stream.pos++;
  return result;
}

function parseExprRange(stream, expr) {
  var min = parseNum(stream),
      max = min;

  if (stream.eat(",")) {
    if (stream.next != "}") {
      max = parseNum(stream);
    } else {
      max = -1;
    }
  }

  if (!stream.eat("}")) {
    stream.err("Unclosed braced range");
  }

  return {
    type: "range",
    min: min,
    max: max,
    expr: expr
  };
}

function resolveName(stream, name) {
  var types = stream.nodeTypes,
      type = types[name];

  if (type) {
    return [type];
  }

  var result = [];

  for (var typeName in types) {
    var type$1 = types[typeName];

    if (type$1.groups.indexOf(name) > -1) {
      result.push(type$1);
    }
  }

  if (result.length == 0) {
    stream.err("No node type or group '" + name + "' found");
  }

  return result;
}

function parseExprAtom(stream) {
  if (stream.eat("(")) {
    var expr = parseExpr(stream);

    if (!stream.eat(")")) {
      stream.err("Missing closing paren");
    }

    return expr;
  } else if (!/\W/.test(stream.next)) {
    var exprs = resolveName(stream, stream.next).map(function (type) {
      if (stream.inline == null) {
        stream.inline = type.isInline;
      } else if (stream.inline != type.isInline) {
        stream.err("Mixing inline and block content");
      }

      return {
        type: "name",
        value: type
      };
    });
    stream.pos++;
    return exprs.length == 1 ? exprs[0] : {
      type: "choice",
      exprs: exprs
    };
  } else {
    stream.err("Unexpected token '" + stream.next + "'");
  }
} // The code below helps compile a regular-expression-like language
// into a deterministic finite automaton. For a good introduction to
// these concepts, see https://swtch.com/~rsc/regexp/regexp1.html
// : (Object) → [[{term: ?any, to: number}]]
// Construct an NFA from an expression as returned by the parser. The
// NFA is represented as an array of states, which are themselves
// arrays of edges, which are `{term, to}` objects. The first state is
// the entry state and the last node is the success state.
//
// Note that unlike typical NFAs, the edge ordering in this one is
// significant, in that it is used to contruct filler content when
// necessary.


function nfa(expr) {
  var nfa = [[]];
  connect(compile(expr, 0), node());
  return nfa;

  function node() {
    return nfa.push([]) - 1;
  }

  function edge(from, to, term) {
    var edge = {
      term: term,
      to: to
    };
    nfa[from].push(edge);
    return edge;
  }

  function connect(edges, to) {
    edges.forEach(function (edge) {
      return edge.to = to;
    });
  }

  function compile(expr, from) {
    if (expr.type == "choice") {
      return expr.exprs.reduce(function (out, expr) {
        return out.concat(compile(expr, from));
      }, []);
    } else if (expr.type == "seq") {
      for (var i = 0;; i++) {
        var next = compile(expr.exprs[i], from);

        if (i == expr.exprs.length - 1) {
          return next;
        }

        connect(next, from = node());
      }
    } else if (expr.type == "star") {
      var loop = node();
      edge(from, loop);
      connect(compile(expr.expr, loop), loop);
      return [edge(loop)];
    } else if (expr.type == "plus") {
      var loop$1 = node();
      connect(compile(expr.expr, from), loop$1);
      connect(compile(expr.expr, loop$1), loop$1);
      return [edge(loop$1)];
    } else if (expr.type == "opt") {
      return [edge(from)].concat(compile(expr.expr, from));
    } else if (expr.type == "range") {
      var cur = from;

      for (var i$1 = 0; i$1 < expr.min; i$1++) {
        var next$1 = node();
        connect(compile(expr.expr, cur), next$1);
        cur = next$1;
      }

      if (expr.max == -1) {
        connect(compile(expr.expr, cur), cur);
      } else {
        for (var i$2 = expr.min; i$2 < expr.max; i$2++) {
          var next$2 = node();
          edge(cur, next$2);
          connect(compile(expr.expr, cur), next$2);
          cur = next$2;
        }
      }

      return [edge(cur)];
    } else if (expr.type == "name") {
      return [edge(from, null, expr.value)];
    }
  }
}

function cmp(a, b) {
  return b - a;
} // Get the set of nodes reachable by null edges from `node`. Omit
// nodes with only a single null-out-edge, since they may lead to
// needless duplicated nodes.


function nullFrom(nfa, node) {
  var result = [];
  scan(node);
  return result.sort(cmp);

  function scan(node) {
    var edges = nfa[node];

    if (edges.length == 1 && !edges[0].term) {
      return scan(edges[0].to);
    }

    result.push(node);

    for (var i = 0; i < edges.length; i++) {
      var ref = edges[i];
      var term = ref.term;
      var to = ref.to;

      if (!term && result.indexOf(to) == -1) {
        scan(to);
      }
    }
  }
} // : ([[{term: ?any, to: number}]]) → ContentMatch
// Compiles an NFA as produced by `nfa` into a DFA, modeled as a set
// of state objects (`ContentMatch` instances) with transitions
// between them.


function dfa(nfa) {
  var labeled = Object.create(null);
  return explore(nullFrom(nfa, 0));

  function explore(states) {
    var out = [];
    states.forEach(function (node) {
      nfa[node].forEach(function (ref) {
        var term = ref.term;
        var to = ref.to;

        if (!term) {
          return;
        }

        var known = out.indexOf(term),
            set = known > -1 && out[known + 1];
        nullFrom(nfa, to).forEach(function (node) {
          if (!set) {
            out.push(term, set = []);
          }

          if (set.indexOf(node) == -1) {
            set.push(node);
          }
        });
      });
    });
    var state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa.length - 1) > -1);

    for (var i = 0; i < out.length; i += 2) {
      var states$1 = out[i + 1].sort(cmp);
      state.next.push(out[i], labeled[states$1.join(",")] || explore(states$1));
    }

    return state;
  }
}

function checkForDeadEnds(match, stream) {
  for (var i = 0, work = [match]; i < work.length; i++) {
    var state = work[i],
        dead = !state.validEnd,
        nodes = [];

    for (var j = 0; j < state.next.length; j += 2) {
      var node = state.next[j],
          next = state.next[j + 1];
      nodes.push(node.name);

      if (dead && !(node.isText || node.hasRequiredAttrs())) {
        dead = false;
      }

      if (work.indexOf(next) == -1) {
        work.push(next);
      }
    }

    if (dead) {
      stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
    }
  }
} // For node types where all attrs have a default value (or which don't
// have any attributes), build up a single reusable default attribute
// object, and use it for all nodes that don't specify specific
// attributes.


function defaultAttrs(attrs) {
  var defaults = Object.create(null);

  for (var attrName in attrs) {
    var attr = attrs[attrName];

    if (!attr.hasDefault) {
      return null;
    }

    defaults[attrName] = attr["default"];
  }

  return defaults;
}

function computeAttrs(attrs, value) {
  var built = Object.create(null);

  for (var name in attrs) {
    var given = value && value[name];

    if (given === undefined) {
      var attr = attrs[name];

      if (attr.hasDefault) {
        given = attr["default"];
      } else {
        throw new RangeError("No value supplied for attribute " + name);
      }
    }

    built[name] = given;
  }

  return built;
}

function initAttrs(attrs) {
  var result = Object.create(null);

  if (attrs) {
    for (var name in attrs) {
      result[name] = new Attribute(attrs[name]);
    }
  }

  return result;
} // ::- Node types are objects allocated once per `Schema` and used to
// [tag](#model.Node.type) `Node` instances. They contain information
// about the node type, such as its name and what kind of node it
// represents.


var NodeType = function NodeType(name, schema, spec) {
  // :: string
  // The name the node type has in this schema.
  this.name = name; // :: Schema
  // A link back to the `Schema` the node type belongs to.

  this.schema = schema; // :: NodeSpec
  // The spec that this type is based on

  this.spec = spec;
  this.groups = spec.group ? spec.group.split(" ") : [];
  this.attrs = initAttrs(spec.attrs);
  this.defaultAttrs = defaultAttrs(this.attrs); // :: ContentMatch
  // The starting match of the node type's content expression.

  this.contentMatch = null; // : ?[MarkType]
  // The set of marks allowed in this node. `null` means all marks
  // are allowed.

  this.markSet = null; // :: bool
  // True if this node type has inline content.

  this.inlineContent = null; // :: bool
  // True if this is a block type

  this.isBlock = !(spec.inline || name == "text"); // :: bool
  // True if this is the text node type.

  this.isText = name == "text";
};

var prototypeAccessors$5 = {
  isInline: {
    configurable: true
  },
  isTextblock: {
    configurable: true
  },
  isLeaf: {
    configurable: true
  },
  isAtom: {
    configurable: true
  },
  whitespace: {
    configurable: true
  }
}; // :: bool
// True if this is an inline type.

prototypeAccessors$5.isInline.get = function () {
  return !this.isBlock;
}; // :: bool
// True if this is a textblock type, a block that contains inline
// content.


prototypeAccessors$5.isTextblock.get = function () {
  return this.isBlock && this.inlineContent;
}; // :: bool
// True for node types that allow no content.


prototypeAccessors$5.isLeaf.get = function () {
  return this.contentMatch == ContentMatch.empty;
}; // :: bool
// True when this node is an atom, i.e. when it does not have
// directly editable content.


prototypeAccessors$5.isAtom.get = function () {
  return this.isLeaf || this.spec.atom;
}; // :: union<"pre", "normal">
// The node type's [whitespace](#view.NodeSpec.whitespace) option.


prototypeAccessors$5.whitespace.get = function () {
  return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
}; // :: () → bool
// Tells you whether this node type has any required attributes.


NodeType.prototype.hasRequiredAttrs = function hasRequiredAttrs() {
  for (var n in this.attrs) {
    if (this.attrs[n].isRequired) {
      return true;
    }
  }

  return false;
};

NodeType.prototype.compatibleContent = function compatibleContent(other) {
  return this == other || this.contentMatch.compatible(other.contentMatch);
};

NodeType.prototype.computeAttrs = function computeAttrs$1(attrs) {
  if (!attrs && this.defaultAttrs) {
    return this.defaultAttrs;
  } else {
    return computeAttrs(this.attrs, attrs);
  }
}; // :: (?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → Node
// Create a `Node` of this type. The given attributes are
// checked and defaulted (you can pass `null` to use the type's
// defaults entirely, if no required attributes exist). `content`
// may be a `Fragment`, a node, an array of nodes, or
// `null`. Similarly `marks` may be `null` to default to the empty
// set of marks.


NodeType.prototype.create = function create(attrs, content, marks) {
  if (this.isText) {
    throw new Error("NodeType.create can't construct text nodes");
  }

  return new Node(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks));
}; // :: (?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → Node
// Like [`create`](#model.NodeType.create), but check the given content
// against the node type's content restrictions, and throw an error
// if it doesn't match.


NodeType.prototype.createChecked = function createChecked(attrs, content, marks) {
  content = Fragment.from(content);

  if (!this.validContent(content)) {
    throw new RangeError("Invalid content for node " + this.name);
  }

  return new Node(this, this.computeAttrs(attrs), content, Mark.setFrom(marks));
}; // :: (?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → ?Node
// Like [`create`](#model.NodeType.create), but see if it is necessary to
// add nodes to the start or end of the given fragment to make it
// fit the node. If no fitting wrapping can be found, return null.
// Note that, due to the fact that required nodes can always be
// created, this will always succeed if you pass null or
// `Fragment.empty` as content.


NodeType.prototype.createAndFill = function createAndFill(attrs, content, marks) {
  attrs = this.computeAttrs(attrs);
  content = Fragment.from(content);

  if (content.size) {
    var before = this.contentMatch.fillBefore(content);

    if (!before) {
      return null;
    }

    content = before.append(content);
  }

  var after = this.contentMatch.matchFragment(content).fillBefore(Fragment.empty, true);

  if (!after) {
    return null;
  }

  return new Node(this, attrs, content.append(after), Mark.setFrom(marks));
}; // :: (Fragment) → bool
// Returns true if the given fragment is valid content for this node
// type with the given attributes.


NodeType.prototype.validContent = function validContent(content) {
  var result = this.contentMatch.matchFragment(content);

  if (!result || !result.validEnd) {
    return false;
  }

  for (var i = 0; i < content.childCount; i++) {
    if (!this.allowsMarks(content.child(i).marks)) {
      return false;
    }
  }

  return true;
}; // :: (MarkType) → bool
// Check whether the given mark type is allowed in this node.


NodeType.prototype.allowsMarkType = function allowsMarkType(markType) {
  return this.markSet == null || this.markSet.indexOf(markType) > -1;
}; // :: ([Mark]) → bool
// Test whether the given set of marks are allowed in this node.


NodeType.prototype.allowsMarks = function allowsMarks(marks) {
  if (this.markSet == null) {
    return true;
  }

  for (var i = 0; i < marks.length; i++) {
    if (!this.allowsMarkType(marks[i].type)) {
      return false;
    }
  }

  return true;
}; // :: ([Mark]) → [Mark]
// Removes the marks that are not allowed in this node from the given set.


NodeType.prototype.allowedMarks = function allowedMarks(marks) {
  if (this.markSet == null) {
    return marks;
  }

  var copy;

  for (var i = 0; i < marks.length; i++) {
    if (!this.allowsMarkType(marks[i].type)) {
      if (!copy) {
        copy = marks.slice(0, i);
      }
    } else if (copy) {
      copy.push(marks[i]);
    }
  }

  return !copy ? marks : copy.length ? copy : Mark.empty;
};

NodeType.compile = function compile(nodes, schema) {
  var result = Object.create(null);
  nodes.forEach(function (name, spec) {
    return result[name] = new NodeType(name, schema, spec);
  });
  var topType = schema.spec.topNode || "doc";

  if (!result[topType]) {
    throw new RangeError("Schema is missing its top node type ('" + topType + "')");
  }

  if (!result.text) {
    throw new RangeError("Every schema needs a 'text' type");
  }

  for (var _ in result.text.attrs) {
    throw new RangeError("The text node type should not have attributes");
  }

  return result;
};

Object.defineProperties(NodeType.prototype, prototypeAccessors$5); // Attribute descriptors

var Attribute = function Attribute(options) {
  this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
  this["default"] = options["default"];
};

var prototypeAccessors$1$3 = {
  isRequired: {
    configurable: true
  }
};

prototypeAccessors$1$3.isRequired.get = function () {
  return !this.hasDefault;
};

Object.defineProperties(Attribute.prototype, prototypeAccessors$1$3); // Marks
// ::- Like nodes, marks (which are associated with nodes to signify
// things like emphasis or being part of a link) are
// [tagged](#model.Mark.type) with type objects, which are
// instantiated once per `Schema`.

var MarkType = function MarkType(name, rank, schema, spec) {
  // :: string
  // The name of the mark type.
  this.name = name; // :: Schema
  // The schema that this mark type instance is part of.

  this.schema = schema; // :: MarkSpec
  // The spec on which the type is based.

  this.spec = spec;
  this.attrs = initAttrs(spec.attrs);
  this.rank = rank;
  this.excluded = null;
  var defaults = defaultAttrs(this.attrs);
  this.instance = defaults && new Mark(this, defaults);
}; // :: (?Object) → Mark
// Create a mark of this type. `attrs` may be `null` or an object
// containing only some of the mark's attributes. The others, if
// they have defaults, will be added.


MarkType.prototype.create = function create(attrs) {
  if (!attrs && this.instance) {
    return this.instance;
  }

  return new Mark(this, computeAttrs(this.attrs, attrs));
};

MarkType.compile = function compile(marks, schema) {
  var result = Object.create(null),
      rank = 0;
  marks.forEach(function (name, spec) {
    return result[name] = new MarkType(name, rank++, schema, spec);
  });
  return result;
}; // :: ([Mark]) → [Mark]
// When there is a mark of this type in the given set, a new set
// without it is returned. Otherwise, the input set is returned.


MarkType.prototype.removeFromSet = function removeFromSet(set) {
  for (var i = 0; i < set.length; i++) {
    if (set[i].type == this) {
      set = set.slice(0, i).concat(set.slice(i + 1));
      i--;
    }
  }

  return set;
}; // :: ([Mark]) → ?Mark
// Tests whether there is a mark of this type in the given set.


MarkType.prototype.isInSet = function isInSet(set) {
  for (var i = 0; i < set.length; i++) {
    if (set[i].type == this) {
      return set[i];
    }
  }
}; // :: (MarkType) → bool
// Queries whether a given mark type is
// [excluded](#model.MarkSpec.excludes) by this one.


MarkType.prototype.excludes = function excludes(other) {
  return this.excluded.indexOf(other) > -1;
}; // SchemaSpec:: interface
// An object describing a schema, as passed to the [`Schema`](#model.Schema)
// constructor.
//
//   nodes:: union<Object<NodeSpec>, OrderedMap<NodeSpec>>
//   The node types in this schema. Maps names to
//   [`NodeSpec`](#model.NodeSpec) objects that describe the node type
//   associated with that name. Their order is significant—it
//   determines which [parse rules](#model.NodeSpec.parseDOM) take
//   precedence by default, and which nodes come first in a given
//   [group](#model.NodeSpec.group).
//
//   marks:: ?union<Object<MarkSpec>, OrderedMap<MarkSpec>>
//   The mark types that exist in this schema. The order in which they
//   are provided determines the order in which [mark
//   sets](#model.Mark.addToSet) are sorted and in which [parse
//   rules](#model.MarkSpec.parseDOM) are tried.
//
//   topNode:: ?string
//   The name of the default top-level node for the schema. Defaults
//   to `"doc"`.
// NodeSpec:: interface
//
//   content:: ?string
//   The content expression for this node, as described in the [schema
//   guide](/docs/guide/#schema.content_expressions). When not given,
//   the node does not allow any content.
//
//   marks:: ?string
//   The marks that are allowed inside of this node. May be a
//   space-separated string referring to mark names or groups, `"_"`
//   to explicitly allow all marks, or `""` to disallow marks. When
//   not given, nodes with inline content default to allowing all
//   marks, other nodes default to not allowing marks.
//
//   group:: ?string
//   The group or space-separated groups to which this node belongs,
//   which can be referred to in the content expressions for the
//   schema.
//
//   inline:: ?bool
//   Should be set to true for inline nodes. (Implied for text nodes.)
//
//   atom:: ?bool
//   Can be set to true to indicate that, though this isn't a [leaf
//   node](#model.NodeType.isLeaf), it doesn't have directly editable
//   content and should be treated as a single unit in the view.
//
//   attrs:: ?Object<AttributeSpec>
//   The attributes that nodes of this type get.
//
//   selectable:: ?bool
//   Controls whether nodes of this type can be selected as a [node
//   selection](#state.NodeSelection). Defaults to true for non-text
//   nodes.
//
//   draggable:: ?bool
//   Determines whether nodes of this type can be dragged without
//   being selected. Defaults to false.
//
//   code:: ?bool
//   Can be used to indicate that this node contains code, which
//   causes some commands to behave differently.
//
//   whitespace:: ?union<"pre", "normal">
//   Controls way whitespace in this a node is parsed. The default is
//   `"normal"`, which causes the [DOM parser](#model.DOMParser) to
//   collapse whitespace in normal mode, and normalize it (replacing
//   newlines and such with spaces) otherwise. `"pre"` causes the
//   parser to preserve spaces inside the node. When this option isn't
//   given, but [`code`](#model.NodeSpec.code) is true, `whitespace`
//   will default to `"pre"`. Note that this option doesn't influence
//   the way the node is rendered—that should be handled by `toDOM`
//   and/or styling.
//
//   defining:: ?bool
//   Determines whether this node is considered an important parent
//   node during replace operations (such as paste). Non-defining (the
//   default) nodes get dropped when their entire content is replaced,
//   whereas defining nodes persist and wrap the inserted content.
//   Likewise, in _inserted_ content the defining parents of the
//   content are preserved when possible. Typically,
//   non-default-paragraph textblock types, and possibly list items,
//   are marked as defining.
//
//   isolating:: ?bool
//   When enabled (default is false), the sides of nodes of this type
//   count as boundaries that regular editing operations, like
//   backspacing or lifting, won't cross. An example of a node that
//   should probably have this enabled is a table cell.
//
//   toDOM:: ?(node: Node) → DOMOutputSpec
//   Defines the default way a node of this type should be serialized
//   to DOM/HTML (as used by
//   [`DOMSerializer.fromSchema`](#model.DOMSerializer^fromSchema)).
//   Should return a DOM node or an [array
//   structure](#model.DOMOutputSpec) that describes one, with an
//   optional number zero (“hole”) in it to indicate where the node's
//   content should be inserted.
//
//   For text nodes, the default is to create a text DOM node. Though
//   it is possible to create a serializer where text is rendered
//   differently, this is not supported inside the editor, so you
//   shouldn't override that in your text node spec.
//
//   parseDOM:: ?[ParseRule]
//   Associates DOM parser information with this node, which can be
//   used by [`DOMParser.fromSchema`](#model.DOMParser^fromSchema) to
//   automatically derive a parser. The `node` field in the rules is
//   implied (the name of this node will be filled in automatically).
//   If you supply your own parser, you do not need to also specify
//   parsing rules in your schema.
//
//   toDebugString:: ?(node: Node) -> string
//   Defines the default way a node of this type should be serialized
//   to a string representation for debugging (e.g. in error messages).
// MarkSpec:: interface
//
//   attrs:: ?Object<AttributeSpec>
//   The attributes that marks of this type get.
//
//   inclusive:: ?bool
//   Whether this mark should be active when the cursor is positioned
//   at its end (or at its start when that is also the start of the
//   parent node). Defaults to true.
//
//   excludes:: ?string
//   Determines which other marks this mark can coexist with. Should
//   be a space-separated strings naming other marks or groups of marks.
//   When a mark is [added](#model.Mark.addToSet) to a set, all marks
//   that it excludes are removed in the process. If the set contains
//   any mark that excludes the new mark but is not, itself, excluded
//   by the new mark, the mark can not be added an the set. You can
//   use the value `"_"` to indicate that the mark excludes all
//   marks in the schema.
//
//   Defaults to only being exclusive with marks of the same type. You
//   can set it to an empty string (or any string not containing the
//   mark's own name) to allow multiple marks of a given type to
//   coexist (as long as they have different attributes).
//
//   group:: ?string
//   The group or space-separated groups to which this mark belongs.
//
//   spanning:: ?bool
//   Determines whether marks of this type can span multiple adjacent
//   nodes when serialized to DOM/HTML. Defaults to true.
//
//   toDOM:: ?(mark: Mark, inline: bool) → DOMOutputSpec
//   Defines the default way marks of this type should be serialized
//   to DOM/HTML. When the resulting spec contains a hole, that is
//   where the marked content is placed. Otherwise, it is appended to
//   the top node.
//
//   parseDOM:: ?[ParseRule]
//   Associates DOM parser information with this mark (see the
//   corresponding [node spec field](#model.NodeSpec.parseDOM)). The
//   `mark` field in the rules is implied.
// AttributeSpec:: interface
//
// Used to [define](#model.NodeSpec.attrs) attributes on nodes or
// marks.
//
//   default:: ?any
//   The default value for this attribute, to use when no explicit
//   value is provided. Attributes that have no default must be
//   provided whenever a node or mark of a type that has them is
//   created.
// ::- A document schema. Holds [node](#model.NodeType) and [mark
// type](#model.MarkType) objects for the nodes and marks that may
// occur in conforming documents, and provides functionality for
// creating and deserializing such documents.


var Schema = function Schema(spec) {
  // :: SchemaSpec
  // The [spec](#model.SchemaSpec) on which the schema is based,
  // with the added guarantee that its `nodes` and `marks`
  // properties are
  // [`OrderedMap`](https://github.com/marijnh/orderedmap) instances
  // (not raw objects).
  this.spec = {};

  for (var prop in spec) {
    this.spec[prop] = spec[prop];
  }

  this.spec.nodes = orderedmap__WEBPACK_IMPORTED_MODULE_0__["default"].from(spec.nodes);
  this.spec.marks = orderedmap__WEBPACK_IMPORTED_MODULE_0__["default"].from(spec.marks); // :: Object<NodeType>
  // An object mapping the schema's node names to node type objects.

  this.nodes = NodeType.compile(this.spec.nodes, this); // :: Object<MarkType>
  // A map from mark names to mark type objects.

  this.marks = MarkType.compile(this.spec.marks, this);
  var contentExprCache = Object.create(null);

  for (var prop$1 in this.nodes) {
    if (prop$1 in this.marks) {
      throw new RangeError(prop$1 + " can not be both a node and a mark");
    }

    var type = this.nodes[prop$1],
        contentExpr = type.spec.content || "",
        markExpr = type.spec.marks;
    type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
    type.inlineContent = type.contentMatch.inlineContent;
    type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
  }

  for (var prop$2 in this.marks) {
    var type$1 = this.marks[prop$2],
        excl = type$1.spec.excludes;
    type$1.excluded = excl == null ? [type$1] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
  }

  this.nodeFromJSON = this.nodeFromJSON.bind(this);
  this.markFromJSON = this.markFromJSON.bind(this); // :: NodeType
  // The type of the [default top node](#model.SchemaSpec.topNode)
  // for this schema.

  this.topNodeType = this.nodes[this.spec.topNode || "doc"]; // :: Object
  // An object for storing whatever values modules may want to
  // compute and cache per schema. (If you want to store something
  // in it, try to use property names unlikely to clash.)

  this.cached = Object.create(null);
  this.cached.wrappings = Object.create(null);
}; // :: (union<string, NodeType>, ?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → Node
// Create a node in this schema. The `type` may be a string or a
// `NodeType` instance. Attributes will be extended
// with defaults, `content` may be a `Fragment`,
// `null`, a `Node`, or an array of nodes.


Schema.prototype.node = function node(type, attrs, content, marks) {
  if (typeof type == "string") {
    type = this.nodeType(type);
  } else if (!(type instanceof NodeType)) {
    throw new RangeError("Invalid node type: " + type);
  } else if (type.schema != this) {
    throw new RangeError("Node type from different schema used (" + type.name + ")");
  }

  return type.createChecked(attrs, content, marks);
}; // :: (string, ?[Mark]) → Node
// Create a text node in the schema. Empty text nodes are not
// allowed.


Schema.prototype.text = function text(text$1, marks) {
  var type = this.nodes.text;
  return new TextNode(type, type.defaultAttrs, text$1, Mark.setFrom(marks));
}; // :: (union<string, MarkType>, ?Object) → Mark
// Create a mark with the given type and attributes.


Schema.prototype.mark = function mark(type, attrs) {
  if (typeof type == "string") {
    type = this.marks[type];
  }

  return type.create(attrs);
}; // :: (Object) → Node
// Deserialize a node from its JSON representation. This method is
// bound.


Schema.prototype.nodeFromJSON = function nodeFromJSON(json) {
  return Node.fromJSON(this, json);
}; // :: (Object) → Mark
// Deserialize a mark from its JSON representation. This method is
// bound.


Schema.prototype.markFromJSON = function markFromJSON(json) {
  return Mark.fromJSON(this, json);
};

Schema.prototype.nodeType = function nodeType(name) {
  var found = this.nodes[name];

  if (!found) {
    throw new RangeError("Unknown node type: " + name);
  }

  return found;
};

function gatherMarks(schema, marks) {
  var found = [];

  for (var i = 0; i < marks.length; i++) {
    var name = marks[i],
        mark = schema.marks[name],
        ok = mark;

    if (mark) {
      found.push(mark);
    } else {
      for (var prop in schema.marks) {
        var mark$1 = schema.marks[prop];

        if (name == "_" || mark$1.spec.group && mark$1.spec.group.split(" ").indexOf(name) > -1) {
          found.push(ok = mark$1);
        }
      }
    }

    if (!ok) {
      throw new SyntaxError("Unknown mark type: '" + marks[i] + "'");
    }
  }

  return found;
} // ParseOptions:: interface
// These are the options recognized by the
// [`parse`](#model.DOMParser.parse) and
// [`parseSlice`](#model.DOMParser.parseSlice) methods.
//
//   preserveWhitespace:: ?union<bool, "full">
//   By default, whitespace is collapsed as per HTML's rules. Pass
//   `true` to preserve whitespace, but normalize newlines to
//   spaces, and `"full"` to preserve whitespace entirely.
//
//   findPositions:: ?[{node: dom.Node, offset: number}]
//   When given, the parser will, beside parsing the content,
//   record the document positions of the given DOM positions. It
//   will do so by writing to the objects, adding a `pos` property
//   that holds the document position. DOM positions that are not
//   in the parsed content will not be written to.
//
//   from:: ?number
//   The child node index to start parsing from.
//
//   to:: ?number
//   The child node index to stop parsing at.
//
//   topNode:: ?Node
//   By default, the content is parsed into the schema's default
//   [top node type](#model.Schema.topNodeType). You can pass this
//   option to use the type and attributes from a different node
//   as the top container.
//
//   topMatch:: ?ContentMatch
//   Provide the starting content match that content parsed into the
//   top node is matched against.
//
//   context:: ?ResolvedPos
//   A set of additional nodes to count as
//   [context](#model.ParseRule.context) when parsing, above the
//   given [top node](#model.ParseOptions.topNode).
// ParseRule:: interface
// A value that describes how to parse a given DOM node or inline
// style as a ProseMirror node or mark.
//
//   tag:: ?string
//   A CSS selector describing the kind of DOM elements to match. A
//   single rule should have _either_ a `tag` or a `style` property.
//
//   namespace:: ?string
//   The namespace to match. This should be used with `tag`.
//   Nodes are only matched when the namespace matches or this property
//   is null.
//
//   style:: ?string
//   A CSS property name to match. When given, this rule matches
//   inline styles that list that property. May also have the form
//   `"property=value"`, in which case the rule only matches if the
//   property's value exactly matches the given value. (For more
//   complicated filters, use [`getAttrs`](#model.ParseRule.getAttrs)
//   and return false to indicate that the match failed.) Rules
//   matching styles may only produce [marks](#model.ParseRule.mark),
//   not nodes.
//
//   priority:: ?number
//   Can be used to change the order in which the parse rules in a
//   schema are tried. Those with higher priority come first. Rules
//   without a priority are counted as having priority 50. This
//   property is only meaningful in a schema—when directly
//   constructing a parser, the order of the rule array is used.
//
//   consuming:: ?boolean
//   By default, when a rule matches an element or style, no further
//   rules get a chance to match it. By setting this to `false`, you
//   indicate that even when this rule matches, other rules that come
//   after it should also run.
//
//   context:: ?string
//   When given, restricts this rule to only match when the current
//   context—the parent nodes into which the content is being
//   parsed—matches this expression. Should contain one or more node
//   names or node group names followed by single or double slashes.
//   For example `"paragraph/"` means the rule only matches when the
//   parent node is a paragraph, `"blockquote/paragraph/"` restricts
//   it to be in a paragraph that is inside a blockquote, and
//   `"section//"` matches any position inside a section—a double
//   slash matches any sequence of ancestor nodes. To allow multiple
//   different contexts, they can be separated by a pipe (`|`)
//   character, as in `"blockquote/|list_item/"`.
//
//   node:: ?string
//   The name of the node type to create when this rule matches. Only
//   valid for rules with a `tag` property, not for style rules. Each
//   rule should have one of a `node`, `mark`, or `ignore` property
//   (except when it appears in a [node](#model.NodeSpec.parseDOM) or
//   [mark spec](#model.MarkSpec.parseDOM), in which case the `node`
//   or `mark` property will be derived from its position).
//
//   mark:: ?string
//   The name of the mark type to wrap the matched content in.
//
//   ignore:: ?bool
//   When true, ignore content that matches this rule.
//
//   closeParent:: ?bool
//   When true, finding an element that matches this rule will close
//   the current node.
//
//   skip:: ?bool
//   When true, ignore the node that matches this rule, but do parse
//   its content.
//
//   attrs:: ?Object
//   Attributes for the node or mark created by this rule. When
//   `getAttrs` is provided, it takes precedence.
//
//   getAttrs:: ?(union<dom.Node, string>) → ?union<Object, false>
//   A function used to compute the attributes for the node or mark
//   created by this rule. Can also be used to describe further
//   conditions the DOM element or style must match. When it returns
//   `false`, the rule won't match. When it returns null or undefined,
//   that is interpreted as an empty/default set of attributes.
//
//   Called with a DOM Element for `tag` rules, and with a string (the
//   style's value) for `style` rules.
//
//   contentElement:: ?union<string, (dom.Node) → dom.Node>
//   For `tag` rules that produce non-leaf nodes or marks, by default
//   the content of the DOM element is parsed as content of the mark
//   or node. If the child nodes are in a descendent node, this may be
//   a CSS selector string that the parser must use to find the actual
//   content element, or a function that returns the actual content
//   element to the parser.
//
//   getContent:: ?(dom.Node, schema: Schema) → Fragment
//   Can be used to override the content of a matched node. When
//   present, instead of parsing the node's child nodes, the result of
//   this function is used.
//
//   preserveWhitespace:: ?union<bool, "full">
//   Controls whether whitespace should be preserved when parsing the
//   content inside the matched element. `false` means whitespace may
//   be collapsed, `true` means that whitespace should be preserved
//   but newlines normalized to spaces, and `"full"` means that
//   newlines should also be preserved.
// ::- A DOM parser represents a strategy for parsing DOM content into
// a ProseMirror document conforming to a given schema. Its behavior
// is defined by an array of [rules](#model.ParseRule).


var DOMParser = function DOMParser(schema, rules) {
  var this$1 = this; // :: Schema
  // The schema into which the parser parses.

  this.schema = schema; // :: [ParseRule]
  // The set of [parse rules](#model.ParseRule) that the parser
  // uses, in order of precedence.

  this.rules = rules;
  this.tags = [];
  this.styles = [];
  rules.forEach(function (rule) {
    if (rule.tag) {
      this$1.tags.push(rule);
    } else if (rule.style) {
      this$1.styles.push(rule);
    }
  }); // Only normalize list elements when lists in the schema can't directly contain themselves

  this.normalizeLists = !this.tags.some(function (r) {
    if (!/^(ul|ol)\b/.test(r.tag) || !r.node) {
      return false;
    }

    var node = schema.nodes[r.node];
    return node.contentMatch.matchType(node);
  });
}; // :: (dom.Node, ?ParseOptions) → Node
// Parse a document from the content of a DOM node.


DOMParser.prototype.parse = function parse(dom, options) {
  if (options === void 0) options = {};
  var context = new ParseContext(this, options, false);
  context.addAll(dom, null, options.from, options.to);
  return context.finish();
}; // :: (dom.Node, ?ParseOptions) → Slice
// Parses the content of the given DOM node, like
// [`parse`](#model.DOMParser.parse), and takes the same set of
// options. But unlike that method, which produces a whole node,
// this one returns a slice that is open at the sides, meaning that
// the schema constraints aren't applied to the start of nodes to
// the left of the input and the end of nodes at the end.


DOMParser.prototype.parseSlice = function parseSlice(dom, options) {
  if (options === void 0) options = {};
  var context = new ParseContext(this, options, true);
  context.addAll(dom, null, options.from, options.to);
  return Slice.maxOpen(context.finish());
};

DOMParser.prototype.matchTag = function matchTag(dom, context, after) {
  for (var i = after ? this.tags.indexOf(after) + 1 : 0; i < this.tags.length; i++) {
    var rule = this.tags[i];

    if (matches(dom, rule.tag) && (rule.namespace === undefined || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
      if (rule.getAttrs) {
        var result = rule.getAttrs(dom);

        if (result === false) {
          continue;
        }

        rule.attrs = result;
      }

      return rule;
    }
  }
};

DOMParser.prototype.matchStyle = function matchStyle(prop, value, context, after) {
  for (var i = after ? this.styles.indexOf(after) + 1 : 0; i < this.styles.length; i++) {
    var rule = this.styles[i];

    if (rule.style.indexOf(prop) != 0 || rule.context && !context.matchesContext(rule.context) || // Test that the style string either precisely matches the prop,
    // or has an '=' sign after the prop, followed by the given
    // value.
    rule.style.length > prop.length && (rule.style.charCodeAt(prop.length) != 61 || rule.style.slice(prop.length + 1) != value)) {
      continue;
    }

    if (rule.getAttrs) {
      var result = rule.getAttrs(value);

      if (result === false) {
        continue;
      }

      rule.attrs = result;
    }

    return rule;
  }
}; // : (Schema) → [ParseRule]


DOMParser.schemaRules = function schemaRules(schema) {
  var result = [];

  function insert(rule) {
    var priority = rule.priority == null ? 50 : rule.priority,
        i = 0;

    for (; i < result.length; i++) {
      var next = result[i],
          nextPriority = next.priority == null ? 50 : next.priority;

      if (nextPriority < priority) {
        break;
      }
    }

    result.splice(i, 0, rule);
  }

  var loop = function loop(name) {
    var rules = schema.marks[name].spec.parseDOM;

    if (rules) {
      rules.forEach(function (rule) {
        insert(rule = copy(rule));
        rule.mark = name;
      });
    }
  };

  for (var name in schema.marks) {
    loop(name);
  }

  var loop$1 = function loop$1(name) {
    var rules$1 = schema.nodes[name$1].spec.parseDOM;

    if (rules$1) {
      rules$1.forEach(function (rule) {
        insert(rule = copy(rule));
        rule.node = name$1;
      });
    }
  };

  for (var name$1 in schema.nodes) {
    loop$1();
  }

  return result;
}; // :: (Schema) → DOMParser
// Construct a DOM parser using the parsing rules listed in a
// schema's [node specs](#model.NodeSpec.parseDOM), reordered by
// [priority](#model.ParseRule.priority).


DOMParser.fromSchema = function fromSchema(schema) {
  return schema.cached.domParser || (schema.cached.domParser = new DOMParser(schema, DOMParser.schemaRules(schema)));
}; // : Object<bool> The block-level tags in HTML5


var blockTags = {
  address: true,
  article: true,
  aside: true,
  blockquote: true,
  canvas: true,
  dd: true,
  div: true,
  dl: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  footer: true,
  form: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  header: true,
  hgroup: true,
  hr: true,
  li: true,
  noscript: true,
  ol: true,
  output: true,
  p: true,
  pre: true,
  section: true,
  table: true,
  tfoot: true,
  ul: true
}; // : Object<bool> The tags that we normally ignore.

var ignoreTags = {
  head: true,
  noscript: true,
  object: true,
  script: true,
  style: true,
  title: true
}; // : Object<bool> List tags.

var listTags = {
  ol: true,
  ul: true
}; // Using a bitfield for node context options

var OPT_PRESERVE_WS = 1,
    OPT_PRESERVE_WS_FULL = 2,
    OPT_OPEN_LEFT = 4;

function wsOptionsFor(type, preserveWhitespace, base) {
  if (preserveWhitespace != null) {
    return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
  }

  return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base & ~OPT_OPEN_LEFT;
}

var NodeContext = function NodeContext(type, attrs, marks, pendingMarks, solid, match, options) {
  this.type = type;
  this.attrs = attrs;
  this.solid = solid;
  this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
  this.options = options;
  this.content = []; // Marks applied to this node itself

  this.marks = marks; // Marks applied to its children

  this.activeMarks = Mark.none; // Marks that can't apply here, but will be used in children if possible

  this.pendingMarks = pendingMarks; // Nested Marks with same type

  this.stashMarks = [];
};

NodeContext.prototype.findWrapping = function findWrapping(node) {
  if (!this.match) {
    if (!this.type) {
      return [];
    }

    var fill = this.type.contentMatch.fillBefore(Fragment.from(node));

    if (fill) {
      this.match = this.type.contentMatch.matchFragment(fill);
    } else {
      var start = this.type.contentMatch,
          wrap;

      if (wrap = start.findWrapping(node.type)) {
        this.match = start;
        return wrap;
      } else {
        return null;
      }
    }
  }

  return this.match.findWrapping(node.type);
};

NodeContext.prototype.finish = function finish(openEnd) {
  if (!(this.options & OPT_PRESERVE_WS)) {
    // Strip trailing whitespace
    var last = this.content[this.content.length - 1],
        m;

    if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
      if (last.text.length == m[0].length) {
        this.content.pop();
      } else {
        this.content[this.content.length - 1] = last.withText(last.text.slice(0, last.text.length - m[0].length));
      }
    }
  }

  var content = Fragment.from(this.content);

  if (!openEnd && this.match) {
    content = content.append(this.match.fillBefore(Fragment.empty, true));
  }

  return this.type ? this.type.create(this.attrs, content, this.marks) : content;
};

NodeContext.prototype.popFromStashMark = function popFromStashMark(mark) {
  for (var i = this.stashMarks.length - 1; i >= 0; i--) {
    if (mark.eq(this.stashMarks[i])) {
      return this.stashMarks.splice(i, 1)[0];
    }
  }
};

NodeContext.prototype.applyPending = function applyPending(nextType) {
  for (var i = 0, pending = this.pendingMarks; i < pending.length; i++) {
    var mark = pending[i];

    if ((this.type ? this.type.allowsMarkType(mark.type) : markMayApply(mark.type, nextType)) && !mark.isInSet(this.activeMarks)) {
      this.activeMarks = mark.addToSet(this.activeMarks);
      this.pendingMarks = mark.removeFromSet(this.pendingMarks);
    }
  }
};

NodeContext.prototype.inlineContext = function inlineContext(node) {
  if (this.type) {
    return this.type.inlineContent;
  }

  if (this.content.length) {
    return this.content[0].isInline;
  }

  return node.parentNode && !blockTags.hasOwnProperty(node.parentNode.nodeName.toLowerCase());
};

var ParseContext = function ParseContext(parser, options, open) {
  // : DOMParser The parser we are using.
  this.parser = parser; // : Object The options passed to this parse.

  this.options = options;
  this.isOpen = open;
  var topNode = options.topNode,
      topContext;
  var topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (open ? OPT_OPEN_LEFT : 0);

  if (topNode) {
    topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, Mark.none, true, options.topMatch || topNode.type.contentMatch, topOptions);
  } else if (open) {
    topContext = new NodeContext(null, null, Mark.none, Mark.none, true, null, topOptions);
  } else {
    topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, Mark.none, true, null, topOptions);
  }

  this.nodes = [topContext]; // : [Mark] The current set of marks

  this.open = 0;
  this.find = options.findPositions;
  this.needsBlock = false;
};

var prototypeAccessors$6 = {
  top: {
    configurable: true
  },
  currentPos: {
    configurable: true
  }
};

prototypeAccessors$6.top.get = function () {
  return this.nodes[this.open];
}; // : (dom.Node)
// Add a DOM node to the content. Text is inserted as text node,
// otherwise, the node is passed to `addElement` or, if it has a
// `style` attribute, `addElementWithStyles`.


ParseContext.prototype.addDOM = function addDOM(dom) {
  if (dom.nodeType == 3) {
    this.addTextNode(dom);
  } else if (dom.nodeType == 1) {
    var style = dom.getAttribute("style");
    var marks = style ? this.readStyles(parseStyles(style)) : null,
        top = this.top;

    if (marks != null) {
      for (var i = 0; i < marks.length; i++) {
        this.addPendingMark(marks[i]);
      }
    }

    this.addElement(dom);

    if (marks != null) {
      for (var i$1 = 0; i$1 < marks.length; i$1++) {
        this.removePendingMark(marks[i$1], top);
      }
    }
  }
};

ParseContext.prototype.addTextNode = function addTextNode(dom) {
  var value = dom.nodeValue;
  var top = this.top;

  if (top.options & OPT_PRESERVE_WS_FULL || top.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value)) {
    if (!(top.options & OPT_PRESERVE_WS)) {
      value = value.replace(/[ \t\r\n\u000c]+/g, " "); // If this starts with whitespace, and there is no node before it, or
      // a hard break, or a text node that ends with whitespace, strip the
      // leading space.

      if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
        var nodeBefore = top.content[top.content.length - 1];
        var domNodeBefore = dom.previousSibling;

        if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == 'BR' || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text)) {
          value = value.slice(1);
        }
      }
    } else if (!(top.options & OPT_PRESERVE_WS_FULL)) {
      value = value.replace(/\r?\n|\r/g, " ");
    } else {
      value = value.replace(/\r\n?/g, "\n");
    }

    if (value) {
      this.insertNode(this.parser.schema.text(value));
    }

    this.findInText(dom);
  } else {
    this.findInside(dom);
  }
}; // : (dom.Element, ?ParseRule)
// Try to find a handler for the given tag and use that to parse. If
// none is found, the element's content nodes are added directly.


ParseContext.prototype.addElement = function addElement(dom, matchAfter) {
  var name = dom.nodeName.toLowerCase(),
      ruleID;

  if (listTags.hasOwnProperty(name) && this.parser.normalizeLists) {
    normalizeList(dom);
  }

  var rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));

  if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
    this.findInside(dom);
    this.ignoreFallback(dom);
  } else if (!rule || rule.skip || rule.closeParent) {
    if (rule && rule.closeParent) {
      this.open = Math.max(0, this.open - 1);
    } else if (rule && rule.skip.nodeType) {
      dom = rule.skip;
    }

    var sync,
        top = this.top,
        oldNeedsBlock = this.needsBlock;

    if (blockTags.hasOwnProperty(name)) {
      sync = true;

      if (!top.type) {
        this.needsBlock = true;
      }
    } else if (!dom.firstChild) {
      this.leafFallback(dom);
      return;
    }

    this.addAll(dom);

    if (sync) {
      this.sync(top);
    }

    this.needsBlock = oldNeedsBlock;
  } else {
    this.addElementByRule(dom, rule, rule.consuming === false ? ruleID : null);
  }
}; // Called for leaf DOM nodes that would otherwise be ignored


ParseContext.prototype.leafFallback = function leafFallback(dom) {
  if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent) {
    this.addTextNode(dom.ownerDocument.createTextNode("\n"));
  }
}; // Called for ignored nodes


ParseContext.prototype.ignoreFallback = function ignoreFallback(dom) {
  // Ignored BR nodes should at least create an inline context
  if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent)) {
    this.findPlace(this.parser.schema.text("-"));
  }
}; // Run any style parser associated with the node's styles. Either
// return an array of marks, or null to indicate some of the styles
// had a rule with `ignore` set.


ParseContext.prototype.readStyles = function readStyles(styles) {
  var marks = Mark.none;

  style: for (var i = 0; i < styles.length; i += 2) {
    for (var after = null;;) {
      var rule = this.parser.matchStyle(styles[i], styles[i + 1], this, after);

      if (!rule) {
        continue style;
      }

      if (rule.ignore) {
        return null;
      }

      marks = this.parser.schema.marks[rule.mark].create(rule.attrs).addToSet(marks);

      if (rule.consuming === false) {
        after = rule;
      } else {
        break;
      }
    }
  }

  return marks;
}; // : (dom.Element, ParseRule) → bool
// Look up a handler for the given node. If none are found, return
// false. Otherwise, apply it, use its return value to drive the way
// the node's content is wrapped, and return true.


ParseContext.prototype.addElementByRule = function addElementByRule(dom, rule, continueAfter) {
  var this$1 = this;
  var sync, nodeType, markType, mark;

  if (rule.node) {
    nodeType = this.parser.schema.nodes[rule.node];

    if (!nodeType.isLeaf) {
      sync = this.enter(nodeType, rule.attrs, rule.preserveWhitespace);
    } else if (!this.insertNode(nodeType.create(rule.attrs))) {
      this.leafFallback(dom);
    }
  } else {
    markType = this.parser.schema.marks[rule.mark];
    mark = markType.create(rule.attrs);
    this.addPendingMark(mark);
  }

  var startIn = this.top;

  if (nodeType && nodeType.isLeaf) {
    this.findInside(dom);
  } else if (continueAfter) {
    this.addElement(dom, continueAfter);
  } else if (rule.getContent) {
    this.findInside(dom);
    rule.getContent(dom, this.parser.schema).forEach(function (node) {
      return this$1.insertNode(node);
    });
  } else {
    var contentDOM = rule.contentElement;

    if (typeof contentDOM == "string") {
      contentDOM = dom.querySelector(contentDOM);
    } else if (typeof contentDOM == "function") {
      contentDOM = contentDOM(dom);
    }

    if (!contentDOM) {
      contentDOM = dom;
    }

    this.findAround(dom, contentDOM, true);
    this.addAll(contentDOM, sync);
  }

  if (sync) {
    this.sync(startIn);
    this.open--;
  }

  if (mark) {
    this.removePendingMark(mark, startIn);
  }
}; // : (dom.Node, ?NodeBuilder, ?number, ?number)
// Add all child nodes between `startIndex` and `endIndex` (or the
// whole node, if not given). If `sync` is passed, use it to
// synchronize after every block element.


ParseContext.prototype.addAll = function addAll(parent, sync, startIndex, endIndex) {
  var index = startIndex || 0;

  for (var dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end = endIndex == null ? null : parent.childNodes[endIndex]; dom != end; dom = dom.nextSibling, ++index) {
    this.findAtPoint(parent, index);
    this.addDOM(dom);

    if (sync && blockTags.hasOwnProperty(dom.nodeName.toLowerCase())) {
      this.sync(sync);
    }
  }

  this.findAtPoint(parent, index);
}; // Try to find a way to fit the given node type into the current
// context. May add intermediate wrappers and/or leave non-solid
// nodes that we're in.


ParseContext.prototype.findPlace = function findPlace(node) {
  var route, sync;

  for (var depth = this.open; depth >= 0; depth--) {
    var cx = this.nodes[depth];
    var found = cx.findWrapping(node);

    if (found && (!route || route.length > found.length)) {
      route = found;
      sync = cx;

      if (!found.length) {
        break;
      }
    }

    if (cx.solid) {
      break;
    }
  }

  if (!route) {
    return false;
  }

  this.sync(sync);

  for (var i = 0; i < route.length; i++) {
    this.enterInner(route[i], null, false);
  }

  return true;
}; // : (Node) → ?Node
// Try to insert the given node, adjusting the context when needed.


ParseContext.prototype.insertNode = function insertNode(node) {
  if (node.isInline && this.needsBlock && !this.top.type) {
    var block = this.textblockFromContext();

    if (block) {
      this.enterInner(block);
    }
  }

  if (this.findPlace(node)) {
    this.closeExtra();
    var top = this.top;
    top.applyPending(node.type);

    if (top.match) {
      top.match = top.match.matchType(node.type);
    }

    var marks = top.activeMarks;

    for (var i = 0; i < node.marks.length; i++) {
      if (!top.type || top.type.allowsMarkType(node.marks[i].type)) {
        marks = node.marks[i].addToSet(marks);
      }
    }

    top.content.push(node.mark(marks));
    return true;
  }

  return false;
}; // : (NodeType, ?Object) → bool
// Try to start a node of the given type, adjusting the context when
// necessary.


ParseContext.prototype.enter = function enter(type, attrs, preserveWS) {
  var ok = this.findPlace(type.create(attrs));

  if (ok) {
    this.enterInner(type, attrs, true, preserveWS);
  }

  return ok;
}; // Open a node of the given type


ParseContext.prototype.enterInner = function enterInner(type, attrs, solid, preserveWS) {
  this.closeExtra();
  var top = this.top;
  top.applyPending(type);
  top.match = top.match && top.match.matchType(type, attrs);
  var options = wsOptionsFor(type, preserveWS, top.options);

  if (top.options & OPT_OPEN_LEFT && top.content.length == 0) {
    options |= OPT_OPEN_LEFT;
  }

  this.nodes.push(new NodeContext(type, attrs, top.activeMarks, top.pendingMarks, solid, null, options));
  this.open++;
}; // Make sure all nodes above this.open are finished and added to
// their parents


ParseContext.prototype.closeExtra = function closeExtra(openEnd) {
  var i = this.nodes.length - 1;

  if (i > this.open) {
    for (; i > this.open; i--) {
      this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
    }

    this.nodes.length = this.open + 1;
  }
};

ParseContext.prototype.finish = function finish() {
  this.open = 0;
  this.closeExtra(this.isOpen);
  return this.nodes[0].finish(this.isOpen || this.options.topOpen);
};

ParseContext.prototype.sync = function sync(to) {
  for (var i = this.open; i >= 0; i--) {
    if (this.nodes[i] == to) {
      this.open = i;
      return;
    }
  }
};

prototypeAccessors$6.currentPos.get = function () {
  this.closeExtra();
  var pos = 0;

  for (var i = this.open; i >= 0; i--) {
    var content = this.nodes[i].content;

    for (var j = content.length - 1; j >= 0; j--) {
      pos += content[j].nodeSize;
    }

    if (i) {
      pos++;
    }
  }

  return pos;
};

ParseContext.prototype.findAtPoint = function findAtPoint(parent, offset) {
  if (this.find) {
    for (var i = 0; i < this.find.length; i++) {
      if (this.find[i].node == parent && this.find[i].offset == offset) {
        this.find[i].pos = this.currentPos;
      }
    }
  }
};

ParseContext.prototype.findInside = function findInside(parent) {
  if (this.find) {
    for (var i = 0; i < this.find.length; i++) {
      if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
        this.find[i].pos = this.currentPos;
      }
    }
  }
};

ParseContext.prototype.findAround = function findAround(parent, content, before) {
  if (parent != content && this.find) {
    for (var i = 0; i < this.find.length; i++) {
      if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
        var pos = content.compareDocumentPosition(this.find[i].node);

        if (pos & (before ? 2 : 4)) {
          this.find[i].pos = this.currentPos;
        }
      }
    }
  }
};

ParseContext.prototype.findInText = function findInText(textNode) {
  if (this.find) {
    for (var i = 0; i < this.find.length; i++) {
      if (this.find[i].node == textNode) {
        this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
      }
    }
  }
}; // : (string) → bool
// Determines whether the given [context
// string](#ParseRule.context) matches this context.


ParseContext.prototype.matchesContext = function matchesContext(context) {
  var this$1 = this;

  if (context.indexOf("|") > -1) {
    return context.split(/\s*\|\s*/).some(this.matchesContext, this);
  }

  var parts = context.split("/");
  var option = this.options.context;
  var useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
  var minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);

  var match = function match(i, depth) {
    for (; i >= 0; i--) {
      var part = parts[i];

      if (part == "") {
        if (i == parts.length - 1 || i == 0) {
          continue;
        }

        for (; depth >= minDepth; depth--) {
          if (match(i - 1, depth)) {
            return true;
          }
        }

        return false;
      } else {
        var next = depth > 0 || depth == 0 && useRoot ? this$1.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;

        if (!next || next.name != part && next.groups.indexOf(part) == -1) {
          return false;
        }

        depth--;
      }
    }

    return true;
  };

  return match(parts.length - 1, this.open);
};

ParseContext.prototype.textblockFromContext = function textblockFromContext() {
  var $context = this.options.context;

  if ($context) {
    for (var d = $context.depth; d >= 0; d--) {
      var deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;

      if (deflt && deflt.isTextblock && deflt.defaultAttrs) {
        return deflt;
      }
    }
  }

  for (var name in this.parser.schema.nodes) {
    var type = this.parser.schema.nodes[name];

    if (type.isTextblock && type.defaultAttrs) {
      return type;
    }
  }
};

ParseContext.prototype.addPendingMark = function addPendingMark(mark) {
  var found = findSameMarkInSet(mark, this.top.pendingMarks);

  if (found) {
    this.top.stashMarks.push(found);
  }

  this.top.pendingMarks = mark.addToSet(this.top.pendingMarks);
};

ParseContext.prototype.removePendingMark = function removePendingMark(mark, upto) {
  for (var depth = this.open; depth >= 0; depth--) {
    var level = this.nodes[depth];
    var found = level.pendingMarks.lastIndexOf(mark);

    if (found > -1) {
      level.pendingMarks = mark.removeFromSet(level.pendingMarks);
    } else {
      level.activeMarks = mark.removeFromSet(level.activeMarks);
      var stashMark = level.popFromStashMark(mark);

      if (stashMark && level.type && level.type.allowsMarkType(stashMark.type)) {
        level.activeMarks = stashMark.addToSet(level.activeMarks);
      }
    }

    if (level == upto) {
      break;
    }
  }
};

Object.defineProperties(ParseContext.prototype, prototypeAccessors$6); // Kludge to work around directly nested list nodes produced by some
// tools and allowed by browsers to mean that the nested list is
// actually part of the list item above it.

function normalizeList(dom) {
  for (var child = dom.firstChild, prevItem = null; child; child = child.nextSibling) {
    var name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;

    if (name && listTags.hasOwnProperty(name) && prevItem) {
      prevItem.appendChild(child);
      child = prevItem;
    } else if (name == "li") {
      prevItem = child;
    } else if (name) {
      prevItem = null;
    }
  }
} // Apply a CSS selector.


function matches(dom, selector) {
  return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
} // : (string) → [string]
// Tokenize a style attribute into property/value pairs.


function parseStyles(style) {
  var re = /\s*([\w-]+)\s*:\s*([^;]+)/g,
      m,
      result = [];

  while (m = re.exec(style)) {
    result.push(m[1], m[2].trim());
  }

  return result;
}

function copy(obj) {
  var copy = {};

  for (var prop in obj) {
    copy[prop] = obj[prop];
  }

  return copy;
} // Used when finding a mark at the top level of a fragment parse.
// Checks whether it would be reasonable to apply a given mark type to
// a given node, by looking at the way the mark occurs in the schema.


function markMayApply(markType, nodeType) {
  var nodes = nodeType.schema.nodes;

  var loop = function loop(name) {
    var parent = nodes[name];

    if (!parent.allowsMarkType(markType)) {
      return;
    }

    var seen = [],
        scan = function scan(match) {
      seen.push(match);

      for (var i = 0; i < match.edgeCount; i++) {
        var ref = match.edge(i);
        var type = ref.type;
        var next = ref.next;

        if (type == nodeType) {
          return true;
        }

        if (seen.indexOf(next) < 0 && scan(next)) {
          return true;
        }
      }
    };

    if (scan(parent.contentMatch)) {
      return {
        v: true
      };
    }
  };

  for (var name in nodes) {
    var returned = loop(name);
    if (returned) return returned.v;
  }
}

function findSameMarkInSet(mark, set) {
  for (var i = 0; i < set.length; i++) {
    if (mark.eq(set[i])) {
      return set[i];
    }
  }
} // DOMOutputSpec:: interface
// A description of a DOM structure. Can be either a string, which is
// interpreted as a text node, a DOM node, which is interpreted as
// itself, a `{dom: Node, contentDOM: ?Node}` object, or an array.
//
// An array describes a DOM element. The first value in the array
// should be a string—the name of the DOM element, optionally prefixed
// by a namespace URL and a space. If the second element is plain
// object, it is interpreted as a set of attributes for the element.
// Any elements after that (including the 2nd if it's not an attribute
// object) are interpreted as children of the DOM elements, and must
// either be valid `DOMOutputSpec` values, or the number zero.
//
// The number zero (pronounced “hole”) is used to indicate the place
// where a node's child nodes should be inserted. If it occurs in an
// output spec, it should be the only child element in its parent
// node.
// ::- A DOM serializer knows how to convert ProseMirror nodes and
// marks of various types to DOM nodes.


var DOMSerializer = function DOMSerializer(nodes, marks) {
  // :: Object<(node: Node) → DOMOutputSpec>
  // The node serialization functions.
  this.nodes = nodes || {}; // :: Object<?(mark: Mark, inline: bool) → DOMOutputSpec>
  // The mark serialization functions.

  this.marks = marks || {};
}; // :: (Fragment, ?Object) → dom.DocumentFragment
// Serialize the content of this fragment to a DOM fragment. When
// not in the browser, the `document` option, containing a DOM
// document, should be passed so that the serializer can create
// nodes.


DOMSerializer.prototype.serializeFragment = function serializeFragment(fragment, options, target) {
  var this$1 = this;
  if (options === void 0) options = {};

  if (!target) {
    target = doc(options).createDocumentFragment();
  }

  var top = target,
      active = null;
  fragment.forEach(function (node) {
    if (active || node.marks.length) {
      if (!active) {
        active = [];
      }

      var keep = 0,
          rendered = 0;

      while (keep < active.length && rendered < node.marks.length) {
        var next = node.marks[rendered];

        if (!this$1.marks[next.type.name]) {
          rendered++;
          continue;
        }

        if (!next.eq(active[keep]) || next.type.spec.spanning === false) {
          break;
        }

        keep += 2;
        rendered++;
      }

      while (keep < active.length) {
        top = active.pop();
        active.pop();
      }

      while (rendered < node.marks.length) {
        var add = node.marks[rendered++];
        var markDOM = this$1.serializeMark(add, node.isInline, options);

        if (markDOM) {
          active.push(add, top);
          top.appendChild(markDOM.dom);
          top = markDOM.contentDOM || markDOM.dom;
        }
      }
    }

    top.appendChild(this$1.serializeNodeInner(node, options));
  });
  return target;
};

DOMSerializer.prototype.serializeNodeInner = function serializeNodeInner(node, options) {
  if (options === void 0) options = {};
  var ref = DOMSerializer.renderSpec(doc(options), this.nodes[node.type.name](node));
  var dom = ref.dom;
  var contentDOM = ref.contentDOM;

  if (contentDOM) {
    if (node.isLeaf) {
      throw new RangeError("Content hole not allowed in a leaf node spec");
    }

    if (options.onContent) {
      options.onContent(node, contentDOM, options);
    } else {
      this.serializeFragment(node.content, options, contentDOM);
    }
  }

  return dom;
}; // :: (Node, ?Object) → dom.Node
// Serialize this node to a DOM node. This can be useful when you
// need to serialize a part of a document, as opposed to the whole
// document. To serialize a whole document, use
// [`serializeFragment`](#model.DOMSerializer.serializeFragment) on
// its [content](#model.Node.content).


DOMSerializer.prototype.serializeNode = function serializeNode(node, options) {
  if (options === void 0) options = {};
  var dom = this.serializeNodeInner(node, options);

  for (var i = node.marks.length - 1; i >= 0; i--) {
    var wrap = this.serializeMark(node.marks[i], node.isInline, options);

    if (wrap) {
      (wrap.contentDOM || wrap.dom).appendChild(dom);
      dom = wrap.dom;
    }
  }

  return dom;
};

DOMSerializer.prototype.serializeMark = function serializeMark(mark, inline, options) {
  if (options === void 0) options = {};
  var toDOM = this.marks[mark.type.name];
  return toDOM && DOMSerializer.renderSpec(doc(options), toDOM(mark, inline));
}; // :: (dom.Document, DOMOutputSpec) → {dom: dom.Node, contentDOM: ?dom.Node}
// Render an [output spec](#model.DOMOutputSpec) to a DOM node. If
// the spec has a hole (zero) in it, `contentDOM` will point at the
// node with the hole.


DOMSerializer.renderSpec = function renderSpec(doc, structure, xmlNS) {
  if (xmlNS === void 0) xmlNS = null;

  if (typeof structure == "string") {
    return {
      dom: doc.createTextNode(structure)
    };
  }

  if (structure.nodeType != null) {
    return {
      dom: structure
    };
  }

  if (structure.dom && structure.dom.nodeType != null) {
    return structure;
  }

  var tagName = structure[0],
      space = tagName.indexOf(" ");

  if (space > 0) {
    xmlNS = tagName.slice(0, space);
    tagName = tagName.slice(space + 1);
  }

  var contentDOM = null,
      dom = xmlNS ? doc.createElementNS(xmlNS, tagName) : doc.createElement(tagName);
  var attrs = structure[1],
      start = 1;

  if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
    start = 2;

    for (var name in attrs) {
      if (attrs[name] != null) {
        var space$1 = name.indexOf(" ");

        if (space$1 > 0) {
          dom.setAttributeNS(name.slice(0, space$1), name.slice(space$1 + 1), attrs[name]);
        } else {
          dom.setAttribute(name, attrs[name]);
        }
      }
    }
  }

  for (var i = start; i < structure.length; i++) {
    var child = structure[i];

    if (child === 0) {
      if (i < structure.length - 1 || i > start) {
        throw new RangeError("Content hole must be the only child of its parent node");
      }

      return {
        dom: dom,
        contentDOM: dom
      };
    } else {
      var ref = DOMSerializer.renderSpec(doc, child, xmlNS);
      var inner = ref.dom;
      var innerContent = ref.contentDOM;
      dom.appendChild(inner);

      if (innerContent) {
        if (contentDOM) {
          throw new RangeError("Multiple content holes");
        }

        contentDOM = innerContent;
      }
    }
  }

  return {
    dom: dom,
    contentDOM: contentDOM
  };
}; // :: (Schema) → DOMSerializer
// Build a serializer using the [`toDOM`](#model.NodeSpec.toDOM)
// properties in a schema's node and mark specs.


DOMSerializer.fromSchema = function fromSchema(schema) {
  return schema.cached.domSerializer || (schema.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)));
}; // : (Schema) → Object<(node: Node) → DOMOutputSpec>
// Gather the serializers in a schema's node specs into an object.
// This can be useful as a base to build a custom serializer from.


DOMSerializer.nodesFromSchema = function nodesFromSchema(schema) {
  var result = gatherToDOM(schema.nodes);

  if (!result.text) {
    result.text = function (node) {
      return node.text;
    };
  }

  return result;
}; // : (Schema) → Object<(mark: Mark) → DOMOutputSpec>
// Gather the serializers in a schema's mark specs into an object.


DOMSerializer.marksFromSchema = function marksFromSchema(schema) {
  return gatherToDOM(schema.marks);
};

function gatherToDOM(obj) {
  var result = {};

  for (var name in obj) {
    var toDOM = obj[name].spec.toDOM;

    if (toDOM) {
      result[name] = toDOM;
    }
  }

  return result;
}

function doc(options) {
  // declare global: window
  return options.document || window.document;
}



/***/ }),

/***/ "./node_modules/prosemirror-schema-list/dist/index.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/prosemirror-schema-list/dist/index.es.js ***!
  \***************************************************************/
/*! exports provided: addListNodes, bulletList, liftListItem, listItem, orderedList, sinkListItem, splitListItem, wrapInList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListNodes", function() { return addListNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bulletList", function() { return bulletList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liftListItem", function() { return liftListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listItem", function() { return listItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderedList", function() { return orderedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinkListItem", function() { return sinkListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitListItem", function() { return splitListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapInList", function() { return wrapInList; });
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-transform */ "./node_modules/prosemirror-transform/dist/index.es.js");
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-model */ "./node_modules/prosemirror-model/dist/index.es.js");


var olDOM = ["ol", 0],
    ulDOM = ["ul", 0],
    liDOM = ["li", 0]; // :: NodeSpec
// An ordered list [node spec](#model.NodeSpec). Has a single
// attribute, `order`, which determines the number at which the list
// starts counting, and defaults to 1. Represented as an `<ol>`
// element.

var orderedList = {
  attrs: {
    order: {
      "default": 1
    }
  },
  parseDOM: [{
    tag: "ol",
    getAttrs: function getAttrs(dom) {
      return {
        order: dom.hasAttribute("start") ? +dom.getAttribute("start") : 1
      };
    }
  }],
  toDOM: function toDOM(node) {
    return node.attrs.order == 1 ? olDOM : ["ol", {
      start: node.attrs.order
    }, 0];
  }
}; // :: NodeSpec
// A bullet list node spec, represented in the DOM as `<ul>`.

var bulletList = {
  parseDOM: [{
    tag: "ul"
  }],
  toDOM: function toDOM() {
    return ulDOM;
  }
}; // :: NodeSpec
// A list item (`<li>`) spec.

var listItem = {
  parseDOM: [{
    tag: "li"
  }],
  toDOM: function toDOM() {
    return liDOM;
  },
  defining: true
};

function add(obj, props) {
  var copy = {};

  for (var prop in obj) {
    copy[prop] = obj[prop];
  }

  for (var prop$1 in props) {
    copy[prop$1] = props[prop$1];
  }

  return copy;
} // :: (OrderedMap<NodeSpec>, string, ?string) → OrderedMap<NodeSpec>
// Convenience function for adding list-related node types to a map
// specifying the nodes for a schema. Adds
// [`orderedList`](#schema-list.orderedList) as `"ordered_list"`,
// [`bulletList`](#schema-list.bulletList) as `"bullet_list"`, and
// [`listItem`](#schema-list.listItem) as `"list_item"`.
//
// `itemContent` determines the content expression for the list items.
// If you want the commands defined in this module to apply to your
// list structure, it should have a shape like `"paragraph block*"` or
// `"paragraph (ordered_list | bullet_list)*"`. `listGroup` can be
// given to assign a group name to the list node types, for example
// `"block"`.


function addListNodes(nodes, itemContent, listGroup) {
  return nodes.append({
    ordered_list: add(orderedList, {
      content: "list_item+",
      group: listGroup
    }),
    bullet_list: add(bulletList, {
      content: "list_item+",
      group: listGroup
    }),
    list_item: add(listItem, {
      content: itemContent
    })
  });
} // :: (NodeType, ?Object) → (state: EditorState, dispatch: ?(tr: Transaction)) → bool
// Returns a command function that wraps the selection in a list with
// the given type an attributes. If `dispatch` is null, only return a
// value to indicate whether this is possible, but don't actually
// perform the change.


function wrapInList(listType, attrs) {
  return function (state, dispatch) {
    var ref = state.selection;
    var $from = ref.$from;
    var $to = ref.$to;
    var range = $from.blockRange($to),
        doJoin = false,
        outerRange = range;

    if (!range) {
      return false;
    } // This is at the top of an existing list item


    if (range.depth >= 2 && $from.node(range.depth - 1).type.compatibleContent(listType) && range.startIndex == 0) {
      // Don't do anything if this is the top of the list
      if ($from.index(range.depth - 1) == 0) {
        return false;
      }

      var $insert = state.doc.resolve(range.start - 2);
      outerRange = new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["NodeRange"]($insert, $insert, range.depth);

      if (range.endIndex < range.parent.childCount) {
        range = new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["NodeRange"]($from, state.doc.resolve($to.end(range.depth)), range.depth);
      }

      doJoin = true;
    }

    var wrap = Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["findWrapping"])(outerRange, listType, attrs, range);

    if (!wrap) {
      return false;
    }

    if (dispatch) {
      dispatch(doWrapInList(state.tr, range, wrap, doJoin, listType).scrollIntoView());
    }

    return true;
  };
}

function doWrapInList(tr, range, wrappers, joinBefore, listType) {
  var content = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].empty;

  for (var i = wrappers.length - 1; i >= 0; i--) {
    content = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from(wrappers[i].type.create(wrappers[i].attrs, content));
  }

  tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["ReplaceAroundStep"](range.start - (joinBefore ? 2 : 0), range.end, range.start, range.end, new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Slice"](content, 0, 0), wrappers.length, true));
  var found = 0;

  for (var i$1 = 0; i$1 < wrappers.length; i$1++) {
    if (wrappers[i$1].type == listType) {
      found = i$1 + 1;
    }
  }

  var splitDepth = wrappers.length - found;
  var splitPos = range.start + wrappers.length - (joinBefore ? 2 : 0),
      parent = range.parent;

  for (var i$2 = range.startIndex, e = range.endIndex, first = true; i$2 < e; i$2++, first = false) {
    if (!first && Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["canSplit"])(tr.doc, splitPos, splitDepth)) {
      tr.split(splitPos, splitDepth);
      splitPos += 2 * splitDepth;
    }

    splitPos += parent.child(i$2).nodeSize;
  }

  return tr;
} // :: (NodeType) → (state: EditorState, dispatch: ?(tr: Transaction)) → bool
// Build a command that splits a non-empty textblock at the top level
// of a list item by also splitting that list item.


function splitListItem(itemType) {
  return function (state, dispatch) {
    var ref = state.selection;
    var $from = ref.$from;
    var $to = ref.$to;
    var node = ref.node;

    if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) {
      return false;
    }

    var grandParent = $from.node(-1);

    if (grandParent.type != itemType) {
      return false;
    }

    if ($from.parent.content.size == 0 && $from.node(-1).childCount == $from.indexAfter(-1)) {
      // In an empty block. If this is a nested list, the wrapping
      // list item should be split. Otherwise, bail out and let next
      // command handle lifting.
      if ($from.depth == 2 || $from.node(-3).type != itemType || $from.index(-2) != $from.node(-2).childCount - 1) {
        return false;
      }

      if (dispatch) {
        var wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].empty;
        var depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3; // Build a fragment containing empty versions of the structure
        // from the outer list item to the parent node of the cursor

        for (var d = $from.depth - depthBefore; d >= $from.depth - 3; d--) {
          wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from($from.node(d).copy(wrap));
        }

        var depthAfter = $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3; // Add a second list item with an empty default start node

        wrap = wrap.append(prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from(itemType.createAndFill()));
        var start = $from.before($from.depth - (depthBefore - 1));
        var tr$1 = state.tr.replace(start, $from.after(-depthAfter), new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Slice"](wrap, 4 - depthBefore, 0));
        var sel = -1;
        tr$1.doc.nodesBetween(start, tr$1.doc.content.size, function (node, pos) {
          if (sel > -1) {
            return false;
          }

          if (node.isTextblock && node.content.size == 0) {
            sel = pos + 1;
          }
        });

        if (sel > -1) {
          tr$1.setSelection(state.selection.constructor.near(tr$1.doc.resolve(sel)));
        }

        dispatch(tr$1.scrollIntoView());
      }

      return true;
    }

    var nextType = $to.pos == $from.end() ? grandParent.contentMatchAt(0).defaultType : null;
    var tr = state.tr["delete"]($from.pos, $to.pos);
    var types = nextType && [null, {
      type: nextType
    }];

    if (!Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["canSplit"])(tr.doc, $from.pos, 2, types)) {
      return false;
    }

    if (dispatch) {
      dispatch(tr.split($from.pos, 2, types).scrollIntoView());
    }

    return true;
  };
} // :: (NodeType) → (state: EditorState, dispatch: ?(tr: Transaction)) → bool
// Create a command to lift the list item around the selection up into
// a wrapping list.


function liftListItem(itemType) {
  return function (state, dispatch) {
    var ref = state.selection;
    var $from = ref.$from;
    var $to = ref.$to;
    var range = $from.blockRange($to, function (node) {
      return node.childCount && node.firstChild.type == itemType;
    });

    if (!range) {
      return false;
    }

    if (!dispatch) {
      return true;
    }

    if ($from.node(range.depth - 1).type == itemType) // Inside a parent list
      {
        return liftToOuterList(state, dispatch, itemType, range);
      } else // Outer list node
      {
        return liftOutOfList(state, dispatch, range);
      }
  };
}

function liftToOuterList(state, dispatch, itemType, range) {
  var tr = state.tr,
      end = range.end,
      endOfList = range.$to.end(range.depth);

  if (end < endOfList) {
    // There are siblings after the lifted items, which must become
    // children of the last item
    tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["ReplaceAroundStep"](end - 1, endOfList, end, endOfList, new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Slice"](prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from(itemType.create(null, range.parent.copy())), 1, 0), 1, true));
    range = new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["NodeRange"](tr.doc.resolve(range.$from.pos), tr.doc.resolve(endOfList), range.depth);
  }

  dispatch(tr.lift(range, Object(prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["liftTarget"])(range)).scrollIntoView());
  return true;
}

function liftOutOfList(state, dispatch, range) {
  var tr = state.tr,
      list = range.parent; // Merge the list items into a single big item

  for (var pos = range.end, i = range.endIndex - 1, e = range.startIndex; i > e; i--) {
    pos -= list.child(i).nodeSize;
    tr["delete"](pos - 1, pos + 1);
  }

  var $start = tr.doc.resolve(range.start),
      item = $start.nodeAfter;

  if (tr.mapping.map(range.end) != range.start + $start.nodeAfter.nodeSize) {
    return false;
  }

  var atStart = range.startIndex == 0,
      atEnd = range.endIndex == list.childCount;
  var parent = $start.node(-1),
      indexBefore = $start.index(-1);

  if (!parent.canReplace(indexBefore + (atStart ? 0 : 1), indexBefore + 1, item.content.append(atEnd ? prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].empty : prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from(list)))) {
    return false;
  }

  var start = $start.pos,
      end = start + item.nodeSize; // Strip off the surrounding list. At the sides where we're not at
  // the end of the list, the existing list is closed. At sides where
  // this is the end, it is overwritten to its end.

  tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["ReplaceAroundStep"](start - (atStart ? 1 : 0), end + (atEnd ? 1 : 0), start + 1, end - 1, new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Slice"]((atStart ? prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].empty : prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from(list.copy(prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].empty))).append(atEnd ? prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].empty : prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from(list.copy(prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].empty))), atStart ? 0 : 1, atEnd ? 0 : 1), atStart ? 0 : 1));
  dispatch(tr.scrollIntoView());
  return true;
} // :: (NodeType) → (state: EditorState, dispatch: ?(tr: Transaction)) → bool
// Create a command to sink the list item around the selection down
// into an inner list.


function sinkListItem(itemType) {
  return function (state, dispatch) {
    var ref = state.selection;
    var $from = ref.$from;
    var $to = ref.$to;
    var range = $from.blockRange($to, function (node) {
      return node.childCount && node.firstChild.type == itemType;
    });

    if (!range) {
      return false;
    }

    var startIndex = range.startIndex;

    if (startIndex == 0) {
      return false;
    }

    var parent = range.parent,
        nodeBefore = parent.child(startIndex - 1);

    if (nodeBefore.type != itemType) {
      return false;
    }

    if (dispatch) {
      var nestedBefore = nodeBefore.lastChild && nodeBefore.lastChild.type == parent.type;
      var inner = prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from(nestedBefore ? itemType.create() : null);
      var slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Slice"](prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from(itemType.create(null, prosemirror_model__WEBPACK_IMPORTED_MODULE_1__["Fragment"].from(parent.type.create(null, inner)))), nestedBefore ? 3 : 1, 0);
      var before = range.start,
          after = range.end;
      dispatch(state.tr.step(new prosemirror_transform__WEBPACK_IMPORTED_MODULE_0__["ReplaceAroundStep"](before - (nestedBefore ? 3 : 1), after, before, after, slice, 1, true)).scrollIntoView());
    }

    return true;
  };
}



/***/ }),

/***/ "./node_modules/prosemirror-state/dist/index.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/prosemirror-state/dist/index.es.js ***!
  \*********************************************************/
/*! exports provided: AllSelection, EditorState, NodeSelection, Plugin, PluginKey, Selection, SelectionRange, TextSelection, Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSelection", function() { return AllSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorState", function() { return EditorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeSelection", function() { return NodeSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginKey", function() { return PluginKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRange", function() { return SelectionRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSelection", function() { return TextSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-model */ "./node_modules/prosemirror-model/dist/index.es.js");
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-transform */ "./node_modules/prosemirror-transform/dist/index.es.js");


var classesById = Object.create(null); // ::- Superclass for editor selections. Every selection type should
// extend this. Should not be instantiated directly.

var Selection = function Selection($anchor, $head, ranges) {
  // :: [SelectionRange]
  // The ranges covered by the selection.
  this.ranges = ranges || [new SelectionRange($anchor.min($head), $anchor.max($head))]; // :: ResolvedPos
  // The resolved anchor of the selection (the side that stays in
  // place when the selection is modified).

  this.$anchor = $anchor; // :: ResolvedPos
  // The resolved head of the selection (the side that moves when
  // the selection is modified).

  this.$head = $head;
};

var prototypeAccessors = {
  anchor: {
    configurable: true
  },
  head: {
    configurable: true
  },
  from: {
    configurable: true
  },
  to: {
    configurable: true
  },
  $from: {
    configurable: true
  },
  $to: {
    configurable: true
  },
  empty: {
    configurable: true
  }
}; // :: number
// The selection's anchor, as an unresolved position.

prototypeAccessors.anchor.get = function () {
  return this.$anchor.pos;
}; // :: number
// The selection's head.


prototypeAccessors.head.get = function () {
  return this.$head.pos;
}; // :: number
// The lower bound of the selection's main range.


prototypeAccessors.from.get = function () {
  return this.$from.pos;
}; // :: number
// The upper bound of the selection's main range.


prototypeAccessors.to.get = function () {
  return this.$to.pos;
}; // :: ResolvedPos
// The resolved lowerbound of the selection's main range.


prototypeAccessors.$from.get = function () {
  return this.ranges[0].$from;
}; // :: ResolvedPos
// The resolved upper bound of the selection's main range.


prototypeAccessors.$to.get = function () {
  return this.ranges[0].$to;
}; // :: bool
// Indicates whether the selection contains any content.


prototypeAccessors.empty.get = function () {
  var ranges = this.ranges;

  for (var i = 0; i < ranges.length; i++) {
    if (ranges[i].$from.pos != ranges[i].$to.pos) {
      return false;
    }
  }

  return true;
}; // eq:: (Selection) → bool
// Test whether the selection is the same as another selection.
// map:: (doc: Node, mapping: Mappable) → Selection
// Map this selection through a [mappable](#transform.Mappable) thing. `doc`
// should be the new document to which we are mapping.
// :: () → Slice
// Get the content of this selection as a slice.


Selection.prototype.content = function content() {
  return this.$from.node(0).slice(this.from, this.to, true);
}; // :: (Transaction, ?Slice)
// Replace the selection with a slice or, if no slice is given,
// delete the selection. Will append to the given transaction.


Selection.prototype.replace = function replace(tr, content) {
  if (content === void 0) content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty; // Put the new selection at the position after the inserted
  // content. When that ended in an inline node, search backwards,
  // to get the position after that node. If not, search forward.

  var lastNode = content.content.lastChild,
      lastParent = null;

  for (var i = 0; i < content.openEnd; i++) {
    lastParent = lastNode;
    lastNode = lastNode.lastChild;
  }

  var mapFrom = tr.steps.length,
      ranges = this.ranges;

  for (var i$1 = 0; i$1 < ranges.length; i$1++) {
    var ref = ranges[i$1];
    var $from = ref.$from;
    var $to = ref.$to;
    var mapping = tr.mapping.slice(mapFrom);
    tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i$1 ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty : content);

    if (i$1 == 0) {
      selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
    }
  }
}; // :: (Transaction, Node)
// Replace the selection with the given node, appending the changes
// to the given transaction.


Selection.prototype.replaceWith = function replaceWith(tr, node) {
  var mapFrom = tr.steps.length,
      ranges = this.ranges;

  for (var i = 0; i < ranges.length; i++) {
    var ref = ranges[i];
    var $from = ref.$from;
    var $to = ref.$to;
    var mapping = tr.mapping.slice(mapFrom);
    var from = mapping.map($from.pos),
        to = mapping.map($to.pos);

    if (i) {
      tr.deleteRange(from, to);
    } else {
      tr.replaceRangeWith(from, to, node);
      selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
    }
  }
}; // toJSON:: () → Object
// Convert the selection to a JSON representation. When implementing
// this for a custom selection class, make sure to give the object a
// `type` property whose value matches the ID under which you
// [registered](#state.Selection^jsonID) your class.
// :: (ResolvedPos, number, ?bool) → ?Selection
// Find a valid cursor or leaf node selection starting at the given
// position and searching back if `dir` is negative, and forward if
// positive. When `textOnly` is true, only consider cursor
// selections. Will return null when no valid selection position is
// found.


Selection.findFrom = function findFrom($pos, dir, textOnly) {
  var inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);

  if (inner) {
    return inner;
  }

  for (var depth = $pos.depth - 1; depth >= 0; depth--) {
    var found = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);

    if (found) {
      return found;
    }
  }
}; // :: (ResolvedPos, ?number) → Selection
// Find a valid cursor or leaf node selection near the given
// position. Searches forward first by default, but if `bias` is
// negative, it will search backwards first.


Selection.near = function near($pos, bias) {
  if (bias === void 0) bias = 1;
  return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
}; // :: (Node) → Selection
// Find the cursor or leaf node selection closest to the start of
// the given document. Will return an
// [`AllSelection`](#state.AllSelection) if no valid position
// exists.


Selection.atStart = function atStart(doc) {
  return findSelectionIn(doc, doc, 0, 0, 1) || new AllSelection(doc);
}; // :: (Node) → Selection
// Find the cursor or leaf node selection closest to the end of the
// given document.


Selection.atEnd = function atEnd(doc) {
  return findSelectionIn(doc, doc, doc.content.size, doc.childCount, -1) || new AllSelection(doc);
}; // :: (Node, Object) → Selection
// Deserialize the JSON representation of a selection. Must be
// implemented for custom classes (as a static class method).


Selection.fromJSON = function fromJSON(doc, json) {
  if (!json || !json.type) {
    throw new RangeError("Invalid input for Selection.fromJSON");
  }

  var cls = classesById[json.type];

  if (!cls) {
    throw new RangeError("No selection type " + json.type + " defined");
  }

  return cls.fromJSON(doc, json);
}; // :: (string, constructor<Selection>)
// To be able to deserialize selections from JSON, custom selection
// classes must register themselves with an ID string, so that they
// can be disambiguated. Try to pick something that's unlikely to
// clash with classes from other modules.


Selection.jsonID = function jsonID(id, selectionClass) {
  if (id in classesById) {
    throw new RangeError("Duplicate use of selection JSON ID " + id);
  }

  classesById[id] = selectionClass;
  selectionClass.prototype.jsonID = id;
  return selectionClass;
}; // :: () → SelectionBookmark
// Get a [bookmark](#state.SelectionBookmark) for this selection,
// which is a value that can be mapped without having access to a
// current document, and later resolved to a real selection for a
// given document again. (This is used mostly by the history to
// track and restore old selections.) The default implementation of
// this method just converts the selection to a text selection and
// returns the bookmark for that.


Selection.prototype.getBookmark = function getBookmark() {
  return TextSelection.between(this.$anchor, this.$head).getBookmark();
};

Object.defineProperties(Selection.prototype, prototypeAccessors); // :: bool
// Controls whether, when a selection of this type is active in the
// browser, the selected range should be visible to the user. Defaults
// to `true`.

Selection.prototype.visible = true; // SelectionBookmark:: interface
// A lightweight, document-independent representation of a selection.
// You can define a custom bookmark type for a custom selection class
// to make the history handle it well.
//
//   map:: (mapping: Mapping) → SelectionBookmark
//   Map the bookmark through a set of changes.
//
//   resolve:: (doc: Node) → Selection
//   Resolve the bookmark to a real selection again. This may need to
//   do some error checking and may fall back to a default (usually
//   [`TextSelection.between`](#state.TextSelection^between)) if
//   mapping made the bookmark invalid.
// ::- Represents a selected range in a document.

var SelectionRange = function SelectionRange($from, $to) {
  // :: ResolvedPos
  // The lower bound of the range.
  this.$from = $from; // :: ResolvedPos
  // The upper bound of the range.

  this.$to = $to;
}; // ::- A text selection represents a classical editor selection, with
// a head (the moving side) and anchor (immobile side), both of which
// point into textblock nodes. It can be empty (a regular cursor
// position).


var TextSelection = /*@__PURE__*/function (Selection) {
  function TextSelection($anchor, $head) {
    if ($head === void 0) $head = $anchor;
    Selection.call(this, $anchor, $head);
  }

  if (Selection) TextSelection.__proto__ = Selection;
  TextSelection.prototype = Object.create(Selection && Selection.prototype);
  TextSelection.prototype.constructor = TextSelection;
  var prototypeAccessors$1 = {
    $cursor: {
      configurable: true
    }
  }; // :: ?ResolvedPos
  // Returns a resolved position if this is a cursor selection (an
  // empty text selection), and null otherwise.

  prototypeAccessors$1.$cursor.get = function () {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  };

  TextSelection.prototype.map = function map(doc, mapping) {
    var $head = doc.resolve(mapping.map(this.head));

    if (!$head.parent.inlineContent) {
      return Selection.near($head);
    }

    var $anchor = doc.resolve(mapping.map(this.anchor));
    return new TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
  };

  TextSelection.prototype.replace = function replace(tr, content) {
    if (content === void 0) content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty;
    Selection.prototype.replace.call(this, tr, content);

    if (content == prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty) {
      var marks = this.$from.marksAcross(this.$to);

      if (marks) {
        tr.ensureMarks(marks);
      }
    }
  };

  TextSelection.prototype.eq = function eq(other) {
    return other instanceof TextSelection && other.anchor == this.anchor && other.head == this.head;
  };

  TextSelection.prototype.getBookmark = function getBookmark() {
    return new TextBookmark(this.anchor, this.head);
  };

  TextSelection.prototype.toJSON = function toJSON() {
    return {
      type: "text",
      anchor: this.anchor,
      head: this.head
    };
  };

  TextSelection.fromJSON = function fromJSON(doc, json) {
    if (typeof json.anchor != "number" || typeof json.head != "number") {
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    }

    return new TextSelection(doc.resolve(json.anchor), doc.resolve(json.head));
  }; // :: (Node, number, ?number) → TextSelection
  // Create a text selection from non-resolved positions.


  TextSelection.create = function create(doc, anchor, head) {
    if (head === void 0) head = anchor;
    var $anchor = doc.resolve(anchor);
    return new this($anchor, head == anchor ? $anchor : doc.resolve(head));
  }; // :: (ResolvedPos, ResolvedPos, ?number) → Selection
  // Return a text selection that spans the given positions or, if
  // they aren't text positions, find a text selection near them.
  // `bias` determines whether the method searches forward (default)
  // or backwards (negative number) first. Will fall back to calling
  // [`Selection.near`](#state.Selection^near) when the document
  // doesn't contain a valid text position.


  TextSelection.between = function between($anchor, $head, bias) {
    var dPos = $anchor.pos - $head.pos;

    if (!bias || dPos) {
      bias = dPos >= 0 ? 1 : -1;
    }

    if (!$head.parent.inlineContent) {
      var found = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);

      if (found) {
        $head = found.$head;
      } else {
        return Selection.near($head, bias);
      }
    }

    if (!$anchor.parent.inlineContent) {
      if (dPos == 0) {
        $anchor = $head;
      } else {
        $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;

        if ($anchor.pos < $head.pos != dPos < 0) {
          $anchor = $head;
        }
      }
    }

    return new TextSelection($anchor, $head);
  };

  Object.defineProperties(TextSelection.prototype, prototypeAccessors$1);
  return TextSelection;
}(Selection);

Selection.jsonID("text", TextSelection);

var TextBookmark = function TextBookmark(anchor, head) {
  this.anchor = anchor;
  this.head = head;
};

TextBookmark.prototype.map = function map(mapping) {
  return new TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
};

TextBookmark.prototype.resolve = function resolve(doc) {
  return TextSelection.between(doc.resolve(this.anchor), doc.resolve(this.head));
}; // ::- A node selection is a selection that points at a single node.
// All nodes marked [selectable](#model.NodeSpec.selectable) can be
// the target of a node selection. In such a selection, `from` and
// `to` point directly before and after the selected node, `anchor`
// equals `from`, and `head` equals `to`..


var NodeSelection = /*@__PURE__*/function (Selection) {
  function NodeSelection($pos) {
    var node = $pos.nodeAfter;
    var $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
    Selection.call(this, $pos, $end); // :: Node The selected node.

    this.node = node;
  }

  if (Selection) NodeSelection.__proto__ = Selection;
  NodeSelection.prototype = Object.create(Selection && Selection.prototype);
  NodeSelection.prototype.constructor = NodeSelection;

  NodeSelection.prototype.map = function map(doc, mapping) {
    var ref = mapping.mapResult(this.anchor);
    var deleted = ref.deleted;
    var pos = ref.pos;
    var $pos = doc.resolve(pos);

    if (deleted) {
      return Selection.near($pos);
    }

    return new NodeSelection($pos);
  };

  NodeSelection.prototype.content = function content() {
    return new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from(this.node), 0, 0);
  };

  NodeSelection.prototype.eq = function eq(other) {
    return other instanceof NodeSelection && other.anchor == this.anchor;
  };

  NodeSelection.prototype.toJSON = function toJSON() {
    return {
      type: "node",
      anchor: this.anchor
    };
  };

  NodeSelection.prototype.getBookmark = function getBookmark() {
    return new NodeBookmark(this.anchor);
  };

  NodeSelection.fromJSON = function fromJSON(doc, json) {
    if (typeof json.anchor != "number") {
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    }

    return new NodeSelection(doc.resolve(json.anchor));
  }; // :: (Node, number) → NodeSelection
  // Create a node selection from non-resolved positions.


  NodeSelection.create = function create(doc, from) {
    return new this(doc.resolve(from));
  }; // :: (Node) → bool
  // Determines whether the given node may be selected as a node
  // selection.


  NodeSelection.isSelectable = function isSelectable(node) {
    return !node.isText && node.type.spec.selectable !== false;
  };

  return NodeSelection;
}(Selection);

NodeSelection.prototype.visible = false;
Selection.jsonID("node", NodeSelection);

var NodeBookmark = function NodeBookmark(anchor) {
  this.anchor = anchor;
};

NodeBookmark.prototype.map = function map(mapping) {
  var ref = mapping.mapResult(this.anchor);
  var deleted = ref.deleted;
  var pos = ref.pos;
  return deleted ? new TextBookmark(pos, pos) : new NodeBookmark(pos);
};

NodeBookmark.prototype.resolve = function resolve(doc) {
  var $pos = doc.resolve(this.anchor),
      node = $pos.nodeAfter;

  if (node && NodeSelection.isSelectable(node)) {
    return new NodeSelection($pos);
  }

  return Selection.near($pos);
}; // ::- A selection type that represents selecting the whole document
// (which can not necessarily be expressed with a text selection, when
// there are for example leaf block nodes at the start or end of the
// document).


var AllSelection = /*@__PURE__*/function (Selection) {
  function AllSelection(doc) {
    Selection.call(this, doc.resolve(0), doc.resolve(doc.content.size));
  }

  if (Selection) AllSelection.__proto__ = Selection;
  AllSelection.prototype = Object.create(Selection && Selection.prototype);
  AllSelection.prototype.constructor = AllSelection;

  AllSelection.prototype.replace = function replace(tr, content) {
    if (content === void 0) content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty;

    if (content == prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty) {
      tr["delete"](0, tr.doc.content.size);
      var sel = Selection.atStart(tr.doc);

      if (!sel.eq(tr.selection)) {
        tr.setSelection(sel);
      }
    } else {
      Selection.prototype.replace.call(this, tr, content);
    }
  };

  AllSelection.prototype.toJSON = function toJSON() {
    return {
      type: "all"
    };
  };

  AllSelection.fromJSON = function fromJSON(doc) {
    return new AllSelection(doc);
  };

  AllSelection.prototype.map = function map(doc) {
    return new AllSelection(doc);
  };

  AllSelection.prototype.eq = function eq(other) {
    return other instanceof AllSelection;
  };

  AllSelection.prototype.getBookmark = function getBookmark() {
    return AllBookmark;
  };

  return AllSelection;
}(Selection);

Selection.jsonID("all", AllSelection);
var AllBookmark = {
  map: function map() {
    return this;
  },
  resolve: function resolve(doc) {
    return new AllSelection(doc);
  }
}; // FIXME we'll need some awareness of text direction when scanning for selections
// Try to find a selection inside the given node. `pos` points at the
// position where the search starts. When `text` is true, only return
// text selections.

function findSelectionIn(doc, node, pos, index, dir, text) {
  if (node.inlineContent) {
    return TextSelection.create(doc, pos);
  }

  for (var i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir) {
    var child = node.child(i);

    if (!child.isAtom) {
      var inner = findSelectionIn(doc, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);

      if (inner) {
        return inner;
      }
    } else if (!text && NodeSelection.isSelectable(child)) {
      return NodeSelection.create(doc, pos - (dir < 0 ? child.nodeSize : 0));
    }

    pos += child.nodeSize * dir;
  }
}

function selectionToInsertionEnd(tr, startLen, bias) {
  var last = tr.steps.length - 1;

  if (last < startLen) {
    return;
  }

  var step = tr.steps[last];

  if (!(step instanceof prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__["ReplaceStep"] || step instanceof prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__["ReplaceAroundStep"])) {
    return;
  }

  var map = tr.mapping.maps[last],
      end;
  map.forEach(function (_from, _to, _newFrom, newTo) {
    if (end == null) {
      end = newTo;
    }
  });
  tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
}

var UPDATED_SEL = 1,
    UPDATED_MARKS = 2,
    UPDATED_SCROLL = 4; // ::- An editor state transaction, which can be applied to a state to
// create an updated state. Use
// [`EditorState.tr`](#state.EditorState.tr) to create an instance.
//
// Transactions track changes to the document (they are a subclass of
// [`Transform`](#transform.Transform)), but also other state changes,
// like selection updates and adjustments of the set of [stored
// marks](#state.EditorState.storedMarks). In addition, you can store
// metadata properties in a transaction, which are extra pieces of
// information that client code or plugins can use to describe what a
// transacion represents, so that they can update their [own
// state](#state.StateField) accordingly.
//
// The [editor view](#view.EditorView) uses a few metadata properties:
// it will attach a property `"pointer"` with the value `true` to
// selection transactions directly caused by mouse or touch input, and
// a `"uiEvent"` property of that may be `"paste"`, `"cut"`, or `"drop"`.

var Transaction = /*@__PURE__*/function (Transform) {
  function Transaction(state) {
    Transform.call(this, state.doc); // :: number
    // The timestamp associated with this transaction, in the same
    // format as `Date.now()`.

    this.time = Date.now();
    this.curSelection = state.selection; // The step count for which the current selection is valid.

    this.curSelectionFor = 0; // :: ?[Mark]
    // The stored marks set by this transaction, if any.

    this.storedMarks = state.storedMarks; // Bitfield to track which aspects of the state were updated by
    // this transaction.

    this.updated = 0; // Object used to store metadata properties for the transaction.

    this.meta = Object.create(null);
  }

  if (Transform) Transaction.__proto__ = Transform;
  Transaction.prototype = Object.create(Transform && Transform.prototype);
  Transaction.prototype.constructor = Transaction;
  var prototypeAccessors = {
    selection: {
      configurable: true
    },
    selectionSet: {
      configurable: true
    },
    storedMarksSet: {
      configurable: true
    },
    isGeneric: {
      configurable: true
    },
    scrolledIntoView: {
      configurable: true
    }
  }; // :: Selection
  // The transaction's current selection. This defaults to the editor
  // selection [mapped](#state.Selection.map) through the steps in the
  // transaction, but can be overwritten with
  // [`setSelection`](#state.Transaction.setSelection).

  prototypeAccessors.selection.get = function () {
    if (this.curSelectionFor < this.steps.length) {
      this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
      this.curSelectionFor = this.steps.length;
    }

    return this.curSelection;
  }; // :: (Selection) → Transaction
  // Update the transaction's current selection. Will determine the
  // selection that the editor gets when the transaction is applied.


  Transaction.prototype.setSelection = function setSelection(selection) {
    if (selection.$from.doc != this.doc) {
      throw new RangeError("Selection passed to setSelection must point at the current document");
    }

    this.curSelection = selection;
    this.curSelectionFor = this.steps.length;
    this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS;
    this.storedMarks = null;
    return this;
  }; // :: bool
  // Whether the selection was explicitly updated by this transaction.


  prototypeAccessors.selectionSet.get = function () {
    return (this.updated & UPDATED_SEL) > 0;
  }; // :: (?[Mark]) → Transaction
  // Set the current stored marks.


  Transaction.prototype.setStoredMarks = function setStoredMarks(marks) {
    this.storedMarks = marks;
    this.updated |= UPDATED_MARKS;
    return this;
  }; // :: ([Mark]) → Transaction
  // Make sure the current stored marks or, if that is null, the marks
  // at the selection, match the given set of marks. Does nothing if
  // this is already the case.


  Transaction.prototype.ensureMarks = function ensureMarks(marks) {
    if (!prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Mark"].sameSet(this.storedMarks || this.selection.$from.marks(), marks)) {
      this.setStoredMarks(marks);
    }

    return this;
  }; // :: (Mark) → Transaction
  // Add a mark to the set of stored marks.


  Transaction.prototype.addStoredMark = function addStoredMark(mark) {
    return this.ensureMarks(mark.addToSet(this.storedMarks || this.selection.$head.marks()));
  }; // :: (union<Mark, MarkType>) → Transaction
  // Remove a mark or mark type from the set of stored marks.


  Transaction.prototype.removeStoredMark = function removeStoredMark(mark) {
    return this.ensureMarks(mark.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }; // :: bool
  // Whether the stored marks were explicitly set for this transaction.


  prototypeAccessors.storedMarksSet.get = function () {
    return (this.updated & UPDATED_MARKS) > 0;
  };

  Transaction.prototype.addStep = function addStep(step, doc) {
    Transform.prototype.addStep.call(this, step, doc);
    this.updated = this.updated & ~UPDATED_MARKS;
    this.storedMarks = null;
  }; // :: (number) → Transaction
  // Update the timestamp for the transaction.


  Transaction.prototype.setTime = function setTime(time) {
    this.time = time;
    return this;
  }; // :: (Slice) → Transaction
  // Replace the current selection with the given slice.


  Transaction.prototype.replaceSelection = function replaceSelection(slice) {
    this.selection.replace(this, slice);
    return this;
  }; // :: (Node, ?bool) → Transaction
  // Replace the selection with the given node. When `inheritMarks` is
  // true and the content is inline, it inherits the marks from the
  // place where it is inserted.


  Transaction.prototype.replaceSelectionWith = function replaceSelectionWith(node, inheritMarks) {
    var selection = this.selection;

    if (inheritMarks !== false) {
      node = node.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Mark"].none));
    }

    selection.replaceWith(this, node);
    return this;
  }; // :: () → Transaction
  // Delete the selection.


  Transaction.prototype.deleteSelection = function deleteSelection() {
    this.selection.replace(this);
    return this;
  }; // :: (string, from: ?number, to: ?number) → Transaction
  // Replace the given range, or the selection if no range is given,
  // with a text node containing the given string.


  Transaction.prototype.insertText = function insertText(text, from, to) {
    if (to === void 0) to = from;
    var schema = this.doc.type.schema;

    if (from == null) {
      if (!text) {
        return this.deleteSelection();
      }

      return this.replaceSelectionWith(schema.text(text), true);
    } else {
      if (!text) {
        return this.deleteRange(from, to);
      }

      var marks = this.storedMarks;

      if (!marks) {
        var $from = this.doc.resolve(from);
        marks = to == from ? $from.marks() : $from.marksAcross(this.doc.resolve(to));
      }

      this.replaceRangeWith(from, to, schema.text(text, marks));

      if (!this.selection.empty) {
        this.setSelection(Selection.near(this.selection.$to));
      }

      return this;
    }
  }; // :: (union<string, Plugin, PluginKey>, any) → Transaction
  // Store a metadata property in this transaction, keyed either by
  // name or by plugin.


  Transaction.prototype.setMeta = function setMeta(key, value) {
    this.meta[typeof key == "string" ? key : key.key] = value;
    return this;
  }; // :: (union<string, Plugin, PluginKey>) → any
  // Retrieve a metadata property for a given name or plugin.


  Transaction.prototype.getMeta = function getMeta(key) {
    return this.meta[typeof key == "string" ? key : key.key];
  }; // :: bool
  // Returns true if this transaction doesn't contain any metadata,
  // and can thus safely be extended.


  prototypeAccessors.isGeneric.get = function () {
    for (var _ in this.meta) {
      return false;
    }

    return true;
  }; // :: () → Transaction
  // Indicate that the editor should scroll the selection into view
  // when updated to the state produced by this transaction.


  Transaction.prototype.scrollIntoView = function scrollIntoView() {
    this.updated |= UPDATED_SCROLL;
    return this;
  };

  prototypeAccessors.scrolledIntoView.get = function () {
    return (this.updated & UPDATED_SCROLL) > 0;
  };

  Object.defineProperties(Transaction.prototype, prototypeAccessors);
  return Transaction;
}(prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__["Transform"]);

function bind(f, self) {
  return !self || !f ? f : f.bind(self);
}

var FieldDesc = function FieldDesc(name, desc, self) {
  this.name = name;
  this.init = bind(desc.init, self);
  this.apply = bind(desc.apply, self);
};

var baseFields = [new FieldDesc("doc", {
  init: function init(config) {
    return config.doc || config.schema.topNodeType.createAndFill();
  },
  apply: function apply(tr) {
    return tr.doc;
  }
}), new FieldDesc("selection", {
  init: function init(config, instance) {
    return config.selection || Selection.atStart(instance.doc);
  },
  apply: function apply(tr) {
    return tr.selection;
  }
}), new FieldDesc("storedMarks", {
  init: function init(config) {
    return config.storedMarks || null;
  },
  apply: function apply(tr, _marks, _old, state) {
    return state.selection.$cursor ? tr.storedMarks : null;
  }
}), new FieldDesc("scrollToSelection", {
  init: function init() {
    return 0;
  },
  apply: function apply(tr, prev) {
    return tr.scrolledIntoView ? prev + 1 : prev;
  }
})]; // Object wrapping the part of a state object that stays the same
// across transactions. Stored in the state's `config` property.

var Configuration = function Configuration(schema, plugins) {
  var this$1 = this;
  this.schema = schema;
  this.fields = baseFields.concat();
  this.plugins = [];
  this.pluginsByKey = Object.create(null);

  if (plugins) {
    plugins.forEach(function (plugin) {
      if (this$1.pluginsByKey[plugin.key]) {
        throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")");
      }

      this$1.plugins.push(plugin);
      this$1.pluginsByKey[plugin.key] = plugin;

      if (plugin.spec.state) {
        this$1.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin));
      }
    });
  }
}; // ::- The state of a ProseMirror editor is represented by an object
// of this type. A state is a persistent data structure—it isn't
// updated, but rather a new state value is computed from an old one
// using the [`apply`](#state.EditorState.apply) method.
//
// A state holds a number of built-in fields, and plugins can
// [define](#state.PluginSpec.state) additional fields.


var EditorState = function EditorState(config) {
  this.config = config;
};

var prototypeAccessors$1 = {
  schema: {
    configurable: true
  },
  plugins: {
    configurable: true
  },
  tr: {
    configurable: true
  }
}; // doc:: Node
// The current document.
// selection:: Selection
// The selection.
// storedMarks:: ?[Mark]
// A set of marks to apply to the next input. Will be null when
// no explicit marks have been set.
// :: Schema
// The schema of the state's document.

prototypeAccessors$1.schema.get = function () {
  return this.config.schema;
}; // :: [Plugin]
// The plugins that are active in this state.


prototypeAccessors$1.plugins.get = function () {
  return this.config.plugins;
}; // :: (Transaction) → EditorState
// Apply the given transaction to produce a new state.


EditorState.prototype.apply = function apply(tr) {
  return this.applyTransaction(tr).state;
}; // : (Transaction) → bool


EditorState.prototype.filterTransaction = function filterTransaction(tr, ignore) {
  if (ignore === void 0) ignore = -1;

  for (var i = 0; i < this.config.plugins.length; i++) {
    if (i != ignore) {
      var plugin = this.config.plugins[i];

      if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this)) {
        return false;
      }
    }
  }

  return true;
}; // :: (Transaction) → {state: EditorState, transactions: [Transaction]}
// Verbose variant of [`apply`](#state.EditorState.apply) that
// returns the precise transactions that were applied (which might
// be influenced by the [transaction
// hooks](#state.PluginSpec.filterTransaction) of
// plugins) along with the new state.


EditorState.prototype.applyTransaction = function applyTransaction(rootTr) {
  if (!this.filterTransaction(rootTr)) {
    return {
      state: this,
      transactions: []
    };
  }

  var trs = [rootTr],
      newState = this.applyInner(rootTr),
      seen = null; // This loop repeatedly gives plugins a chance to respond to
  // transactions as new transactions are added, making sure to only
  // pass the transactions the plugin did not see before.

  for (;;) {
    var haveNew = false;

    for (var i = 0; i < this.config.plugins.length; i++) {
      var plugin = this.config.plugins[i];

      if (plugin.spec.appendTransaction) {
        var n = seen ? seen[i].n : 0,
            oldState = seen ? seen[i].state : this;
        var tr = n < trs.length && plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);

        if (tr && newState.filterTransaction(tr, i)) {
          tr.setMeta("appendedTransaction", rootTr);

          if (!seen) {
            seen = [];

            for (var j = 0; j < this.config.plugins.length; j++) {
              seen.push(j < i ? {
                state: newState,
                n: trs.length
              } : {
                state: this,
                n: 0
              });
            }
          }

          trs.push(tr);
          newState = newState.applyInner(tr);
          haveNew = true;
        }

        if (seen) {
          seen[i] = {
            state: newState,
            n: trs.length
          };
        }
      }
    }

    if (!haveNew) {
      return {
        state: newState,
        transactions: trs
      };
    }
  }
}; // : (Transaction) → EditorState


EditorState.prototype.applyInner = function applyInner(tr) {
  if (!tr.before.eq(this.doc)) {
    throw new RangeError("Applying a mismatched transaction");
  }

  var newInstance = new EditorState(this.config),
      fields = this.config.fields;

  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
  }

  for (var i$1 = 0; i$1 < applyListeners.length; i$1++) {
    applyListeners[i$1](this, tr, newInstance);
  }

  return newInstance;
}; // :: Transaction
// Start a [transaction](#state.Transaction) from this state.


prototypeAccessors$1.tr.get = function () {
  return new Transaction(this);
}; // :: (Object) → EditorState
// Create a new state.
//
// config::- Configuration options. Must contain `schema` or `doc` (or both).
//
//    schema:: ?Schema
//    The schema to use (only relevant if no `doc` is specified).
//
//    doc:: ?Node
//    The starting document.
//
//    selection:: ?Selection
//    A valid selection in the document.
//
//    storedMarks:: ?[Mark]
//    The initial set of [stored marks](#state.EditorState.storedMarks).
//
//    plugins:: ?[Plugin]
//    The plugins that should be active in this state.


EditorState.create = function create(config) {
  var $config = new Configuration(config.doc ? config.doc.type.schema : config.schema, config.plugins);
  var instance = new EditorState($config);

  for (var i = 0; i < $config.fields.length; i++) {
    instance[$config.fields[i].name] = $config.fields[i].init(config, instance);
  }

  return instance;
}; // :: (Object) → EditorState
// Create a new state based on this one, but with an adjusted set of
// active plugins. State fields that exist in both sets of plugins
// are kept unchanged. Those that no longer exist are dropped, and
// those that are new are initialized using their
// [`init`](#state.StateField.init) method, passing in the new
// configuration object..
//
// config::- configuration options
//
//   plugins:: [Plugin]
//   New set of active plugins.


EditorState.prototype.reconfigure = function reconfigure(config) {
  var $config = new Configuration(this.schema, config.plugins);
  var fields = $config.fields,
      instance = new EditorState($config);

  for (var i = 0; i < fields.length; i++) {
    var name = fields[i].name;
    instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config, instance);
  }

  return instance;
}; // :: (?union<Object<Plugin>, string, number>) → Object
// Serialize this state to JSON. If you want to serialize the state
// of plugins, pass an object mapping property names to use in the
// resulting JSON object to plugin objects. The argument may also be
// a string or number, in which case it is ignored, to support the
// way `JSON.stringify` calls `toString` methods.


EditorState.prototype.toJSON = function toJSON(pluginFields) {
  var result = {
    doc: this.doc.toJSON(),
    selection: this.selection.toJSON()
  };

  if (this.storedMarks) {
    result.storedMarks = this.storedMarks.map(function (m) {
      return m.toJSON();
    });
  }

  if (pluginFields && typeof pluginFields == 'object') {
    for (var prop in pluginFields) {
      if (prop == "doc" || prop == "selection") {
        throw new RangeError("The JSON fields `doc` and `selection` are reserved");
      }

      var plugin = pluginFields[prop],
          state = plugin.spec.state;

      if (state && state.toJSON) {
        result[prop] = state.toJSON.call(plugin, this[plugin.key]);
      }
    }
  }

  return result;
}; // :: (Object, Object, ?Object<Plugin>) → EditorState
// Deserialize a JSON representation of a state. `config` should
// have at least a `schema` field, and should contain array of
// plugins to initialize the state with. `pluginFields` can be used
// to deserialize the state of plugins, by associating plugin
// instances with the property names they use in the JSON object.
//
// config::- configuration options
//
//   schema:: Schema
//   The schema to use.
//
//   plugins:: ?[Plugin]
//   The set of active plugins.


EditorState.fromJSON = function fromJSON(config, json, pluginFields) {
  if (!json) {
    throw new RangeError("Invalid input for EditorState.fromJSON");
  }

  if (!config.schema) {
    throw new RangeError("Required config field 'schema' missing");
  }

  var $config = new Configuration(config.schema, config.plugins);
  var instance = new EditorState($config);
  $config.fields.forEach(function (field) {
    if (field.name == "doc") {
      instance.doc = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Node"].fromJSON(config.schema, json.doc);
    } else if (field.name == "selection") {
      instance.selection = Selection.fromJSON(instance.doc, json.selection);
    } else if (field.name == "storedMarks") {
      if (json.storedMarks) {
        instance.storedMarks = json.storedMarks.map(config.schema.markFromJSON);
      }
    } else {
      if (pluginFields) {
        for (var prop in pluginFields) {
          var plugin = pluginFields[prop],
              state = plugin.spec.state;

          if (plugin.key == field.name && state && state.fromJSON && Object.prototype.hasOwnProperty.call(json, prop)) {
            // This field belongs to a plugin mapped to a JSON field, read it from there.
            instance[field.name] = state.fromJSON.call(plugin, config, json[prop], instance);
            return;
          }
        }
      }

      instance[field.name] = field.init(config, instance);
    }
  });
  return instance;
}; // Kludge to allow the view to track mappings between different
// instances of a state.
//
// FIXME this is no longer needed as of prosemirror-view 1.9.0,
// though due to backwards-compat we should probably keep it around
// for a while (if only as a no-op)


EditorState.addApplyListener = function addApplyListener(f) {
  applyListeners.push(f);
};

EditorState.removeApplyListener = function removeApplyListener(f) {
  var found = applyListeners.indexOf(f);

  if (found > -1) {
    applyListeners.splice(found, 1);
  }
};

Object.defineProperties(EditorState.prototype, prototypeAccessors$1);
var applyListeners = []; // PluginSpec:: interface
//
// This is the type passed to the [`Plugin`](#state.Plugin)
// constructor. It provides a definition for a plugin.
//
//   props:: ?EditorProps
//   The [view props](#view.EditorProps) added by this plugin. Props
//   that are functions will be bound to have the plugin instance as
//   their `this` binding.
//
//   state:: ?StateField<any>
//   Allows a plugin to define a [state field](#state.StateField), an
//   extra slot in the state object in which it can keep its own data.
//
//   key:: ?PluginKey
//   Can be used to make this a keyed plugin. You can have only one
//   plugin with a given key in a given state, but it is possible to
//   access the plugin's configuration and state through the key,
//   without having access to the plugin instance object.
//
//   view:: ?(EditorView) → Object
//   When the plugin needs to interact with the editor view, or
//   set something up in the DOM, use this field. The function
//   will be called when the plugin's state is associated with an
//   editor view.
//
//     return::-
//     Should return an object with the following optional
//     properties:
//
//       update:: ?(view: EditorView, prevState: EditorState)
//       Called whenever the view's state is updated.
//
//       destroy:: ?()
//       Called when the view is destroyed or receives a state
//       with different plugins.
//
//   filterTransaction:: ?(Transaction, EditorState) → bool
//   When present, this will be called before a transaction is
//   applied by the state, allowing the plugin to cancel it (by
//   returning false).
//
//   appendTransaction:: ?(transactions: [Transaction], oldState: EditorState, newState: EditorState) → ?Transaction
//   Allows the plugin to append another transaction to be applied
//   after the given array of transactions. When another plugin
//   appends a transaction after this was called, it is called again
//   with the new state and new transactions—but only the new
//   transactions, i.e. it won't be passed transactions that it
//   already saw.

function bindProps(obj, self, target) {
  for (var prop in obj) {
    var val = obj[prop];

    if (val instanceof Function) {
      val = val.bind(self);
    } else if (prop == "handleDOMEvents") {
      val = bindProps(val, self, {});
    }

    target[prop] = val;
  }

  return target;
} // ::- Plugins bundle functionality that can be added to an editor.
// They are part of the [editor state](#state.EditorState) and
// may influence that state and the view that contains it.


var Plugin = function Plugin(spec) {
  // :: EditorProps
  // The [props](#view.EditorProps) exported by this plugin.
  this.props = {};

  if (spec.props) {
    bindProps(spec.props, this, this.props);
  } // :: Object
  // The plugin's [spec object](#state.PluginSpec).


  this.spec = spec;
  this.key = spec.key ? spec.key.key : createKey("plugin");
}; // :: (EditorState) → any
// Extract the plugin's state field from an editor state.


Plugin.prototype.getState = function getState(state) {
  return state[this.key];
}; // StateField:: interface<T>
// A plugin spec may provide a state field (under its
// [`state`](#state.PluginSpec.state) property) of this type, which
// describes the state it wants to keep. Functions provided here are
// always called with the plugin instance as their `this` binding.
//
//   init:: (config: Object, instance: EditorState) → T
//   Initialize the value of the field. `config` will be the object
//   passed to [`EditorState.create`](#state.EditorState^create). Note
//   that `instance` is a half-initialized state instance, and will
//   not have values for plugin fields initialized after this one.
//
//   apply:: (tr: Transaction, value: T, oldState: EditorState, newState: EditorState) → T
//   Apply the given transaction to this state field, producing a new
//   field value. Note that the `newState` argument is again a partially
//   constructed state does not yet contain the state from plugins
//   coming after this one.
//
//   toJSON:: ?(value: T) → *
//   Convert this field to JSON. Optional, can be left off to disable
//   JSON serialization for the field.
//
//   fromJSON:: ?(config: Object, value: *, state: EditorState) → T
//   Deserialize the JSON representation of this field. Note that the
//   `state` argument is again a half-initialized state.


var keys = Object.create(null);

function createKey(name) {
  if (name in keys) {
    return name + "$" + ++keys[name];
  }

  keys[name] = 0;
  return name + "$";
} // ::- A key is used to [tag](#state.PluginSpec.key)
// plugins in a way that makes it possible to find them, given an
// editor state. Assigning a key does mean only one plugin of that
// type can be active in a state.


var PluginKey = function PluginKey(name) {
  if (name === void 0) name = "key";
  this.key = createKey(name);
}; // :: (EditorState) → ?Plugin
// Get the active plugin with this key, if any, from an editor
// state.


PluginKey.prototype.get = function get(state) {
  return state.config.pluginsByKey[this.key];
}; // :: (EditorState) → ?any
// Get the plugin's state from an editor state.


PluginKey.prototype.getState = function getState(state) {
  return state[this.key];
};



/***/ }),

/***/ "./node_modules/prosemirror-transform/dist/index.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/prosemirror-transform/dist/index.es.js ***!
  \*************************************************************/
/*! exports provided: AddMarkStep, MapResult, Mapping, RemoveMarkStep, ReplaceAroundStep, ReplaceStep, Step, StepMap, StepResult, Transform, TransformError, canJoin, canSplit, dropPoint, findWrapping, insertPoint, joinPoint, liftTarget, replaceStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMarkStep", function() { return AddMarkStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapResult", function() { return MapResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapping", function() { return Mapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveMarkStep", function() { return RemoveMarkStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceAroundStep", function() { return ReplaceAroundStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceStep", function() { return ReplaceStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepMap", function() { return StepMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepResult", function() { return StepResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return Transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformError", function() { return TransformError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canJoin", function() { return canJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canSplit", function() { return canSplit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropPoint", function() { return dropPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findWrapping", function() { return findWrapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertPoint", function() { return insertPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinPoint", function() { return joinPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liftTarget", function() { return liftTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceStep", function() { return replaceStep; });
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-model */ "./node_modules/prosemirror-model/dist/index.es.js");
 // Mappable:: interface
// There are several things that positions can be mapped through.
// Such objects conform to this interface.
//
//   map:: (pos: number, assoc: ?number) → number
//   Map a position through this object. When given, `assoc` (should
//   be -1 or 1, defaults to 1) determines with which side the
//   position is associated, which determines in which direction to
//   move when a chunk of content is inserted at the mapped position.
//
//   mapResult:: (pos: number, assoc: ?number) → MapResult
//   Map a position, and return an object containing additional
//   information about the mapping. The result's `deleted` field tells
//   you whether the position was deleted (completely enclosed in a
//   replaced range) during the mapping. When content on only one side
//   is deleted, the position itself is only considered deleted when
//   `assoc` points in the direction of the deleted content.
// Recovery values encode a range index and an offset. They are
// represented as numbers, because tons of them will be created when
// mapping, for example, a large number of decorations. The number's
// lower 16 bits provide the index, the remaining bits the offset.
//
// Note: We intentionally don't use bit shift operators to en- and
// decode these, since those clip to 32 bits, which we might in rare
// cases want to overflow. A 64-bit float can represent 48-bit
// integers precisely.

var lower16 = 0xffff;
var factor16 = Math.pow(2, 16);

function makeRecover(index, offset) {
  return index + offset * factor16;
}

function recoverIndex(value) {
  return value & lower16;
}

function recoverOffset(value) {
  return (value - (value & lower16)) / factor16;
} // ::- An object representing a mapped position with extra
// information.


var MapResult = function MapResult(pos, deleted, recover) {
  if (deleted === void 0) deleted = false;
  if (recover === void 0) recover = null; // :: number The mapped version of the position.

  this.pos = pos; // :: bool Tells you whether the position was deleted, that is,
  // whether the step removed its surroundings from the document.

  this.deleted = deleted;
  this.recover = recover;
}; // :: class extends Mappable
// A map describing the deletions and insertions made by a step, which
// can be used to find the correspondence between positions in the
// pre-step version of a document and the same position in the
// post-step version.


var StepMap = function StepMap(ranges, inverted) {
  if (inverted === void 0) inverted = false;

  if (!ranges.length && StepMap.empty) {
    return StepMap.empty;
  }

  this.ranges = ranges;
  this.inverted = inverted;
};

StepMap.prototype.recover = function recover(value) {
  var diff = 0,
      index = recoverIndex(value);

  if (!this.inverted) {
    for (var i = 0; i < index; i++) {
      diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    }
  }

  return this.ranges[index * 3] + diff + recoverOffset(value);
}; // : (number, ?number) → MapResult


StepMap.prototype.mapResult = function mapResult(pos, assoc) {
  if (assoc === void 0) assoc = 1;
  return this._map(pos, assoc, false);
}; // : (number, ?number) → number


StepMap.prototype.map = function map(pos, assoc) {
  if (assoc === void 0) assoc = 1;
  return this._map(pos, assoc, true);
};

StepMap.prototype._map = function _map(pos, assoc, simple) {
  var diff = 0,
      oldIndex = this.inverted ? 2 : 1,
      newIndex = this.inverted ? 1 : 2;

  for (var i = 0; i < this.ranges.length; i += 3) {
    var start = this.ranges[i] - (this.inverted ? diff : 0);

    if (start > pos) {
      break;
    }

    var oldSize = this.ranges[i + oldIndex],
        newSize = this.ranges[i + newIndex],
        end = start + oldSize;

    if (pos <= end) {
      var side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
      var result = start + diff + (side < 0 ? 0 : newSize);

      if (simple) {
        return result;
      }

      var recover = pos == (assoc < 0 ? start : end) ? null : makeRecover(i / 3, pos - start);
      return new MapResult(result, assoc < 0 ? pos != start : pos != end, recover);
    }

    diff += newSize - oldSize;
  }

  return simple ? pos + diff : new MapResult(pos + diff);
};

StepMap.prototype.touches = function touches(pos, recover) {
  var diff = 0,
      index = recoverIndex(recover);
  var oldIndex = this.inverted ? 2 : 1,
      newIndex = this.inverted ? 1 : 2;

  for (var i = 0; i < this.ranges.length; i += 3) {
    var start = this.ranges[i] - (this.inverted ? diff : 0);

    if (start > pos) {
      break;
    }

    var oldSize = this.ranges[i + oldIndex],
        end = start + oldSize;

    if (pos <= end && i == index * 3) {
      return true;
    }

    diff += this.ranges[i + newIndex] - oldSize;
  }

  return false;
}; // :: ((oldStart: number, oldEnd: number, newStart: number, newEnd: number))
// Calls the given function on each of the changed ranges included in
// this map.


StepMap.prototype.forEach = function forEach(f) {
  var oldIndex = this.inverted ? 2 : 1,
      newIndex = this.inverted ? 1 : 2;

  for (var i = 0, diff = 0; i < this.ranges.length; i += 3) {
    var start = this.ranges[i],
        oldStart = start - (this.inverted ? diff : 0),
        newStart = start + (this.inverted ? 0 : diff);
    var oldSize = this.ranges[i + oldIndex],
        newSize = this.ranges[i + newIndex];
    f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
    diff += newSize - oldSize;
  }
}; // :: () → StepMap
// Create an inverted version of this map. The result can be used to
// map positions in the post-step document to the pre-step document.


StepMap.prototype.invert = function invert() {
  return new StepMap(this.ranges, !this.inverted);
};

StepMap.prototype.toString = function toString() {
  return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
}; // :: (n: number) → StepMap
// Create a map that moves all positions by offset `n` (which may be
// negative). This can be useful when applying steps meant for a
// sub-document to a larger document, or vice-versa.


StepMap.offset = function offset(n) {
  return n == 0 ? StepMap.empty : new StepMap(n < 0 ? [0, -n, 0] : [0, 0, n]);
};

StepMap.empty = new StepMap([]); // :: class extends Mappable
// A mapping represents a pipeline of zero or more [step
// maps](#transform.StepMap). It has special provisions for losslessly
// handling mapping positions through a series of steps in which some
// steps are inverted versions of earlier steps. (This comes up when
// ‘[rebasing](/docs/guide/#transform.rebasing)’ steps for
// collaboration or history management.)

var Mapping = function Mapping(maps, mirror, from, to) {
  // :: [StepMap]
  // The step maps in this mapping.
  this.maps = maps || []; // :: number
  // The starting position in the `maps` array, used when `map` or
  // `mapResult` is called.

  this.from = from || 0; // :: number
  // The end position in the `maps` array.

  this.to = to == null ? this.maps.length : to;
  this.mirror = mirror;
}; // :: (?number, ?number) → Mapping
// Create a mapping that maps only through a part of this one.


Mapping.prototype.slice = function slice(from, to) {
  if (from === void 0) from = 0;
  if (to === void 0) to = this.maps.length;
  return new Mapping(this.maps, this.mirror, from, to);
};

Mapping.prototype.copy = function copy() {
  return new Mapping(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
}; // :: (StepMap, ?number)
// Add a step map to the end of this mapping. If `mirrors` is
// given, it should be the index of the step map that is the mirror
// image of this one.


Mapping.prototype.appendMap = function appendMap(map, mirrors) {
  this.to = this.maps.push(map);

  if (mirrors != null) {
    this.setMirror(this.maps.length - 1, mirrors);
  }
}; // :: (Mapping)
// Add all the step maps in a given mapping to this one (preserving
// mirroring information).


Mapping.prototype.appendMapping = function appendMapping(mapping) {
  for (var i = 0, startSize = this.maps.length; i < mapping.maps.length; i++) {
    var mirr = mapping.getMirror(i);
    this.appendMap(mapping.maps[i], mirr != null && mirr < i ? startSize + mirr : null);
  }
}; // :: (number) → ?number
// Finds the offset of the step map that mirrors the map at the
// given offset, in this mapping (as per the second argument to
// `appendMap`).


Mapping.prototype.getMirror = function getMirror(n) {
  if (this.mirror) {
    for (var i = 0; i < this.mirror.length; i++) {
      if (this.mirror[i] == n) {
        return this.mirror[i + (i % 2 ? -1 : 1)];
      }
    }
  }
};

Mapping.prototype.setMirror = function setMirror(n, m) {
  if (!this.mirror) {
    this.mirror = [];
  }

  this.mirror.push(n, m);
}; // :: (Mapping)
// Append the inverse of the given mapping to this one.


Mapping.prototype.appendMappingInverted = function appendMappingInverted(mapping) {
  for (var i = mapping.maps.length - 1, totalSize = this.maps.length + mapping.maps.length; i >= 0; i--) {
    var mirr = mapping.getMirror(i);
    this.appendMap(mapping.maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : null);
  }
}; // :: () → Mapping
// Create an inverted version of this mapping.


Mapping.prototype.invert = function invert() {
  var inverse = new Mapping();
  inverse.appendMappingInverted(this);
  return inverse;
}; // : (number, ?number) → number
// Map a position through this mapping.


Mapping.prototype.map = function map(pos, assoc) {
  if (assoc === void 0) assoc = 1;

  if (this.mirror) {
    return this._map(pos, assoc, true);
  }

  for (var i = this.from; i < this.to; i++) {
    pos = this.maps[i].map(pos, assoc);
  }

  return pos;
}; // : (number, ?number) → MapResult
// Map a position through this mapping, returning a mapping
// result.


Mapping.prototype.mapResult = function mapResult(pos, assoc) {
  if (assoc === void 0) assoc = 1;
  return this._map(pos, assoc, false);
};

Mapping.prototype._map = function _map(pos, assoc, simple) {
  var deleted = false;

  for (var i = this.from; i < this.to; i++) {
    var map = this.maps[i],
        result = map.mapResult(pos, assoc);

    if (result.recover != null) {
      var corr = this.getMirror(i);

      if (corr != null && corr > i && corr < this.to) {
        i = corr;
        pos = this.maps[corr].recover(result.recover);
        continue;
      }
    }

    if (result.deleted) {
      deleted = true;
    }

    pos = result.pos;
  }

  return simple ? pos : new MapResult(pos, deleted);
};

function TransformError(message) {
  var err = Error.call(this, message);
  err.__proto__ = TransformError.prototype;
  return err;
}

TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError"; // ::- Abstraction to build up and track an array of
// [steps](#transform.Step) representing a document transformation.
//
// Most transforming methods return the `Transform` object itself, so
// that they can be chained.

var Transform = function Transform(doc) {
  // :: Node
  // The current document (the result of applying the steps in the
  // transform).
  this.doc = doc; // :: [Step]
  // The steps in this transform.

  this.steps = []; // :: [Node]
  // The documents before each of the steps.

  this.docs = []; // :: Mapping
  // A mapping with the maps for each of the steps in this transform.

  this.mapping = new Mapping();
};

var prototypeAccessors = {
  before: {
    configurable: true
  },
  docChanged: {
    configurable: true
  }
}; // :: Node The starting document.

prototypeAccessors.before.get = function () {
  return this.docs.length ? this.docs[0] : this.doc;
}; // :: (step: Step) → this
// Apply a new step in this transform, saving the result. Throws an
// error when the step fails.


Transform.prototype.step = function step(object) {
  var result = this.maybeStep(object);

  if (result.failed) {
    throw new TransformError(result.failed);
  }

  return this;
}; // :: (Step) → StepResult
// Try to apply a step in this transformation, ignoring it if it
// fails. Returns the step result.


Transform.prototype.maybeStep = function maybeStep(step) {
  var result = step.apply(this.doc);

  if (!result.failed) {
    this.addStep(step, result.doc);
  }

  return result;
}; // :: bool
// True when the document has been changed (when there are any
// steps).


prototypeAccessors.docChanged.get = function () {
  return this.steps.length > 0;
};

Transform.prototype.addStep = function addStep(step, doc) {
  this.docs.push(this.doc);
  this.steps.push(step);
  this.mapping.appendMap(step.getMap());
  this.doc = doc;
};

Object.defineProperties(Transform.prototype, prototypeAccessors);

function mustOverride() {
  throw new Error("Override me");
}

var stepsByID = Object.create(null); // ::- A step object represents an atomic change. It generally applies
// only to the document it was created for, since the positions
// stored in it will only make sense for that document.
//
// New steps are defined by creating classes that extend `Step`,
// overriding the `apply`, `invert`, `map`, `getMap` and `fromJSON`
// methods, and registering your class with a unique
// JSON-serialization identifier using
// [`Step.jsonID`](#transform.Step^jsonID).

var Step = function Step() {};

Step.prototype.apply = function apply(_doc) {
  return mustOverride();
}; // :: () → StepMap
// Get the step map that represents the changes made by this step,
// and which can be used to transform between positions in the old
// and the new document.


Step.prototype.getMap = function getMap() {
  return StepMap.empty;
}; // :: (doc: Node) → Step
// Create an inverted version of this step. Needs the document as it
// was before the step as argument.


Step.prototype.invert = function invert(_doc) {
  return mustOverride();
}; // :: (mapping: Mappable) → ?Step
// Map this step through a mappable thing, returning either a
// version of that step with its positions adjusted, or `null` if
// the step was entirely deleted by the mapping.


Step.prototype.map = function map(_mapping) {
  return mustOverride();
}; // :: (other: Step) → ?Step
// Try to merge this step with another one, to be applied directly
// after it. Returns the merged step when possible, null if the
// steps can't be merged.


Step.prototype.merge = function merge(_other) {
  return null;
}; // :: () → Object
// Create a JSON-serializeable representation of this step. When
// defining this for a custom subclass, make sure the result object
// includes the step type's [JSON id](#transform.Step^jsonID) under
// the `stepType` property.


Step.prototype.toJSON = function toJSON() {
  return mustOverride();
}; // :: (Schema, Object) → Step
// Deserialize a step from its JSON representation. Will call
// through to the step class' own implementation of this method.


Step.fromJSON = function fromJSON(schema, json) {
  if (!json || !json.stepType) {
    throw new RangeError("Invalid input for Step.fromJSON");
  }

  var type = stepsByID[json.stepType];

  if (!type) {
    throw new RangeError("No step type " + json.stepType + " defined");
  }

  return type.fromJSON(schema, json);
}; // :: (string, constructor<Step>)
// To be able to serialize steps to JSON, each step needs a string
// ID to attach to its JSON representation. Use this method to
// register an ID for your step classes. Try to pick something
// that's unlikely to clash with steps from other modules.


Step.jsonID = function jsonID(id, stepClass) {
  if (id in stepsByID) {
    throw new RangeError("Duplicate use of step JSON ID " + id);
  }

  stepsByID[id] = stepClass;
  stepClass.prototype.jsonID = id;
  return stepClass;
}; // ::- The result of [applying](#transform.Step.apply) a step. Contains either a
// new document or a failure value.


var StepResult = function StepResult(doc, failed) {
  // :: ?Node The transformed document.
  this.doc = doc; // :: ?string Text providing information about a failed step.

  this.failed = failed;
}; // :: (Node) → StepResult
// Create a successful step result.


StepResult.ok = function ok(doc) {
  return new StepResult(doc, null);
}; // :: (string) → StepResult
// Create a failed step result.


StepResult.fail = function fail(message) {
  return new StepResult(null, message);
}; // :: (Node, number, number, Slice) → StepResult
// Call [`Node.replace`](#model.Node.replace) with the given
// arguments. Create a successful result if it succeeds, and a
// failed one if it throws a `ReplaceError`.


StepResult.fromReplace = function fromReplace(doc, from, to, slice) {
  try {
    return StepResult.ok(doc.replace(from, to, slice));
  } catch (e) {
    if (e instanceof prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["ReplaceError"]) {
      return StepResult.fail(e.message);
    }

    throw e;
  }
}; // ::- Replace a part of the document with a slice of new content.


var ReplaceStep = /*@__PURE__*/function (Step) {
  function ReplaceStep(from, to, slice, structure) {
    Step.call(this); // :: number
    // The start position of the replaced range.

    this.from = from; // :: number
    // The end position of the replaced range.

    this.to = to; // :: Slice
    // The slice to insert.

    this.slice = slice;
    this.structure = !!structure;
  }

  if (Step) ReplaceStep.__proto__ = Step;
  ReplaceStep.prototype = Object.create(Step && Step.prototype);
  ReplaceStep.prototype.constructor = ReplaceStep;

  ReplaceStep.prototype.apply = function apply(doc) {
    if (this.structure && contentBetween(doc, this.from, this.to)) {
      return StepResult.fail("Structure replace would overwrite content");
    }

    return StepResult.fromReplace(doc, this.from, this.to, this.slice);
  };

  ReplaceStep.prototype.getMap = function getMap() {
    return new StepMap([this.from, this.to - this.from, this.slice.size]);
  };

  ReplaceStep.prototype.invert = function invert(doc) {
    return new ReplaceStep(this.from, this.from + this.slice.size, doc.slice(this.from, this.to));
  };

  ReplaceStep.prototype.map = function map(mapping) {
    var from = mapping.mapResult(this.from, 1),
        to = mapping.mapResult(this.to, -1);

    if (from.deleted && to.deleted) {
      return null;
    }

    return new ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice);
  };

  ReplaceStep.prototype.merge = function merge(other) {
    if (!(other instanceof ReplaceStep) || other.structure || this.structure) {
      return null;
    }

    if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
      var slice = this.slice.size + other.slice.size == 0 ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty : new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
      return new ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure);
    } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
      var slice$1 = this.slice.size + other.slice.size == 0 ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty : new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
      return new ReplaceStep(other.from, this.to, slice$1, this.structure);
    } else {
      return null;
    }
  };

  ReplaceStep.prototype.toJSON = function toJSON() {
    var json = {
      stepType: "replace",
      from: this.from,
      to: this.to
    };

    if (this.slice.size) {
      json.slice = this.slice.toJSON();
    }

    if (this.structure) {
      json.structure = true;
    }

    return json;
  };

  ReplaceStep.fromJSON = function fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number") {
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    }

    return new ReplaceStep(json.from, json.to, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].fromJSON(schema, json.slice), !!json.structure);
  };

  return ReplaceStep;
}(Step);

Step.jsonID("replace", ReplaceStep); // ::- Replace a part of the document with a slice of content, but
// preserve a range of the replaced content by moving it into the
// slice.

var ReplaceAroundStep = /*@__PURE__*/function (Step) {
  function ReplaceAroundStep(from, to, gapFrom, gapTo, slice, insert, structure) {
    Step.call(this); // :: number
    // The start position of the replaced range.

    this.from = from; // :: number
    // The end position of the replaced range.

    this.to = to; // :: number
    // The start of preserved range.

    this.gapFrom = gapFrom; // :: number
    // The end of preserved range.

    this.gapTo = gapTo; // :: Slice
    // The slice to insert.

    this.slice = slice; // :: number
    // The position in the slice where the preserved range should be
    // inserted.

    this.insert = insert;
    this.structure = !!structure;
  }

  if (Step) ReplaceAroundStep.__proto__ = Step;
  ReplaceAroundStep.prototype = Object.create(Step && Step.prototype);
  ReplaceAroundStep.prototype.constructor = ReplaceAroundStep;

  ReplaceAroundStep.prototype.apply = function apply(doc) {
    if (this.structure && (contentBetween(doc, this.from, this.gapFrom) || contentBetween(doc, this.gapTo, this.to))) {
      return StepResult.fail("Structure gap-replace would overwrite content");
    }

    var gap = doc.slice(this.gapFrom, this.gapTo);

    if (gap.openStart || gap.openEnd) {
      return StepResult.fail("Gap is not a flat range");
    }

    var inserted = this.slice.insertAt(this.insert, gap.content);

    if (!inserted) {
      return StepResult.fail("Content does not fit in gap");
    }

    return StepResult.fromReplace(doc, this.from, this.to, inserted);
  };

  ReplaceAroundStep.prototype.getMap = function getMap() {
    return new StepMap([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
  };

  ReplaceAroundStep.prototype.invert = function invert(doc) {
    var gap = this.gapTo - this.gapFrom;
    return new ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  };

  ReplaceAroundStep.prototype.map = function map(mapping) {
    var from = mapping.mapResult(this.from, 1),
        to = mapping.mapResult(this.to, -1);
    var gapFrom = mapping.map(this.gapFrom, -1),
        gapTo = mapping.map(this.gapTo, 1);

    if (from.deleted && to.deleted || gapFrom < from.pos || gapTo > to.pos) {
      return null;
    }

    return new ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
  };

  ReplaceAroundStep.prototype.toJSON = function toJSON() {
    var json = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };

    if (this.slice.size) {
      json.slice = this.slice.toJSON();
    }

    if (this.structure) {
      json.structure = true;
    }

    return json;
  };

  ReplaceAroundStep.fromJSON = function fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number") {
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    }

    return new ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].fromJSON(schema, json.slice), json.insert, !!json.structure);
  };

  return ReplaceAroundStep;
}(Step);

Step.jsonID("replaceAround", ReplaceAroundStep);

function contentBetween(doc, from, to) {
  var $from = doc.resolve(from),
      dist = to - from,
      depth = $from.depth;

  while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
    depth--;
    dist--;
  }

  if (dist > 0) {
    var next = $from.node(depth).maybeChild($from.indexAfter(depth));

    while (dist > 0) {
      if (!next || next.isLeaf) {
        return true;
      }

      next = next.firstChild;
      dist--;
    }
  }

  return false;
}

function canCut(node, start, end) {
  return (start == 0 || node.canReplace(start, node.childCount)) && (end == node.childCount || node.canReplace(0, end));
} // :: (NodeRange) → ?number
// Try to find a target depth to which the content in the given range
// can be lifted. Will not go across
// [isolating](#model.NodeSpec.isolating) parent nodes.


function liftTarget(range) {
  var parent = range.parent;
  var content = parent.content.cutByIndex(range.startIndex, range.endIndex);

  for (var depth = range.depth;; --depth) {
    var node = range.$from.node(depth);
    var index = range.$from.index(depth),
        endIndex = range.$to.indexAfter(depth);

    if (depth < range.depth && node.canReplace(index, endIndex, content)) {
      return depth;
    }

    if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex)) {
      break;
    }
  }
} // :: (NodeRange, number) → this
// Split the content in the given range off from its parent, if there
// is sibling content before or after it, and move it up the tree to
// the depth specified by `target`. You'll probably want to use
// [`liftTarget`](#transform.liftTarget) to compute `target`, to make
// sure the lift is valid.


Transform.prototype.lift = function (range, target) {
  var $from = range.$from;
  var $to = range.$to;
  var depth = range.depth;
  var gapStart = $from.before(depth + 1),
      gapEnd = $to.after(depth + 1);
  var start = gapStart,
      end = gapEnd;
  var before = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].empty,
      openStart = 0;

  for (var d = depth, splitting = false; d > target; d--) {
    if (splitting || $from.index(d) > 0) {
      splitting = true;
      before = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from($from.node(d).copy(before));
      openStart++;
    } else {
      start--;
    }
  }

  var after = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].empty,
      openEnd = 0;

  for (var d$1 = depth, splitting$1 = false; d$1 > target; d$1--) {
    if (splitting$1 || $to.after(d$1 + 1) < $to.end(d$1)) {
      splitting$1 = true;
      after = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from($to.node(d$1).copy(after));
      openEnd++;
    } else {
      end++;
    }
  }

  return this.step(new ReplaceAroundStep(start, end, gapStart, gapEnd, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](before.append(after), openStart, openEnd), before.size - openStart, true));
}; // :: (NodeRange, NodeType, ?Object, ?NodeRange) → ?[{type: NodeType, attrs: ?Object}]
// Try to find a valid way to wrap the content in the given range in a
// node of the given type. May introduce extra nodes around and inside
// the wrapper node, if necessary. Returns null if no valid wrapping
// could be found. When `innerRange` is given, that range's content is
// used as the content to fit into the wrapping, instead of the
// content of `range`.


function findWrapping(range, nodeType, attrs, innerRange) {
  if (innerRange === void 0) innerRange = range;
  var around = findWrappingOutside(range, nodeType);
  var inner = around && findWrappingInside(innerRange, nodeType);

  if (!inner) {
    return null;
  }

  return around.map(withAttrs).concat({
    type: nodeType,
    attrs: attrs
  }).concat(inner.map(withAttrs));
}

function withAttrs(type) {
  return {
    type: type,
    attrs: null
  };
}

function findWrappingOutside(range, type) {
  var parent = range.parent;
  var startIndex = range.startIndex;
  var endIndex = range.endIndex;
  var around = parent.contentMatchAt(startIndex).findWrapping(type);

  if (!around) {
    return null;
  }

  var outer = around.length ? around[0] : type;
  return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
}

function findWrappingInside(range, type) {
  var parent = range.parent;
  var startIndex = range.startIndex;
  var endIndex = range.endIndex;
  var inner = parent.child(startIndex);
  var inside = type.contentMatch.findWrapping(inner.type);

  if (!inside) {
    return null;
  }

  var lastType = inside.length ? inside[inside.length - 1] : type;
  var innerMatch = lastType.contentMatch;

  for (var i = startIndex; innerMatch && i < endIndex; i++) {
    innerMatch = innerMatch.matchType(parent.child(i).type);
  }

  if (!innerMatch || !innerMatch.validEnd) {
    return null;
  }

  return inside;
} // :: (NodeRange, [{type: NodeType, attrs: ?Object}]) → this
// Wrap the given [range](#model.NodeRange) in the given set of wrappers.
// The wrappers are assumed to be valid in this position, and should
// probably be computed with [`findWrapping`](#transform.findWrapping).


Transform.prototype.wrap = function (range, wrappers) {
  var content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].empty;

  for (var i = wrappers.length - 1; i >= 0; i--) {
    if (content.size) {
      var match = wrappers[i].type.contentMatch.matchFragment(content);

      if (!match || !match.validEnd) {
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
      }
    }

    content = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from(wrappers[i].type.create(wrappers[i].attrs, content));
  }

  var start = range.start,
      end = range.end;
  return this.step(new ReplaceAroundStep(start, end, start, end, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](content, 0, 0), wrappers.length, true));
}; // :: (number, ?number, NodeType, ?Object) → this
// Set the type of all textblocks (partly) between `from` and `to` to
// the given node type with the given attributes.


Transform.prototype.setBlockType = function (from, to, type, attrs) {
  var this$1 = this;
  if (to === void 0) to = from;

  if (!type.isTextblock) {
    throw new RangeError("Type given to setBlockType should be a textblock");
  }

  var mapFrom = this.steps.length;
  this.doc.nodesBetween(from, to, function (node, pos) {
    if (node.isTextblock && !node.hasMarkup(type, attrs) && canChangeType(this$1.doc, this$1.mapping.slice(mapFrom).map(pos), type)) {
      // Ensure all markup that isn't allowed in the new node type is cleared
      this$1.clearIncompatible(this$1.mapping.slice(mapFrom).map(pos, 1), type);
      var mapping = this$1.mapping.slice(mapFrom);
      var startM = mapping.map(pos, 1),
          endM = mapping.map(pos + node.nodeSize, 1);
      this$1.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from(type.create(attrs, null, node.marks)), 0, 0), 1, true));
      return false;
    }
  });
  return this;
};

function canChangeType(doc, pos, type) {
  var $pos = doc.resolve(pos),
      index = $pos.index();
  return $pos.parent.canReplaceWith(index, index + 1, type);
} // :: (number, ?NodeType, ?Object, ?[Mark]) → this
// Change the type, attributes, and/or marks of the node at `pos`.
// When `type` isn't given, the existing node type is preserved,


Transform.prototype.setNodeMarkup = function (pos, type, attrs, marks) {
  var node = this.doc.nodeAt(pos);

  if (!node) {
    throw new RangeError("No node at given position");
  }

  if (!type) {
    type = node.type;
  }

  var newNode = type.create(attrs, null, marks || node.marks);

  if (node.isLeaf) {
    return this.replaceWith(pos, pos + node.nodeSize, newNode);
  }

  if (!type.validContent(node.content)) {
    throw new RangeError("Invalid content for node type " + type.name);
  }

  return this.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from(newNode), 0, 0), 1, true));
}; // :: (Node, number, number, ?[?{type: NodeType, attrs: ?Object}]) → bool
// Check whether splitting at the given position is allowed.


function canSplit(doc, pos, depth, typesAfter) {
  if (depth === void 0) depth = 1;
  var $pos = doc.resolve(pos),
      base = $pos.depth - depth;
  var innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;

  if (base < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) {
    return false;
  }

  for (var d = $pos.depth - 1, i = depth - 2; d > base; d--, i--) {
    var node = $pos.node(d),
        index$1 = $pos.index(d);

    if (node.type.spec.isolating) {
      return false;
    }

    var rest = node.content.cutByIndex(index$1, node.childCount);
    var after = typesAfter && typesAfter[i] || node;

    if (after != node) {
      rest = rest.replaceChild(0, after.type.create(after.attrs));
    }

    if (!node.canReplace(index$1 + 1, node.childCount) || !after.type.validContent(rest)) {
      return false;
    }
  }

  var index = $pos.indexAfter(base);
  var baseType = typesAfter && typesAfter[0];
  return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type);
} // :: (number, ?number, ?[?{type: NodeType, attrs: ?Object}]) → this
// Split the node at the given position, and optionally, if `depth` is
// greater than one, any number of nodes above that. By default, the
// parts split off will inherit the node type of the original node.
// This can be changed by passing an array of types and attributes to
// use after the split.


Transform.prototype.split = function (pos, depth, typesAfter) {
  if (depth === void 0) depth = 1;
  var $pos = this.doc.resolve(pos),
      before = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].empty,
      after = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].empty;

  for (var d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--) {
    before = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from($pos.node(d).copy(before));
    var typeAfter = typesAfter && typesAfter[i];
    after = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
  }

  return this.step(new ReplaceStep(pos, pos, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](before.append(after), depth, depth), true));
}; // :: (Node, number) → bool
// Test whether the blocks before and after a given position can be
// joined.


function canJoin(doc, pos) {
  var $pos = doc.resolve(pos),
      index = $pos.index();
  return joinable($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index, index + 1);
}

function joinable(a, b) {
  return a && b && !a.isLeaf && a.canAppend(b);
} // :: (Node, number, ?number) → ?number
// Find an ancestor of the given position that can be joined to the
// block before (or after if `dir` is positive). Returns the joinable
// point, if any.


function joinPoint(doc, pos, dir) {
  if (dir === void 0) dir = -1;
  var $pos = doc.resolve(pos);

  for (var d = $pos.depth;; d--) {
    var before = void 0,
        after = void 0,
        index = $pos.index(d);

    if (d == $pos.depth) {
      before = $pos.nodeBefore;
      after = $pos.nodeAfter;
    } else if (dir > 0) {
      before = $pos.node(d + 1);
      index++;
      after = $pos.node(d).maybeChild(index);
    } else {
      before = $pos.node(d).maybeChild(index - 1);
      after = $pos.node(d + 1);
    }

    if (before && !before.isTextblock && joinable(before, after) && $pos.node(d).canReplace(index, index + 1)) {
      return pos;
    }

    if (d == 0) {
      break;
    }

    pos = dir < 0 ? $pos.before(d) : $pos.after(d);
  }
} // :: (number, ?number) → this
// Join the blocks around the given position. If depth is 2, their
// last and first siblings are also joined, and so on.


Transform.prototype.join = function (pos, depth) {
  if (depth === void 0) depth = 1;
  var step = new ReplaceStep(pos - depth, pos + depth, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty, true);
  return this.step(step);
}; // :: (Node, number, NodeType) → ?number
// Try to find a point where a node of the given type can be inserted
// near `pos`, by searching up the node hierarchy when `pos` itself
// isn't a valid place but is at the start or end of a node. Return
// null if no position was found.


function insertPoint(doc, pos, nodeType) {
  var $pos = doc.resolve(pos);

  if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) {
    return pos;
  }

  if ($pos.parentOffset == 0) {
    for (var d = $pos.depth - 1; d >= 0; d--) {
      var index = $pos.index(d);

      if ($pos.node(d).canReplaceWith(index, index, nodeType)) {
        return $pos.before(d + 1);
      }

      if (index > 0) {
        return null;
      }
    }
  }

  if ($pos.parentOffset == $pos.parent.content.size) {
    for (var d$1 = $pos.depth - 1; d$1 >= 0; d$1--) {
      var index$1 = $pos.indexAfter(d$1);

      if ($pos.node(d$1).canReplaceWith(index$1, index$1, nodeType)) {
        return $pos.after(d$1 + 1);
      }

      if (index$1 < $pos.node(d$1).childCount) {
        return null;
      }
    }
  }
} // :: (Node, number, Slice) → ?number
// Finds a position at or around the given position where the given
// slice can be inserted. Will look at parent nodes' nearest boundary
// and try there, even if the original position wasn't directly at the
// start or end of that node. Returns null when no position was found.


function dropPoint(doc, pos, slice) {
  var $pos = doc.resolve(pos);

  if (!slice.content.size) {
    return pos;
  }

  var content = slice.content;

  for (var i = 0; i < slice.openStart; i++) {
    content = content.firstChild.content;
  }

  for (var pass = 1; pass <= (slice.openStart == 0 && slice.size ? 2 : 1); pass++) {
    for (var d = $pos.depth; d >= 0; d--) {
      var bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
      var insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
      var parent = $pos.node(d),
          fits = false;

      if (pass == 1) {
        fits = parent.canReplace(insertPos, insertPos, content);
      } else {
        var wrapping = parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);
        fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
      }

      if (fits) {
        return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
      }
    }
  }

  return null;
}

function mapFragment(fragment, f, parent) {
  var mapped = [];

  for (var i = 0; i < fragment.childCount; i++) {
    var child = fragment.child(i);

    if (child.content.size) {
      child = child.copy(mapFragment(child.content, f, child));
    }

    if (child.isInline) {
      child = f(child, parent, i);
    }

    mapped.push(child);
  }

  return prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].fromArray(mapped);
} // ::- Add a mark to all inline content between two positions.


var AddMarkStep = /*@__PURE__*/function (Step) {
  function AddMarkStep(from, to, mark) {
    Step.call(this); // :: number
    // The start of the marked range.

    this.from = from; // :: number
    // The end of the marked range.

    this.to = to; // :: Mark
    // The mark to add.

    this.mark = mark;
  }

  if (Step) AddMarkStep.__proto__ = Step;
  AddMarkStep.prototype = Object.create(Step && Step.prototype);
  AddMarkStep.prototype.constructor = AddMarkStep;

  AddMarkStep.prototype.apply = function apply(doc) {
    var this$1 = this;
    var oldSlice = doc.slice(this.from, this.to),
        $from = doc.resolve(this.from);
    var parent = $from.node($from.sharedDepth(this.to));
    var slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](mapFragment(oldSlice.content, function (node, parent) {
      if (!node.isAtom || !parent.type.allowsMarkType(this$1.mark.type)) {
        return node;
      }

      return node.mark(this$1.mark.addToSet(node.marks));
    }, parent), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice);
  };

  AddMarkStep.prototype.invert = function invert() {
    return new RemoveMarkStep(this.from, this.to, this.mark);
  };

  AddMarkStep.prototype.map = function map(mapping) {
    var from = mapping.mapResult(this.from, 1),
        to = mapping.mapResult(this.to, -1);

    if (from.deleted && to.deleted || from.pos >= to.pos) {
      return null;
    }

    return new AddMarkStep(from.pos, to.pos, this.mark);
  };

  AddMarkStep.prototype.merge = function merge(other) {
    if (other instanceof AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) {
      return new AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    }
  };

  AddMarkStep.prototype.toJSON = function toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  };

  AddMarkStep.fromJSON = function fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number") {
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    }

    return new AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
  };

  return AddMarkStep;
}(Step);

Step.jsonID("addMark", AddMarkStep); // ::- Remove a mark from all inline content between two positions.

var RemoveMarkStep = /*@__PURE__*/function (Step) {
  function RemoveMarkStep(from, to, mark) {
    Step.call(this); // :: number
    // The start of the unmarked range.

    this.from = from; // :: number
    // The end of the unmarked range.

    this.to = to; // :: Mark
    // The mark to remove.

    this.mark = mark;
  }

  if (Step) RemoveMarkStep.__proto__ = Step;
  RemoveMarkStep.prototype = Object.create(Step && Step.prototype);
  RemoveMarkStep.prototype.constructor = RemoveMarkStep;

  RemoveMarkStep.prototype.apply = function apply(doc) {
    var this$1 = this;
    var oldSlice = doc.slice(this.from, this.to);
    var slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](mapFragment(oldSlice.content, function (node) {
      return node.mark(this$1.mark.removeFromSet(node.marks));
    }), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice);
  };

  RemoveMarkStep.prototype.invert = function invert() {
    return new AddMarkStep(this.from, this.to, this.mark);
  };

  RemoveMarkStep.prototype.map = function map(mapping) {
    var from = mapping.mapResult(this.from, 1),
        to = mapping.mapResult(this.to, -1);

    if (from.deleted && to.deleted || from.pos >= to.pos) {
      return null;
    }

    return new RemoveMarkStep(from.pos, to.pos, this.mark);
  };

  RemoveMarkStep.prototype.merge = function merge(other) {
    if (other instanceof RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) {
      return new RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    }
  };

  RemoveMarkStep.prototype.toJSON = function toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  };

  RemoveMarkStep.fromJSON = function fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number") {
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    }

    return new RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
  };

  return RemoveMarkStep;
}(Step);

Step.jsonID("removeMark", RemoveMarkStep); // :: (number, number, Mark) → this
// Add the given mark to the inline content between `from` and `to`.

Transform.prototype.addMark = function (from, to, mark) {
  var this$1 = this;
  var removed = [],
      added = [],
      removing = null,
      adding = null;
  this.doc.nodesBetween(from, to, function (node, pos, parent) {
    if (!node.isInline) {
      return;
    }

    var marks = node.marks;

    if (!mark.isInSet(marks) && parent.type.allowsMarkType(mark.type)) {
      var start = Math.max(pos, from),
          end = Math.min(pos + node.nodeSize, to);
      var newSet = mark.addToSet(marks);

      for (var i = 0; i < marks.length; i++) {
        if (!marks[i].isInSet(newSet)) {
          if (removing && removing.to == start && removing.mark.eq(marks[i])) {
            removing.to = end;
          } else {
            removed.push(removing = new RemoveMarkStep(start, end, marks[i]));
          }
        }
      }

      if (adding && adding.to == start) {
        adding.to = end;
      } else {
        added.push(adding = new AddMarkStep(start, end, mark));
      }
    }
  });
  removed.forEach(function (s) {
    return this$1.step(s);
  });
  added.forEach(function (s) {
    return this$1.step(s);
  });
  return this;
}; // :: (number, number, ?union<Mark, MarkType>) → this
// Remove marks from inline nodes between `from` and `to`. When `mark`
// is a single mark, remove precisely that mark. When it is a mark type,
// remove all marks of that type. When it is null, remove all marks of
// any type.


Transform.prototype.removeMark = function (from, to, mark) {
  var this$1 = this;
  if (mark === void 0) mark = null;
  var matched = [],
      step = 0;
  this.doc.nodesBetween(from, to, function (node, pos) {
    if (!node.isInline) {
      return;
    }

    step++;
    var toRemove = null;

    if (mark instanceof prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["MarkType"]) {
      var set = node.marks,
          found;

      while (found = mark.isInSet(set)) {
        (toRemove || (toRemove = [])).push(found);
        set = found.removeFromSet(set);
      }
    } else if (mark) {
      if (mark.isInSet(node.marks)) {
        toRemove = [mark];
      }
    } else {
      toRemove = node.marks;
    }

    if (toRemove && toRemove.length) {
      var end = Math.min(pos + node.nodeSize, to);

      for (var i = 0; i < toRemove.length; i++) {
        var style = toRemove[i],
            found$1 = void 0;

        for (var j = 0; j < matched.length; j++) {
          var m = matched[j];

          if (m.step == step - 1 && style.eq(matched[j].style)) {
            found$1 = m;
          }
        }

        if (found$1) {
          found$1.to = end;
          found$1.step = step;
        } else {
          matched.push({
            style: style,
            from: Math.max(pos, from),
            to: end,
            step: step
          });
        }
      }
    }
  });
  matched.forEach(function (m) {
    return this$1.step(new RemoveMarkStep(m.from, m.to, m.style));
  });
  return this;
}; // :: (number, NodeType, ?ContentMatch) → this
// Removes all marks and nodes from the content of the node at `pos`
// that don't match the given new parent node type. Accepts an
// optional starting [content match](#model.ContentMatch) as third
// argument.


Transform.prototype.clearIncompatible = function (pos, parentType, match) {
  if (match === void 0) match = parentType.contentMatch;
  var node = this.doc.nodeAt(pos);
  var delSteps = [],
      cur = pos + 1;

  for (var i = 0; i < node.childCount; i++) {
    var child = node.child(i),
        end = cur + child.nodeSize;
    var allowed = match.matchType(child.type, child.attrs);

    if (!allowed) {
      delSteps.push(new ReplaceStep(cur, end, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty));
    } else {
      match = allowed;

      for (var j = 0; j < child.marks.length; j++) {
        if (!parentType.allowsMarkType(child.marks[j].type)) {
          this.step(new RemoveMarkStep(cur, end, child.marks[j]));
        }
      }
    }

    cur = end;
  }

  if (!match.validEnd) {
    var fill = match.fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].empty, true);
    this.replace(cur, cur, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](fill, 0, 0));
  }

  for (var i$1 = delSteps.length - 1; i$1 >= 0; i$1--) {
    this.step(delSteps[i$1]);
  }

  return this;
}; // :: (Node, number, ?number, ?Slice) → ?Step
// ‘Fit’ a slice into a given position in the document, producing a
// [step](#transform.Step) that inserts it. Will return null if
// there's no meaningful way to insert the slice here, or inserting it
// would be a no-op (an empty slice over an empty range).


function replaceStep(doc, from, to, slice) {
  if (to === void 0) to = from;
  if (slice === void 0) slice = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty;

  if (from == to && !slice.size) {
    return null;
  }

  var $from = doc.resolve(from),
      $to = doc.resolve(to); // Optimization -- avoid work if it's obvious that it's not needed.

  if (fitsTrivially($from, $to, slice)) {
    return new ReplaceStep(from, to, slice);
  }

  return new Fitter($from, $to, slice).fit();
} // :: (number, ?number, ?Slice) → this
// Replace the part of the document between `from` and `to` with the
// given `slice`.


Transform.prototype.replace = function (from, to, slice) {
  if (to === void 0) to = from;
  if (slice === void 0) slice = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty;
  var step = replaceStep(this.doc, from, to, slice);

  if (step) {
    this.step(step);
  }

  return this;
}; // :: (number, number, union<Fragment, Node, [Node]>) → this
// Replace the given range with the given content, which may be a
// fragment, node, or array of nodes.


Transform.prototype.replaceWith = function (from, to, content) {
  return this.replace(from, to, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from(content), 0, 0));
}; // :: (number, number) → this
// Delete the content between the given positions.


Transform.prototype["delete"] = function (from, to) {
  return this.replace(from, to, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty);
}; // :: (number, union<Fragment, Node, [Node]>) → this
// Insert the given content at the given position.


Transform.prototype.insert = function (pos, content) {
  return this.replaceWith(pos, pos, content);
};

function fitsTrivially($from, $to, slice) {
  return !slice.openStart && !slice.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice.content);
} // Algorithm for 'placing' the elements of a slice into a gap:
//
// We consider the content of each node that is open to the left to be
// independently placeable. I.e. in <p("foo"), p("bar")>, when the
// paragraph on the left is open, "foo" can be placed (somewhere on
// the left side of the replacement gap) independently from p("bar").
//
// This class tracks the state of the placement progress in the
// following properties:
//
//  - `frontier` holds a stack of `{type, match}` objects that
//    represent the open side of the replacement. It starts at
//    `$from`, then moves forward as content is placed, and is finally
//    reconciled with `$to`.
//
//  - `unplaced` is a slice that represents the content that hasn't
//    been placed yet.
//
//  - `placed` is a fragment of placed content. Its open-start value
//    is implicit in `$from`, and its open-end value in `frontier`.


var Fitter = function Fitter($from, $to, slice) {
  this.$to = $to;
  this.$from = $from;
  this.unplaced = slice;
  this.frontier = [];

  for (var i = 0; i <= $from.depth; i++) {
    var node = $from.node(i);
    this.frontier.push({
      type: node.type,
      match: node.contentMatchAt($from.indexAfter(i))
    });
  }

  this.placed = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].empty;

  for (var i$1 = $from.depth; i$1 > 0; i$1--) {
    this.placed = prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from($from.node(i$1).copy(this.placed));
  }
};

var prototypeAccessors$1 = {
  depth: {
    configurable: true
  }
};

prototypeAccessors$1.depth.get = function () {
  return this.frontier.length - 1;
};

Fitter.prototype.fit = function fit() {
  // As long as there's unplaced content, try to place some of it.
  // If that fails, either increase the open score of the unplaced
  // slice, or drop nodes from it, and then try again.
  while (this.unplaced.size) {
    var fit = this.findFittable();

    if (fit) {
      this.placeNodes(fit);
    } else {
      this.openMore() || this.dropNode();
    }
  } // When there's inline content directly after the frontier _and_
  // directly after `this.$to`, we must generate a `ReplaceAround`
  // step that pulls that content into the node after the frontier.
  // That means the fitting must be done to the end of the textblock
  // node after `this.$to`, not `this.$to` itself.


  var moveInline = this.mustMoveInline(),
      placedSize = this.placed.size - this.depth - this.$from.depth;
  var $from = this.$from,
      $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));

  if (!$to) {
    return null;
  } // If closing to `$to` succeeded, create a step


  var content = this.placed,
      openStart = $from.depth,
      openEnd = $to.depth;

  while (openStart && openEnd && content.childCount == 1) {
    // Normalize by dropping open parent nodes
    content = content.firstChild.content;
    openStart--;
    openEnd--;
  }

  var slice = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](content, openStart, openEnd);

  if (moveInline > -1) {
    return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice, placedSize);
  }

  if (slice.size || $from.pos != this.$to.pos) // Don't generate no-op steps
    {
      return new ReplaceStep($from.pos, $to.pos, slice);
    }
}; // Find a position on the start spine of `this.unplaced` that has
// content that can be moved somewhere on the frontier. Returns two
// depths, one for the slice and one for the frontier.


Fitter.prototype.findFittable = function findFittable() {
  // Only try wrapping nodes (pass 2) after finding a place without
  // wrapping failed.
  for (var pass = 1; pass <= 2; pass++) {
    for (var sliceDepth = this.unplaced.openStart; sliceDepth >= 0; sliceDepth--) {
      var fragment = void 0,
          parent = void 0;

      if (sliceDepth) {
        parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
        fragment = parent.content;
      } else {
        fragment = this.unplaced.content;
      }

      var first = fragment.firstChild;

      for (var frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--) {
        var ref = this.frontier[frontierDepth];
        var type = ref.type;
        var match = ref.match;
        var wrap = void 0,
            inject = void 0; // In pass 1, if the next node matches, or there is no next
        // node but the parents look compatible, we've found a
        // place.

        if (pass == 1 && (first ? match.matchType(first.type) || (inject = match.fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from(first), false)) : type.compatibleContent(parent.type))) {
          return {
            sliceDepth: sliceDepth,
            frontierDepth: frontierDepth,
            parent: parent,
            inject: inject
          };
        } // In pass 2, look for a set of wrapping nodes that make
        // `first` fit here.
        else if (pass == 2 && first && (wrap = match.findWrapping(first.type))) {
          return {
            sliceDepth: sliceDepth,
            frontierDepth: frontierDepth,
            parent: parent,
            wrap: wrap
          };
        } // Don't continue looking further up if the parent node
        // would fit here.


        if (parent && match.matchType(parent.type)) {
          break;
        }
      }
    }
  }
};

Fitter.prototype.openMore = function openMore() {
  var ref = this.unplaced;
  var content = ref.content;
  var openStart = ref.openStart;
  var openEnd = ref.openEnd;
  var inner = contentAt(content, openStart);

  if (!inner.childCount || inner.firstChild.isLeaf) {
    return false;
  }

  this.unplaced = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
  return true;
};

Fitter.prototype.dropNode = function dropNode() {
  var ref = this.unplaced;
  var content = ref.content;
  var openStart = ref.openStart;
  var openEnd = ref.openEnd;
  var inner = contentAt(content, openStart);

  if (inner.childCount <= 1 && openStart > 0) {
    var openAtEnd = content.size - openStart <= openStart + inner.size;
    this.unplaced = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
  } else {
    this.unplaced = new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](dropFromFragment(content, openStart, 1), openStart, openEnd);
  }
}; // : ({sliceDepth: number, frontierDepth: number, parent: ?Node, wrap: ?[NodeType], inject: ?Fragment})
// Move content from the unplaced slice at `sliceDepth` to the
// frontier node at `frontierDepth`. Close that frontier node when
// applicable.


Fitter.prototype.placeNodes = function placeNodes(ref) {
  var sliceDepth = ref.sliceDepth;
  var frontierDepth = ref.frontierDepth;
  var parent = ref.parent;
  var inject = ref.inject;
  var wrap = ref.wrap;

  while (this.depth > frontierDepth) {
    this.closeFrontierNode();
  }

  if (wrap) {
    for (var i = 0; i < wrap.length; i++) {
      this.openFrontierNode(wrap[i]);
    }
  }

  var slice = this.unplaced,
      fragment = parent ? parent.content : slice.content;
  var openStart = slice.openStart - sliceDepth;
  var taken = 0,
      add = [];
  var ref$1 = this.frontier[frontierDepth];
  var match = ref$1.match;
  var type = ref$1.type;

  if (inject) {
    for (var i$1 = 0; i$1 < inject.childCount; i$1++) {
      add.push(inject.child(i$1));
    }

    match = match.matchFragment(inject);
  } // Computes the amount of (end) open nodes at the end of the
  // fragment. When 0, the parent is open, but no more. When
  // negative, nothing is open.


  var openEndCount = fragment.size + sliceDepth - (slice.content.size - slice.openEnd); // Scan over the fragment, fitting as many child nodes as
  // possible.

  while (taken < fragment.childCount) {
    var next = fragment.child(taken),
        matches = match.matchType(next.type);

    if (!matches) {
      break;
    }

    taken++;

    if (taken > 1 || openStart == 0 || next.content.size) {
      // Drop empty open nodes
      match = matches;
      add.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
    }
  }

  var toEnd = taken == fragment.childCount;

  if (!toEnd) {
    openEndCount = -1;
  }

  this.placed = addToFragment(this.placed, frontierDepth, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from(add));
  this.frontier[frontierDepth].match = match; // If the parent types match, and the entire node was moved, and
  // it's not open, close this frontier node right away.

  if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1) {
    this.closeFrontierNode();
  } // Add new frontier nodes for any open nodes at the end.


  for (var i$2 = 0, cur = fragment; i$2 < openEndCount; i$2++) {
    var node = cur.lastChild;
    this.frontier.push({
      type: node.type,
      match: node.contentMatchAt(node.childCount)
    });
    cur = node.content;
  } // Update `this.unplaced`. Drop the entire node from which we
  // placed it we got to its end, otherwise just drop the placed
  // nodes.


  this.unplaced = !toEnd ? new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](dropFromFragment(slice.content, sliceDepth, taken), slice.openStart, slice.openEnd) : sliceDepth == 0 ? prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"].empty : new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](dropFromFragment(slice.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice.openEnd : sliceDepth - 1);
};

Fitter.prototype.mustMoveInline = function mustMoveInline() {
  if (!this.$to.parent.isTextblock || this.$to.end() == this.$to.pos) {
    return -1;
  }

  var top = this.frontier[this.depth],
      level;

  if (!top.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top.type, top.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth) {
    return -1;
  }

  var ref = this.$to;
  var depth = ref.depth;
  var after = this.$to.after(depth);

  while (depth > 1 && after == this.$to.end(--depth)) {
    ++after;
  }

  return after;
};

Fitter.prototype.findCloseLevel = function findCloseLevel($to) {
  scan: for (var i = Math.min(this.depth, $to.depth); i >= 0; i--) {
    var ref = this.frontier[i];
    var match = ref.match;
    var type = ref.type;
    var dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
    var fit = contentAfterFits($to, i, type, match, dropInner);

    if (!fit) {
      continue;
    }

    for (var d = i - 1; d >= 0; d--) {
      var ref$1 = this.frontier[d];
      var match$1 = ref$1.match;
      var type$1 = ref$1.type;
      var matches = contentAfterFits($to, d, type$1, match$1, true);

      if (!matches || matches.childCount) {
        continue scan;
      }
    }

    return {
      depth: i,
      fit: fit,
      move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to
    };
  }
};

Fitter.prototype.close = function close($to) {
  var close = this.findCloseLevel($to);

  if (!close) {
    return null;
  }

  while (this.depth > close.depth) {
    this.closeFrontierNode();
  }

  if (close.fit.childCount) {
    this.placed = addToFragment(this.placed, close.depth, close.fit);
  }

  $to = close.move;

  for (var d = close.depth + 1; d <= $to.depth; d++) {
    var node = $to.node(d),
        add = node.type.contentMatch.fillBefore(node.content, true, $to.index(d));
    this.openFrontierNode(node.type, node.attrs, add);
  }

  return $to;
};

Fitter.prototype.openFrontierNode = function openFrontierNode(type, attrs, content) {
  var top = this.frontier[this.depth];
  top.match = top.match.matchType(type);
  this.placed = addToFragment(this.placed, this.depth, prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from(type.create(attrs, content)));
  this.frontier.push({
    type: type,
    match: type.contentMatch
  });
};

Fitter.prototype.closeFrontierNode = function closeFrontierNode() {
  var open = this.frontier.pop();
  var add = open.match.fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].empty, true);

  if (add.childCount) {
    this.placed = addToFragment(this.placed, this.frontier.length, add);
  }
};

Object.defineProperties(Fitter.prototype, prototypeAccessors$1);

function dropFromFragment(fragment, depth, count) {
  if (depth == 0) {
    return fragment.cutByIndex(count);
  }

  return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
}

function addToFragment(fragment, depth, content) {
  if (depth == 0) {
    return fragment.append(content);
  }

  return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
}

function contentAt(fragment, depth) {
  for (var i = 0; i < depth; i++) {
    fragment = fragment.firstChild.content;
  }

  return fragment;
}

function closeNodeStart(node, openStart, openEnd) {
  if (openStart <= 0) {
    return node;
  }

  var frag = node.content;

  if (openStart > 1) {
    frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
  }

  if (openStart > 0) {
    frag = node.type.contentMatch.fillBefore(frag).append(frag);

    if (openEnd <= 0) {
      frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].empty, true));
    }
  }

  return node.copy(frag);
}

function contentAfterFits($to, depth, type, match, open) {
  var node = $to.node(depth),
      index = open ? $to.indexAfter(depth) : $to.index(depth);

  if (index == node.childCount && !type.compatibleContent(node.type)) {
    return null;
  }

  var fit = match.fillBefore(node.content, true, index);
  return fit && !invalidMarks(type, node.content, index) ? fit : null;
}

function invalidMarks(type, fragment, start) {
  for (var i = start; i < fragment.childCount; i++) {
    if (!type.allowsMarks(fragment.child(i).marks)) {
      return true;
    }
  }

  return false;
} // :: (number, number, Slice) → this
// Replace a range of the document with a given slice, using `from`,
// `to`, and the slice's [`openStart`](#model.Slice.openStart) property
// as hints, rather than fixed start and end points. This method may
// grow the replaced area or close open nodes in the slice in order to
// get a fit that is more in line with WYSIWYG expectations, by
// dropping fully covered parent nodes of the replaced region when
// they are marked [non-defining](#model.NodeSpec.defining), or
// including an open parent node from the slice that _is_ marked as
// [defining](#model.NodeSpec.defining).
//
// This is the method, for example, to handle paste. The similar
// [`replace`](#transform.Transform.replace) method is a more
// primitive tool which will _not_ move the start and end of its given
// range, and is useful in situations where you need more precise
// control over what happens.


Transform.prototype.replaceRange = function (from, to, slice) {
  if (!slice.size) {
    return this.deleteRange(from, to);
  }

  var $from = this.doc.resolve(from),
      $to = this.doc.resolve(to);

  if (fitsTrivially($from, $to, slice)) {
    return this.step(new ReplaceStep(from, to, slice));
  }

  var targetDepths = coveredDepths($from, this.doc.resolve(to)); // Can't replace the whole document, so remove 0 if it's present

  if (targetDepths[targetDepths.length - 1] == 0) {
    targetDepths.pop();
  } // Negative numbers represent not expansion over the whole node at
  // that depth, but replacing from $from.before(-D) to $to.pos.


  var preferredTarget = -($from.depth + 1);
  targetDepths.unshift(preferredTarget); // This loop picks a preferred target depth, if one of the covering
  // depths is not outside of a defining node, and adds negative
  // depths for any depth that has $from at its start and does not
  // cross a defining node.

  for (var d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--) {
    var spec = $from.node(d).type.spec;

    if (spec.defining || spec.isolating) {
      break;
    }

    if (targetDepths.indexOf(d) > -1) {
      preferredTarget = d;
    } else if ($from.before(d) == pos) {
      targetDepths.splice(1, 0, -d);
    }
  } // Try to fit each possible depth of the slice into each possible
  // target depth, starting with the preferred depths.


  var preferredTargetIndex = targetDepths.indexOf(preferredTarget);
  var leftNodes = [],
      preferredDepth = slice.openStart;

  for (var content = slice.content, i = 0;; i++) {
    var node = content.firstChild;
    leftNodes.push(node);

    if (i == slice.openStart) {
      break;
    }

    content = node.content;
  } // Back up if the node directly above openStart, or the node above
  // that separated only by a non-defining textblock node, is defining.


  if (preferredDepth > 0 && leftNodes[preferredDepth - 1].type.spec.defining && $from.node(preferredTargetIndex).type != leftNodes[preferredDepth - 1].type) {
    preferredDepth -= 1;
  } else if (preferredDepth >= 2 && leftNodes[preferredDepth - 1].isTextblock && leftNodes[preferredDepth - 2].type.spec.defining && $from.node(preferredTargetIndex).type != leftNodes[preferredDepth - 2].type) {
    preferredDepth -= 2;
  }

  for (var j = slice.openStart; j >= 0; j--) {
    var openDepth = (j + preferredDepth + 1) % (slice.openStart + 1);
    var insert = leftNodes[openDepth];

    if (!insert) {
      continue;
    }

    for (var i$1 = 0; i$1 < targetDepths.length; i$1++) {
      // Loop over possible expansion levels, starting with the
      // preferred one
      var targetDepth = targetDepths[(i$1 + preferredTargetIndex) % targetDepths.length],
          expand = true;

      if (targetDepth < 0) {
        expand = false;
        targetDepth = -targetDepth;
      }

      var parent = $from.node(targetDepth - 1),
          index = $from.index(targetDepth - 1);

      if (parent.canReplaceWith(index, index, insert.type, insert.marks)) {
        return this.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](closeFragment(slice.content, 0, slice.openStart, openDepth), openDepth, slice.openEnd));
      }
    }
  }

  var startSteps = this.steps.length;

  for (var i$2 = targetDepths.length - 1; i$2 >= 0; i$2--) {
    this.replace(from, to, slice);

    if (this.steps.length > startSteps) {
      break;
    }

    var depth = targetDepths[i$2];

    if (depth < 0) {
      continue;
    }

    from = $from.before(depth);
    to = $to.after(depth);
  }

  return this;
};

function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
  if (depth < oldOpen) {
    var first = fragment.firstChild;
    fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
  }

  if (depth > newOpen) {
    var match = parent.contentMatchAt(0);
    var start = match.fillBefore(fragment).append(fragment);
    fragment = start.append(match.matchFragment(start).fillBefore(prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].empty, true));
  }

  return fragment;
} // :: (number, number, Node) → this
// Replace the given range with a node, but use `from` and `to` as
// hints, rather than precise positions. When from and to are the same
// and are at the start or end of a parent node in which the given
// node doesn't fit, this method may _move_ them out towards a parent
// that does allow the given node to be placed. When the given range
// completely covers a parent node, this method may completely replace
// that parent node.


Transform.prototype.replaceRangeWith = function (from, to, node) {
  if (!node.isInline && from == to && this.doc.resolve(from).parent.content.size) {
    var point = insertPoint(this.doc, from, node.type);

    if (point != null) {
      from = to = point;
    }
  }

  return this.replaceRange(from, to, new prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Slice"](prosemirror_model__WEBPACK_IMPORTED_MODULE_0__["Fragment"].from(node), 0, 0));
}; // :: (number, number) → this
// Delete the given range, expanding it to cover fully covered
// parent nodes until a valid replace is found.


Transform.prototype.deleteRange = function (from, to) {
  var $from = this.doc.resolve(from),
      $to = this.doc.resolve(to);
  var covered = coveredDepths($from, $to);

  for (var i = 0; i < covered.length; i++) {
    var depth = covered[i],
        last = i == covered.length - 1;

    if (last && depth == 0 || $from.node(depth).type.contentMatch.validEnd) {
      return this["delete"]($from.start(depth), $to.end(depth));
    }

    if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1)))) {
      return this["delete"]($from.before(depth), $to.after(depth));
    }
  }

  for (var d = 1; d <= $from.depth && d <= $to.depth; d++) {
    if (from - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d) {
      return this["delete"]($from.before(d), to);
    }
  }

  return this["delete"](from, to);
}; // : (ResolvedPos, ResolvedPos) → [number]
// Returns an array of all depths for which $from - $to spans the
// whole content of the nodes at that depth.


function coveredDepths($from, $to) {
  var result = [],
      minDepth = Math.min($from.depth, $to.depth);

  for (var d = minDepth; d >= 0; d--) {
    var start = $from.start(d);

    if (start < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating) {
      break;
    }

    if (start == $to.start(d) || d == $from.depth && d == $to.depth && $from.parent.inlineContent && $to.parent.inlineContent && d && $to.start(d - 1) == start - 1) {
      result.push(d);
    }
  }

  return result;
}



/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/tiptap-commands/dist/commands.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiptap-commands/dist/commands.esm.js ***!
  \***********************************************************/
/*! exports provided: autoJoin, baseKeymap, chainCommands, createParagraphNear, deleteSelection, exitCode, joinBackward, joinDown, joinForward, joinUp, lift, liftEmptyBlock, macBaseKeymap, newlineInCode, pcBaseKeymap, selectAll, selectNodeBackward, selectNodeForward, selectParentNode, setBlockType, splitBlock, splitBlockKeepMarks, toggleMark, wrapIn, addListNodes, liftListItem, sinkListItem, splitListItem, wrapInList, textblockTypeInputRule, wrappingInputRule, insertText, markInputRule, markPasteRule, nodeInputRule, pasteRule, removeMark, replaceText, setInlineBlockType, splitToDefaultListItem, toggleBlockType, toggleList, toggleWrap, updateMark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertText", function() { return insertText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markInputRule", function() { return markInputRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markPasteRule", function() { return markPasteRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeInputRule", function() { return nodeInputRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pasteRule", function() { return pasteRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMark", function() { return removeMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceText", function() { return replaceText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInlineBlockType", function() { return setInlineBlockType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitToDefaultListItem", function() { return splitToDefaultListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleBlockType", function() { return toggleBlockType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleList", function() { return toggleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleWrap", function() { return toggleWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMark", function() { return updateMark; });
/* harmony import */ var prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prosemirror-commands */ "./node_modules/prosemirror-commands/dist/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoJoin", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["autoJoin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseKeymap", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["baseKeymap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainCommands", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["chainCommands"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createParagraphNear", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["createParagraphNear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSelection", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["deleteSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exitCode", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["exitCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "joinBackward", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["joinBackward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "joinDown", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["joinDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "joinForward", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["joinForward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "joinUp", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["joinUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lift", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["lift"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "liftEmptyBlock", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["liftEmptyBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "macBaseKeymap", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["macBaseKeymap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newlineInCode", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["newlineInCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pcBaseKeymap", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["pcBaseKeymap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectNodeBackward", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["selectNodeBackward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectNodeForward", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["selectNodeForward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectParentNode", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["selectParentNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBlockType", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["setBlockType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitBlock", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["splitBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitBlockKeepMarks", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["splitBlockKeepMarks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleMark", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["toggleMark"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapIn", function() { return prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["wrapIn"]; });

/* harmony import */ var prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-schema-list */ "./node_modules/prosemirror-schema-list/dist/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addListNodes", function() { return prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_1__["addListNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "liftListItem", function() { return prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_1__["liftListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sinkListItem", function() { return prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_1__["sinkListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitListItem", function() { return prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_1__["splitListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapInList", function() { return prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_1__["wrapInList"]; });

/* harmony import */ var prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-inputrules */ "./node_modules/prosemirror-inputrules/dist/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textblockTypeInputRule", function() { return prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_2__["textblockTypeInputRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrappingInputRule", function() { return prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_2__["wrappingInputRule"]; });

/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.es.js");
/* harmony import */ var prosemirror_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prosemirror-model */ "./node_modules/prosemirror-model/dist/index.es.js");
/* harmony import */ var tiptap_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tiptap-utils */ "./node_modules/tiptap-utils/dist/utils.esm.js");
/*!
* tiptap-commands v1.17.0
* (c) 2021 überdosis GbR (limited liability)
* @license MIT
*/










function insertText(text) {
  if (text === void 0) {
    text = '';
  }

  return function (state, dispatch) {
    var $from = state.selection.$from;
    var pos = $from.pos.pos;
    dispatch(state.tr.insertText(text, pos));
    return true;
  };
}

function getMarksBetween(start, end, state) {
  var marks = [];
  state.doc.nodesBetween(start, end, function (node, pos) {
    marks = [].concat(marks, node.marks.map(function (mark) {
      return {
        start: pos,
        end: pos + node.nodeSize,
        mark: mark
      };
    }));
  });
  return marks;
}

function markInputRule(regexp, markType, getAttrs) {
  return new prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_2__["InputRule"](regexp, function (state, match, start, end) {
    var attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    var tr = state.tr;
    var m = match.length - 1;
    var markEnd = end;
    var markStart = start;

    if (match[m]) {
      var matchStart = start + match[0].indexOf(match[m - 1]);
      var matchEnd = matchStart + match[m - 1].length - 1;
      var textStart = matchStart + match[m - 1].lastIndexOf(match[m]);
      var textEnd = textStart + match[m].length;
      var excludedMarks = getMarksBetween(start, end, state).filter(function (item) {
        var excluded = item.mark.type.excluded;
        return excluded.find(function (type) {
          return type.name === markType.name;
        });
      }).filter(function (item) {
        return item.end > matchStart;
      });

      if (excludedMarks.length) {
        return false;
      }

      if (textEnd < matchEnd) {
        tr["delete"](textEnd, matchEnd);
      }

      if (textStart > matchStart) {
        tr["delete"](matchStart, textStart);
      }

      markStart = matchStart;
      markEnd = markStart + match[m].length;
    }

    tr.addMark(markStart, markEnd, markType.create(attrs));
    tr.removeStoredMark(markType);
    return tr;
  });
}

function nodeInputRule(regexp, type, getAttrs) {
  return new prosemirror_inputrules__WEBPACK_IMPORTED_MODULE_2__["InputRule"](regexp, function (state, match, start, end) {
    var attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    var tr = state.tr;

    if (match[0]) {
      tr.replaceWith(start - 1, end, type.create(attrs));
    }

    return tr;
  });
}

function pasteRule(regexp, type, getAttrs) {
  var handler = function handler(fragment) {
    var nodes = [];
    fragment.forEach(function (child) {
      if (child.isText) {
        var text = child.text;
        var pos = 0;
        var match;

        do {
          match = regexp.exec(text);

          if (match) {
            var start = match.index;
            var end = start + match[0].length;
            var attrs = getAttrs instanceof Function ? getAttrs(match[0]) : getAttrs;

            if (start > 0) {
              nodes.push(child.cut(pos, start));
            }

            nodes.push(child.cut(start, end).mark(type.create(attrs).addToSet(child.marks)));
            pos = end;
          }
        } while (match);

        if (pos < text.length) {
          nodes.push(child.cut(pos));
        }
      } else {
        nodes.push(child.copy(handler(child.content)));
      }
    });
    return prosemirror_model__WEBPACK_IMPORTED_MODULE_4__["Fragment"].fromArray(nodes);
  };

  return new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__["Plugin"]({
    props: {
      transformPasted: function transformPasted(slice) {
        return new prosemirror_model__WEBPACK_IMPORTED_MODULE_4__["Slice"](handler(slice.content), slice.openStart, slice.openEnd);
      }
    }
  });
}

function markPasteRule(regexp, type, getAttrs) {
  var handler = function handler(fragment, parent) {
    var nodes = [];
    fragment.forEach(function (child) {
      if (child.isText) {
        var text = child.text,
            marks = child.marks;
        var pos = 0;
        var match;
        var isLink = !!marks.filter(function (x) {
          return x.type.name === 'link';
        })[0]; // eslint-disable-next-line

        while (!isLink && (match = regexp.exec(text)) !== null) {
          if (parent && parent.type.allowsMarkType(type) && match[1]) {
            var start = match.index;
            var end = start + match[0].length;
            var textStart = start + match[0].indexOf(match[1]);
            var textEnd = textStart + match[1].length;
            var attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs; // adding text before markdown to nodes

            if (start > 0) {
              nodes.push(child.cut(pos, start));
            } // adding the markdown part to nodes


            nodes.push(child.cut(textStart, textEnd).mark(type.create(attrs).addToSet(child.marks)));
            pos = end;
          }
        } // adding rest of text to nodes


        if (pos < text.length) {
          nodes.push(child.cut(pos));
        }
      } else {
        nodes.push(child.copy(handler(child.content, child)));
      }
    });
    return prosemirror_model__WEBPACK_IMPORTED_MODULE_4__["Fragment"].fromArray(nodes);
  };

  return new prosemirror_state__WEBPACK_IMPORTED_MODULE_3__["Plugin"]({
    props: {
      transformPasted: function transformPasted(slice) {
        return new prosemirror_model__WEBPACK_IMPORTED_MODULE_4__["Slice"](handler(slice.content), slice.openStart, slice.openEnd);
      }
    }
  });
}

function removeMark(type) {
  return function (state, dispatch) {
    var tr = state.tr,
        selection = state.selection;
    var from = selection.from,
        to = selection.to;
    var $from = selection.$from,
        empty = selection.empty;

    if (empty) {
      var range = Object(tiptap_utils__WEBPACK_IMPORTED_MODULE_5__["getMarkRange"])($from, type);
      from = range.from;
      to = range.to;
    }

    tr.removeMark(from, to, type);
    return dispatch(tr);
  };
}

function replaceText(range, type, attrs, fragment) {
  if (range === void 0) {
    range = null;
  }

  if (attrs === void 0) {
    attrs = {};
  }

  if (fragment === void 0) {
    fragment = prosemirror_model__WEBPACK_IMPORTED_MODULE_4__["Fragment"].empty;
  }

  return function (state, dispatch) {
    var _state$selection = state.selection,
        $from = _state$selection.$from,
        $to = _state$selection.$to;
    var index = $from.index();
    var from = range ? range.from : $from.pos;
    var to = range ? range.to : $to.pos;

    if (!$from.parent.canReplaceWith(index, index, type)) {
      return false;
    }

    if (dispatch) {
      dispatch(state.tr.replaceWith(from, to, type.create(attrs, fragment)));
    }

    return true;
  };
}

function setInlineBlockType(type, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  return function (state, dispatch) {
    var $from = state.selection.$from;
    var index = $from.index();

    if (!$from.parent.canReplaceWith(index, index, type)) {
      return false;
    }

    if (dispatch) {
      dispatch(state.tr.replaceSelectionWith(type.create(attrs)));
    }

    return true;
  };
} // see https://github.com/ProseMirror/prosemirror-transform/blob/main/src/structure.js
// Since this piece of code was "borrowed" from prosemirror, ESLint rules are ignored.

/* eslint-disable max-len, no-plusplus, no-undef, eqeqeq */


function canSplit(doc, pos, depth, typesAfter) {
  if (depth === void 0) {
    depth = 1;
  }

  var $pos = doc.resolve(pos);
  var base = $pos.depth - depth;
  var innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
  if (base < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) return false;

  for (var d = $pos.depth - 1, i = depth - 2; d > base; d--, i--) {
    var node = $pos.node(d);

    var _index = $pos.index(d);

    if (node.type.spec.isolating) return false;
    var rest = node.content.cutByIndex(_index, node.childCount);
    var after = typesAfter && typesAfter[i] || node;
    if (after != node) rest = rest.replaceChild(0, after.type.create(after.attrs));
    /* Change starts from here */
    // if (!node.canReplace(index + 1, node.childCount) || !after.type.validContent(rest))
    //   return false

    if (!node.canReplace(_index + 1, node.childCount)) return false;
    /* Change ends here */
  }

  var index = $pos.indexAfter(base);
  var baseType = typesAfter && typesAfter[0];
  return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type);
} // this is a copy of splitListItem
// see https://github.com/ProseMirror/prosemirror-schema-list/blob/main/src/schema-list.js


function splitToDefaultListItem(itemType) {
  return function (state, dispatch) {
    var _state$selection2 = state.selection,
        $from = _state$selection2.$from,
        $to = _state$selection2.$to,
        node = _state$selection2.node;
    if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) return false;
    var grandParent = $from.node(-1);
    if (grandParent.type != itemType) return false;

    if ($from.parent.content.size == 0) {
      // In an empty block. If this is a nested list, the wrapping
      // list item should be split. Otherwise, bail out and let next
      // command handle lifting.
      if ($from.depth == 2 || $from.node(-3).type != itemType || $from.index(-2) != $from.node(-2).childCount - 1) return false;

      if (dispatch) {
        var wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_4__["Fragment"].empty;
        var keepItem = $from.index(-1) > 0; // Build a fragment containing empty versions of the structure
        // from the outer list item to the parent node of the cursor

        for (var d = $from.depth - (keepItem ? 1 : 2); d >= $from.depth - 3; d--) {
          wrap = prosemirror_model__WEBPACK_IMPORTED_MODULE_4__["Fragment"].from($from.node(d).copy(wrap));
        } // Add a second list item with an empty default start node


        wrap = wrap.append(prosemirror_model__WEBPACK_IMPORTED_MODULE_4__["Fragment"].from(itemType.createAndFill()));

        var _tr = state.tr.replace($from.before(keepItem ? null : -1), $from.after(-3), new prosemirror_model__WEBPACK_IMPORTED_MODULE_4__["Slice"](wrap, keepItem ? 3 : 2, 2));

        _tr.setSelection(state.selection.constructor.near(_tr.doc.resolve($from.pos + (keepItem ? 3 : 2))));

        dispatch(_tr.scrollIntoView());
      }

      return true;
    }

    var nextType = $to.pos == $from.end() ? grandParent.contentMatchAt($from.indexAfter(-1)).defaultType : null;
    var tr = state.tr["delete"]($from.pos, $to.pos);
    /* Change starts from here */
    // let types = nextType && [null, {type: nextType}]

    var types = nextType && [{
      type: itemType
    }, {
      type: nextType
    }];
    if (!types) types = [{
      type: itemType
    }, null];
    /* Change ends here */

    if (!canSplit(tr.doc, $from.pos, 2, types)) return false;
    if (dispatch) dispatch(tr.split($from.pos, 2, types).scrollIntoView());
    return true;
  };
}
/* eslint-enable max-len, no-plusplus, no-undef, eqeqeq */


function toggleBlockType(type, toggletype, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  return function (state, dispatch, view) {
    var isActive = Object(tiptap_utils__WEBPACK_IMPORTED_MODULE_5__["nodeIsActive"])(state, type, attrs);

    if (isActive) {
      return Object(prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["setBlockType"])(toggletype)(state, dispatch, view);
    }

    return Object(prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["setBlockType"])(type, attrs)(state, dispatch, view);
  };
}

function isList(node, schema) {
  return node.type === schema.nodes.bullet_list || node.type === schema.nodes.ordered_list || node.type === schema.nodes.todo_list;
}

function toggleList(listType, itemType) {
  return function (state, dispatch, view) {
    var schema = state.schema,
        selection = state.selection;
    var $from = selection.$from,
        $to = selection.$to;
    var range = $from.blockRange($to);

    if (!range) {
      return false;
    }

    var parentList = Object(tiptap_utils__WEBPACK_IMPORTED_MODULE_5__["findParentNode"])(function (node) {
      return isList(node, schema);
    })(selection);

    if (range.depth >= 1 && parentList && range.depth - parentList.depth <= 1) {
      if (parentList.node.type === listType) {
        return Object(prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_1__["liftListItem"])(itemType)(state, dispatch, view);
      }

      if (isList(parentList.node, schema) && listType.validContent(parentList.node.content)) {
        var tr = state.tr;
        tr.setNodeMarkup(parentList.pos, listType);

        if (dispatch) {
          dispatch(tr);
        }

        return false;
      }
    }

    return Object(prosemirror_schema_list__WEBPACK_IMPORTED_MODULE_1__["wrapInList"])(listType)(state, dispatch, view);
  };
}

function toggleWrap(type, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  return function (state, dispatch, view) {
    var isActive = Object(tiptap_utils__WEBPACK_IMPORTED_MODULE_5__["nodeIsActive"])(state, type, attrs);

    if (isActive) {
      return Object(prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["lift"])(state, dispatch);
    }

    return Object(prosemirror_commands__WEBPACK_IMPORTED_MODULE_0__["wrapIn"])(type, attrs)(state, dispatch, view);
  };
}

function updateMark(type, attrs) {
  return function (state, dispatch) {
    var tr = state.tr,
        selection = state.selection,
        doc = state.doc;
    var ranges = selection.ranges,
        empty = selection.empty;

    if (empty) {
      var _getMarkRange = Object(tiptap_utils__WEBPACK_IMPORTED_MODULE_5__["getMarkRange"])(selection.$from, type),
          from = _getMarkRange.from,
          to = _getMarkRange.to;

      if (doc.rangeHasMark(from, to, type)) {
        tr.removeMark(from, to, type);
      }

      tr.addMark(from, to, type.create(attrs));
    } else {
      ranges.forEach(function (ref$1) {
        var $to = ref$1.$to,
            $from = ref$1.$from;

        if (doc.rangeHasMark($from.pos, $to.pos, type)) {
          tr.removeMark($from.pos, $to.pos, type);
        }

        tr.addMark($from.pos, $to.pos, type.create(attrs));
      });
    }

    return dispatch(tr);
  };
}



/***/ }),

/***/ "./node_modules/tiptap-utils/dist/utils.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiptap-utils/dist/utils.esm.js ***!
  \*****************************************************/
/*! exports provided: createCell, createTable, equalNodeType, findBlockNodes, findChildren, findParentNode, findParentNodeClosestToPos, findSelectedNodeOfType, flatten, getMarkAttrs, getMarkRange, getNodeAttrs, getTableNodeTypes, isNodeSelection, markIsActive, nodeEqualsType, nodeIsActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCell", function() { return createCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTable", function() { return createTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalNodeType", function() { return equalNodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBlockNodes", function() { return findBlockNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findChildren", function() { return findChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParentNode", function() { return findParentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParentNodeClosestToPos", function() { return findParentNodeClosestToPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSelectedNodeOfType", function() { return findSelectedNodeOfType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkAttrs", function() { return getMarkAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkRange", function() { return getMarkRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeAttrs", function() { return getNodeAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTableNodeTypes", function() { return getTableNodeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeSelection", function() { return isNodeSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markIsActive", function() { return markIsActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeEqualsType", function() { return nodeEqualsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeIsActive", function() { return nodeIsActive; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.es.js");


/*!
* tiptap-utils v1.13.0
* (c) 2021 überdosis GbR (limited liability)
* @license MIT
*/


function createCell(cellType, cellContent) {
  if (cellContent) {
    return cellType.createChecked(null, cellContent);
  }

  return cellType.createAndFill();
}

function getTableNodeTypes(schema) {
  if (schema.cached.tableNodeTypes) {
    return schema.cached.tableNodeTypes;
  }

  var roles = {};
  Object.keys(schema.nodes).forEach(function (type) {
    var nodeType = schema.nodes[type];

    if (nodeType.spec.tableRole) {
      roles[nodeType.spec.tableRole] = nodeType;
    }
  }); // eslint-disable-next-line

  schema.cached.tableNodeTypes = roles;
  return roles;
}

function createTable(schema, rowsCount, colsCount, withHeaderRow, cellContent) {
  var types = getTableNodeTypes(schema);
  var headerCells = [];
  var cells = [];

  for (var index = 0; index < colsCount; index += 1) {
    var cell = createCell(types.cell, cellContent);

    if (cell) {
      cells.push(cell);
    }

    if (withHeaderRow) {
      var headerCell = createCell(types.header_cell, cellContent);

      if (headerCell) {
        headerCells.push(headerCell);
      }
    }
  }

  var rows = [];

  for (var _index = 0; _index < rowsCount; _index += 1) {
    rows.push(types.row.createChecked(null, withHeaderRow && _index === 0 ? headerCells : cells));
  }

  return types.table.createChecked(null, rows);
}

function equalNodeType(nodeType, node) {
  return Array.isArray(nodeType) && nodeType.indexOf(node.type) > -1 || node.type === nodeType;
}

function flatten(node) {
  // eslint-disable-next-line
  var descend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (!node) {
    throw new Error('Invalid "node" parameter');
  }

  var result = []; // eslint-disable-next-line

  node.descendants(function (child, pos) {
    result.push({
      node: child,
      pos: pos
    });

    if (!descend) {
      return false;
    }
  });
  return result;
}

function findChildren(node, predicate, descend) {
  if (!node) {
    throw new Error('Invalid "node" parameter');
  } else if (!predicate) {
    throw new Error('Invalid "predicate" parameter');
  }

  return flatten(node, descend).filter(function (child) {
    return predicate(child.node);
  });
}

function findBlockNodes(node, descend) {
  return findChildren(node, function (child) {
    return child.isBlock;
  }, descend);
} // eslint-disable-next-line


function findParentNodeClosestToPos($pos, predicate) {
  for (var i = $pos.depth; i > 0; i -= 1) {
    var node = $pos.node(i);

    if (predicate(node)) {
      return {
        pos: i > 0 ? $pos.before(i) : 0,
        start: $pos.start(i),
        depth: i,
        node: node
      };
    }
  }
}

function findParentNode(predicate) {
  return function (selection) {
    return findParentNodeClosestToPos(selection.$from, predicate);
  };
}

function isNodeSelection(selection) {
  return selection instanceof prosemirror_state__WEBPACK_IMPORTED_MODULE_1__["NodeSelection"];
}

function findSelectedNodeOfType(nodeType) {
  // eslint-disable-next-line
  return function (selection) {
    if (isNodeSelection(selection)) {
      var node = selection.node;
      var $from = selection.$from;

      if (equalNodeType(nodeType, node)) {
        return {
          node: node,
          pos: $from.pos,
          depth: $from.depth
        };
      }
    }
  };
}

function getMarkAttrs(state, type) {
  var _state$selection = state.selection,
      from = _state$selection.from,
      to = _state$selection.to;
  var marks = [];
  state.doc.nodesBetween(from, to, function (node) {
    marks = [].concat(marks, node.marks);
  });
  var mark = marks.find(function (markItem) {
    return markItem.type.name === type.name;
  });

  if (mark) {
    return mark.attrs;
  }

  return {};
}

function getMarkRange($pos, type) {
  if ($pos === void 0) {
    $pos = null;
  }

  if (type === void 0) {
    type = null;
  }

  if (!$pos || !type) {
    return false;
  }

  var start = $pos.parent.childAfter($pos.parentOffset);

  if (!start.node) {
    return false;
  }

  var link = start.node.marks.find(function (mark) {
    return mark.type === type;
  });

  if (!link) {
    return false;
  }

  var startIndex = $pos.index();
  var startPos = $pos.start() + start.offset;
  var endIndex = startIndex + 1;
  var endPos = startPos + start.node.nodeSize;

  while (startIndex > 0 && link.isInSet($pos.parent.child(startIndex - 1).marks)) {
    startIndex -= 1;
    startPos -= $pos.parent.child(startIndex).nodeSize;
  }

  while (endIndex < $pos.parent.childCount && link.isInSet($pos.parent.child(endIndex).marks)) {
    endPos += $pos.parent.child(endIndex).nodeSize;
    endIndex += 1;
  }

  return {
    from: startPos,
    to: endPos
  };
}

function getNodeAttrs(state, type) {
  var _state$selection2 = state.selection,
      from = _state$selection2.from,
      to = _state$selection2.to;
  var nodes = [];
  state.doc.nodesBetween(from, to, function (node) {
    nodes = [].concat(nodes, [node]);
  });
  var node = nodes.reverse().find(function (nodeItem) {
    return nodeItem.type.name === type.name;
  });

  if (node) {
    return node.attrs;
  }

  return {};
}

function markIsActive(state, type) {
  var _state$selection3 = state.selection,
      from = _state$selection3.from,
      $from = _state$selection3.$from,
      to = _state$selection3.to,
      empty = _state$selection3.empty;

  if (empty) {
    return !!type.isInSet(state.storedMarks || $from.marks());
  }

  return !!state.doc.rangeHasMark(from, to, type);
}

function nodeEqualsType(_ref) {
  var types = _ref.types,
      node = _ref.node;
  return Array.isArray(types) && types.includes(node.type) || node.type === types;
}

function nodeIsActive(state, type, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  var predicate = function predicate(node) {
    return node.type === type;
  };

  var node = findSelectedNodeOfType(type)(state.selection) || findParentNode(predicate)(state.selection);

  if (!Object.keys(attrs).length || !node) {
    return !!node;
  }

  return node.node.hasMarkup(type, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, node.node.attrs, attrs));
}



/***/ }),

/***/ "./src/forum/InsertReferenceDropdown.js":
/*!**********************************************!*\
  !*** ./src/forum/InsertReferenceDropdown.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InsertReferenceDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_styleSelectedText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/styleSelectedText */ "flarum/common/utils/styleSelectedText");
/* harmony import */ var flarum_common_utils_styleSelectedText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_styleSelectedText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tiptap_commands__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tiptap-commands */ "./node_modules/tiptap-commands/dist/commands.esm.js");









 //borrowed from askvortsov1/flarum-rich-text

var InsertReferenceDropdown = /*#__PURE__*/function (_Dropdown) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(InsertReferenceDropdown, _Dropdown);

  function InsertReferenceDropdown() {
    return _Dropdown.apply(this, arguments) || this;
  }

  InsertReferenceDropdown.initAttrs = function initAttrs(attrs) {
    attrs.buttonClassName = 'Button Button--icon Button--link Button--menuDropdown';
  };

  var _proto = InsertReferenceDropdown.prototype;

  _proto.oninit = function oninit(vnode) {
    _Dropdown.prototype.oninit.call(this, vnode);

    this.state = this.attrs.state;
    this.text = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('');
    this.href = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''); // this.state.addItem(
    //   this.attrs.type,
    //   (state, dispatch) => {
    //     this.command(state, dispatch);
    //   },
    //   this.onEditorUpdate.bind(this)
    // );

    this.selectionEmpty = true;
  };

  _proto.oncreate = function oncreate(vnode) {
    var _this = this;

    _Dropdown.prototype.oncreate.call(this, vnode);

    this.$().on('click', function (e) {
      if ($('.App').is('.mobile-safari')) {
        // Mobile Safari doesn't support fixed items
        // So, we wrap them in a modal.
        app.modal.show(SafariModalHack, {
          title: _this.attrs.tooltip,
          vnodeContent: _this.fields().toArray(),
          onsubmit: _this.onsubmit.bind(_this)
        });
        e.stopPropagation();
      }
    });
    this.$().on('shown.bs.dropdown', function () {
      _this.$('.Dropdown-menu').find('input, select, textarea').first().focus().select();
    });
  };

  _proto.getButtonContent = function getButtonContent(children) {
    return m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
      text: this.attrs.tooltip
    }, m("span", null, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()(this.attrs.icon)));
  };

  _proto.getMenu = function getMenu(items) {
    return m("ul", {
      className: 'Dropdown-menu dropdown-menu FormDropdown'
    }, m("form", {
      className: "Form",
      onsubmit: this.onsubmit.bind(this)
    }, this.fields().toArray()));
  };

  _proto.onsubmit = function onsubmit(e) {
    // Here for the safari workaround
    app.modal.close();
    e.preventDefault();
    $('body').trigger('click');
    this.insert(e);
    app.composer.editor.focus();
  };

  _proto.fields = function fields() {
    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default.a();
    items.add('insert', m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "submit",
      className: "Button Button--primary"
    }, app.translator.trans('flarum-references.forum.composer.insert_button')));

    if (this.selectionEmpty && !this.active) {
      items.add('text', m("div", {
        className: "Form-group"
      }, m("input", {
        className: "FormControl",
        name: "text",
        placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2___default()(app.translator.trans('flarum-references.forum.composer.insert_link.text_placeholder')),
        bidi: this.text,
        required: true
      })), 10);
    }

    items.add('href', m("div", {
      className: "Form-group"
    }, m("input", {
      className: "FormControl",
      name: "href",
      type: "url",
      placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_2___default()(app.translator.trans('flarum-references.forum.composer.insert_link.href_placeholder')),
      bidi: this.href,
      required: true
    })), 10);

    if (this.active) {
      items.add('remove', m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onclick: this.remove.bind(this),
        className: "Button Button--danger"
      }, app.translator.trans('flarum-references.forum.composer.insert_link.remove_button')), -10);
    }

    return items;
  };

  _proto.insert = function insert(e) {
    var linkAttrs = {
      href: this.href(),
      text: this.text()
    };

    if (this.selectionEmpty && !this.active) {
      //this.command = dispatch(state.tr.replaceSelectionWith(state.schema.text(this.text(), [this.attrs.mark.create(linkAttrs)]), false));
      flarum_common_utils_styleSelectedText__WEBPACK_IMPORTED_MODULE_7___default()(app.composer.editor.el, //{ prefix: '![', suffix: '](https://)', replaceNext: 'https://', scanFor: 'https?://' }
      {
        prefix: '[ref][' + linkAttrs.text,
        suffix: '](' + linkAttrs.href + ')[/ref]'
      }); //$('.TextEditor-editor')

      this.text('');
      this.href('');
    } else {
      this.command = Object(tiptap_commands__WEBPACK_IMPORTED_MODULE_9__["updateMark"])(this.attrs.mark, linkAttrs);
    }
  };

  _proto.remove = function remove(e) {
    $('body').trigger('click');
    this.command = Object(tiptap_commands__WEBPACK_IMPORTED_MODULE_9__["removeMark"])(this.attrs.mark);
    this.state.run(this.attrs.type);
    app.composer.editor.focus();
  };

  _proto.onEditorUpdate = function onEditorUpdate() {
    this.active = !!this.state.markActive(this.attrs.mark);
    this.$('.Dropdown-toggle').toggleClass('active', this.active);
    var attrs = this.state.markAttrs(this.attrs.mark);
    this.href(attrs.href);
    this.text(attrs.text);
    this.selectionEmpty = this.state.selectionEmpty();
  };

  return InsertReferenceDropdown;
}(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./src/forum/components/BookRefModal.js":
/*!**********************************************!*\
  !*** ./src/forum/components/BookRefModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookRefModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);





var BookRefModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BookRefModal, _Modal);

  function BookRefModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = BookRefModal.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this$allReferences;

    _Modal.prototype.oninit.call(this, vnode);

    this.value = app.composer.fields.content() || ''; // this.allReferences = this.value.match(/\[reference\ id=[\w]*\][\w\ \(\)\[\]\.\,\/\\\-_\+;:"'?&]*\[\/reference\]/gm);

    this.allReferences = this.value.match(/\[reference\ id=[\w]* type=[\w]*\].*\[\/reference\]/gm);
    this.referenceId = ((_this$allReferences = this.allReferences) == null ? void 0 : _this$allReferences.length) || 0;
    this.fields = {
      title: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      link: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      author: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      year: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      editura: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('')
    };
  };

  _proto.className = function className() {
    return "";
  };

  _proto.title = function title() {
    return "Carte";
  };

  _proto.content = function content() {
    var _this = this;

    return [m('.Modal-body', m('Form.Form--left', m('span.description', app.translator.trans('Realizarea de referințe bibliografice la publicații de carte.')), m('.Form-group', m('label', app.translator.trans('Link')), m('input.FormControl', {
      type: "url",
      value: this.fields.link(),
      placeholder: "ex. http://example.com",
      oninput: function oninput(e) {
        _this.fields.link(e.target.value);

        _this.removeRedStyle();
      }
    })), m('.Form-group', m('label', app.translator.trans('Author')), m('input.FormControl', {
      type: "text",
      placeholder: "ex. L. Rebreanu",
      value: this.fields.author(),
      required: true,
      oninput: function oninput(e) {
        _this.fields.author(e.target.value);

        _this.removeRedStyle();
      }
    })), m('.Form-group', m('label', app.translator.trans('Titlul')), m('input.FormControl', {
      type: "text",
      value: this.fields.title(),
      placeholder: "ex. Pădurea spânzuraților",
      required: true,
      oninput: function oninput(e) {
        _this.fields.title(e.target.value);

        _this.removeRedStyle();
      }
    })), m('.Form-group', m('label', app.translator.trans('Anul')), m('input.FormControl', {
      type: "text",
      placeholder: "ex. 1970",
      pattern: "^(?:(?:1[6-9]|[2-9]\\d)\\d{2})$",
      value: this.fields.year(),
      oninput: function oninput(e) {
        _this.fields.year(e.target.value);

        _this.removeRedStyle();
      }
    })), m('.Form-group', m('label', app.translator.trans('Editura')), m('input.FormControl', {
      type: "text",
      value: this.fields.editura(),
      placeholder: "ex. Lumina",
      oninput: function oninput(e) {
        _this.fields.editura(e.target.value);

        _this.removeRedStyle();
      }
    })), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: "Button Button--primary",
      onclick: function onclick() {
        return _this.addReference();
      }
    }, "Adaugare")))];
  };

  _proto.removeRedStyle = function removeRedStyle() {
    var requiredFields = this.$('input');

    for (var k = 0; k < requiredFields.length; k++) {
      if (requiredFields[k].validity.valid) {
        requiredFields[k].removeAttribute("style");
      }
    }
  };

  _proto.areSetRequiredFields = function areSetRequiredFields() {
    var requiredFields = this.$('input');
    var i = 0;

    for (var k = 0; k < requiredFields.length; k++) {
      if (!requiredFields[k].validity.valid) {
        requiredFields[k].style.setProperty('border-color', 'red', 'important');
        i++;
      }
    }

    if (i == 0) return true;
    return false;
  };

  _proto.addReference = function addReference() {
    if (!this.areSetRequiredFields()) return;
    var date = new Date(); // console.log(flarum.extensions['askvortsov-rich-text']);

    if (flarum.extensions['askvortsov-rich-text']) {
      // implements for askvortsov-rich-text editor
      app.composer.editor.insertAtCursor("[ref id=ref" + ++this.referenceId + "]" + this.referenceId + "[/ref]");
      var position = app.composer.editor.getSelectionRange();

      if (this.referenceId == 1) {
        app.composer.editor.moveCursorTo(app.composer.editor.attrs.menuState.editorView.dom.outerText.length + 1);
        app.composer.editor.setEnter();
        app.composer.editor.insertAtCursor("Referinte:");
        app.composer.editor.setEnter();
      } else {
        app.composer.editor.moveCursorTo(app.composer.editor.attrs.menuState.editorView.dom.outerText.length + 1);
        app.composer.editor.setEnter();
      }

      app.composer.editor.insertAtCursor(this.referenceId + ". [reference id=ref" + this.referenceId + " type=book] " + this.fields.author() + ". " + this.fields.title() + ". " + this.fields.editura() + (this.fields.editura().length === 0 ? "" : this.fields.year().length === 0 ? "" : ", ") + this.fields.year() + (this.fields.year().length === 0 ? " " : ". ") + "[citat la " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + "] " + this.fields.link() + (this.fields.link().length === 0 ? "[/reference]" : " [/reference]"));
      app.composer.editor.setSelectionRange(position[0], position[1]);
      app.composer.editor.setEnter();
      app.composer.editor["delete"](); // this.array[0] = "Alt ceva"
      // console.log("rich-text");
    } else {
      // implements for flarum-markdown editor
      console.log(app.composer.editor.el.value);
      console.log(app.composer.fields.content());
      app.composer.editor.insertAtCursor("[ref id=ref" + ++this.referenceId + "]" + this.referenceId + "[/ref]");

      var _position = app.composer.editor.getSelectionRange();

      if (this.referenceId == 1) {
        app.composer.editor.moveCursorTo(app.composer.editor.el.value.length + 1); // app.composer.editor.setEnter();

        app.composer.editor.insertAtCursor("\n\nReferinte:\n"); // app.composer.editor.setEnter();
      } else {
        app.composer.editor.moveCursorTo(app.composer.editor.el.value.length + 1);
        app.composer.editor.insertAtCursor("\n"); // app.composer.editor.setEnter();
      }

      app.composer.editor.insertAtCursor("\n" + this.referenceId + "\\. [reference id=ref" + this.referenceId + " type=book] " + this.fields.author() + ". " + this.fields.title() + ". " + this.fields.editura() + (this.fields.editura().length === 0 ? "" : this.fields.year().length === 0 ? "" : ", ") + this.fields.year() + (this.fields.year().length === 0 ? " " : ". ") + "[citat la " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + "] " + this.fields.link() + (this.fields.link().length === 0 ? "[/reference]" : " [/reference]"));
      app.composer.editor.setSelectionRange(_position[0], _position[1]); // console.log("non rich-text");
      // app.composer.editor.moveCursorTo(app.composer.fields.content().length + 1);
    }

    app.modal.close();
  };

  return BookRefModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/DefaultRefModal.js":
/*!*************************************************!*\
  !*** ./src/forum/components/DefaultRefModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultRefModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);





var DefaultRefModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DefaultRefModal, _Modal);

  function DefaultRefModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = DefaultRefModal.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this$allReferences;

    _Modal.prototype.oninit.call(this, vnode);

    this.value = app.composer.fields.content() || ''; // this.allReferences = this.value.match(/\[reference\ id=[\w]*\][\w\ \(\)\[\]\.\,\/\\\-_\+;:"'?&]*\[\/reference\]/gm);

    this.allReferences = this.value.match(/\[reference\ id=[\w]* type=[\w]*\].*\[\/reference\]/gm);
    this.referenceId = ((_this$allReferences = this.allReferences) == null ? void 0 : _this$allReferences.length) || 0; // console.log(this.value);
    // console.log(this.allReferences);
    // console.log(this.referenceId);

    this.fields = {
      title: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      link: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('')
    };
  };

  _proto.className = function className() {
    return "";
  };

  _proto.title = function title() {
    return "De baza";
  };

  _proto.content = function content() {
    var _this = this;

    // console.log(this.$('input[required]')[0]?.validity.valid);
    // console.log(app.composer.editor.attrs.menuState.editorView.dom.outerText);
    // console.log(app.composer.editor.attrs.menuState.editorView.dom.outerText.length);
    return [m('.Modal-body', m('Form.Form--left', m('.Form-group', m('label', app.translator.trans('Titlul')), m('input.FormControl', {
      type: "text",
      value: this.fields.title(),
      placeholder: "ex. Pădurea spânzuraților",
      required: true,
      oninput: function oninput(e) {
        _this.fields.title(e.target.value);

        _this.removeRedStyle(); // if (e.target.hasAttribute("style")) {
        //   e.target.removeAttribute("style");
        // }

      }
    })), m('.Form-group', m('label', app.translator.trans('Link')), m('input.FormControl', {
      type: "url",
      placeholder: "ex. http://example.com",
      value: this.fields.link(),
      oninput: function oninput(e) {
        _this.fields.link(e.target.value);

        _this.removeRedStyle();
      }
    })), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: "Button Button--primary",
      onclick: function onclick() {
        return _this.addReference();
      }
    }, "Adaugare")))];
  };

  _proto.removeRedStyle = function removeRedStyle() {
    var requiredFields = this.$('input');

    for (var k = 0; k < requiredFields.length; k++) {
      if (requiredFields[k].validity.valid) {
        requiredFields[k].removeAttribute("style");
      }
    }
  };

  _proto.areSetRequiredFields = function areSetRequiredFields() {
    var requiredFields = this.$('input');
    var i = 0; // console.log(requiredFields);

    for (var k = 0; k < requiredFields.length; k++) {
      if (!requiredFields[k].validity.valid) {
        requiredFields[k].style.setProperty('border-color', 'red', 'important');
        i++;
      }
    }

    if (i == 0) return true;
    return false;
  };

  _proto.addReference = function addReference() {
    if (!this.areSetRequiredFields()) return;
    var date = new Date(); // console.log(flarum.extensions['askvortsov-rich-text']);

    if (flarum.extensions['askvortsov-rich-text']) {
      // implements for askvortsov-rich-text editor
      app.composer.editor.insertAtCursor("[ref id=ref" + ++this.referenceId + "]" + this.referenceId + "[/ref]");
      var position = app.composer.editor.getSelectionRange();

      if (this.referenceId == 1) {
        app.composer.editor.moveCursorTo(app.composer.editor.attrs.menuState.editorView.dom.outerText.length + 1);
        app.composer.editor.setEnter();
        app.composer.editor.insertAtCursor("Referinte:");
        app.composer.editor.setEnter();
      } else {
        app.composer.editor.moveCursorTo(app.composer.editor.attrs.menuState.editorView.dom.outerText.length + 1);
        app.composer.editor.setEnter();
      }

      app.composer.editor.insertAtCursor(this.referenceId + ". [reference id=ref" + this.referenceId + " type=default] " + this.fields.title() + ". " + "[citat la " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + "] " + this.fields.link() + (this.fields.link().length === 0 ? "[/reference]" : " [/reference]"));
      app.composer.editor.setSelectionRange(position[0], position[1]);
      app.composer.editor.setEnter();
      app.composer.editor["delete"](); // this.array[0] = "Alt ceva"
      // console.log("rich-text");
    } else {
      // implements for flarum-markdown editor
      console.log(app.composer.editor.el.value);
      console.log(app.composer.fields.content());
      app.composer.editor.insertAtCursor("[ref id=ref" + ++this.referenceId + "]" + this.referenceId + "[/ref]");

      var _position = app.composer.editor.getSelectionRange();

      if (this.referenceId == 1) {
        app.composer.editor.moveCursorTo(app.composer.editor.el.value.length + 1); // app.composer.editor.setEnter();

        app.composer.editor.insertAtCursor("\n\nReferinte:\n"); // app.composer.editor.setEnter();
      } else {
        app.composer.editor.moveCursorTo(app.composer.editor.el.value.length + 1);
        app.composer.editor.insertAtCursor("\n"); // app.composer.editor.setEnter();
      }

      app.composer.editor.insertAtCursor("\n" + this.referenceId + "\\. [reference id=ref" + this.referenceId + " type=default] " + this.fields.title() + ". " + "[citat la " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + "] " + this.fields.link() + (this.fields.link().length === 0 ? "[/reference]" : " [/reference]"));
      app.composer.editor.setSelectionRange(_position[0], _position[1]); // console.log("non rich-text");
      // app.composer.editor.moveCursorTo(app.composer.fields.content().length + 1);
    } // console.log(this.fields.link().length);


    app.modal.close();
  };

  return DefaultRefModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/JournalRefModal.js":
/*!*************************************************!*\
  !*** ./src/forum/components/JournalRefModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JournalRefModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);





var JournalRefModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(JournalRefModal, _Modal);

  function JournalRefModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = JournalRefModal.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this$allReferences;

    _Modal.prototype.oninit.call(this, vnode);

    this.value = app.composer.fields.content() || ''; // this.allReferences = this.value.match(/\[reference\ id=[\w]*\][\w\ \(\)\[\]\.\,\/\\\-_\+;:"'?&]*\[\/reference\]/gm);

    this.allReferences = this.value.match(/\[reference\ id=[\w]* type=[\w]*\].*\[\/reference\]/gm);
    this.referenceId = ((_this$allReferences = this.allReferences) == null ? void 0 : _this$allReferences.length) || 0;
    this.fields = {
      title: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      author: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('')
    };
  };

  _proto.className = function className() {
    return "";
  };

  _proto.title = function title() {
    return "Jurnal";
  };

  _proto.content = function content() {
    var _this = this;

    return [m('.Modal-body', m('Form.Form--left', // m('span.description', app.translator.trans('Model pentru plasarea referințelor bibliografice la articole din reviste și periodice.')),
    m('.Form-group', m('label', app.translator.trans('Titlul')), m('input.FormControl', {
      type: "text",
      value: this.fields.title(),
      placeholder: "ex. Pădurea spânzuraților",
      required: true,
      oninput: function oninput(e) {
        _this.fields.title(e.target.value);

        _this.removeRedStyle();
      }
    })), m('.Form-group', m('label', app.translator.trans('Author')), m('input.FormControl', {
      type: "text",
      placeholder: "ex. L. Rebreanu",
      bidi: this.fields.author
    })), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: "Button Button--primary",
      onclick: function onclick() {
        return _this.addReference();
      }
    }, "Adaugare")))];
  };

  _proto.removeRedStyle = function removeRedStyle() {
    var requiredFields = this.$('input');

    for (var k = 0; k < requiredFields.length; k++) {
      if (requiredFields[k].validity.valid) {
        requiredFields[k].removeAttribute("style");
      }
    }
  };

  _proto.areSetRequiredFields = function areSetRequiredFields() {
    var requiredFields = this.$('input');
    var i = 0;

    for (var k = 0; k < requiredFields.length; k++) {
      if (!requiredFields[k].validity.valid) {
        requiredFields[k].style.setProperty('border-color', 'red', 'important');
        i++;
      }
    }

    if (i == 0) return true;
    return false;
  };

  _proto.addReference = function addReference() {
    if (!this.areSetRequiredFields()) return;
    var date = new Date(); // console.log(flarum.extensions['askvortsov-rich-text']);

    if (flarum.extensions['askvortsov-rich-text']) {
      // implements for askvortsov-rich-text editor
      app.composer.editor.insertAtCursor("[ref id=ref" + ++this.referenceId + "]" + this.referenceId + "[/ref]");
      var position = app.composer.editor.getSelectionRange();

      if (this.referenceId == 1) {
        app.composer.editor.moveCursorTo(app.composer.editor.attrs.menuState.editorView.dom.outerText.length + 1);
        app.composer.editor.setEnter();
        app.composer.editor.insertAtCursor("Referinte:");
        app.composer.editor.setEnter();
      } else {
        app.composer.editor.moveCursorTo(app.composer.editor.attrs.menuState.editorView.dom.outerText.length + 1);
        app.composer.editor.setEnter();
      }

      app.composer.editor.insertAtCursor(this.referenceId + ". [reference id=ref" + this.referenceId + " type=journal] " + this.fields.author() + (this.fields.author().length === 0 ? "" : ". ") + this.fields.title() + ". " + "[citat la " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + "] " + "[/reference]");
      app.composer.editor.setSelectionRange(position[0], position[1]);
      app.composer.editor.setEnter();
      app.composer.editor["delete"](); // this.array[0] = "Alt ceva"
      // console.log("rich-text");
    } else {
      // implements for flarum-markdown editor
      console.log(app.composer.editor.el.value);
      console.log(app.composer.fields.content());
      app.composer.editor.insertAtCursor("[ref id=ref" + ++this.referenceId + "]" + this.referenceId + "[/ref]");

      var _position = app.composer.editor.getSelectionRange();

      if (this.referenceId == 1) {
        app.composer.editor.moveCursorTo(app.composer.editor.el.value.length + 1); // app.composer.editor.setEnter();

        app.composer.editor.insertAtCursor("\n\nReferinte:\n"); // app.composer.editor.setEnter();
      } else {
        app.composer.editor.moveCursorTo(app.composer.editor.el.value.length + 1);
        app.composer.editor.insertAtCursor("\n"); // app.composer.editor.setEnter();
      }

      app.composer.editor.insertAtCursor("\n" + this.referenceId + "\\. [reference id=ref" + this.referenceId + " type=journal] " + this.fields.author() + (this.fields.author().length === 0 ? "" : ". ") + this.fields.title() + ". " + "[citat la " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + "] " + "[/reference]");
      app.composer.editor.setSelectionRange(_position[0], _position[1]); // console.log("non rich-text");
      // app.composer.editor.moveCursorTo(app.composer.fields.content().length + 1);
    }

    app.modal.close();
  };

  return JournalRefModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/NewsRefModal.js":
/*!**********************************************!*\
  !*** ./src/forum/components/NewsRefModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsRefModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);





var NewsRefModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(NewsRefModal, _Modal);

  function NewsRefModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = NewsRefModal.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this$allReferences;

    _Modal.prototype.oninit.call(this, vnode);

    this.value = app.composer.fields.content() || ''; // this.allReferences = this.value.match(/\[reference\ id=[\w]*\][\w\ \(\)\[\]\.\,\/\\\-_\+;:"'?&]*\[\/reference\]/gm);

    this.allReferences = this.value.match(/\[reference\ id=[\w]* type=[\w]*\].*\[\/reference\]/gm);
    this.referenceId = ((_this$allReferences = this.allReferences) == null ? void 0 : _this$allReferences.length) || 0;
    this.fields = {
      title: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      link: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      author: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      createAt: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      siteName: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('')
    };
  };

  _proto.className = function className() {
    return "";
  };

  _proto.title = function title() {
    return "Stire";
  };

  _proto.content = function content() {
    var _this = this;

    return [m('.Modal-body', m('Form.Form--left', m('span.description', app.translator.trans('Crearea de link-uri către știri surse de informații.')), m('.Form-group', m('label', app.translator.trans('Titlul')), m('input.FormControl', {
      type: "text",
      value: this.fields.title(),
      placeholder: "ex. Pădurea spânzuraților",
      required: true,
      oninput: function oninput(e) {
        _this.fields.title(e.target.value);

        _this.removeRedStyle();
      }
    })), m('.Form-group', m('label', app.translator.trans('Author')), m('input.FormControl', {
      type: "text",
      placeholder: "ex. L. Rebreanu",
      bidi: this.fields.author
    })), m('.Form-group', m('label', app.translator.trans('URL Link')), m('input.FormControl', {
      type: "url",
      value: this.fields.link(),
      placeholder: "ex. http://example.com",
      required: true,
      oninput: function oninput(e) {
        var _e$target$value, _e$target$value$split;

        _this.fields.link(e.target.value);

        _this.fields.siteName(((_e$target$value = e.target.value) == null ? void 0 : (_e$target$value$split = _e$target$value.split('//')[1]) == null ? void 0 : _e$target$value$split.split('/')[0]) || "");

        _this.removeRedStyle();
      }
    })), m('.Form-group', m('label', app.translator.trans('Denumirea sursei')), m('input.FormControl', {
      type: "text",
      value: this.fields.siteName(),
      placeholder: "ex. example.com",
      required: true,
      oninput: function oninput(e) {
        _this.fields.siteName(e.target.value);

        _this.removeRedStyle();
      }
    })), m('.Form-group', m('label', app.translator.trans('Data publicării')), m('input.FormControl', {
      type: "text",
      placeholder: "ex. 01.01.1970",
      pattern: "^(?:(?:31(\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$",
      value: this.fields.createAt(),
      oninput: function oninput(e) {
        _this.fields.createAt(e.target.value);

        _this.removeRedStyle();
      }
    })), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: "Button Button--primary",
      onclick: function onclick() {
        return _this.addReference();
      }
    }, "Adaugare")))];
  };

  _proto.removeRedStyle = function removeRedStyle() {
    var requiredFields = this.$('input');

    for (var k = 0; k < requiredFields.length; k++) {
      if (requiredFields[k].validity.valid) {
        requiredFields[k].removeAttribute("style");
      }
    }
  };

  _proto.areSetRequiredFields = function areSetRequiredFields() {
    var requiredFields = this.$('input');
    var i = 0;

    for (var k = 0; k < requiredFields.length; k++) {
      if (!requiredFields[k].validity.valid) {
        requiredFields[k].style.setProperty('border-color', 'red', 'important');
        i++;
      }
    }

    if (i == 0) return true;
    return false;
  };

  _proto.addReference = function addReference() {
    if (!this.areSetRequiredFields()) return;
    var date = new Date(); // console.log(flarum.extensions['askvortsov-rich-text']);

    if (flarum.extensions['askvortsov-rich-text']) {
      // implements for askvortsov-rich-text editor
      app.composer.editor.insertAtCursor("[ref id=ref" + ++this.referenceId + "]" + this.referenceId + "[/ref]");
      var position = app.composer.editor.getSelectionRange();

      if (this.referenceId == 1) {
        app.composer.editor.moveCursorTo(app.composer.editor.attrs.menuState.editorView.dom.outerText.length + 1);
        app.composer.editor.setEnter();
        app.composer.editor.insertAtCursor("Referinte:");
        app.composer.editor.setEnter();
      } else {
        app.composer.editor.moveCursorTo(app.composer.editor.attrs.menuState.editorView.dom.outerText.length + 1);
        app.composer.editor.setEnter();
      }

      app.composer.editor.insertAtCursor(this.referenceId + ". [reference id=ref" + this.referenceId + " type=news] " + this.fields.author() + (this.fields.author().length === 0 ? "" : ". ") + this.fields.title() + ". " + this.fields.siteName() + (this.fields.createAt().length === 0 ? ". " : ", ") + this.fields.createAt() + (this.fields.createAt().length === 0 ? "" : ". ") + "[citat la " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + "] " + this.fields.link() + " [/reference]");
      app.composer.editor.setSelectionRange(position[0], position[1]);
      app.composer.editor.setEnter();
      app.composer.editor["delete"](); // this.array[0] = "Alt ceva"
      // console.log("rich-text");
    } else {
      // implements for flarum-markdown editor
      console.log(app.composer.editor.el.value);
      console.log(app.composer.fields.content());
      app.composer.editor.insertAtCursor("[ref id=ref" + ++this.referenceId + "]" + this.referenceId + "[/ref]");

      var _position = app.composer.editor.getSelectionRange();

      if (this.referenceId == 1) {
        app.composer.editor.moveCursorTo(app.composer.editor.el.value.length + 1); // app.composer.editor.setEnter();

        app.composer.editor.insertAtCursor("\n\nReferinte:\n"); // app.composer.editor.setEnter();
      } else {
        app.composer.editor.moveCursorTo(app.composer.editor.el.value.length + 1);
        app.composer.editor.insertAtCursor("\n"); // app.composer.editor.setEnter();
      }

      app.composer.editor.insertAtCursor("\n" + this.referenceId + "\\. [reference id=ref" + this.referenceId + " type=news] " + this.fields.author() + (this.fields.author().length === 0 ? "" : ". ") + this.fields.title() + ". " + this.fields.siteName() + (this.fields.createAt().length === 0 ? ". " : ", ") + this.fields.createAt() + (this.fields.createAt().length === 0 ? "" : ". ") + "[citat la " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + "] " + this.fields.link() + " [/reference]");
      app.composer.editor.setSelectionRange(_position[0], _position[1]); // console.log("non rich-text");
      // app.composer.editor.moveCursorTo(app.composer.fields.content().length + 1);
    }

    app.modal.close();
  };

  return NewsRefModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/ReferencesModal.js":
/*!*************************************************!*\
  !*** ./src/forum/components/ReferencesModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReferencesModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DefaultRefModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultRefModal */ "./src/forum/components/DefaultRefModal.js");
/* harmony import */ var _SiteRefModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SiteRefModal */ "./src/forum/components/SiteRefModal.js");
/* harmony import */ var _BookRefModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BookRefModal */ "./src/forum/components/BookRefModal.js");
/* harmony import */ var _NewsRefModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewsRefModal */ "./src/forum/components/NewsRefModal.js");
/* harmony import */ var _JournalRefModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JournalRefModal */ "./src/forum/components/JournalRefModal.js");








var ReferencesModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ReferencesModal, _Modal);

  function ReferencesModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = ReferencesModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
  };

  _proto.className = function className() {
    return "DiscussionType";
  };

  _proto.title = function title() {
    return "Selectare tip referinta";
  };

  _proto.content = function content() {
    return [m('.Modal-body', m('.Form.Form--centered div_referinta', m('.Form-group', m('.choiceBox', {
      onclick: function onclick() {
        return app.modal.show(_SiteRefModal__WEBPACK_IMPORTED_MODULE_3__["default"]);
      }
    }, m("i", {
      "class": "icon fas fa-window-maximize Button-icon"
    }), m('span', app.translator.trans('Site web'))
    /* m('p', app.translator.trans('Site web')) */
    )), m('.Form-group', m('.choiceBox', {
      onclick: function onclick() {
        return app.modal.show(_BookRefModal__WEBPACK_IMPORTED_MODULE_4__["default"]);
      }
    }, m("i", {
      "class": "icon fas fa-book Button-icon"
    }), m('span', app.translator.trans('Carte'))
    /* m('p', app.translator.trans('Carte')) */
    )), m('.Form-group', m('.choiceBox', {
      onclick: function onclick() {
        return app.modal.show(_NewsRefModal__WEBPACK_IMPORTED_MODULE_5__["default"]);
      }
    }, m("i", {
      "class": "icon fas fa-newspaper Button-icon"
    }), m('span', app.translator.trans('Stire'))
    /* m('p', app.translator.trans('Stire')) */
    )), m('.Form-group', m('.choiceBox', {
      onclick: function onclick() {
        return app.modal.show(_JournalRefModal__WEBPACK_IMPORTED_MODULE_6__["default"]);
      }
    }, m("i", {
      "class": "icon fas fa-book-open Button-icon"
    }), m('span', app.translator.trans('Jurnal'))
    /* m('p', app.translator.trans('Jurnal')) */
    )), m('.Form-group', m('.choiceBox', {
      onclick: function onclick() {
        return app.modal.show(_DefaultRefModal__WEBPACK_IMPORTED_MODULE_2__["default"]);
      }
    }, m("i", {
      "class": "icon fas fa-bookmark Button-icon"
    }), m('span', app.translator.trans('De baza'))
    /* m('p', app.translator.trans('De baza')) */
    ))))];
  };

  return ReferencesModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/SiteRefModal.js":
/*!**********************************************!*\
  !*** ./src/forum/components/SiteRefModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteRefModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);





var SiteRefModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SiteRefModal, _Modal);

  function SiteRefModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = SiteRefModal.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this$allReferences;

    _Modal.prototype.oninit.call(this, vnode);

    this.value = app.composer.fields.content() || ''; // this.allReferences = this.value.match(/\[reference\ id=[\w]*\][\w\ \(\)\[\]\.\,\/\\\-_\+;:"'?&]*\[\/reference\]/gm);

    this.allReferences = this.value.match(/\[reference\ id=[\w]* type=[\w]*\].*\[\/reference\]/gm);
    this.referenceId = ((_this$allReferences = this.allReferences) == null ? void 0 : _this$allReferences.length) || 0;
    this.fields = {
      title: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      link: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      author: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      createAt: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      siteName: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('')
    };
  };

  _proto.className = function className() {
    return "";
  };

  _proto.title = function title() {
    return "Site web";
  };

  _proto.content = function content() {
    var _this = this;

    return [m('.Modal-body', m('Form.Form--left', m('span.description', app.translator.trans('Înregistrarea referințelor bibliografice la publicațiile postate pe Internet.')), m('.Form-group', m('label', app.translator.trans('Titlul referintei')), m('input.FormControl', {
      type: "text",
      value: this.fields.title(),
      placeholder: "ex. Pădurea spânzuraților",
      required: true,
      oninput: function oninput(e) {
        _this.fields.title(e.target.value);

        _this.removeRedStyle();
      }
    })), m('.Form-group', m('label', app.translator.trans('Link')), m('input.FormControl', {
      type: "url",
      value: this.fields.link(),
      placeholder: "ex. http://example.com",
      required: true,
      oninput: function oninput(e) {
        var _e$target$value, _e$target$value$split;

        _this.fields.link(e.target.value);

        _this.fields.siteName(((_e$target$value = e.target.value) == null ? void 0 : (_e$target$value$split = _e$target$value.split('//')[1]) == null ? void 0 : _e$target$value$split.split('/')[0]) || "");

        _this.removeRedStyle();
      }
    })), m('.Form-group', m('label', app.translator.trans('Author')), m('input.FormControl', {
      type: "text",
      placeholder: "ex. L. Rebreanu",
      bidi: this.fields.author
    })), m('.Form-group', m('label', app.translator.trans('Data plasarii pe site')), m('input.FormControl', {
      type: "text",
      placeholder: "ex. 01.01.1970",
      pattern: "^(?:(?:31(\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$",
      value: this.fields.createAt(),
      oninput: function oninput(e) {
        _this.fields.createAt(e.target.value);

        _this.removeRedStyle();
      }
    })), m('.Form-group', m('label', app.translator.trans('Denumirea Web-site')), m('input.FormControl', {
      type: "text",
      value: this.fields.siteName(),
      placeholder: "ex. example.com",
      required: true,
      oninput: function oninput(e) {
        _this.fields.siteName(e.target.value);

        _this.removeRedStyle();
      }
    })), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: "Button Button--primary",
      onclick: function onclick() {
        return _this.addReference();
      }
    }, "Adaugare")))];
  };

  _proto.removeRedStyle = function removeRedStyle() {
    var requiredFields = this.$('input');

    for (var k = 0; k < requiredFields.length; k++) {
      if (requiredFields[k].validity.valid) {
        requiredFields[k].removeAttribute("style");
      }
    }
  };

  _proto.areSetRequiredFields = function areSetRequiredFields() {
    var requiredFields = this.$('input');
    var i = 0;

    for (var k = 0; k < requiredFields.length; k++) {
      if (!requiredFields[k].validity.valid) {
        requiredFields[k].style.setProperty('border-color', 'red', 'important');
        i++;
      }
    }

    if (i == 0) return true;
    return false;
  };

  _proto.addReference = function addReference() {
    if (!this.areSetRequiredFields()) return;
    var date = new Date(); // console.log(flarum.extensions['askvortsov-rich-text']);

    if (flarum.extensions['askvortsov-rich-text']) {
      // implements for askvortsov-rich-text editor
      app.composer.editor.insertAtCursor("[ref id=ref" + ++this.referenceId + "]" + this.referenceId + "[/ref]");
      var position = app.composer.editor.getSelectionRange();

      if (this.referenceId == 1) {
        app.composer.editor.moveCursorTo(app.composer.editor.attrs.menuState.editorView.dom.outerText.length + 1);
        app.composer.editor.setEnter();
        app.composer.editor.insertAtCursor("Referinte:");
        app.composer.editor.setEnter();
      } else {
        app.composer.editor.moveCursorTo(app.composer.editor.attrs.menuState.editorView.dom.outerText.length + 1);
        app.composer.editor.setEnter();
      }

      app.composer.editor.insertAtCursor(this.referenceId + ". [reference id=ref" + this.referenceId + " type=site] " + this.fields.author() + (this.fields.author().length === 0 ? "" : ". ") + this.fields.title() + ". " + this.fields.siteName() + (this.fields.createAt().length === 0 ? ". " : ", ") + this.fields.createAt() + (this.fields.createAt().length === 0 ? "" : ". ") + "[citat la " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + "] " + this.fields.link() + " [/reference]");
      app.composer.editor.setSelectionRange(position[0], position[1]);
      app.composer.editor.setEnter();
      app.composer.editor["delete"](); // this.array[0] = "Alt ceva"
      // console.log("rich-text");
    } else {
      // implements for flarum-markdown editor
      console.log(app.composer.editor.el.value);
      console.log(app.composer.fields.content());
      app.composer.editor.insertAtCursor("[ref id=ref" + ++this.referenceId + "]" + this.referenceId + "[/ref]");

      var _position = app.composer.editor.getSelectionRange();

      if (this.referenceId == 1) {
        app.composer.editor.moveCursorTo(app.composer.editor.el.value.length + 1); // app.composer.editor.setEnter();

        app.composer.editor.insertAtCursor("\n\nReferinte:\n"); // app.composer.editor.setEnter();
      } else {
        app.composer.editor.moveCursorTo(app.composer.editor.el.value.length + 1);
        app.composer.editor.insertAtCursor("\n"); // app.composer.editor.setEnter();
      }

      app.composer.editor.insertAtCursor("\n" + this.referenceId + "\\. [reference id=ref" + this.referenceId + " type=site] " + this.fields.author() + (this.fields.author().length === 0 ? "" : ". ") + this.fields.title() + ". " + this.fields.siteName() + (this.fields.createAt().length === 0 ? ". " : ", ") + this.fields.createAt() + (this.fields.createAt().length === 0 ? "" : ". ") + "[citat la " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + "] " + this.fields.link() + " [/reference]");
      app.composer.editor.setSelectionRange(_position[0], _position[1]); // console.log("non rich-text");
      // app.composer.editor.moveCursorTo(app.composer.fields.content().length + 1);
    }

    app.modal.close();
  };

  return SiteRefModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tiptap_commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiptap-commands */ "./node_modules/tiptap-commands/dist/commands.esm.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _InsertReferenceDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InsertReferenceDropdown */ "./src/forum/InsertReferenceDropdown.js");
/* harmony import */ var flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/TextEditorButton */ "flarum/components/TextEditorButton");
/* harmony import */ var flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/ComposerBody */ "flarum/components/ComposerBody");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_ReferencesModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ReferencesModal */ "./src/forum/components/ReferencesModal.js");


function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }














 // import {components} from '@block-cat-components';
// const components = require('@block-cat-components');
// function getStatus(url) {
//   var request = new XMLHttpRequest();
//   request.open("GET", url, true);
//   request.setRequestHeader('Access-Control-Allow-Origin', '*');
//   request.setRequestHeader('Access-Control-Allow-Methods', 'GET');
//   request.onreadystatechange = function() {
//         if (request.readyState === 4){
//             console.log(request.status);//this contains the status code
//         }
//     };
//   request.send();
//   // return request.status;
// }

flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.initializers.add('aradeid/flarum-references', function () {
  // console.log(app);
  // console.log(flarum);
  // console.log(flarum.extensions['block-cat-components']);
  // console.log(components);
  // adaugarea metodei pentru simularea tastei enter in rich-text
  if (flarum.extensions['askvortsov-rich-text']) {
    var ProseMirrorEditorDriver = flarum.extensions['askvortsov-rich-text'].proseMirror.ProseMirrorEditorDriver;

    ProseMirrorEditorDriver.prototype.setEnter = function () {
      // console.log(this.view.state);
      tiptap_commands__WEBPACK_IMPORTED_MODULE_3__["baseKeymap"]['Enter'](this.view.state, this.view.dispatch); // baseKeymap['Enter'];
    };

    ProseMirrorEditorDriver.prototype["delete"] = function () {
      // console.log("sters");
      tiptap_commands__WEBPACK_IMPORTED_MODULE_3__["baseKeymap"]['Backspace'](this.view.state, this.view.dispatch);
    };
  } // console.log(app.composer.editor);
  // adaugarea butonului pentru referinte in Editor la optiuni


  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_7___default.a.prototype, 'toolbarItems', function (items) {
    // console.log(app.composer.editor);
    // by Aradeid
    //() => this.attrs.composer.editor.insertAtCursor(' :')

    /*items.add(
      'addReference',
      (
        <TextEditorButton onclick={addReference.bind(this)} icon="fas fa-paper-plane">
          {app.translator.trans('flarum-references.forum.composer.addReferenceButton')}
        </TextEditorButton>
      )
    );*/
    // items.add(
    //   'link',
    //   InsertReferenceDropdown.component({
    //     type: 'link',
    //     icon: 'fas fa-link',
    //     tooltip: app.translator.trans('flarum-references.forum.composer.addReferenceButton'),
    //     state: this.attrs.state,
    //   }),
    //   50
    // );
    // console.log(this.attrs.composer.fields.content());
    // by BlockCat
    items.add('references', flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_11___default.a.component({
      text: "Referinta"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_10___default.a.component({
      className: 'Button Button--icon Button--link',
      icon: 'fas fa-link',
      onclick: function onclick() {
        return flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.modal.show(_components_ReferencesModal__WEBPACK_IMPORTED_MODULE_14__["default"]);
      }
    })));
    return items;
  }); // adaugarea butonului pentru referinte in Editor in partea dreapta (portlet-ui)

  flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.sidebarMenu = function () {
    var _this = this;

    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_12___default.a();
    items.add('reference_button', flarum_components_Button__WEBPACK_IMPORTED_MODULE_10___default.a.component({
      // icon: 'fas fa-pencil-alt',
      className: 'Button Button--secondary',
      onclick: function onclick() {
        return flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.modal.show(_components_ReferencesModal__WEBPACK_IMPORTED_MODULE_14__["default"]);
      }
    }, "Referinte"));
    items.add('reference_ctrl_button', flarum_components_Button__WEBPACK_IMPORTED_MODULE_10___default.a.component({
      className: 'Button Button--secondary',
      onclick: function onclick() {
        return _this.linkControl();
      }
    }, "Control"));
    return items;
  };

  flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.linkControl = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://tools.emoldova.org/tools/validate-source', {
              method: 'POST',
              body: JSON.stringify({
                url: 'https://code.visualstudio.com/docs/java/java-tutorial'
              }) // headers: {
              //   // 'Access-Control-Allow-Origin' : '*',
              //   // 'Access-Control-Request-Method' : 'GET',
              //   'origin': '*'
              // },

            });

          case 2:
            response = _context.sent;
            // console.log(getStatus('https://cors-anywhere.herokuapp.com/https://code.visualstudio.com/docs/java/java-tutorial'));
            console.log(response.json());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_9___default.a.prototype, 'view', function (view) {
    view.children[0].children[1].children.push(m("ul", {
      className: "sidebarMenu"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_13___default()(this.sidebarMenu().toArray())));
  }); // Implementarea accesarii link-urilor interne in articole si comentarii
  // by BlockCat

  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_8___default.a.prototype, ['oncreate', 'onupdate'], function () {
    var baseUrl = flarum_app__WEBPACK_IMPORTED_MODULE_4___default.a.forum.attribute('baseUrl');
    var postBody = this.element.querySelector('.Post-body');
    var elements = postBody.querySelectorAll('a');

    var _loop = function _loop() {
      var link = _step.value;

      if (link.classList.contains('PostMention')) {
        return "continue";
      }

      var href = link.href;

      if (!href.startsWith(baseUrl)) {
        return "continue";
      }

      var path = href.replace(baseUrl, '');
      var elements = path.split('/');
      var isFile = elements[elements.length - 1].match(/(.*)\.(.*)/i);

      if (isFile) {
        return "continue";
      }

      var separateId = elements[elements.length - 1].split('#');
      var referenceId = separateId[separateId.length - 1];
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var reference = document.getElementById(referenceId);
        reference == null ? void 0 : reference.scrollIntoView({
          behavior: 'smooth'
        });
      });
    };

    for (var _iterator = _createForOfIteratorHelperLoose(elements), _step; !(_step = _iterator()).done;) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }
  });
}, -21); // by Aradeid
// function addReference() {
//   styleSelectedText(app.composer.editor.el, 
//     //{ prefix: '![', suffix: '](https://)', replaceNext: 'https://', scanFor: 'https?://' }
//     { prefix: '[ref][', suffix: '](https://insertLinkHere)[/ref]' }
//   );
// }

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/common/utils/styleSelectedText":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['common/utils/styleSelectedText']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/styleSelectedText'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/ComposerBody":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/ComposerBody']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ComposerBody'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/TextEditorButton":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditorButton']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditorButton'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map