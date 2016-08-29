/*! 钱小端的初体验 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(3);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _build = __webpack_require__(4);

	var _build2 = _interopRequireDefault(_build);

	var _app = __webpack_require__(154);

	var _app2 = _interopRequireDefault(_app);

	var _indexView = __webpack_require__(158);

	var _indexView2 = _interopRequireDefault(_indexView);

	var _layerView = __webpack_require__(164);

	var _layerView2 = _interopRequireDefault(_layerView);

	var _swipeView = __webpack_require__(169);

	var _swipeView2 = _interopRequireDefault(_swipeView);

	var _toastView = __webpack_require__(174);

	var _toastView2 = _interopRequireDefault(_toastView);

	var _actionsheetView = __webpack_require__(179);

	var _actionsheetView2 = _interopRequireDefault(_actionsheetView);

	var _pickerView = __webpack_require__(184);

	var _pickerView2 = _interopRequireDefault(_pickerView);

	var _searchView = __webpack_require__(189);

	var _searchView2 = _interopRequireDefault(_searchView);

	var _headerView = __webpack_require__(194);

	var _headerView2 = _interopRequireDefault(_headerView);

	var _cellView = __webpack_require__(199);

	var _cellView2 = _interopRequireDefault(_cellView);

	var _gridsView = __webpack_require__(204);

	var _gridsView2 = _interopRequireDefault(_gridsView);

	var _switchView = __webpack_require__(209);

	var _switchView2 = _interopRequireDefault(_switchView);

	var _radioView = __webpack_require__(214);

	var _radioView2 = _interopRequireDefault(_radioView);

	var _checklistView = __webpack_require__(219);

	var _checklistView2 = _interopRequireDefault(_checklistView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//使用路由
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_build2.default);

	//初始化
	var router = new _vueRouter2.default();

	//路由设置
	router.map({
	    '/': {
	        component: _indexView2.default
	    },
	    '/layer': {
	        component: _layerView2.default
	    },
	    '/swipe': {
	        component: _swipeView2.default
	    },
	    '/toast': {
	        component: _toastView2.default
	    },
	    '/actionSheet': {
	        component: _actionsheetView2.default
	    },
	    '/picker': {
	        component: _pickerView2.default
	    },
	    '/search': {
	        component: _searchView2.default
	    },
	    '/header': {
	        component: _headerView2.default
	    },
	    '/cell': {
	        component: _cellView2.default
	    },
	    '/switch': {
	        component: _switchView2.default
	    },
	    '/radio': {
	        component: _radioView2.default
	    },
	    '/checklist': {
	        component: _checklistView2.default
	    },
	    '/grids': {
	        component: _gridsView2.default
	    }
	});

	//默认路径
	router.redirect({
	    '*': '/'
	});
	//挂载
	router.start(_app2.default, '#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.26
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
	var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

	// detecting iOS UIWebView by indexedDB
	var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};

	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIos: isIos,
		iosVersionMatch: iosVersionMatch,
		iosVersion: iosVersion,
		hasMutationObserverBug: hasMutationObserverBug,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.26';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(81);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(87);

	var _index6 = _interopRequireDefault(_index5);

	var _switch = __webpack_require__(93);

	var _switch2 = _interopRequireDefault(_switch);

	var _swipe = __webpack_require__(99);

	var _swipe2 = _interopRequireDefault(_swipe);

	var _actionsheet = __webpack_require__(107);

	var _actionsheet2 = _interopRequireDefault(_actionsheet);

	var _grids = __webpack_require__(112);

	var _grids2 = _interopRequireDefault(_grids);

	var _cell = __webpack_require__(117);

	var _cell2 = _interopRequireDefault(_cell);

	var _picker = __webpack_require__(122);

	var _picker2 = _interopRequireDefault(_picker);

	var _pickerDate = __webpack_require__(132);

	var _pickerDate2 = _interopRequireDefault(_pickerDate);

	var _pickerCity = __webpack_require__(135);

	var _pickerCity2 = _interopRequireDefault(_pickerCity);

	var _header = __webpack_require__(139);

	var _header2 = _interopRequireDefault(_header);

	var _checklist = __webpack_require__(144);

	var _checklist2 = _interopRequireDefault(_checklist);

	var _radio = __webpack_require__(149);

	var _radio2 = _interopRequireDefault(_radio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var install = function install(Vue) {

		if (install.installed) return;

		Vue.component(_switch2.default.name, _switch2.default);
		Vue.component(_swipe2.default.name, _swipe2.default);
		Vue.component(_actionsheet2.default.name, _actionsheet2.default);
		Vue.component(_grids2.default.name, _grids2.default);
		Vue.component(_cell2.default.name, _cell2.default);
		Vue.component(_picker2.default.name, _picker2.default);
		Vue.component(_pickerCity2.default.name, _pickerCity2.default);
		Vue.component(_pickerDate2.default.name, _pickerDate2.default);
		Vue.component(_header2.default.name, _header2.default);
		Vue.component(_radio2.default.name, _radio2.default);
		Vue.component(_checklist2.default.name, _checklist2.default);

		var searchResult = (0, _index6.default)(Vue);
		var toastResult = (0, _index4.default)(Vue);
		var layerResult = (0, _index2.default)(Vue);

		Vue.$layer = Vue.prototype.$layer = layerResult;
		Vue.$toast = Vue.prototype.$toast = toastResult;
		Vue.$search = Vue.prototype.$search = searchResult;
	};

	if (typeof window !== 'undefined' && window.Vue) {
		install(window.Vue);
	};

	module.exports = {
		install: install,
		layer: _index2.default,
		toast: _index4.default,
		search: _index6.default,
		sWitch: _switch2.default,
		swipe: _swipe2.default,
		actionSheet: _actionsheet2.default,
		grids: _grids2.default,
		cell: _cell2.default,
		picker: _picker2.default,
		pickerDate: _pickerDate2.default,
		pickerCity: _pickerCity2.default,
		header: _header2.default,
		checklist: _checklist2.default,
		radio: _radio2.default
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.layer = undefined;

	var _typeof2 = __webpack_require__(6);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _layer = __webpack_require__(74);

	var _layer2 = _interopRequireDefault(_layer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var layer = function layer(Vue) {
		var defaults = {
			message: "",
			type: 0,
			close: false,
			icon: 0,
			shade: true,
			shadeClose: true,
			no: '',
			yes: '',
			timer: 0,
			show: true
		};

		var layerConstructor = Vue.extend(_layer2.default);

		var initData, layerNum;

		layerNum = 0;

		var layerInit = function layerInit() {
			return new layerConstructor({ el: document.createElement('div') });
		};

		var dataCopy = function dataCopy(obj) {

			if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) != 'object') {
				return obj;
			}
			var newData = {};
			for (var attr in obj) {
				newData[attr] = dataCopy(obj[attr]);
			}
			return newData;
		};

		var result = function result(options) {
			var InitLayer = layerInit();
			if (typeof options === "string") {
				initData = dataCopy(defaults);
				initData.message = options;
				for (var prop in initData) {
					InitLayer[prop] = initData[prop];
				}
			} else if ((typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) === "object" && Object.prototype.toString.call(options).toLowerCase() == "[object object]" && !options.length) {
				initData = dataCopy(defaults);
				for (var prop in options) {
					initData[prop] = options[prop];
				}
				for (var prop in initData) {
					InitLayer[prop] = initData[prop];
				}
			}
			InitLayer.$appendTo(document.body);
			result.assembly[layerNum] = InitLayer;
			layerNum++;
			result.assembly.length = layerNum;
			return InitLayer;
		};

		result.assembly = {};
		result.assembly.length = 0;

		result.alert = function (msg, yesFn) {
			var data = {
				type: 1,
				message: msg,
				yes: yesFn || ''
			};
			return result(data);
		};

		result.loading = function (iconType, time) {
			var data = {
				type: 2,
				icon: iconType,
				timer: time || 0,
				shadeClose: false
			};
			return result(data);
		};

		result.confirm = function (msg, yesFn, noFn) {
			var data = {
				type: 3,
				message: msg,
				yes: yesFn || '',
				no: noFn || ''
			};
			return result(data);
		};

		result.closeAll = function () {
			for (var i = 0; i < result.assembly.length; i++) {
				result.assembly[i].$destroy(true);
			}
		};

		return result;
	};

	exports.default = layer;
	exports.layer = layer;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(7);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(58);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(53);
	module.exports = __webpack_require__(57).f('iterator');

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(10)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(13)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(11)
	  , defined   = __webpack_require__(12);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(14)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(30)
	  , hide           = __webpack_require__(20)
	  , has            = __webpack_require__(31)
	  , Iterators      = __webpack_require__(32)
	  , $iterCreate    = __webpack_require__(33)
	  , setToStringTag = __webpack_require__(49)
	  , getPrototypeOf = __webpack_require__(51)
	  , ITERATOR       = __webpack_require__(50)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , core      = __webpack_require__(17)
	  , ctx       = __webpack_require__(18)
	  , hide      = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 16 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(19);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(21)
	  , createDesc = __webpack_require__(29);
	module.exports = __webpack_require__(25) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(22)
	  , IE8_DOM_DEFINE = __webpack_require__(24)
	  , toPrimitive    = __webpack_require__(28)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(25) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(25) && !__webpack_require__(26)(function(){
	  return Object.defineProperty(__webpack_require__(27)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(26)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23)
	  , document = __webpack_require__(16).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(23);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);

/***/ },
/* 31 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(34)
	  , descriptor     = __webpack_require__(29)
	  , setToStringTag = __webpack_require__(49)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(20)(IteratorPrototype, __webpack_require__(50)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(22)
	  , dPs         = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(47)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(27)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(21)
	  , anObject = __webpack_require__(22)
	  , getKeys  = __webpack_require__(36);

	module.exports = __webpack_require__(25) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(37)
	  , enumBugKeys = __webpack_require__(47);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(31)
	  , toIObject    = __webpack_require__(38)
	  , arrayIndexOf = __webpack_require__(41)(false)
	  , IE_PROTO     = __webpack_require__(44)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(39)
	  , defined = __webpack_require__(12);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(40);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(38)
	  , toLength  = __webpack_require__(42)
	  , toIndex   = __webpack_require__(43);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(11)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(11)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(45)('keys')
	  , uid    = __webpack_require__(46);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(16)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(21).f
	  , has = __webpack_require__(31)
	  , TAG = __webpack_require__(50)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(45)('wks')
	  , uid        = __webpack_require__(46)
	  , Symbol     = __webpack_require__(16).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(31)
	  , toObject    = __webpack_require__(52)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(54);
	var global        = __webpack_require__(16)
	  , hide          = __webpack_require__(20)
	  , Iterators     = __webpack_require__(32)
	  , TO_STRING_TAG = __webpack_require__(50)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(55)
	  , step             = __webpack_require__(56)
	  , Iterators        = __webpack_require__(32)
	  , toIObject        = __webpack_require__(38);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(13)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(50);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	module.exports = __webpack_require__(17).Symbol;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(16)
	  , has            = __webpack_require__(31)
	  , DESCRIPTORS    = __webpack_require__(25)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(30)
	  , META           = __webpack_require__(61).KEY
	  , $fails         = __webpack_require__(26)
	  , shared         = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(49)
	  , uid            = __webpack_require__(46)
	  , wks            = __webpack_require__(50)
	  , wksExt         = __webpack_require__(57)
	  , wksDefine      = __webpack_require__(62)
	  , keyOf          = __webpack_require__(63)
	  , enumKeys       = __webpack_require__(64)
	  , isArray        = __webpack_require__(67)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(28)
	  , createDesc     = __webpack_require__(29)
	  , _create        = __webpack_require__(34)
	  , gOPNExt        = __webpack_require__(68)
	  , $GOPD          = __webpack_require__(70)
	  , $DP            = __webpack_require__(21)
	  , $keys          = __webpack_require__(36)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(69).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(66).f  = $propertyIsEnumerable;
	  __webpack_require__(65).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(14)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(46)('meta')
	  , isObject = __webpack_require__(23)
	  , has      = __webpack_require__(31)
	  , setDesc  = __webpack_require__(21).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(26)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(16)
	  , core           = __webpack_require__(17)
	  , LIBRARY        = __webpack_require__(14)
	  , wksExt         = __webpack_require__(57)
	  , defineProperty = __webpack_require__(21).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(36)
	  , toIObject = __webpack_require__(38);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(36)
	  , gOPS    = __webpack_require__(65)
	  , pIE     = __webpack_require__(66);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 66 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(40);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(38)
	  , gOPN      = __webpack_require__(69).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(37)
	  , hiddenKeys = __webpack_require__(47).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(66)
	  , createDesc     = __webpack_require__(29)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(28)
	  , has            = __webpack_require__(31)
	  , IE8_DOM_DEFINE = __webpack_require__(24)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(25) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62)('asyncIterator');

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62)('observable');

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(75)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\JsComponents\\layer\\layer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(80)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5f464872/layer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	__webpack_require__(76);

	exports.default = {
		name: 'Jui-layer',
		data: function data() {
			return {
				message: '',
				type: 0,
				close: true,
				icon: 0,
				shade: true,
				shadeClose: false,
				no: '',
				yes: '',
				timer: 0,
				show: false
			};
		},
		ready: function ready() {
			var that = this;
			if (that.timer) {
				setTimeout(function () {
					that.$destroy(true);
				}, that.timer);
			}
		},

		methods: {
			closeFn: function closeFn() {
				this.$destroy(true);
			},
			shadeCloseFn: function shadeCloseFn() {
				this.shadeClose ? this.$destroy(true) : '';
			},
			noFn: function noFn() {
				typeof this.yes == "function" ? this.no() : '';
				this.$destroy(true);
			},
			yesFn: function yesFn() {
				typeof this.yes == "function" ? this.yes() : '';
				return this.$destroy(true);
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="jui-layer">
	// 		<div class="jui-layer-mask" v-if="shade" @click="shadeCloseFn()">
	// 			<div class="jui-layer-close" v-if="close" @click="closeFn"></div>
	// 		</div>
	// 		<div class="jui-layer-content" v-if="show" transition="Jui-fade">			
	//
	// 			<div class="jui-layer-msg" v-if="type == 0">
	// 				<div class="layer-msg-con">{{message}}</div>
	// 			</div>
	//
	// 			<div class="jui-layer-alert"  v-if="type == 1">
	// 				<div class="layer-alert-con">
	// 					<p>{{message}}</p>
	// 					<button @click="yesFn">确认</button>
	// 				</div>
	// 			</div>
	//
	// 			<div class="jui-layer-loading"  v-if="type == 2">
	// 					<div class="icon-1" v-if="icon==0">
	// 				          <div></div>
	// 				          <div></div>
	// 				          <div></div>
	// 				          <div></div>
	// 				          <div></div>
	// 				          <div></div>
	// 				          <div></div>
	// 				          <div></div>
	// 					</div>
	// 					<div class="icon-2" v-if="icon == 1">
	// 						<div></div>
	// 						<div></div>
	// 						<div></div>
	// 						<div></div>
	// 						<div></div>
	// 					</div>
	// 					<div class="icon-3" v-if="icon == 2">
	// 						<div></div>
	// 						<div></div>
	// 						<div></div>
	// 						<div></div>
	// 						<div></div>					
	// 					</div>
	// 			</div>
	//
	// 			<div class="jui-layer-confirm"  v-if="type == 3">
	// 				<div class="layer-confirm-con">
	// 					<p>{{{message}}}</p>
	// 					<nav>
	// 						<a @click="noFn">取消</a>
	// 						<a @click="yesFn">确定</a>
	// 					</nav>
	// 				</div>
	// 			</div>
	//
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script type="text/javascript">

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(77);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./layer.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./layer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.jui-layer {\n  position: relative;\n  z-index: 19891014;\n  /* 关闭按钮 */\n  /* 信息层 */\n  /* 提示层 */\n  /* 加载层 */\n  /* 提示层 */ }\n  .jui-layer * {\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    font-size: 14px;\n    line-height: 1.5em; }\n  .jui-layer .jui-layer-mask {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    pointer-events: auto; }\n  .jui-layer .jui-layer-content {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: table;\n    pointer-events: none; }\n  .jui-layer .jui-layer-close {\n    background-color: white;\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    border-radius: 30px; }\n    .jui-layer .jui-layer-close:before, .jui-layer .jui-layer-close:after {\n      content: ' ';\n      width: 1px;\n      height: 16px;\n      position: absolute;\n      top: 7px;\n      left: 14px;\n      background-color: #666;\n      transform: rotate(45deg);\n      -webkit-transform: rotate(45deg); }\n    .jui-layer .jui-layer-close:after {\n      transform: rotate(-45deg);\n      -webkit-transform: rotate(-45deg); }\n  .jui-layer .jui-layer-msg {\n    display: table-cell;\n    text-align: center;\n    vertical-align: middle; }\n    .jui-layer .jui-layer-msg .layer-msg-con {\n      background-color: #fff;\n      color: #333;\n      max-width: 80%;\n      width: 210px;\n      display: inline-table;\n      border-radius: 4px;\n      padding: 10px;\n      pointer-events: auto; }\n  .jui-layer .jui-layer-alert {\n    display: table-cell;\n    text-align: center;\n    vertical-align: middle; }\n    .jui-layer .jui-layer-alert .layer-alert-con {\n      background-color: #fff;\n      color: #333;\n      max-width: 80%;\n      width: 180px;\n      display: inline-table;\n      border-radius: 4px;\n      pointer-events: auto; }\n      .jui-layer .jui-layer-alert .layer-alert-con p {\n        border-bottom: 1px solid #cccccc;\n        display: block;\n        padding: 10px; }\n      .jui-layer .jui-layer-alert .layer-alert-con button {\n        display: block;\n        text-align: center;\n        width: 100%;\n        padding: 5px 0;\n        color: #38a8d7; }\n  .jui-layer .jui-layer-loading {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0; }\n\n@-webkit-keyframes ball-spin-fade-loader {\n  50% {\n    opacity: 0.3;\n    -webkit-transform: scale(0.4);\n    transform: scale(0.4); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes ball-spin-fade-loader {\n  50% {\n    opacity: 0.3;\n    -webkit-transform: scale(0.4);\n    transform: scale(0.4); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n    .jui-layer .jui-layer-loading .icon-1 {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: -25px;\n      margin-left: -10px; }\n    .jui-layer .jui-layer-loading .icon-1 > div:nth-child(1) {\n      top: 25px;\n      left: 0;\n      -webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;\n      animation: ball-spin-fade-loader 1s 0s infinite linear; }\n    .jui-layer .jui-layer-loading .icon-1 > div:nth-child(2) {\n      top: 17.04545px;\n      left: 17.04545px;\n      -webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;\n      animation: ball-spin-fade-loader 1s 0.12s infinite linear; }\n    .jui-layer .jui-layer-loading .icon-1 > div:nth-child(3) {\n      top: 0;\n      left: 25px;\n      -webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;\n      animation: ball-spin-fade-loader 1s 0.24s infinite linear; }\n    .jui-layer .jui-layer-loading .icon-1 > div:nth-child(4) {\n      top: -17.04545px;\n      left: 17.04545px;\n      -webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;\n      animation: ball-spin-fade-loader 1s 0.36s infinite linear; }\n    .jui-layer .jui-layer-loading .icon-1 > div:nth-child(5) {\n      top: -25px;\n      left: 0;\n      -webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;\n      animation: ball-spin-fade-loader 1s 0.48s infinite linear; }\n    .jui-layer .jui-layer-loading .icon-1 > div:nth-child(6) {\n      top: -17.04545px;\n      left: -17.04545px;\n      -webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;\n      animation: ball-spin-fade-loader 1s 0.6s infinite linear; }\n    .jui-layer .jui-layer-loading .icon-1 > div:nth-child(7) {\n      top: 0;\n      left: -25px;\n      -webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;\n      animation: ball-spin-fade-loader 1s 0.72s infinite linear; }\n    .jui-layer .jui-layer-loading .icon-1 > div:nth-child(8) {\n      top: 17.04545px;\n      left: -17.04545px;\n      -webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;\n      animation: ball-spin-fade-loader 1s 0.84s infinite linear; }\n    .jui-layer .jui-layer-loading .icon-1 > div {\n      background-color: #fff;\n      width: 15px;\n      height: 15px;\n      border-radius: 100%;\n      margin: 2px;\n      -webkit-animation-fill-mode: both;\n      animation-fill-mode: both;\n      position: absolute; }\n\n@-webkit-keyframes line-scale-pulse-out-rapid {\n  0% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1); }\n  80% {\n    -webkit-transform: scaley(0.3);\n    transform: scaley(0.3); }\n  90% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1); } }\n\n@keyframes line-scale-pulse-out-rapid {\n  0% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1); }\n  80% {\n    -webkit-transform: scaley(0.3);\n    transform: scaley(0.3); }\n  90% {\n    -webkit-transform: scaley(1);\n    transform: scaley(1); } }\n    .jui-layer .jui-layer-loading .icon-2 {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-left: -34px;\n      margin-top: -22px; }\n    .jui-layer .jui-layer-loading .icon-2 > div {\n      background-color: #fff;\n      width: 4px;\n      height: 35px;\n      border-radius: 2px;\n      margin: 2px;\n      -webkit-animation-fill-mode: both;\n      animation-fill-mode: both;\n      display: inline-block;\n      -webkit-animation: line-scale-pulse-out-rapid 0.9s 0s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);\n      animation: line-scale-pulse-out-rapid 0.9s 0s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78); }\n    .jui-layer .jui-layer-loading .icon-2 > div:nth-child(2), .jui-layer .jui-layer-loading .icon-2 > div:nth-child(4) {\n      -webkit-animation-delay: 0.25s !important;\n      animation-delay: 0.25s !important; }\n    .jui-layer .jui-layer-loading .icon-2 > div:nth-child(1), .jui-layer .jui-layer-loading .icon-2 > div:nth-child(5) {\n      -webkit-animation-delay: 0.5s !important;\n      animation-delay: 0.5s !important; }\n\n@-webkit-keyframes rotate_pacman_half_up {\n  0% {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg); }\n  50% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); }\n  100% {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg); } }\n\n@keyframes rotate_pacman_half_up {\n  0% {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg); }\n  50% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); }\n  100% {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg); } }\n\n@-webkit-keyframes rotate_pacman_half_down {\n  0% {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg); }\n  50% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg); } }\n\n@keyframes rotate_pacman_half_down {\n  0% {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg); }\n  50% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg); } }\n\n@-webkit-keyframes pacman-balls {\n  75% {\n    opacity: 0.7; }\n  100% {\n    -webkit-transform: translate(-100px, -6.25px);\n    transform: translate(-100px, -6.25px); } }\n\n@keyframes pacman-balls {\n  75% {\n    opacity: 0.7; }\n  100% {\n    -webkit-transform: translate(-100px, -6.25px);\n    transform: translate(-100px, -6.25px); } }\n    .jui-layer .jui-layer-loading .icon-3 {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-left: -34px;\n      margin-top: -25px; }\n    .jui-layer .jui-layer-loading .icon-3 > div:nth-child(2) {\n      -webkit-animation: pacman-balls 1s 0s infinite linear;\n      animation: pacman-balls 1s 0s infinite linear; }\n    .jui-layer .jui-layer-loading .icon-3 > div:nth-child(3) {\n      -webkit-animation: pacman-balls 1s 0.33s infinite linear;\n      animation: pacman-balls 1s 0.33s infinite linear; }\n    .jui-layer .jui-layer-loading .icon-3 > div:nth-child(4) {\n      -webkit-animation: pacman-balls 1s 0.66s infinite linear;\n      animation: pacman-balls 1s 0.66s infinite linear; }\n    .jui-layer .jui-layer-loading .icon-3 > div:nth-child(5) {\n      -webkit-animation: pacman-balls 1s 0.99s infinite linear;\n      animation: pacman-balls 1s 0.99s infinite linear; }\n    .jui-layer .jui-layer-loading .icon-3 > div:first-of-type {\n      width: 0px;\n      height: 0px;\n      border-right: 25px solid transparent;\n      border-top: 25px solid #fff;\n      border-left: 25px solid #fff;\n      border-bottom: 25px solid #fff;\n      border-radius: 25px;\n      -webkit-animation: rotate_pacman_half_up 0.5s 0s infinite;\n      animation: rotate_pacman_half_up 0.5s 0s infinite; }\n    .jui-layer .jui-layer-loading .icon-3 > div:nth-child(2) {\n      width: 0px;\n      height: 0px;\n      border-right: 25px solid transparent;\n      border-top: 25px solid #fff;\n      border-left: 25px solid #fff;\n      border-bottom: 25px solid #fff;\n      border-radius: 25px;\n      -webkit-animation: rotate_pacman_half_down 0.5s 0s infinite;\n      animation: rotate_pacman_half_down 0.5s 0s infinite;\n      margin-top: -50px; }\n    .jui-layer .jui-layer-loading .icon-3 > div:nth-child(3), .jui-layer .jui-layer-loading .icon-3 > div:nth-child(4), .jui-layer .jui-layer-loading .icon-3 > div:nth-child(5), .jui-layer .jui-layer-loading .icon-3 > div:nth-child(6) {\n      background-color: #fff;\n      width: 15px;\n      height: 15px;\n      border-radius: 100%;\n      margin: 2px;\n      width: 10px;\n      height: 10px;\n      position: absolute;\n      -webkit-transform: translate(0, -6.25px);\n      -ms-transform: translate(0, -6.25px);\n      transform: translate(0, -6.25px);\n      top: 25px;\n      left: 100px; }\n  .jui-layer .jui-layer-confirm {\n    display: table-cell;\n    text-align: center;\n    vertical-align: middle; }\n    .jui-layer .jui-layer-confirm .layer-confirm-con {\n      background-color: #fff;\n      color: #333;\n      max-width: 80%;\n      width: 180px;\n      display: inline-table;\n      border-radius: 4px;\n      pointer-events: auto; }\n      .jui-layer .jui-layer-confirm .layer-confirm-con p {\n        border-bottom: 1px solid #ccc;\n        display: block;\n        padding: 10px; }\n      .jui-layer .jui-layer-confirm .layer-confirm-con nav {\n        color: #333;\n        overflow: hidden; }\n        .jui-layer .jui-layer-confirm .layer-confirm-con nav a {\n          padding: 5px 0;\n          display: block;\n          float: left;\n          width: 50%;\n          text-align: center; }\n          .jui-layer .jui-layer-confirm .layer-confirm-con nav a:nth-of-type(2) {\n            color: #38a8d7;\n            border-left: 1px solid #ccc; }\n\n/* 必需 */\n.Jui-fade-transition {\n  transition: all .5s ease;\n  overflow: hidden; }\n\n/* .expand-enter 定义进入的开始状态 */\n/* .expand-leave 定义离开的结束状态 */\n.Jui-fade-enter, .Jui-fade-leave {\n  opacity: 0; }\n", ""]);

	// exports


/***/ },
/* 78 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"jui-layer\">\n\t<div class=\"jui-layer-mask\" v-if=\"shade\" @click=\"shadeCloseFn()\">\n\t\t<div class=\"jui-layer-close\" v-if=\"close\" @click=\"closeFn\"></div>\n\t</div>\n\t<div class=\"jui-layer-content\" v-if=\"show\" transition=\"Jui-fade\">\t\t\t\n\n\t\t<div class=\"jui-layer-msg\" v-if=\"type == 0\">\n\t\t\t<div class=\"layer-msg-con\">{{message}}</div>\n\t\t</div>\n\n\t\t<div class=\"jui-layer-alert\"  v-if=\"type == 1\">\n\t\t\t<div class=\"layer-alert-con\">\n\t\t\t\t<p>{{message}}</p>\n\t\t\t\t<button @click=\"yesFn\">确认</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"jui-layer-loading\"  v-if=\"type == 2\">\n\t\t\t\t<div class=\"icon-1\" v-if=\"icon==0\">\n\t\t\t          <div></div>\n\t\t\t          <div></div>\n\t\t\t          <div></div>\n\t\t\t          <div></div>\n\t\t\t          <div></div>\n\t\t\t          <div></div>\n\t\t\t          <div></div>\n\t\t\t          <div></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"icon-2\" v-if=\"icon == 1\">\n\t\t\t\t\t<div></div>\n\t\t\t\t\t<div></div>\n\t\t\t\t\t<div></div>\n\t\t\t\t\t<div></div>\n\t\t\t\t\t<div></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"icon-3\" v-if=\"icon == 2\">\n\t\t\t\t\t<div></div>\n\t\t\t\t\t<div></div>\n\t\t\t\t\t<div></div>\n\t\t\t\t\t<div></div>\n\t\t\t\t\t<div></div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"jui-layer-confirm\"  v-if=\"type == 3\">\n\t\t\t<div class=\"layer-confirm-con\">\n\t\t\t\t<p>{{{message}}}</p>\n\t\t\t\t<nav>\n\t\t\t\t\t<a @click=\"noFn\">取消</a>\n\t\t\t\t\t<a @click=\"yesFn\">确定</a>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.toast = undefined;

	var _typeof2 = __webpack_require__(6);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _toast = __webpack_require__(82);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var toast = function toast(Vue) {
		var defaults = {
			message: "",
			type: 0,
			position: 'center',
			imgSrc: false,
			time: 2000
		};

		var toastConstructor = Vue.extend(_toast2.default);

		var initData, toastNum;

		toastNum = 0;

		var toastInit = function toastInit() {
			return new toastConstructor({ el: document.createElement('div') });
		};

		var dataCopy = function dataCopy(obj) {

			if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) != 'object') {
				return obj;
			}
			var newData = {};
			for (var attr in obj) {
				newData[attr] = dataCopy(obj[attr]);
			}
			return newData;
		};

		var result = function result(options) {

			var InitToast = toastInit();
			if (typeof options === "string") {
				initData = dataCopy(defaults);
				initData.message = options;
				for (var prop in initData) {
					InitToast[prop] = initData[prop];
				}
			} else if ((typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) === "object" && Object.prototype.toString.call(options).toLowerCase() == "[object object]" && !options.length) {
				initData = dataCopy(defaults);
				for (var prop in options) {
					initData[prop] = options[prop];
				}
				for (var prop in initData) {
					InitToast[prop] = initData[prop];
				}
			}
			InitToast.$appendTo(document.body);
			result.assembly[toastNum] = InitToast;
			toastNum++;
			result.assembly.length = toastNum;
			return InitToast;
		};

		result.assembly = {};
		result.assembly.length = 0;

		result.closeAll = function () {
			for (var i = 0; i < result.assembly.length; i++) {
				result.assembly[i].$destroy(true);
			}
		};
		return result;
	};

	exports.default = toast;
	exports.toast = toast;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(83)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\JsComponents\\toast\\toast.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(86)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b521221a/toast.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	__webpack_require__(84);

	exports.default = {
		data: function data() {
			return {
				message: "哈哈哈",
				type: 0,
				position: 'center',
				time: 0,
				imgSrc: false
			};
		},
		ready: function ready() {
			var self = this;
			if (self.time != 0) {
				setTimeout(function () {
					self.$destroy(true);
				}, self.time);
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="jui-toast" :class="position" transition="Jui-toast">
	// 		<span class="text" v-if="type==0">{{message}}</span>
	// 		<div class="info" v-if="type!=0">
	// 			<img v-if="imgSrc" :src="imgSrc">
	// 			<span class="info-text" v-if="type!=2">{{message}}</span>
	// 		</div>		
	// 	</div>
	// </template>
	//
	// <script type="text/javascript">

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./toast.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./toast.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.jui-toast {\n  padding: 8px;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  border-radius: 6px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform-origin: translate(-50%, -50%);\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box; }\n  .jui-toast.top {\n    top: 5%; }\n  .jui-toast.center {\n    top: 50%; }\n  .jui-toast.bottom {\n    bottom: 5%; }\n  .jui-toast .text {\n    color: #fff;\n    text-align: center;\n    line-height: 2em;\n    display: block;\n    font-size: 14px;\n    max-width: 150px; }\n  .jui-toast .info {\n    width: 80px; }\n    .jui-toast .info img {\n      width: 100%;\n      display: block; }\n    .jui-toast .info .info-text {\n      color: #fff;\n      text-align: center;\n      line-height: 2em;\n      display: block;\n      font-size: 14px; }\n\n/* 必需 */\n.Jui-toast-transition {\n  transition: all .3s ease;\n  overflow: hidden; }\n\n/* .expand-enter 定义进入的开始状态 */\n/* .expand-leave 定义离开的结束状态 */\n.Jui-toast-enter, .Jui-toast-leave {\n  opacity: 0; }\n", ""]);

	// exports


/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"jui-toast\" :class=\"position\" transition=\"Jui-toast\">\n\t<span class=\"text\" v-if=\"type==0\">{{message}}</span>\n\t<div class=\"info\" v-if=\"type!=0\">\n\t\t<img v-if=\"imgSrc\" :src=\"imgSrc\">\n\t\t<span class=\"info-text\" v-if=\"type!=2\">{{message}}</span>\n\t</div>\t\t\n</div>\n";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.search = undefined;

	var _typeof2 = __webpack_require__(6);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _search = __webpack_require__(88);

	var _search2 = _interopRequireDefault(_search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var search = function search(Vue) {

		var defaults = {
			request: function request(val, self) {
				self.$destroy(true);
			},
			color: '#419EFE',
			historical: []
		};

		var searchConstructor = Vue.extend(_search2.default);

		var searchInit = function searchInit() {
			return new searchConstructor({ el: document.createElement('div') });
		};

		var initData;

		var dataCopy = function dataCopy(obj) {

			if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) != 'object') {
				return obj;
			}
			var newData = {};
			for (var attr in obj) {
				newData[attr] = dataCopy(obj[attr]);
			}
			return newData;
		};

		var result = function result(options) {
			var InitSearch = searchInit();
			initData = dataCopy(defaults);
			if ((typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) === "object" && Object.prototype.toString.call(options).toLowerCase() == "[object object]" && !options.length) {
				for (var prop in options) {
					initData[prop] = options[prop];
				}
			}
			for (var prop in initData) {
				InitSearch[prop] = initData[prop];
			}
			InitSearch.$appendTo(document.body);
		};
		return result;
	};

	exports.default = search;
	exports.search = search;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(89)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\JsComponents\\search\\search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(92)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-596635dd/search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(90);

	exports.default = {
	  name: 'jui-search',
	  data: function data() {
	    return {
	      request: '',
	      historical: [],
	      keyword: '',
	      color: ''
	    };
	  },
	  ready: function ready() {
	    this.$els.keyword.focus();
	  },

	  methods: {
	    closeSearch: function closeSearch() {
	      this.$destroy(true);
	    },
	    requestFn: function requestFn() {
	      var self = this;
	      this.request(this.keyword, self);
	    }
	  }
	};
	// </script>
	//
	// <template>
	// 	<div class="Jui-search">
	//     <form class="Jui-search-tool" @submit.prevent="requestFn">
	//         <div class="Jui-search-inner" :style="{'background-color':color}">
	//             <input type="text" v-el:keyword v-model="keyword"/>
	//             <button type="submit" class="Jui-search-submit" :style="{'background-color':color}"></button>
	//             <div class="iBack" @click='closeSearch'>取消</div>
	//         </div>
	//     </form> 
	//     <nav class="Jui-search-list">
	//          <a v-for="item in historical" :href="item.link">{{item.title}}</a>
	//     </nav>
	//     </div>
	// </template>
	//
	// <script type="text/javascript">

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(91);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./search.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./search.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".Jui-search {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #fff; }\n  .Jui-search * {\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box; }\n  .Jui-search .Jui-search-inner {\n    background: #fff;\n    padding: 10px 15px;\n    width: 100%;\n    position: relative;\n    color: #000;\n    display: flex;\n    display: -webkit-box;\n    display: -webkit-flex; }\n    .Jui-search .Jui-search-inner input {\n      flex: 1;\n      -webkit-flex: 1;\n      background-color: #fff;\n      line-height: 30px;\n      height: 30px;\n      border-radius: 4px;\n      outline: 0;\n      padding-left: 35px;\n      padding-right: 5px; }\n    .Jui-search .Jui-search-inner .iBack {\n      line-height: 30px;\n      height: 30px;\n      font-size: 14px;\n      color: #fff;\n      padding-left: 15px; }\n    .Jui-search .Jui-search-inner .Jui-search-submit {\n      width: 26px;\n      height: 26px;\n      position: absolute;\n      left: 20px;\n      top: 12px;\n      border-radius: 4px;\n      background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRDA3OEQzMDY1MTExMUU2OUNDRUVFMzFEOEUwMTE1MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRDA3OEQzMTY1MTExMUU2OUNDRUVFMzFEOEUwMTE1MiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJEMDc4RDJFNjUxMTExRTY5Q0NFRUUzMUQ4RTAxMTUyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJEMDc4RDJGNjUxMTExRTY5Q0NFRUUzMUQ4RTAxMTUyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EBCwsgAAA7RJREFUeNrsml1IFUEUx69fGfpg3xpJKKWYoJUPhQgWZhD0WGBQUGoUUlRQBBX0ki8F9pD1EBQlRURR9GUhSlGQZJqmFBRYPWRmmlmEZWre/gfOwmWYve7u3bsfOQd+6IzOnv3vzJ6dc3ZjgrDAFLLYwBQzJVgJVoKVYCVYCVaClWDHLD6CsbQlbQF3QSt4A4bAMJgLMkEhKAHrQIIXBMdY2EuPg4ughkUasVSwHRwAM/wk+CWoAB0W/dHM14IyP9zDdbxEOyLwNwA2gX3gr5dn+Cyo4vtWZrmgCCzgizjAq+E5+KMzZis4D+IcVRyc3B6AOLouAvFgJ2gLM7YfHAdzJOOJw0GHbTLBvWCW5ESzQacJPyR8veQ4tMKavCR4s+QkC8CgBV/joFJyvBww6gXBr0GscHJpoCcCfyS6RCK6zinB4aL0GTAh9J3mwGTVKEBdAElCf60XHks3hHY+2GCDz4WgUuhrA+/cFPwWfBH6Km30WyHpe+im4FZJX6mNfpeBeUJfh5uCxdlNBEts9r1YaPe4Kfib0J5JuzKbfacJ7e9uChZTueEo+B4V2tPdFJwqtH+CQZt9vxfas90UnCPpa7bR75Akl851U/AKybK+ZqPfq5JNTZHb6SGVZRpC2tN4VjIj9DkG8vhZrxlVQfr4aeDaTqtCEmT2hMmJjVqNIJZsC/gahThhKh8eA1mSjX51BHv3Rs6jxWMmh/xeCtrdSg/v6CTuR8GESV+3QZLO8UQS+MKOOy2YrFznpFaBVwaT/ypO9gMmKQTddgo2UtP6xbXlFp0YsAZsBCvBfI7uWk2rHlwHvyVjaaMxYuCuSwYnwQ6nalpkP0CxhRnSIwM8MjmGSkR9TixpzUbALotLMyAEpV4+Zr7JsVQMvOmUYM2awXILQtPBOSHYPRUitFG28apzRHCQT7oelIGUMCeWyDN6OUyh7gUX8qzcFo+jEbSMvGuiHVg36A9JJzN5R2Vk90RB7SDX0YImN077wTGjuzQ7BNtpjaAcfDI5juptl/inbe+WnLC1oMvCy7YuTnhOSJIST89wqF0BuzmVNGPF/OIvw2+CyT5yEtNkclwKuAVW+01wgIPYKXBIZ8emZ1QV/SAW/f3wjQcVD/dysb7AxDh6Ytz3etAKZ1QCegaOBIx/m/LZz4K1amo1eAIWGfj/bL8L1ow+veicJIPK40zuvxCspY30KcY9kC78bSnfv/F+jNJGi/oN/BjL4vw9zo/PYUerlkqwEqwEK8FKsBLssP0TYABLJxQEyLBIfgAAAABJRU5ErkJggg==\") no-repeat center center;\n      background-size: 100% 100%;\n      outline: 0; }\n  .Jui-search .Jui-search-list {\n    padding: 0 15px; }\n    .Jui-search .Jui-search-list a {\n      line-height: 50px;\n      font-size: 14px;\n      color: #333;\n      display: block;\n      padding: 0 10px;\n      position: relative; }\n      .Jui-search .Jui-search-list a:after {\n        content: ' ';\n        height: 1px;\n        background-color: #ccc;\n        width: 100%;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        -webkit-transform-origin: 50% 100%;\n        transform-origin: 50% 100%; }\n", ""]);

	// exports


/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "\n\n\t<div class=\"Jui-search\">\n    <form class=\"Jui-search-tool\" @submit.prevent=\"requestFn\">\n        <div class=\"Jui-search-inner\" :style=\"{'background-color':color}\">\n            <input type=\"text\" v-el:keyword v-model=\"keyword\"/>\n            <button type=\"submit\" class=\"Jui-search-submit\" :style=\"{'background-color':color}\"></button>\n            <div class=\"iBack\" @click='closeSearch'>取消</div>\n        </div>\n    </form> \n    <nav class=\"Jui-search-list\">\n         <a v-for=\"item in historical\" :href=\"item.link\">{{item.title}}</a>\n    </nav>\n    </div>\n";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(94)
	__vue_script__ = __webpack_require__(97)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\CssComponentes\\switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(98)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-575bd08c/switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./switch.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./switch.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".Jui-switch {\n  display: inline-block; }\n\n.Jui-switch-core {\n  width: 54px;\n  height: 30px;\n  position: relative;\n  z-index: 2;\n  border: 0;\n  background: 0 0;\n  -webkit-appearance: none;\n  outline: 0;\n  border: 1px solid #dfdfdf;\n  border-radius: 16px; }\n  .Jui-switch-core:checked:before {\n    box-shadow: #419EFE 0 0 0 16px inset;\n    background-color: #419EFE;\n    -webkit-transition: border .4s,box-shadow .4s,background-color 1.2s;\n    transition: border .4s,box-shadow .4s,background-color 1.2s;\n    -webkit-transition: border .4s,-webkit-box-shadow .4s,background-color 1.2s;\n    background-color: #419EFE; }\n  .Jui-switch-core:before {\n    content: '';\n    width: 54px;\n    height: 30px;\n    background-color: #a0a0a0;\n    border-radius: 30px;\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    vertical-align: middle;\n    box-sizing: content-box;\n    border-color: #dfdfdf;\n    box-shadow: #dfdfdf 0 0 0 0 inset;\n    -webkit-transition: border .4s,-webkit-box-shadow .4s;\n    -webkit-transition: border .4s,box-shadow .4s;\n    transition: border .4s,box-shadow .4s;\n    background-clip: content-box; }\n  .Jui-switch-core:checked:after {\n    left: 24px; }\n  .Jui-switch-core:after {\n    content: '';\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 100%;\n    background-color: #fff;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    -webkit-transition: left .2s;\n    transition: left .2s; }\n", ""]);

	// exports


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="Jui-switch">
	// 		<input type="checkbox" class="Jui-switch-core" v-model="value">
	//         <label class="mint-switch-label">
	//             <slot></slot>
	//         </label>
	// 	</div>
	// </template>
	// <style lang="sass">
	// .Jui-switch{
	//     display: inline-block;
	// }
	// .Jui-switch-core{
	// 	width: 54px;
	//     height: 30px;
	//     position: relative;
	//     z-index: 2;
	//     border: 0;
	//     background: 0 0;
	//     -webkit-appearance: none;
	//     outline: 0;
	//     border: 1px solid #dfdfdf;
	//     border-radius: 16px;
	// 	&:checked:before{
	//     -webkit-box-shadow: #419EFE 0 0 0 16px inset;
	//     box-shadow: #419EFE 0 0 0 16px inset;
	//     background-color: #419EFE;
	//     transition: border .4s,box-shadow .4s,background-color 1.2s;
	//     -webkit-transition: border .4s,-webkit-box-shadow .4s,background-color 1.2s;
	//     background-color: #419EFE;
	// 	}
	// 	&:before{
	// 	content: '';
	//    	width: 54px;
	//     height: 30px;
	//     background-color: #a0a0a0;
	//     border-radius:30px;
	//     cursor: pointer;
	//     display: inline-block;
	//     position: relative;
	//     vertical-align: middle;
	//     -webkit-box-sizing: content-box;
	//     box-sizing: content-box;
	//     border-color: #dfdfdf;
	//     -webkit-box-shadow: #dfdfdf 0 0 0 0 inset;
	//     box-shadow: #dfdfdf 0 0 0 0 inset;
	//     -webkit-transition: border .4s,-webkit-box-shadow .4s;
	//     transition: border .4s,box-shadow .4s;
	//     -webkit-background-clip: content-box;
	//     background-clip: content-box;
	// 	}
	// 	&:checked:after{
	// 		left:24px;
	// 	}
	// 	&:after{
	// 	content: '';
	//     width: 30px;
	//     height: 30px;
	//     position: absolute;
	//     top: 0;
	//     left: 0;
	//     border-radius: 100%;
	//     background-color: #fff;
	//     -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.4);
	//     box-shadow: 0 1px 3px rgba(0,0,0,.4);
	//     -webkit-transition: left .2s;
	//     transition: left .2s;	
	// 	}
	// }
	// </style>
	// <script>
	exports.default = {
		name: 'jui-switch',
		props: {
			value: Boolean
		}
	};
	// </script>

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"Jui-switch\">\n\t\t<input type=\"checkbox\" class=\"Jui-switch-core\" v-model=\"value\">\n        <label class=\"mint-switch-label\">\n            <slot></slot>\n        </label>\n\t</div>\n";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(100)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\JsComponents\\swipe\\swipe.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(106)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4a2403d9/swipe.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(101);

	var _event2 = __webpack_require__(103);

	var _event3 = _interopRequireDefault(_event2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<div class="Jui-swipe-container" v-el:juiswipe>
	// 		<nav class="swipe-wrapper" :class="{duration:animation}" :style="{width:sWipeStyleW,transform:sWipeTransform}" v-on:touchstart="_start($event)">
	// 			<a class="swipe-slide" v-for="item in swipeitem" :href="item.link">
	// 			<img :src="item.image"></a>
	// 		</nav>
	// 		<nav class="swipe-pagination" v-if="pagination">
	// 			<a v-for="item in swipeitem" :class="{'active':$index==swipeIndex}"></a>
	// 		</nav>
	// 	</div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    name: 'jui-swipe',
	    props: {
	        swipeitem: '',
	        shuffling: '',
	        pagination: ''
	    },
	    data: function data() {
	        return {
	            swipetimer: '',
	            animation: true,
	            sWidth: document.documentElement.clientWidth || document.body.clientWidth,
	            sWipeTransform: 'translate3d(0px, 0px, 0px)',
	            transformValue: 0,
	            eventKey: {
	                startX: 0,
	                moveX: 0,
	                startT: 0,
	                endT: 0,
	                left: 0,
	                distance: 0
	            }
	        };
	    },

	    computed: {
	        sWipeStyleW: function sWipeStyleW() {
	            return this.sWidth * this.swipeitem.length + "px";
	        },
	        swipeIndex: function swipeIndex() {
	            return -~~(this.transformValue / this.sWidth);
	        },
	        TransformX: function TransformX() {
	            return -this.swipeIndex * this.sWidth + this.eventKey.distance;
	        }
	    },
	    ready: function ready() {
	        this.sWidth = this.$els.juiswipe.offsetWidth;
	    },

	    watch: {
	        shuffling: function shuffling(val) {
	            if (val) {
	                this.swipetimer = setInterval(this._animate, 2000);
	            } else {
	                clearInterval(this.swipetimer);
	            }
	        },
	        TransformX: function TransformX() {
	            this.sWipeTransform = 'translate3d(' + this.TransformX + 'px, 0px, 0px)';
	        }
	    },
	    methods: {
	        _animate: function _animate() {
	            this.swipeIndex >= this.swipeitem.length - 1 ? this.transformValue = 0 : this.transformValue -= this.sWidth;
	        },
	        _start: function _start(e) {
	            this.animation = false;
	            var self = this.eventKey;
	            self.startX = e.touches[0].pageX;
	            self.startT = new Date().getTime();
	            _event3.default._bind(e.target, 'touchmove', this._move);
	            _event3.default._bind(e.target, 'touchend', this._end);
	            clearInterval(this.swipetimer);
	        },
	        _move: function _move(e) {
	            var self = this.eventKey;
	            self.moveX = e.touches[0].pageX;
	            self.distance = self.moveX - self.startX;
	        },
	        _end: function _end(e) {
	            this.animation = true;
	            var self = this.eventKey;
	            self.endT = new Date().getTime();
	            var speed = self.endT - self.startT;
	            var tansformRight = -this.sWidth * (this.swipeitem.length - 1);
	            this.transformValue = this.TransformX;
	            if (this.transformValue >= 0) {
	                this.transformValue = 0;
	            } else if (this.transformValue < tansformRight) {
	                this.transformValue = tansformRight;
	            } else {
	                if (speed < 300) {
	                    if (self.distance < 0) {
	                        this.transformValue = this.transformValue - this.sWidth;
	                    }
	                } else {
	                    if (this.transformValue % this.sWidth <= -this.sWidth / 2) {
	                        this.transformValue = this.transformValue - this.sWidth;
	                    }
	                }
	            }
	            self.distance = 0;
	            this.transformValue = this.TransformX;
	            _event3.default._unbind(e.target, 'touchmove', this._move);
	            _event3.default._unbind(e.target, 'touchend', this._end);
	            if (this.shuffling) {
	                this.swipetimer = setInterval(this._animate, 2000);
	            }
	        }
	    }
	};

	// </script>

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(102);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./swipe.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./swipe.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".Jui-swipe-container {\n  width: 100%;\n  overflow: hidden;\n  position: relative; }\n  .Jui-swipe-container .swipe-wrapper {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    transform: translate3d(0px, 0px, 0px);\n    -webkit-transform: translate3d(0px, 0px, 0px); }\n    .Jui-swipe-container .swipe-wrapper.duration {\n      transition-duration: 200ms; }\n    .Jui-swipe-container .swipe-wrapper a {\n      flex: 1;\n      -webkit-flex: 1;\n      display: block; }\n      .Jui-swipe-container .swipe-wrapper a img {\n        display: block;\n        width: 100%; }\n  .Jui-swipe-container .swipe-pagination {\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    z-index: 90;\n    left: 0;\n    bottom: 5%; }\n    .Jui-swipe-container .swipe-pagination a {\n      display: inline-block;\n      width: 10px;\n      height: 10px;\n      border-radius: 10px;\n      margin: 0 5px;\n      background-color: #fff; }\n      .Jui-swipe-container .swipe-pagination a.active {\n        background-color: #38a8d7; }\n", ""]);

	// exports


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.JuiEvent = undefined;

	var _stringify = __webpack_require__(104);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var JuiEvent = {};
	//绑定事件
	JuiEvent._bind = function (obj, type, fn) {
	    obj.addEventListener(type, fn, false);
	};
	//取消绑定事件
	JuiEvent._unbind = function (obj, type, fn) {
	    obj.removeEventListener(type, fn, false);
	};
	//数据转换为字符串
	JuiEvent.toString = function (value) {
	    return (0, _stringify2.default)(value);
	};

	exports.default = JuiEvent;
	exports.JuiEvent = JuiEvent;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(17)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Jui-swipe-container\" v-el:juiswipe>\n\t<nav class=\"swipe-wrapper\" :class=\"{duration:animation}\" :style=\"{width:sWipeStyleW,transform:sWipeTransform}\" v-on:touchstart=\"_start($event)\">\n\t\t<a class=\"swipe-slide\" v-for=\"item in swipeitem\" :href=\"item.link\">\n\t\t<img :src=\"item.image\"></a>\n\t</nav>\n\t<nav class=\"swipe-pagination\" v-if=\"pagination\">\n\t\t<a v-for=\"item in swipeitem\" :class=\"{'active':$index==swipeIndex}\"></a>\n\t</nav>\n</div>\n";

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(108)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\JsComponents\\actionsheet\\actionsheet.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(111)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-9d76b492/actionsheet.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(109);

	exports.default = {
	  name: 'jui-actionsheet',
	  props: {
	    type: Number,
	    data: Object,
	    styleClass: String
	  },
	  data: function data() {
	    return {
	      optionsShow: false,
	      close: true
	    };
	  },
	  created: function created() {
	    this.data.close == false ? this.close = this.data.close : '';
	  },

	  methods: {
	    optionFn: function optionFn(index) {
	      if (this.type == 0) this.data.choice = this.data.selectList[index];

	      this.optionsShow = !this.optionsShow;

	      if (this.data.selectList[index].callback) {
	        this.data.selectList[index].callback();
	      }
	    }
	  }
	};
	// </script>
	//
	// <template>
	// 	<div v-bind:class="styleClass?styleClass:'Jui-actionsheet'" @click="optionsShow=!optionsShow">{{data.choice.key}}</div>
	// 	<div class="Jui-select-options" v-if="optionsShow" transition="Jui-expand">
	// 		<div class="options-content" v-if="optionsShow" transition="Jui-slide">
	// 			<nav class="options-list">
	// 				<a v-for="item in data.selectList" @click="optionFn($index)">{{item.key}}</a>
	// 			</nav>
	// 			<div class="close" v-if="close" @click="optionsShow=!optionsShow">取消</div>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script type="text/javascript">

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(110);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./actionsheet.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./actionsheet.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.Jui-actionsheet {\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n  border-radius: 4px;\n  text-align: center;\n  line-height: 40px;\n  height: 40px;\n  font-size: 14px;\n  color: #333; }\n\n.Jui-select-options {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.5); }\n  .Jui-select-options .options-content {\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    color: #323232;\n    text-align: center;\n    background-color: #999; }\n    .Jui-select-options .options-content .options-list {\n      background-color: #f1f1f1; }\n      .Jui-select-options .options-content .options-list a {\n        display: block;\n        line-height: 40px;\n        height: 40px;\n        border-bottom: 1px solid #ccc; }\n    .Jui-select-options .options-content .close {\n      background-color: #f1f1f1;\n      width: 100%;\n      line-height: 40px;\n      height: 40px;\n      margin-top: 3px; }\n\n/* 必需 */\n.Jui-expand-transition {\n  transition: all .3s ease;\n  overflow: hidden; }\n\n/* .expand-enter 定义进入的开始状态 */\n/* .expand-leave 定义离开的结束状态 */\n.Jui-expand-enter, .Jui-expand-leave {\n  opacity: 0; }\n\n.Jui-slide-transition {\n  transition: all .3s ease;\n  transform: translateY(0px);\n  -webkit-transform: translateY(0px); }\n\n.Jui-slide-enter, .Jui-slide-leave {\n  transform: translateY(200px);\n  -webkit-transform: translateY(200px); }\n", ""]);

	// exports


/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "\n\n<div v-bind:class=\"styleClass?styleClass:'Jui-actionsheet'\" @click=\"optionsShow=!optionsShow\">{{data.choice.key}}</div>\n<div class=\"Jui-select-options\" v-if=\"optionsShow\" transition=\"Jui-expand\">\n\t<div class=\"options-content\" v-if=\"optionsShow\" transition=\"Jui-slide\">\n\t\t<nav class=\"options-list\">\n\t\t\t<a v-for=\"item in data.selectList\" @click=\"optionFn($index)\">{{item.key}}</a>\n\t\t</nav>\n\t\t<div class=\"close\" v-if=\"close\" @click=\"optionsShow=!optionsShow\">取消</div>\n\t</div>\n</div>\n";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(113)
	__vue_script__ = __webpack_require__(115)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\CssComponentes\\grids.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(116)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4e1a9752/grids.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(114);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./grids.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./grids.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".Jui-grids {\n  position: relative;\n  overflow: hidden; }\n  .Jui-grids:before {\n    content: ' ';\n    width: 100%;\n    height: 1px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    border-top: 1px solid #d9d9d9;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    -webkit-transform: scaleY(0.5);\n    transform: scaleY(0.5); }\n  .Jui-grids:after {\n    content: ' ';\n    width: 1px;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    border-left: 1px solid #d9d9d9;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    -webkit-transform: scaleX(0.5);\n    transform: scaleX(0.5); }\n  .Jui-grids .Jui-grid {\n    outline: 0;\n    text-decoration: none;\n    float: left;\n    position: relative;\n    overflow: hidden;\n    padding: 10px;\n    box-sizing: border-box; }\n    .Jui-grids .Jui-grid:before {\n      content: ' ';\n      width: 100%;\n      height: 1px;\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      border-bottom: 1px solid #d9d9d9;\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n      -webkit-transform: scaleY(0.5);\n      transform: scaleY(0.5); }\n    .Jui-grids .Jui-grid:after {\n      content: ' ';\n      width: 1px;\n      height: 100%;\n      position: absolute;\n      right: -1px;\n      bottom: 0;\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n      border-right: 1px solid #d9d9d9;\n      -webkit-transform: scaleX(0.5);\n      transform: scaleX(0.5); }\n  .Jui-grids .Jui-grid-img img {\n    display: block;\n    margin: auto;\n    height: 40px; }\n  .Jui-grids .Jui-grid-title {\n    width: 100%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    text-align: center;\n    font-size: 14px;\n    color: #999; }\n  .Jui-grids.Jui-grids-nb:before, .Jui-grids.Jui-grids-nb:after, .Jui-grids.Jui-grids-nb *:before, .Jui-grids.Jui-grids-nb *:after {\n    display: none; }\n", ""]);

	// exports


/***/ },
/* 115 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<nav :class="{'Jui-grids':true,'Jui-grids-nb':!border}">
	// 		<a class="Jui-grid" v-for="item in options" :style="{width:gridcols}" :href="item.link" @click="succes($index)">
	// 			<div class="Jui-grid-img" v-if="item.image">
	// 				<img :src="item.image">
	// 			</div>
	// 			<div class="Jui-grid-title">{{item.title||item}}</div>
	// 		</a>
	// 	</nav>
	// </template>
	// <style lang="sass">
	// 	.Jui-grids{
	// 		position: relative;
	// 		overflow: hidden;
	// 		&:before{
	// 		content: '\20';
	// 	    width: 100%;
	// 	    height: 1px;
	// 		position: absolute;
	// 		left: 0;
	// 		top: 0;
	// 	    border-top: 1px solid #d9d9d9;
	// 	    transform-origin: 0 0;
	// 	    -webkit-transform: scaleY(.5);
	// 	    -ms-transform: scaleY(.5);
	// 	    transform: scaleY(.5);
	// 		};
	// 		&:after{
	// 		content: '\20';
	// 	    width: 1px;
	// 	    height: 100%;
	// 		position: absolute;
	// 		left: 0;
	// 		top: 0;
	// 	    border-left: 1px solid #d9d9d9;
	// 	    transform-origin: 0 0;
	// 	    -webkit-transform: scaleX(.5);
	// 	    -ms-transform: scaleX(.5);
	// 	    transform: scaleX(.5);
	// 		};
	// 		.Jui-grid{
	// 		outline:0;
	// 		text-decoration: none;
	// 		float: left;
	// 		position: relative;
	// 		overflow: hidden;
	// 		padding: 10px;
	// 		box-sizing: border-box;
	// 		&:before{
	// 		content: '\20';
	// 	    width: 100%;
	// 	    height: 1px;
	// 		position: absolute;
	// 		left: 0;
	// 		bottom: 0;
	// 	    border-bottom: 1px solid #d9d9d9;
	// 	    transform-origin: 0 0;
	// 	    -webkit-transform: scaleY(.5);
	// 	    -ms-transform: scaleY(.5);
	// 	    transform: scaleY(.5);
	// 		};
	// 		&:after{
	// 		content: '\20';
	// 	    width: 1px;
	// 	    height: 100%;
	// 		position: absolute;
	// 		right: -1px;
	// 		bottom: 0;
	// 	    transform-origin: 0 0;
	// 	    border-right: 1px solid #d9d9d9;
	// 	    -webkit-transform: scaleX(.5);
	// 	    -ms-transform: scaleX(.5);
	// 	    transform: scaleX(.5);
	// 		};
	// 		}
	// 		.Jui-grid-img{
	// 			img{
	// 				display: block;
	// 				margin: auto;
	// 				height: 40px;
	// 			}
	// 		}
	// 		.Jui-grid-title{
	// 			width: 100%;
	// 			text-overflow: ellipsis;
	// 			overflow: hidden;
	// 			text-align: center;
	// 			font-size: 14px;
	// 			color: #999;
	// 		}
	// 		&.Jui-grids-nb{
	// 			&:before,&:after,*:before,*:after{
	// 				display:none;
	// 			}
	// 		}
	// 	}
	// </style>
	// <script>
	exports.default = {
		name: 'jui-grids',
		props: {
			grids: Array,
			cols: Number,
			options: Array,
			border: Boolean
		},
		computed: {
			gridcols: function gridcols() {
				return 100 / this.cols + "%";
			}
		},
		methods: {
			succes: function succes(index) {
				if (this.options[index].succes) {
					this.options[index].succes();
				}
			}
		}
	};

	// </script>

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = "\n<nav :class=\"{'Jui-grids':true,'Jui-grids-nb':!border}\">\n\t<a class=\"Jui-grid\" v-for=\"item in options\" :style=\"{width:gridcols}\" :href=\"item.link\" @click=\"succes($index)\">\n\t\t<div class=\"Jui-grid-img\" v-if=\"item.image\">\n\t\t\t<img :src=\"item.image\">\n\t\t</div>\n\t\t<div class=\"Jui-grid-title\">{{item.title||item}}</div>\n\t</a>\n</nav>\n";

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(118)
	__vue_script__ = __webpack_require__(120)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\CssComponentes\\cell.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(121)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-11ed7330/cell.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(119);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./cell.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./cell.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".Jui-cell {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 16px 10px;\n  text-decoration: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .Jui-cell .Jui-cell-title {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: left;\n    color: #333;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .Jui-cell .Jui-cell-value {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: right;\n    color: #999; }\n  .Jui-cell .Jui-cell-allow-right {\n    margin-left: 5px;\n    width: 10px;\n    height: 20px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n                -ms-grid-row-align: center;\n            align-items: center;\n    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzA2ODgxNTY4REYxMUU2QTA1MEI1QzQ1RTZDQ0JEQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzA2ODgxNjY4REYxMUU2QTA1MEI1QzQ1RTZDQ0JEQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzMDY4ODEzNjhERjExRTZBMDUwQjVDNDVFNkNDQkRCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzMDY4ODE0NjhERjExRTZBMDUwQjVDNDVFNkNDQkRCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7Y2RGAAAAYZJREFUeNrsll0rRFEUhucgIf4RJSkkTArJxTTRFCkR+SiuiJQSkaZxQc3cUESIUpJfhMj4ON5da+r0tuucvc4oxa6nptX0zHvmrL329nzfT5RzVSTKvP6gsCqbzf5owkqQB4PqhPS5APrAgPxYPk7CQ5GVkh6AVBzhESjS4++DtFZ4IglZmgMj2pdyBnpJar5jWiGj7cMLkARvgZoH9sCotrGvQA94JekOGNfulGtJ+kLSLTCh3Xo3oNsi3QRT2r18CzpJatYGmNEOhzvQAZ6pvg7mtNPmXqRPVF8FC9rx9SDSR6qvgCXtPPSF0GkTZTWCS9BA9UWw7CpsElk91efBmut/2Cy7h2WzQVnUhC3gHNRRfVp60akPWy0y80ImbbKwhG0yI2tJZvbxtutbbhdZDcnMpNl1nTZm355aZGNhMlvCLnAMqkmWkaPAaWInLbIvOU9yUZs1mLCfZJ9gWI5T1amXkoQlWdpVxgnf5QpSlIOqEPcqYtYHGIpzWfL+r8S/T/gtwACYhFQ0/BvjsQAAAABJRU5ErkJggg==\") no-repeat center center;\n    background-size: cover; }\n  .Jui-cell:after {\n    content: ' ';\n    height: 1px;\n    width: 98%;\n    position: absolute;\n    background-color: #ccc;\n    bottom: 0;\n    right: 0;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%; }\n  .Jui-cell:nth-of-type(1):before {\n    content: ' ';\n    height: 1px;\n    width: 100%;\n    position: absolute;\n    background-color: #ccc;\n    top: 0;\n    right: 0;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%; }\n  .Jui-cell:nth-last-of-type(1):after {\n    width: 100%; }\n", ""]);

	// exports


/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<a class="Jui-cell">
	// 		<label class="Jui-cell-title">
	// 			<slot name="icon"></slot>
	// 			<slot name="title">
	// 				<span v-text="title"></span>
	// 			</slot>
	// 		</label>
	// 		<div class="Jui-cell-value">
	// 			<slot>
	// 				<span v-text="value"></span>
	// 			</slot>
	// 		</div>
	// 		<div v-if="link" class="Jui-cell-allow-right"></div>
	// 	</a>
	// </template>
	// <style lang="sass">
	// .Jui-cell{
	// 	position: relative;
	// 	display: flex;
	// 	padding: 16px 10px;
	// 	text-decoration: none;
	// 	align-items: center;
	// 	.Jui-cell-title{
	// 		flex:1;
	// 		text-align: left;
	// 		color:#333;
	// 		display: flex;
	// 	}
	// 	.Jui-cell-value{
	// 		flex:1;
	// 		text-align: right;
	// 		color:#999;
	// 	}
	// 	.Jui-cell-allow-right{
	// 		margin-left: 5px;
	// 		width:10px;
	// 		height:20px;
	// 		align-items: center;
	// 		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzA2ODgxNTY4REYxMUU2QTA1MEI1QzQ1RTZDQ0JEQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzA2ODgxNjY4REYxMUU2QTA1MEI1QzQ1RTZDQ0JEQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzMDY4ODEzNjhERjExRTZBMDUwQjVDNDVFNkNDQkRCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzMDY4ODE0NjhERjExRTZBMDUwQjVDNDVFNkNDQkRCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7Y2RGAAAAYZJREFUeNrsll0rRFEUhucgIf4RJSkkTArJxTTRFCkR+SiuiJQSkaZxQc3cUESIUpJfhMj4ON5da+r0tuucvc4oxa6nptX0zHvmrL329nzfT5RzVSTKvP6gsCqbzf5owkqQB4PqhPS5APrAgPxYPk7CQ5GVkh6AVBzhESjS4++DtFZ4IglZmgMj2pdyBnpJar5jWiGj7cMLkARvgZoH9sCotrGvQA94JekOGNfulGtJ+kLSLTCh3Xo3oNsi3QRT2r18CzpJatYGmNEOhzvQAZ6pvg7mtNPmXqRPVF8FC9rx9SDSR6qvgCXtPPSF0GkTZTWCS9BA9UWw7CpsElk91efBmut/2Cy7h2WzQVnUhC3gHNRRfVp60akPWy0y80ImbbKwhG0yI2tJZvbxtutbbhdZDcnMpNl1nTZm355aZGNhMlvCLnAMqkmWkaPAaWInLbIvOU9yUZs1mLCfZJ9gWI5T1amXkoQlWdpVxgnf5QpSlIOqEPcqYtYHGIpzWfL+r8S/T/gtwACYhFQ0/BvjsQAAAABJRU5ErkJggg==") no-repeat center center;
	// 		background-size:cover;
	// 	}
	// 	&:after{
	// 		content: '\20';
	// 		height:1px;
	// 		width:98%;
	// 		position: absolute;
	// 		background-color: #ccc;
	// 		bottom:0;
	// 		right:0;
	// 		-webkit-transform-origin: 50% 100%;
	// 		transform-origin: 50% 100%;
	// 	}
	// 	&:nth-of-type(1):before{
	// 		content: '\20';
	// 		height:1px;
	// 		width:100%;
	// 		position: absolute;
	// 		background-color: #ccc;
	// 		top:0;
	// 		right:0;
	// 		-webkit-transform-origin: 50% 100%;
	// 		transform-origin: 50% 100%;
	// 	}
	// 	&:nth-last-of-type(1):after{
	// 		width:100%;
	// 	}
	// }
	// </style>
	// <script>
	exports.default = {
		name: 'jui-cell',
		props: {
			link: Boolean,
			title: String,
			value: String
		}
	};

	// </script>

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "\n<a class=\"Jui-cell\">\n\t<label class=\"Jui-cell-title\">\n\t\t<slot name=\"icon\"></slot>\n\t\t<slot name=\"title\">\n\t\t\t<span v-text=\"title\"></span>\n\t\t</slot>\n\t</label>\n\t<div class=\"Jui-cell-value\">\n\t\t<slot>\n\t\t\t<span v-text=\"value\"></span>\n\t\t</slot>\n\t</div>\n\t<div v-if=\"link\" class=\"Jui-cell-allow-right\"></div>\n</a>\n";

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(123)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\JsComponents\\picker\\picker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(131)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-73efa71d/picker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _pickerSlot = __webpack_require__(124);

	var _pickerSlot2 = _interopRequireDefault(_pickerSlot);

	__webpack_require__(129);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<div v-bind:class="styleClass?styleClass:'Jui-picker-value'" @click="pickerShow = !pickerShow">{{value}}</div>
	// 	<div class="Jui-picker" v-if="pickerShow" transition="expand">
	// 		<div class="Jui-picker-mask"></div>
	// 		<div class="Jui-picker-content" v-if="pickerShow" transition="slide">
	// 			<nav class="Jui-picker-menu">
	// 				<a @click="pickerShow = !pickerShow">取消</a>
	// 				<a class="active" @click="yesFn">确定</a>
	// 			</nav>
	// 			<div class="Jui-picker-select">
	// 				<picker-slot v-for="item in data.length" :data.sync="data[item]"></picker-slot>
	// 				<div class="Jui-picker-highlight"></div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script type="text/javascript">
	exports.default = {
		name: 'jui-picker',
		props: ['data', 'default', 'response', 'success', 'styleClass'],
		data: function data() {
			return {
				pickerShow: false,
				valueTotal: false,
				results: {
					values: [],
					value: ''
				}
			};
		},

		components: {
			pickerSlot: _pickerSlot2.default
		},
		computed: {
			value: function value() {
				return this.valueTotal ? this.results.value : this.default;
			}
		},
		ready: function ready() {
			if (this.response != undefined) {
				this.response = this.results;
			}
		},

		methods: {
			yesFn: function yesFn() {
				this.getvalues();
				this.valueTotal = true;
				if (!this.success) {} else {
					this.success(this.results);
				}
				this.pickerShow = !this.pickerShow;
			},
			getvalues: function getvalues() {
				this.results.values = [];
				this.results.value = '';
				for (var i = 0; i < this.data.length; i++) {
					this.results.values.push(this.data[i].value);
				}
				this.results.value = this.results.values.join("-");
			}
		}
	};
	// </script>

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(125)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\JsComponents\\picker\\picker-slot.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(128)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-43c7075e/picker-slot.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(126);

	var _event2 = __webpack_require__(103);

	var _event3 = _interopRequireDefault(_event2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<div class="Jui-picker-slot" v-on:touchstart="_start($event)">
	// 	<nav class="Jui-picker-options" :class="{duration:animation}" v-bind:style="{transform : sTransformY}">
	// 		<a v-for="item in data.values" v-bind:class="{selected:selected==$index}">{{item}}</a>
	// 	</nav>
	// 	</div>
	// </template>
	//
	// <script type="text/javascript">
	exports.default = {
	    props: ['data'],
	    data: function data() {
	        return {
	            sTransformY: 'translate3d(0px, 0px, 0px)',
	            animation: true,
	            eventKey: {
	                startY: 0,
	                moveY: 0,
	                distance: 0,
	                startT: 0,
	                endT: 0
	            }
	        };
	    },

	    computed: {
	        selected: function selected() {
	            return this.data.values.indexOf(this.data.value);
	        },
	        TransformY: function TransformY() {
	            return -this.selected * 40 + 80 + this.eventKey.distance;
	        }
	    },
	    watch: {
	        TransformY: function TransformY() {
	            this.sTransformY = 'translate3d(0px, ' + this.TransformY + 'px, 0px)';
	        }
	    },
	    ready: function ready() {
	        this.sTransformY = 'translate3d(0px, ' + this.TransformY + 'px, 0px)';
	        if (this.data.reset) {
	            this.data.reset(this.data);
	        };
	    },

	    methods: {
	        _start: function _start(e) {
	            this.animation = false;
	            var self = this.eventKey;
	            self.startY = e.touches[0].pageY;
	            self.startT = new Date().getTime();
	            _event3.default._bind(e.target, 'touchmove', this._move);
	            _event3.default._bind(e.target, 'touchend', this._end);
	        },
	        _move: function _move(e) {
	            var self = this.eventKey;
	            self.moveY = e.touches[0].pageY;
	            self.distance = self.moveY - self.startY;
	        },
	        _end: function _end(e) {
	            this.animation = true;
	            var self = this.eventKey;
	            var transformValue = this.TransformY;
	            var limitTop = 80;
	            var limitBottom = -(this.data.values.length - 1) * 40 + 80;
	            self.endT = new Date().getTime();
	            var speed = self.endT - self.startT;

	            if (transformValue - transformValue % 40 >= limitTop) {
	                transformValue = limitTop;
	            } else if (transformValue - transformValue % 40 < limitBottom) {
	                transformValue = limitBottom;
	            } else {
	                if (speed < 300) {
	                    if (self.moveY - self.startY > 0) {
	                        transformValue = transformValue - transformValue % 40;
	                    } else {
	                        transformValue - transformValue % 40 - 40 < limitBottom ? transformValue = limitBottom : transformValue = transformValue - transformValue % 40 - 40;
	                    }
	                } else {
	                    if (Math.abs(transformValue % 40) <= 40 / 2) {
	                        transformValue = transformValue - transformValue % 40;
	                    } else {
	                        transformValue - transformValue % 40 >= 0 ? transformValue = transformValue - transformValue % 40 + 40 : transformValue = transformValue - transformValue % 40 - 40;
	                    }
	                }
	            }
	            self.distance = 0;
	            this.data.value = this.data.values[Math.abs(transformValue / 40 - 2)];

	            _event3.default._unbind(e.target, 'touchmove', this._move);
	            _event3.default._unbind(e.target, 'touchend', this._end);

	            var that = this;
	            setTimeout(function () {
	                that.animation = false;
	                if (that.data.reset) {
	                    that.data.reset(that.data);
	                }
	            }, 200);
	        }
	    }
	};
	// </script>

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(127);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./picker-slot.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./picker-slot.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".Jui-picker-slot {\n  flex: 1;\n  -webkit-flex: 1;\n  pointer-events: auto; }\n  .Jui-picker-slot .Jui-picker-options.duration {\n    transition-duration: 200ms; }\n  .Jui-picker-slot .Jui-picker-options a {\n    display: block;\n    text-align: center;\n    line-height: 40px;\n    height: 40px;\n    color: #999; }\n    .Jui-picker-slot .Jui-picker-options a.selected {\n      color: #333; }\n", ""]);

	// exports


/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Jui-picker-slot\" v-on:touchstart=\"_start($event)\">\n<nav class=\"Jui-picker-options\" :class=\"{duration:animation}\" v-bind:style=\"{transform : sTransformY}\">\n\t<a v-for=\"item in data.values\" v-bind:class=\"{selected:selected==$index}\">{{item}}</a>\n</nav>\n</div>\n";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(130);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./picker.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./picker.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.Jui-picker-value {\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n  border-radius: 4px;\n  text-align: center;\n  line-height: 40px;\n  height: 40px;\n  font-size: 14px;\n  color: #333; }\n\n.Jui-picker {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n  .Jui-picker .Jui-picker-mask {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5); }\n  .Jui-picker .Jui-picker-content {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background-color: #fff; }\n  .Jui-picker .Jui-picker-menu {\n    display: -webkit-flex;\n    display: -webkit-box;\n    display: flex;\n    position: relative; }\n    .Jui-picker .Jui-picker-menu a {\n      flex: 1;\n      -webkit-flex: 1;\n      text-align: center;\n      line-height: 40px;\n      height: 40px;\n      color: #333; }\n      .Jui-picker .Jui-picker-menu a.active {\n        color: #419EFE; }\n    .Jui-picker .Jui-picker-menu:after {\n      content: ' ';\n      height: 1px;\n      width: 100%;\n      position: absolute;\n      background-color: #ccc;\n      bottom: 0;\n      left: 0;\n      -webkit-transform-origin: 50% 100%;\n      transform-origin: 50% 100%; }\n  .Jui-picker .Jui-picker-select {\n    height: 200px;\n    position: relative;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex; }\n    .Jui-picker .Jui-picker-select .Jui-picker-highlight {\n      position: absolute;\n      top: 80px;\n      left: 0;\n      height: 40px;\n      width: 100%;\n      pointer-events: none; }\n      .Jui-picker .Jui-picker-select .Jui-picker-highlight:before {\n        content: ' ';\n        height: 1px;\n        width: 100%;\n        position: absolute;\n        background-color: #ccc;\n        top: 0;\n        left: 0;\n        -webkit-transform-origin: 50% 100%;\n        transform-origin: 50% 100%; }\n      .Jui-picker .Jui-picker-select .Jui-picker-highlight:after {\n        content: ' ';\n        height: 1px;\n        width: 100%;\n        position: absolute;\n        background-color: #ccc;\n        bottom: 0;\n        left: 0;\n        -webkit-transform-origin: 50% 100%;\n        transform-origin: 50% 100%; }\n\n/* 必需 */\n.expand-transition {\n  transition: all .5s ease;\n  overflow: hidden; }\n\n/* .expand-enter 定义进入的开始状态 */\n/* .expand-leave 定义离开的结束状态 */\n.expand-enter, .expand-leave {\n  opacity: 0; }\n\n.slide-transition {\n  transition: all .5s ease;\n  transform: translateY(0px);\n  -webkit-transform: translateY(0px); }\n\n.slide-enter, .slide-leave {\n  transform: translateY(300px);\n  -webkit-transform: translateY(300px); }\n", ""]);

	// exports


/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "\n<div v-bind:class=\"styleClass?styleClass:'Jui-picker-value'\" @click=\"pickerShow = !pickerShow\">{{value}}</div>\n<div class=\"Jui-picker\" v-if=\"pickerShow\" transition=\"expand\">\n\t<div class=\"Jui-picker-mask\"></div>\n\t<div class=\"Jui-picker-content\" v-if=\"pickerShow\" transition=\"slide\">\n\t\t<nav class=\"Jui-picker-menu\">\n\t\t\t<a @click=\"pickerShow = !pickerShow\">取消</a>\n\t\t\t<a class=\"active\" @click=\"yesFn\">确定</a>\n\t\t</nav>\n\t\t<div class=\"Jui-picker-select\">\n\t\t\t<picker-slot v-for=\"item in data.length\" :data.sync=\"data[item]\"></picker-slot>\n\t\t\t<div class=\"Jui-picker-highlight\"></div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(133)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\JsComponents\\picker\\pickerDate.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(134)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a794ad2a/pickerDate.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _picker = __webpack_require__(122);

	var _picker2 = _interopRequireDefault(_picker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'jui-picker-date',
	  props: ['datevalues', 'styleClass'],
	  data: function data() {
	    return {
	      datetime: {
	        slot: {
	          '0': {
	            values: [],
	            value: 1945,
	            reset: function reset(data) {
	              data.values = [];
	              for (var i = data.value - 25; i < data.value + 25; i++) {
	                data.values.push(i);
	              }
	            }
	          },
	          '1': {
	            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	            value: 1,
	            reset: ''
	          },
	          '2': {
	            values: [],
	            value: 1
	          },
	          length: 3
	        },
	        default: "日期选择",
	        response: ''
	      }
	    };
	  },

	  components: {
	    picker: _picker2.default
	  },
	  ready: function ready() {
	    var self = this;
	    var Months = self.datetime.slot['1'];
	    if (this.datevalues != undefined) {
	      if (this.datevalues.data != undefined) {
	        this.datevalues.data = this.datetime.response;
	      }
	      if (this.datevalues.default != undefined) {
	        this.datetime.default = this.datevalues.default;
	      }
	    }
	    Months.reset = function (data) {
	      var oDay = self.datetime.slot['2'];
	      var oDayTotal = null;
	      oDay.values = [];
	      oDay.value = 1;
	      switch (data.value) {
	        case 1:case 3:case 5:case 7:case 8:case 10:case 12:
	          oDayTotal = 32;
	          break;
	        case 4:case 6:case 9:case 11:
	          oDayTotal = 31;
	          break;
	        default:
	          oDayTotal = 29;
	          break;
	      }
	      for (var i = 1; i < oDayTotal; i++) {
	        oDay.values.push(i);
	      }
	    };
	  }
	};
	// </script>
	// <template>
	// 	<picker :data.sync="datetime.slot" :default="datetime.default" :response.sync="datetime.response" :style-class="styleClass"></picker>
	// </template>
	//
	// <script type="text/javascript">

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = "\n<picker :data.sync=\"datetime.slot\" :default=\"datetime.default\" :response.sync=\"datetime.response\" :style-class=\"styleClass\"></picker>\n";

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(136)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\JsComponents\\picker\\pickerCity.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(138)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-26bfa6b0/pickerCity.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _picker = __webpack_require__(122);

	var _picker2 = _interopRequireDefault(_picker);

	var _chinesecity = __webpack_require__(137);

	var _chinesecity2 = _interopRequireDefault(_chinesecity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<picker :data.sync="citytable.slot" :default="citytable.default" :response.sync="citytable.response" :success="citytable.success" :style-class="styleClass"></picker>
	// </template>
	//
	// <script type="text/javascript">
	exports.default = {
	  name: 'jui-picker-city',
	  props: ['cityvalues', 'styleClass'],
	  data: function data() {
	    return {
	      citytable: {
	        slot: {
	          '0': {
	            values: _chinesecity2.default.province,
	            value: "北京市"
	          },
	          '1': {
	            values: [],
	            value: ''
	          },
	          '2': {
	            values: [],
	            value: ''
	          },
	          length: 3
	        },
	        default: "城市选择",
	        response: '',
	        success: function success(data) {
	          data.value = data.value.replace(/-|请选择/g, '');
	        }
	      }
	    };
	  },

	  components: {
	    picker: _picker2.default
	  },
	  ready: function ready() {
	    var self = this;
	    var city = self.citytable.slot['0'];
	    var area = self.citytable.slot['1'];
	    if (this.cityvalues != undefined) {
	      if (this.cityvalues.data != undefined) {
	        this.cityvalues.data = this.citytable.response;
	      }
	      if (this.cityvalues.default != undefined) {
	        this.citytable.default = this.cityvalues.default;
	      }
	    }
	    city.reset = function (data) {
	      var ocity = self.citytable.slot['1'];
	      ocity.values = _chinesecity2.default.city[city.value];
	      ocity.value = _chinesecity2.default.city[city.value][0];
	    };
	    area.reset = function (data) {
	      var oarea = self.citytable.slot['2'];
	      if (_chinesecity2.default.area[area.value] != undefined) {
	        oarea.values = _chinesecity2.default.area[area.value];
	        oarea.value = _chinesecity2.default.area[area.value][0];
	      } else {
	        oarea.values = [];
	        oarea.value = '';
	      }
	    };
	  }
	};
	// </script>

/***/ },
/* 137 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Chinesecity = {};

	var province = ["北京市", "天津市", "河北省", "山西省", "内蒙古", "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏", "陕西省", "甘肃省", "青海省", "宁夏", "新疆", "台湾省", "香港", "澳门"];

	var city = {
	    "北京市": ["请选择", "东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云县", "延庆县"],
	    "天津市": ["请选择", "和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县", "静海县", "蓟县"],
	    "河北省": ["请选择", "石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市"],
	    "山西省": ["请选择", "太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市", "晋中市", "运城市", "忻州市", "临汾市", "吕梁市"],
	    "内蒙古": ["请选择", "呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "鄂尔多斯市", "呼伦贝尔市", "巴彦淖尔市", "乌兰察布市", "兴安盟", "锡林郭勒盟", "阿拉善盟"],
	    "辽宁省": ["请选择", "沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "营口市", "阜新市", "辽阳市", "盘锦市", "铁岭市", "朝阳市", "葫芦岛市"],
	    "吉林省": ["请选择", "长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "松原市", "白城市", "延边州"],
	    "黑龙江省": ["请选择", "哈尔滨市", "齐齐哈尔市", "鸡西市", "鹤岗市", "双鸭山市", "大庆市", "伊春市", "佳木斯市", "七台河市", "牡丹江市", "黑河市", "绥化市", "大兴安岭地区"],
	    "上海市": ["请选择", "黄浦区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "奉贤区", "崇明县"],
	    "江苏省": ["请选择", "南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市"],
	    "浙江省": ["请选择", "杭州市", "宁波市", "温州市", "嘉兴市", "湖州市", "绍兴市", "金华市", "衢州市", "舟山市", "台州市", "丽水市"],
	    "安徽省": ["请选择", "合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "滁州市", "阜阳市", "宿州市", "巢湖市", "六安市", "亳州市", "池州市", "宣城市"],
	    "福建省": ["请选择", "福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市", "南平市", "龙岩市", "宁德市"],
	    "江西省": ["请选择", "南昌市", "景德镇市", "萍乡市", "九江市", "新余市", "鹰潭市", "赣州市", "吉安市", "宜春市", "抚州市", "上饶市"],
	    "山东省": ["请选择", "济南市", "青岛市", "淄博市", "枣庄市", "东营市", "烟台市", "潍坊市", "济宁市", "泰安市", "威海市", "日照市", "莱芜市", "临沂市", "德州市", "聊城市", "滨州市", "菏泽市"],
	    "河南省": ["请选择", "郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市", "新乡市", "焦作市", "濮阳市", "许昌市", "漯河市", "三门峡市", "南阳市", "商丘市", "信阳市", "周口市", "驻马店市", "济源市"],
	    "湖北省": ["请选择", "武汉市", "黄石市", "十堰市", "宜昌市", "襄阳市", "鄂州市", "荆门市", "孝感市", "荆州市", "黄冈市", "咸宁市", "随州市", "恩施州", "仙桃市", "潜江市", "天门市", "神农架", "江汉油田"],
	    "湖南省": ["请选择", "长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市", "常德市", "张家界市", "益阳市", "郴州市", "永州市", "怀化市", "娄底市", "湘西"],
	    "广东省": ["请选择", "广州市", "韶关市", "深圳市", "珠海市", "汕头市", "佛山市", "江门市", "湛江市", "茂名市", "肇庆市", "惠州市", "梅州市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市"],
	    "广西": ["请选择", "南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市"],
	    "海南省": ["请选择", "海口市", "三亚市", "五指山市", "琼海市", "儋州市", "文昌市", "万宁市", "东方市", "定安县", "屯昌县", "澄迈县", "临高县", "白沙", "昌江", "乐东", "陵水", "保亭", "琼中", "洋浦经济开发区"],
	    "重庆市": ["请选择", "万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "万盛区", "双桥区", "渝北区", "巴南区", "黔江区", "长寿区", "江津区", "合川区", "南川区", "綦江县", "潼南县", "铜梁县", "大足县", "荣昌县", "璧山县", "梁平县", "城口县", "丰都县", "垫江县", "武隆县", "忠县", "开县", "云阳县", "奉节县", "巫山县", "巫溪县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县", "永川区", "北部新区"],
	    "四川省": ["请选择", "成都市", "自贡市", "攀枝花市", "泸州市", "德阳市", "绵阳市", "广元市", "遂宁市", "内江市", "乐山市", "南充市", "眉山市", "宜宾市", "广安市", "达州市", "雅安市", "巴中市", "资阳市", "阿坝州", "甘孜", "凉山"],
	    "贵州省": ["请选择", "贵阳市", "六盘水市", "遵义市", "安顺市", "毕节市", "铜仁市", "黔西南", "黔东南", "黔南布"],
	    "云南省": ["请选择", "昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市(*)", "临沧市", "楚雄", "红河", "文山", "西双版纳", "大理", "德宏", "怒江", "迪庆"],
	    "西藏": ["请选择", "拉萨市", "昌都地区", "山南地区", "日喀则地区", "那曲地区", "阿里地区", "林芝地区"],
	    "陕西省": ["请选择", "西安市", "铜川市", "宝鸡市", "咸阳市", "渭南市", "延安市", "汉中市", "榆林市", "安康市", "商洛市", "杨凌示范区"],
	    "甘肃省": ["请选择", "兰州市", "嘉峪关市", "金昌市", "白银市", "天水市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", "定西市", "陇南市", "临夏", "甘南"],
	    "青海省": ["请选择", "西宁市", "海东地区", "海北", "黄南", "海南", "果洛", "玉树", "海西"],
	    "宁夏": ["请选择", "银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"],
	    "新疆": ["请选择", "乌鲁木齐市", "克拉玛依市", "吐鲁番地区", "哈密地区", "昌吉", "博尔塔拉", "巴音郭楞", "阿克苏地区", "克孜勒", "喀什地区", "和田地区", "伊犁", "塔城地区", "阿勒泰地区", "自治区直辖县级行政单位"],
	    "台湾省": ["请选择", "台北市", "高雄市", "基隆市", "台中市", "台南市", "新竹市", "嘉义市", "台北县", "宜兰县", "新竹县", "桃园县", "苗栗县", "台中县", "彰化县", "南投县", "嘉义县", "云林县", "台南县", "高雄县", "屏东县", "台东县", "花莲县", "澎湖县"],
	    "香港": ["请选择", "中西区", "东区", "九龙城区", "观塘区", "南区", "深水区", "湾仔区", "黄大仙区", "油尖旺区", "离岛区", "葵青区", "北区", "西贡区", "沙田区", "屯门区", "大埔区", "荃湾区", "元朗区"],
	    "澳门": ["请选择", "花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区", "嘉模堂区", "圣方济各堂区"]
	};

	var area = {
	    "石家庄市": ["请选择", "长安区", "桥东区", "桥西区", "新华区", "井陉矿区", "裕华区", "井陉县", "正定县", "栾城县", "行唐县", "灵寿县", "高邑县", "深泽县", "赞皇县", "无极县", "平山县", "元氏县", "赵县", "辛集市", "藁城市", "晋州市", "新乐市", "鹿泉市"],
	    "唐山市": ["请选择", "路南区", "路北区", "古冶区", "开平区", "丰南区", "丰润区", "滦县", "滦南县", "乐亭县", "迁西县", "玉田县", "唐海县", "遵化市", "迁安市"],
	    "秦皇岛市": ["请选择", "海港区", "山海关区", "北戴河区", "青龙县", "昌黎县", "抚宁县", "卢龙县"],
	    "邯郸市": ["请选择", "邯山区", "丛台区", "复兴区", "峰峰矿区", "邯郸县", "临漳县", "成安县", "大名县", "涉县", "磁县", "肥乡县", "永年县", "邱县", "鸡泽县", "广平县", "馆陶县", "魏县", "曲周县", "武安市"],
	    "邢台市": ["请选择", "桥东区", "桥西区", "邢台县", "临城县", "内丘县", "柏乡县", "隆尧县", "任县", "南和县", "宁晋县", "巨鹿县", "新河县", "广宗县", "平乡县", "威县", "清河县", "临西县", "南宫市", "沙河市"],
	    "保定市": ["请选择", "新市区", "北市区", "南市区", "满城县", "清苑县", "涞水县", "阜平县", "徐水县", "定兴县", "唐县", "高阳县", "容城县", "涞源县", "望都县", "安新县", "易县", "曲阳县", "蠡县", "顺平县", "博野县", "雄县", "涿州市", "定州市", "安国市", "高碑店市"],
	    "张家口市": ["请选择", "桥东区", "桥西区", "宣化区", "下花园区", "宣化县", "张北县", "康保县", "沽源县", "尚义县", "蔚县", "阳原县", "怀安县", "万全县", "怀来县", "涿鹿县", "赤城县", "崇礼县"],
	    "承德市": ["请选择", "双桥区", "双滦区", "鹰手营子矿区", "承德县", "兴隆县", "平泉县", "滦平县", "隆化县", "丰宁县", "宽城县", "围场县"],
	    "沧州市": ["请选择", "新华区", "运河区", "沧县", "青县", "东光县", "海兴县", "盐山县", "肃宁县", "南皮县", "吴桥县", "献县", "孟村县", "泊头市", "任丘市", "黄骅市", "河间市"],
	    "廊坊市": ["请选择", "安次区", "广阳区", "固安县", "永清县", "香河县", "大城县", "文安县", "大厂县", "霸州市", "三河市"],
	    "衡水市": ["请选择", "桃城区", "枣强县", "武邑县", "武强县", "饶阳县", "安平县", "故城县", "景县", "阜城县", "冀州市", "深州市"],
	    "太原市": ["请选择", "小店区", "迎泽区", "杏花岭区", "尖草坪区", "万柏林区", "晋源区", "清徐县", "阳曲县", "娄烦县", "古交市"],
	    "大同市": ["请选择", "城区", "矿区", "南郊区", "新荣区", "阳高县", "天镇县", "广灵县", "灵丘县", "浑源县", "左云县", "大同县"],
	    "阳泉市": ["请选择", "城区", "矿区", "郊区", "平定县", "盂县"],
	    "长治市": ["请选择", "城区", "郊区", "长治县", "襄垣县", "屯留县", "平顺县", "黎城县", "壶关县", "长子县", "武乡县", "沁县", "沁源县", "潞城市"],
	    "晋城市": ["请选择", "城区", "沁水县", "阳城县", "陵川县", "泽州县", "高平市"],
	    "朔州市": ["请选择", "朔城区", "平鲁区", "山阴县", "应县", "右玉县", "怀仁县"],
	    "晋中市": ["请选择", "榆次区", "榆社县", "左权县", "和顺县", "昔阳县", "寿阳县", "太谷县", "祁县", "平遥县", "灵石县", "介休市"],
	    "运城市": ["请选择", "盐湖区", "临猗县", "万荣县", "闻喜县", "稷山县", "新绛县", "绛县", "垣曲县", "夏县", "平陆县", "芮城县", "永济市", "河津市"],
	    "忻州市": ["请选择", "忻府区", "定襄县", "五台县", "代县", "繁峙县", "宁武县", "静乐县", "神池县", "五寨县", "岢岚县", "河曲县", "保德县", "偏关县", "原平市"],
	    "临汾市": ["请选择", "尧都区", "曲沃县", "翼城县", "襄汾县", "洪洞县", "古县", "安泽县", "浮山县", "吉县", "乡宁县", "大宁县", "隰县", "永和县", "蒲县", "汾西县", "侯马市", "霍州市"],
	    "吕梁市": ["请选择", "离石区", "文水县", "交城县", "兴县", "临县", "柳林县", "石楼县", "岚县", "方山县", "中阳县", "交口县", "孝义市", "汾阳市"],
	    "呼和浩特市": ["请选择", "新城区", "回民区", "玉泉区", "赛罕区", "土默特左旗", "托克托县", "和林格尔县", "清水河县", "武川县"],
	    "包头市": ["请选择", "东河区", "昆都仑区", "青山区", "石拐区", "白云矿区", "九原区", "土默特右旗", "固阳县", "达尔罕茂明安联合旗"],
	    "乌海市": ["请选择", "海勃湾区", "海南区", "乌达区"],
	    "赤峰市": ["请选择", "红山区", "元宝山区", "松山区", "阿鲁科尔沁旗", "巴林左旗", "巴林右旗", "林西县", "克什克腾旗", "翁牛特旗", "喀喇沁旗", "宁城县", "敖汉旗"],
	    "通辽市": ["请选择", "科尔沁区", "科尔沁左翼中旗", "科尔沁左翼后旗", "开鲁县", "库伦旗", "奈曼旗", "扎鲁特旗", "霍林郭勒市"],
	    "鄂尔多斯市": ["请选择", "东胜区", "达拉特旗", "准格尔旗", "鄂托克前旗", "鄂托克旗", "杭锦旗", "乌审旗", "伊金霍洛旗"],
	    "呼伦贝尔市": ["请选择", "海拉尔区", "阿荣旗", "莫力达瓦达斡尔族自治旗", "鄂伦春自治旗", "鄂温克族自治旗", "陈巴尔虎旗", "新巴尔虎左旗", "新巴尔虎右旗", "满洲里市", "牙克石市", "扎兰屯市", "额尔古纳市", "根河市"],
	    "巴彦淖尔市": ["请选择", "临河区", "五原县", "磴口县", "乌拉特前旗", "乌拉特中旗", "乌拉特后旗", "杭锦后旗"],
	    "乌兰察布市": ["请选择", "集宁区", "卓资县", "化德县", "商都县", "兴和县", "凉城县", "察哈尔右翼前旗", "察哈尔右翼中旗", "察哈尔右翼后旗", "四子王旗", "丰镇市"],
	    "兴安盟": ["请选择", "乌兰浩特市", "阿尔山市", "科尔沁右翼前旗", "科尔沁右翼中旗", "扎赉特旗", "突泉县"],
	    "锡林郭勒盟": ["请选择", "二连浩特市", "锡林浩特市", "阿巴嘎旗", "苏尼特左旗", "苏尼特右旗", "东乌珠穆沁旗", "西乌珠穆沁旗", "太仆寺旗", "镶黄旗", "正镶白旗", "正蓝旗", "多伦县"],
	    "阿拉善盟": ["请选择", "阿拉善左旗", "阿拉善右旗", "额济纳旗"],
	    "沈阳市": ["请选择", "和平区", "沈河区", "大东区", "皇姑区", "铁西区", "苏家屯区", "东陵区", "沈北新区", "于洪区", "辽中县", "康平县", "法库县", "新民市"],
	    "大连市": ["请选择", "中山区", "西岗区", "沙河口区", "甘井子区", "旅顺口区", "金州区", "长海县", "瓦房店市", "普兰店市", "庄河市"],
	    "鞍山市": ["请选择", "铁东区", "铁西区", "立山区", "千山区", "台安县", "岫岩县", "海城市"],
	    "抚顺市": ["请选择", "新抚区", "东洲区", "望花区", "顺城区", "抚顺县", "新宾县", "清原县"],
	    "本溪市": ["请选择", "平山区", "溪湖区", "明山区", "南芬区", "本溪县", "桓仁县"],
	    "丹东市": ["请选择", "元宝区", "振兴区", "振安区", "宽甸县", "东港市", "凤城市"],
	    "锦州市": ["请选择", "古塔区", "凌河区", "太和区", "黑山县", "义县", "凌海市", "北镇市"],
	    "营口市": ["请选择", "站前区", "西市区", "鲅鱼圈区", "老边区", "盖州市", "大石桥市"],
	    "阜新市": ["请选择", "海州区", "新邱区", "太平区", "清河门区", "细河区", "阜新县", "彰武县"],
	    "辽阳市": ["请选择", "白塔区", "文圣区", "宏伟区", "弓长岭区", "太子河区", "辽阳县", "灯塔市"],
	    "盘锦市": ["请选择", "双台子区", "兴隆台区", "大洼县", "盘山县"],
	    "铁岭市": ["请选择", "银州区", "清河区", "铁岭县", "西丰县", "昌图县", "调兵山市", "开原市"],
	    "朝阳市": ["请选择", "双塔区", "龙城区", "朝阳县", "建平县", "喀喇沁", "北票市", "凌源市"],
	    "葫芦岛市": ["请选择", "连山区", "龙港区", "南票区", "绥中县", "建昌县", "兴城市", "杨家杖子开发区"],
	    "长春市": ["请选择", "南关区", "宽城区", "朝阳区", "二道区", "绿园区", "双阳区", "农安县", "九台市", "榆树市", "德惠市"],
	    "吉林市": ["请选择", "昌邑区", "龙潭区", "船营区", "丰满区", "永吉县", "蛟河市", "桦甸市", "舒兰市", "磐石市"],
	    "四平市": ["请选择", "铁西区", "铁东区", "梨树县", "伊通", "公主岭市", "双辽市"],
	    "辽源市": ["请选择", "龙山区", "西安区", "东丰县", "东辽县"],
	    "通化市": ["请选择", "东昌区", "二道江区", "通化县", "辉南县", "柳河县", "梅河口市", "集安市"],
	    "白山市": ["请选择", "八道江区", "江源区", "抚松县", "靖宇县", "长白县", "临江市"],
	    "松原市": ["请选择", "宁江区", "前郭尔罗斯", "长岭县", "乾安县", "扶余县"],
	    "白城市": ["请选择", "洮北区", "镇赉县", "通榆县", "洮南市", "大安市"],
	    "延边州": ["请选择", "延吉市", "图们市", "敦化市", "珲春市", "龙井市", "和龙市", "汪清县", "安图县"],
	    "哈尔滨市": ["请选择", "道里区", "南岗区", "道外区", "平房区", "松北区", "香坊区", "呼兰区", "阿城区", "依兰县", "方正县", "宾县", "巴彦县", "木兰县", "通河县", "延寿县", "双城市", "尚志市", "五常市"],
	    "齐齐哈尔市": ["请选择", "龙沙区", "建华区", "铁锋区", "昂昂溪区", "富拉尔基区", "碾子山区", "梅里斯达斡尔族区", "龙江县", "依安县", "泰来县", "甘南县", "富裕县", "克山县", "克东县", "拜泉县", "讷河市"],
	    "鸡西市": ["请选择", "鸡冠区", "恒山区", "滴道区", "梨树区", "城子河区", "麻山区", "鸡东县", "虎林市", "密山市"],
	    "鹤岗市": ["请选择", "向阳区", "工农区", "南山区", "兴安区", "东山区", "兴山区", "萝北县", "绥滨县"],
	    "双鸭山市": ["请选择", "尖山区", "岭东区", "四方台区", "宝山区", "集贤县", "友谊县", "宝清县", "饶河县"],
	    "大庆市": ["请选择", "萨尔图区", "龙凤区", "让胡路区", "红岗区", "大同区", "肇州县", "肇源县", "林甸县", "杜尔伯特"],
	    "伊春市": ["请选择", "伊春区", "南岔区", "友好区", "西林区", "翠峦区", "新青区", "美溪区", "金山屯区", "五营区", "乌马河区", "汤旺河区", "带岭区", "乌伊岭区", "红星区", "上甘岭区", "嘉荫县", "铁力市"],
	    "佳木斯市": ["请选择", "向阳区", "前进区", "东风区", "郊区", "桦南县", "桦川县", "汤原县", "抚远县", "同江市", "富锦市"],
	    "七台河市": ["请选择", "新兴区", "桃山区", "茄子河区", "勃利县"],
	    "牡丹江市": ["请选择", "东安区", "阳明区", "爱民区", "西安区", "东宁县", "林口县", "绥芬河市", "海林市", "宁安市", "穆棱市"],
	    "黑河市": ["请选择", "爱辉区", "嫩江县", "逊克县", "孙吴县", "北安市", "五大连池市"],
	    "绥化市": ["请选择", "北林区", "望奎县", "兰西县", "青冈县", "庆安县", "明水县", "绥棱县", "安达市", "肇东市", "海伦市"],
	    "大兴安岭地区": ["请选择", "加格达奇区", "松岭区", "新林区", "呼中区", "呼玛县", "塔河县", "漠河县"],
	    "南京市": ["请选择", "玄武区", "白下区", "秦淮区", "建邺区", "鼓楼区", "下关区", "浦口区", "栖霞区", "雨花台区", "江宁区", "六合区", "溧水县", "高淳县"],
	    "无锡市": ["请选择", "崇安区", "南长区", "北塘区", "锡山区", "惠山区", "滨湖区", "江阴市", "宜兴市"],
	    "徐州市": ["请选择", "鼓楼区", "云龙区", "九里区", "贾汪区", "泉山区", "丰县", "沛县", "铜山县", "睢宁县", "新沂市", "邳州市"],
	    "常州市": ["请选择", "天宁区", "钟楼区", "戚墅堰区", "新北区", "武进区", "溧阳市", "金坛市"],
	    "苏州市": ["请选择", "沧浪区", "平江区", "金阊区", "虎丘区", "吴中区", "相城区", "常熟市", "张家港市", "昆山市", "吴江市", "太仓市"],
	    "南通市": ["请选择", "崇川区", "港闸区", "海安县", "如东县", "启东市", "如皋市", "通州市", "海门市"],
	    "连云港市": ["请选择", "连云区", "新浦区", "海州区", "赣榆县", "东海县", "灌云县", "灌南县"],
	    "淮安市": ["请选择", "清河区", "楚州区", "淮阴区", "清浦区", "涟水县", "洪泽县", "盱眙县", "金湖县"],
	    "盐城市": ["请选择", "亭湖区", "盐都区", "响水县", "滨海县", "阜宁县", "射阳县", "建湖县", "东台市", "大丰市"],
	    "扬州市": ["请选择", "广陵区", "邗江区", "维扬区", "宝应县", "仪征市", "高邮市", "江都市"],
	    "镇江市": ["请选择", "京口区", "润州区", "丹徒区", "丹阳市", "扬中市", "句容市"],
	    "泰州市": ["请选择", "海陵区", "高港区", "兴化市", "靖江市", "泰兴市", "姜堰市"],
	    "宿迁市": ["请选择", "宿城区", "宿豫区", "沭阳县", "泗阳县", "泗洪县"],
	    "杭州市": ["请选择", "上城区", "下城区", "江干区", "拱墅区", "西湖区", "滨江区", "萧山区", "余杭区", "桐庐县", "淳安县", "建德市", "富阳市", "临安市"],
	    "宁波市": ["请选择", "海曙区", "江东区", "江北区", "北仑区", "镇海区", "鄞州区", "象山县", "宁海县", "余姚市", "慈溪市", "奉化市"],
	    "温州市": ["请选择", "鹿城区", "龙湾区", "瓯海区", "洞头县", "永嘉县", "平阳县", "苍南县", "文成县", "泰顺县", "瑞安市", "乐清市"],
	    "嘉兴市": ["请选择", "南湖区", "秀洲区", "嘉善县", "海盐县", "海宁市", "平湖市", "桐乡市"],
	    "湖州市": ["请选择", "吴兴区", "南浔区", "德清县", "长兴县", "安吉县"],
	    "绍兴市": ["请选择", "越城区", "绍兴县", "新昌县", "诸暨市", "上虞市", "嵊州市"],
	    "金华市": ["请选择", "婺城区", "金东区", "武义县", "浦江县", "磐安县", "兰溪市", "义乌市", "东阳市", "永康市"],
	    "衢州市": ["请选择", "柯城区", "衢江区", "常山县", "开化县", "龙游县", "江山市"],
	    "舟山市": ["请选择", "定海区", "普陀区", "岱山县", "嵊泗县"],
	    "台州市": ["请选择", "椒江区", "黄岩区", "路桥区", "玉环县", "三门县", "天台县", "仙居县", "温岭市", "临海市"],
	    "丽水市": ["请选择", "莲都区", "青田县", "缙云县", "遂昌县", "松阳县", "云和县", "庆元县", "景宁", "龙泉市"],
	    "合肥市": ["请选择", "瑶海区", "庐阳区", "蜀山区", "新站区", "高新区", "经开区", "包河区", "长丰县", "肥东县", "肥西县"],
	    "芜湖市": ["请选择", "镜湖区", "弋江区", "鸠江区", "三山区", "芜湖县", "繁昌县", "南陵县"],
	    "蚌埠市": ["请选择", "龙子湖区", "蚌山区", "禹会区", "淮上区", "怀远县", "五河县", "固镇县"],
	    "淮南市": ["请选择", "大通区", "田家庵区", "谢家集区", "八公山区", "潘集区", "凤台县"],
	    "马鞍山市": ["请选择", "金家庄区", "花山区", "雨山区", "开发区", "博望新区", "示范园区", "当涂县", "含山县", "和县"],
	    "淮北市": ["请选择", "杜集区", "相山区", "烈山区", "濉溪县"],
	    "铜陵市": ["请选择", "铜官山区", "狮子山区", "郊区", "铜陵县"],
	    "安庆市": ["请选择", "迎江区", "大观区", "宜秀区", "怀宁县", "枞阳县", "潜山县", "太湖县", "宿松县", "望江县", "岳西县", "桐城市"],
	    "黄山市": ["请选择", "屯溪区", "黄山区", "徽州区", "歙县", "休宁县", "黟县", "祁门县"],
	    "滁州市": ["请选择", "琅琊区", "南谯区", "来安县", "全椒县", "定远县", "凤阳县", "天长市", "明光市"],
	    "阜阳市": ["请选择", "颍州区", "颍东区", "颍泉区", "临泉县", "太和县", "阜南县", "颍上县", "界首市"],
	    "宿州市": ["请选择", "埇桥区", "砀山县", "萧县", "灵璧县", "泗县"],
	    "巢湖市": ["请选择", "居巢区", "庐江县", "无为县", "和县"],
	    "六安市": ["请选择", "金安区", "裕安区", "寿县", "霍邱县", "舒城县", "金寨县", "霍山县"],
	    "亳州市": ["请选择", "谯城区", "涡阳县", "蒙城县", "利辛县"],
	    "池州市": ["请选择", "贵池区", "东至县", "石台县", "青阳县"],
	    "宣城市": ["请选择", "宣州区", "郎溪县", "广德县", "泾县", "绩溪县", "旌德县", "宁国市"],
	    "福州市": ["请选择", "鼓楼区", "台江区", "仓山区", "马尾区", "晋安区", "闽侯县", "连江县", "罗源县", "闽清县", "永泰县", "平潭县", "福清市", "长乐市"],
	    "厦门市": ["请选择", "思明区", "海沧区", "湖里区", "集美区", "同安区", "翔安区"],
	    "莆田市": ["请选择", "城厢区", "涵江区", "荔城区", "秀屿区", "仙游县"],
	    "三明市": ["请选择", "梅列区", "三元区", "明溪县", "清流县", "宁化县", "大田县", "尤溪县", "沙县", "将乐县", "泰宁县", "建宁县", "永安市"],
	    "泉州市": ["请选择", "鲤城区", "丰泽区", "洛江区", "泉港区", "惠安县", "安溪县", "永春县", "德化县", "金门县", "石狮市", "晋江市", "南安市"],
	    "漳州市": ["请选择", "芗城区", "龙文区", "云霄县", "漳浦县", "诏安县", "长泰县", "东山县", "南靖县", "平和县", "华安县", "龙海市"],
	    "南平市": ["请选择", "延平区", "顺昌县", "浦城县", "光泽县", "松溪县", "政和县", "邵武市", "武夷山市", "建瓯市", "建阳市"],
	    "龙岩市": ["请选择", "新罗区", "长汀县", "永定县", "上杭县", "武平县", "连城县", "漳平市"],
	    "宁德市": ["请选择", "蕉城区", "霞浦县", "古田县", "屏南县", "寿宁县", "周宁县", "柘荣县", "福安市", "福鼎市"],
	    "南昌市": ["请选择", "东湖区", "西湖区", "青云谱区", "湾里区", "青山湖区", "南昌县", "新建县", "安义县", "进贤县"],
	    "景德镇市": ["请选择", "昌江区", "珠山区", "浮梁县", "乐平市"],
	    "萍乡市": ["请选择", "安源区", "湘东区", "莲花县", "上栗县", "芦溪县"],
	    "九江市": ["请选择", "庐山区", "浔阳区", "九江县", "武宁县", "修水县", "永修县", "德安县", "星子县", "都昌县", "湖口县", "彭泽县", "瑞昌市"],
	    "新余市": ["请选择", "渝水区", "分宜县"],
	    "鹰潭市": ["请选择", "月湖区", "余江县", "贵溪市"],
	    "赣州市": ["请选择", "章贡区", "赣县", "信丰县", "大余县", "上犹县", "崇义县", "安远县", "龙南县", "定南县", "全南县", "宁都县", "于都县", "兴国县", "会昌县", "寻乌县", "石城县", "瑞金市", "南康市"],
	    "吉安市": ["请选择", "吉州区", "青原区", "吉安县", "吉水县", "峡江县", "新干县", "永丰县", "泰和县", "遂川县", "万安县", "安福县", "永新县", "井冈山市"],
	    "宜春市": ["请选择", "袁州区", "奉新县", "万载县", "上高县", "宜丰县", "靖安县", "铜鼓县", "丰城市", "樟树市", "高安市"],
	    "抚州市": ["请选择", "临川区", "南城县", "黎川县", "南丰县", "崇仁县", "乐安县", "宜黄县", "金溪县", "资溪县", "东乡县", "广昌县"],
	    "上饶市": ["请选择", "信州区", "上饶县", "广丰县", "玉山县", "铅山县", "横峰县", "弋阳县", "余干县", "鄱阳县", "万年县", "婺源县", "德兴市"],
	    "济南市": ["请选择", "历下区", "市中区", "槐荫区", "天桥区", "高新区", "历城区", "长清区", "平阴县", "济阳县", "商河县", "章丘市"],
	    "青岛市": ["请选择", "市南区", "市北区", "四方区", "黄岛区", "崂山区", "李沧区", "城阳区", "胶州市", "即墨市", "平度市", "胶南市", "莱西市"],
	    "淄博市": ["请选择", "淄川区", "张店区", "博山区", "临淄区", "周村区", "桓台县", "高青县", "沂源县"],
	    "枣庄市": ["请选择", "市中区", "薛城区", "峄城区", "台儿庄区", "山亭区", "滕州市"],
	    "东营市": ["请选择", "东营区", "河口区", "垦利县", "利津县", "广饶县"],
	    "烟台市": ["请选择", "芝罘区", "福山区", "牟平区", "莱山区", "长岛县", "龙口市", "莱阳市", "莱州市", "蓬莱市", "招远市", "栖霞市", "海阳市"],
	    "潍坊市": ["请选择", "潍城区", "寒亭区", "坊子区", "奎文区", "临朐县", "昌乐县", "青州市", "诸城市", "寿光市", "安丘市", "高密市", "昌邑市"],
	    "济宁市": ["请选择", "市中区", "任城区", "微山县", "鱼台县", "金乡县", "嘉祥县", "汶上县", "泗水县", "梁山县", "曲阜市", "兖州市", "邹城市"],
	    "泰安市": ["请选择", "泰山区", "岱岳区", "宁阳县", "东平县", "新泰市", "肥城市"],
	    "威海市": ["请选择", "环翠区", "文登市", "荣成市", "乳山市"],
	    "日照市": ["请选择", "东港区", "岚山区", "五莲县", "莒县"],
	    "莱芜市": ["请选择", "莱城区", "钢城区"],
	    "临沂市": ["请选择", "兰山区", "罗庄区", "河东区", "沂南县", "郯城县", "沂水县", "苍山县", "费县", "平邑县", "莒南县", "蒙阴县", "临沭县"],
	    "德州市": ["请选择", "德城区", "陵县", "宁津县", "庆云县", "临邑县", "齐河县", "平原县", "夏津县", "武城县", "乐陵市", "禹城市"],
	    "聊城市": ["请选择", "东昌府区", "阳谷县", "莘县", "茌平县", "东阿县", "冠县", "高唐县", "临清市"],
	    "滨州市": ["请选择", "滨城区", "惠民县", "阳信县", "无棣县", "沾化县", "博兴县", "邹平县"],
	    "菏泽市": ["请选择", "牡丹区", "曹县", "单县", "成武县", "巨野县", "郓城县", "鄄城县", "定陶县", "东明县"],
	    "郑州市": ["请选择", "中原区", "二七区", "管城", "金水区", "上街区", "惠济区", "高新区", "中牟县", "巩义市", "荥阳市", "新密市", "新郑市", "登封市"],
	    "开封市": ["请选择", "龙亭区", "顺河回族区", "鼓楼区", "禹王台区", "金明区", "杞县", "通许县", "尉氏县", "开封县", "兰考县"],
	    "洛阳市": ["请选择", "老城区", "西工区", "瀍河回族区", "涧西区", "吉利区", "洛龙区", "孟津县", "新安县", "栾川县", "嵩县", "汝阳县", "宜阳县", "洛宁县", "伊川县", "偃师市"],
	    "平顶山市": ["请选择", "新华区", "卫东区", "石龙区", "湛河区", "宝丰县", "叶县", "鲁山县", "郏县", "舞钢市", "汝州市"],
	    "安阳市": ["请选择", "文峰区", "北关区", "殷都区", "龙安区", "安阳县", "汤阴县", "滑县", "内黄县", "林州市"],
	    "鹤壁市": ["请选择", "鹤山区", "山城区", "淇滨区", "浚县", "淇县"],
	    "新乡市": ["请选择", "红旗区", "卫滨区", "凤泉区", "牧野区", "新乡县", "获嘉县", "原阳县", "延津县", "封丘县", "长垣县", "卫辉市", "辉县市"],
	    "焦作市": ["请选择", "解放区", "中站区", "马村区", "山阳区", "修武县", "博爱县", "武陟县", "温县", "沁阳市", "孟州市"],
	    "濮阳市": ["请选择", "华龙区", "清丰县", "南乐县", "范县", "台前县", "濮阳县"],
	    "许昌市": ["请选择", "魏都区", "许昌县", "鄢陵县", "襄城县", "禹州市", "长葛市"],
	    "漯河市": ["请选择", "源汇区", "郾城区", "召陵区", "舞阳县", "临颍县"],
	    "三门峡市": ["请选择", "湖滨区", "渑池县", "陕县", "卢氏县", "义马市", "灵宝市"],
	    "南阳市": ["请选择", "宛城区", "卧龙区", "南召县", "方城县", "西峡县", "镇平县", "内乡县", "淅川县", "社旗县", "唐河县", "新野县", "桐柏县", "邓州市"],
	    "商丘市": ["请选择", "梁园区", "睢阳区", "民权县", "睢县", "宁陵县", "柘城县", "虞城县", "夏邑县", "永城市"],
	    "信阳市": ["请选择", "浉河区", "平桥区", "罗山县", "光山县", "新县", "商城县", "固始县", "潢川县", "淮滨县", "息县"],
	    "周口市": ["请选择", "川汇区", "扶沟县", "西华县", "商水县", "沈丘县", "郸城县", "淮阳县", "太康县", "鹿邑县", "项城市"],
	    "驻马店市": ["请选择", "驿城区", "西平县", "上蔡县", "平舆县", "正阳县", "确山县", "泌阳县", "汝南县", "遂平县", "新蔡县"],
	    "武汉市": ["请选择", "江岸区", "江汉区", "硚口区", "汉阳区", "武昌区", "青山区", "洪山区", "东西湖区", "汉南区", "蔡甸区", "江夏区", "黄陂区", "新洲区", "东湖开发区", "武汉经济开发区"],
	    "黄石市": ["请选择", "黄石港区", "西塞山区", "下陆区", "铁山区", "阳新县", "黄石经济开发区", "大冶市"],
	    "十堰市": ["请选择", "茅箭区", "张湾区", "郧县", "郧西县", "竹山县", "竹溪县", "房县", "十堰经济开发区", "武当山旅游经济特区", "丹江口市"],
	    "宜昌市": ["请选择", "西陵区", "伍家岗区", "点军区", "猇亭区", "夷陵区", "远安县", "兴山县", "秭归县", "长阳县", "五峰县", "宜都市", "当阳市", "枝江市"],
	    "襄阳市": ["请选择", "襄城区", "樊城区", "襄阳区", "南漳县", "谷城县", "保康县", "老河口市", "枣阳市", "宜城市", "隆中风景区", "高新开发区", "鱼梁洲开发区"],
	    "鄂州市": ["请选择", "梁子湖区", "华容区", "鄂城区", "葛店开发区", "鄂州经济开发区"],
	    "荆门市": ["请选择", "东宝区", "掇刀区", "京山县", "沙洋县", "钟祥市", "屈家岭", "荆门经济开发区"],
	    "孝感市": ["请选择", "孝南区", "孝昌县", "大悟县", "云梦县", "应城市", "安陆市", "汉川市"],
	    "荆州市": ["请选择", "沙市区", "荆州区", "公安县", "监利县", "江陵县", "石首市", "洪湖市", "松滋市", "荆州经济开发区"],
	    "黄冈市": ["请选择", "黄州区", "团风县", "红安县", "罗田县", "英山县", "浠水县", "蕲春县", "黄梅县", "麻城市", "武穴市", "龙感湖管理区"],
	    "咸宁市": ["请选择", "咸安区", "嘉鱼县", "通城县", "崇阳县", "通山县", "赤壁市", "湖北省咸宁市咸宁经济开发区"],
	    "随州市": ["请选择", "曾都区", "随县", "广水市"],
	    "恩施州": ["请选择", "恩施市", "利川市", "建始县", "巴东县", "宣恩县", "咸丰县", "来凤县", "鹤峰县"],
	    "长沙市": ["请选择", "芙蓉区", "天心区", "岳麓区", "开福区", "雨花区", "长沙县", "望城县", "宁乡县", "浏阳市"],
	    "株洲市": ["请选择", "荷塘区", "芦淞区", "石峰区", "天元区", "株洲县", "攸县", "茶陵县", "炎陵县", "醴陵市"],
	    "湘潭市": ["请选择", "雨湖区", "岳塘区", "湘潭县", "湘乡市", "韶山市"],
	    "衡阳市": ["请选择", "珠晖区", "雁峰区", "石鼓区", "蒸湘区", "南岳区", "衡阳县", "衡南县", "衡山县", "衡东县", "祁东县", "耒阳市", "常宁市"],
	    "邵阳市": ["请选择", "双清区", "大祥区", "北塔区", "邵东县", "新邵县", "邵阳县", "隆回县", "洞口县", "绥宁县", "新宁县", "城步", "武冈市"],
	    "岳阳市": ["请选择", "岳阳楼区", "云溪区", "君山区", "岳阳县", "华容县", "湘阴县", "平江县", "汨罗市", "临湘市"],
	    "常德市": ["请选择", "武陵区", "鼎城区", "安乡县", "汉寿县", "澧县", "临澧县", "桃源县", "石门县", "津市市"],
	    "张家界市": ["请选择", "永定区", "武陵源区", "慈利县", "桑植县"],
	    "益阳市": ["请选择", "资阳区", "赫山区", "南县", "桃江县", "安化县", "沅江市"],
	    "郴州市": ["请选择", "北湖区", "苏仙区", "桂阳县", "宜章县", "永兴县", "嘉禾县", "临武县", "汝城县", "桂东县", "安仁县", "资兴市"],
	    "永州市": ["请选择", "零陵区", "冷水滩区", "祁阳县", "东安县", "双牌县", "道县", "江永县", "宁远县", "蓝山县", "新田县", "江华"],
	    "怀化市": ["请选择", "鹤城区", "中方县", "沅陵县", "辰溪县", "溆浦县", "会同县", "麻阳", "新晃", "芷江", "靖州", "通道", "洪江市"],
	    "娄底市": ["请选择", "娄星区", "双峰县", "新化县", "冷水江市", "涟源市"],
	    "湘西": ["请选择", "吉首市", "泸溪县", "凤凰县", "花垣县", "保靖县", "古丈县", "永顺县", "龙山县"],
	    "广州市": ["请选择", "荔湾区", "越秀区", "海珠区", "天河区", "白云区", "黄埔区", "番禺区", "花都区", "南沙区", "萝岗区", "增城市", "从化市"],
	    "韶关市": ["请选择", "武江区", "浈江区", "曲江区", "始兴县", "仁化县", "翁源县", "乳源", "新丰县", "乐昌市", "南雄市"],
	    "深圳市": ["请选择", "罗湖区", "福田区", "南山区", "宝安区", "龙岗区", "盐田区"],
	    "珠海市": ["请选择", "香洲区", "斗门区", "金湾区"],
	    "汕头市": ["请选择", "龙湖区", "金平区", "濠江区", "潮阳区", "潮南区", "澄海区", "南澳县"],
	    "佛山市": ["请选择", "禅城区", "南海区", "顺德区", "三水区", "高明区"],
	    "江门市": ["请选择", "蓬江区", "江海区", "新会区", "台山市", "开平市", "鹤山市", "恩平市"],
	    "湛江市": ["请选择", "赤坎区", "霞山区", "坡头区", "麻章区", "遂溪县", "徐闻县", "廉江市", "雷州市", "吴川市"],
	    "茂名市": ["请选择", "茂南区", "茂港区", "电白县", "高州市", "化州市", "信宜市"],
	    "肇庆市": ["请选择", "端州区", "鼎湖区", "广宁县", "怀集县", "封开县", "德庆县", "高要市", "四会市"],
	    "惠州市": ["请选择", "惠城区", "惠阳区", "博罗县", "惠东县", "龙门县"],
	    "梅州市": ["请选择", "梅江区", "梅县", "大埔县", "丰顺县", "五华县", "平远县", "蕉岭县", "兴宁市"],
	    "汕尾市": ["请选择", "城区", "海丰县", "陆河县", "陆丰市"],
	    "河源市": ["请选择", "源城区", "紫金县", "龙川县", "连平县", "和平县", "东源县"],
	    "阳江市": ["请选择", "江城区", "阳西县", "阳东县", "阳春市"],
	    "清远市": ["请选择", "清城区", "佛冈县", "阳山县", "连山", "连南", "清新县", "英德市", "连州市"],
	    "潮州市": ["请选择", "枫溪区", "湘桥区", "潮安县", "饶平县"],
	    "揭阳市": ["请选择", "榕城区", "揭东县", "揭西县", "惠来县", "普宁市"],
	    "云浮市": ["请选择", "云城区", "新兴县", "郁南县", "云安县", "罗定市"],
	    "南宁市": ["请选择", "兴宁区", "青秀区", "江南区", "西乡塘区", "良庆区", "邕宁区", "武鸣县", "隆安县", "马山县", "上林县", "宾阳县", "横县"],
	    "柳州市": ["请选择", "城中区", "鱼峰区", "柳南区", "柳北区", "柳江县", "柳城县", "鹿寨县", "融安县", "融水", "三江"],
	    "桂林市": ["请选择", "秀峰区", "叠彩区", "象山区", "七星区", "雁山区", "阳朔县", "临桂县", "灵川县", "全州县", "兴安县", "永福县", "灌阳县", "龙胜", "资源县", "平乐县", "荔蒲县", "恭城"],
	    "梧州市": ["请选择", "万秀区", "蝶山区", "长洲区", "苍梧县", "藤县", "蒙山县", "岑溪市"],
	    "北海市": ["请选择", "海城区", "银海区", "铁山港区", "合浦县"],
	    "防城港市": ["请选择", "港口区", "防城区", "上思县", "东兴市"],
	    "钦州市": ["请选择", "钦南区", "钦北区", "灵山县", "浦北县"],
	    "贵港市": ["请选择", "港北区", "港南区", "覃塘区", "平南县", "桂平市"],
	    "玉林市": ["请选择", "玉州区", "容县", "陆川县", "博白县", "兴业县", "北流市"],
	    "百色市": ["请选择", "右江区", "田阳县", "田东县", "平果县", "德保县", "靖西县", "那坡县", "凌云县", "乐业县", "田林县", "西林县", "隆林"],
	    "贺州市": ["请选择", "八步区", "昭平县", "钟山县", "富川"],
	    "河池市": ["请选择", "金城江区", "南丹县", "天峨县", "凤山县", "东兰县", "罗城", "环江", "巴马", "都安", "大化", "宜州市"],
	    "来宾市": ["请选择", "兴宾区", "忻城县", "象州县", "武宣县", "金秀", "合山市"],
	    "崇左市": ["请选择", "江洲区", "扶绥县", "宁明县", "龙州县", "大新县", "天等县", "凭祥市"],
	    "海口市": ["请选择", "秀英区", "龙华区", "琼山区", "美兰区"],
	    "成都市": ["请选择", "锦江区", "青羊区", "金牛区", "武侯区", "成华区", "龙泉驿区", "青白江区", "新都区", "温江区", "金堂县", "双流县", "郫县", "大邑县", "蒲江县", "新津县", "都江堰市", "彭州市", "邛崃市", "崇州市", "高新区"],
	    "自贡市": ["请选择", "自流井区", "贡井区", "大安区", "沿滩区", "荣县", "富顺县"],
	    "攀枝花市": ["请选择", "东区", "西区", "仁和区", "米易县", "盐边县"],
	    "泸州市": ["请选择", "江阳区", "纳溪区", "龙马潭区", "泸县", "合江县", "叙永县", "古蔺县"],
	    "德阳市": ["请选择", "旌阳区", "中江县", "罗江县", "广汉市", "什邡市", "绵竹市"],
	    "绵阳市": ["请选择", "涪城区", "游仙区", "三台县", "盐亭县", "安县", "梓潼县", "北川羌族自治县", "平武县", "江油市"],
	    "广元市": ["请选择", "市中区", "元坝区", "朝天区", "旺苍县", "青川县", "剑阁县", "苍溪县"],
	    "遂宁市": ["请选择", "船山区", "安居区", "蓬溪县", "射洪县", "大英县"],
	    "内江市": ["请选择", "市中区", "东兴区", "威远县", "资中县", "隆昌县"],
	    "乐山市": ["请选择", "市中区", "沙湾区", "五通桥区", "金口河区", "犍为县", "井研县", "夹江县", "沐川县", "峨边彝族自治县", "马边彝族自治县", "峨眉山市"],
	    "南充市": ["请选择", "顺庆区", "高坪区", "嘉陵区", "南部县", "营山县", "蓬安县", "仪陇县", "西充县", "阆中市"],
	    "眉山市": ["请选择", "东坡区", "仁寿县", "彭山县", "洪雅县", "丹棱县", "青神县"],
	    "宜宾市": ["请选择", "翠屏区", "宜宾县", "南溪县", "江安县", "长宁县", "高县", "珙县", "筠连县", "兴文县", "屏山县"],
	    "广安市": ["请选择", "广安区", "岳池县", "武胜县", "邻水县", "华蓥市"],
	    "达州市": ["请选择", "通川区", "达县", "宣汉县", "开江县", "大竹县", "渠县", "万源市"],
	    "雅安市": ["请选择", "雨城区", "名山县", "荥经县", "汉源县", "石棉县", "天全县", "芦山县", "宝兴县"],
	    "巴中市": ["请选择", "巴州区", "通江县", "南江县", "平昌县"],
	    "资阳市": ["请选择", "雁江区", "安岳县", "乐至县", "简阳市"],
	    "阿坝州": ["请选择", "汶川县", "理县", "茂县", "松潘县", "九寨沟县", "金川县", "小金县", "黑水县", "马尔康县", "壤塘县", "阿坝县", "若尔盖县", "红原县"],
	    "甘孜": ["请选择", "康定县", "泸定县", "丹巴县", "九龙县", "雅江县", "道孚县", "炉霍县", "甘孜县", "新龙县", "德格县", "白玉县", "石渠县", "色达县", "理塘县", "巴塘县", "乡城县", "稻城县", "得荣县"],
	    "凉山": ["请选择", "西昌市", "木里", "盐源县", "德昌县", "会理县", "会东县", "宁南县", "普格县", "布拖县", "金阳县", "昭觉县", "喜德县", "冕宁县", "越西县", "甘洛县", "美姑县", "雷波县"],
	    "贵阳市": ["请选择", "南明区", "云岩区", "花溪区", "乌当区", "白云区", "小河区", "金阳新区", "开阳县", "息烽县", "修文县", "清镇市"],
	    "六盘水市": ["请选择", "钟山区", "六枝特区", "水城县", "盘县"],
	    "遵义市": ["请选择", "红花岗区", "汇川区", "新浦新区", "遵义县", "桐梓县", "绥阳县", "正安县", "道真县", "务川县", "凤冈县", "湄潭县", "余庆县", "习水县", "赤水市", "仁怀市"],
	    "安顺市": ["请选择", "西秀区", "黄果树开发区", "平坝县", "普定县", "镇宁县", "关岭县", "紫云县"],
	    "毕节市": ["请选择", "七星关区", "大方县", "黔西县", "金沙县", "织金县", "纳雍县", "威宁", "赫章县"],
	    "铜仁市": ["请选择", "碧江区", "江口县", "玉屏县", "石阡县", "思南县", "印江县", "德江县", "沿河县", "松桃", "万山特区"],
	    "黔西南": ["请选择", "兴义市", "兴仁县", "普安县", "晴隆县", "贞丰县", "望谟县", "册亨县", "安龙县"],
	    "黔东南": ["请选择", "凯里市", "凯里经济开发区", "黄平县", "施秉县", "三穗县", "镇远县", "岑巩县", "天柱县", "锦屏县", "剑河县", "台江县", "黎平县", "榕江县", "从江县", "雷山县", "麻江县", "丹寨县"],
	    "黔南布": ["请选择", "都匀市", "福泉市", "荔波县", "贵定县", "瓮安县", "独山县", "平塘县", "罗甸县", "长顺县", "龙里县", "惠水县", "三都"],
	    "昆明市": ["请选择", "五华区", "盘龙区", "官渡区", "西山区", "东川区", "呈贡县", "晋宁县", "富民县", "宜良县", "石林", "嵩明县", "禄劝", "寻甸", "安宁市"],
	    "曲靖市": ["请选择", "麒麟区", "马龙县", "陆良县", "师宗县", "罗平县", "富源县", "会泽县", "沾益县", "宣威市"],
	    "玉溪市": ["请选择", "红塔区", "江川县", "澄江县", "通海县", "华宁县", "易门县", "峨山", "新平", "元江县"],
	    "保山市": ["请选择", "隆阳区", "施甸县", "腾冲县", "龙陵县", "昌宁县"],
	    "昭通市": ["请选择", "昭阳区", "鲁甸县", "巧家县", "盐津县", "大关县", "永善县", "绥江县", "镇雄县", "彝良县", "威信县", "水富县"],
	    "丽江市": ["请选择", "古城区", "玉龙县", "永胜县", "华坪县", "宁蒗"],
	    "普洱市(*)": ["请选择", "思茅区(*)", "宁洱", "墨江", "景东", "景谷", "镇沅", "江城县", "孟连县", "澜沧县", "西盟"],
	    "临沧市": ["请选择", "临翔区", "凤庆县", "云县", "永德县", "镇康县", "双江县", "耿马", "沧源"],
	    "楚雄": ["请选择", "楚雄市", "双柏县", "牟定县", "南华县", "姚安县", "大姚县", "永仁县", "元谋县", "武定县", "禄丰县"],
	    "红河": ["请选择", "个旧市", "开远市", "蒙自县", "屏边", "建水县", "石屏县", "弥勒县", "泸西县", "元阳县", "红河县", "金平", "绿春县", "河口"],
	    "文山": ["请选择", "文山县", "砚山县", "西畴县", "麻栗坡县", "马关县", "丘北县", "广南县", "富宁县"],
	    "西双版纳": ["请选择", "景洪市", "勐海县", "勐腊县"],
	    "大理": ["请选择", "大理市", "漾濞", "祥云县", "宾川县", "弥渡县", "南涧", "巍山", "永平县", "云龙县", "洱源县", "剑川县", "鹤庆县"],
	    "德宏": ["请选择", "瑞丽市", "潞西市", "梁河县", "盈江县", "陇川县"],
	    "怒江": ["请选择", "泸水县", "福贡县", "贡山", "兰坪"],
	    "迪庆": ["请选择", "香格里拉县", "德钦县", "维西"],
	    "拉萨市": ["请选择", "城关区", "林周县", "当雄县", "尼木县", "曲水县", "堆龙德庆县", "达孜县", "墨竹工卡县"],
	    "昌都地区": ["请选择", "昌都县", "江达县", "贡觉县", "类乌齐县", "丁青县", "察雅县", "八宿县", "左贡县", "芒康县", "洛隆县", "边坝县"],
	    "山南地区": ["请选择", "乃东县", "扎囊县", "贡嘎县", "桑日县", "琼结县", "曲松县", "措美县", "洛扎县", "加查县", "隆子县", "错那县", "浪卡子县"],
	    "日喀则地区": ["请选择", "日喀则市", "南木林县", "江孜县", "定日县", "萨迦县", "拉孜县", "昂仁县", "谢通门县", "白朗县", "仁布县", "康马县", "定结县", "仲巴县", "亚东县", "吉隆县", "聂拉木县", "萨嘎县", "岗巴县"],
	    "那曲地区": ["请选择", "那曲县", "嘉黎县", "比如县", "聂荣县", "安多县", "申扎县", "索县", "班戈县", "巴青县", "尼玛县"],
	    "阿里地区": ["请选择", "普兰县", "札达县", "噶尔县", "日土县", "革吉县", "改则县", "措勤县"],
	    "林芝地区": ["请选择", "林芝县", "工布江达县", "米林县", "墨脱县", "波密县", "察隅县", "朗县"],
	    "西安市": ["请选择", "新城区", "碑林区", "莲湖区", "灞桥区", "未央区", "雁塔区", "阎良区", "临潼区", "长安区", "沣渭新区", "蓝田县", "周至县", "户县", "高陵县"],
	    "铜川市": ["请选择", "王益区", "印台区", "耀州区", "新区", "宜君县"],
	    "宝鸡市": ["请选择", "渭滨区", "金台区", "陈仓区", "凤翔县", "岐山县", "扶风县", "眉县", "陇县", "千阳县", "麟游县", "凤县", "太白县"],
	    "咸阳市": ["请选择", "秦都区", "杨凌区", "渭城区", "三原县", "泾阳县", "乾县", "礼泉县", "永寿县", "彬县", "长武县", "旬邑县", "淳化县", "武功县", "兴平市"],
	    "渭南市": ["请选择", "临渭区", "华县", "潼关县", "大荔县", "合阳县", "澄城县", "蒲城县", "白水县", "富平县", "高新区", "韩城市", "华阴市"],
	    "延安市": ["请选择", "宝塔区", "延长县", "延川县", "子长县", "安塞县", "志丹县", "吴起县", "甘泉县", "富县", "洛川县", "宜川县", "黄龙县", "黄陵县"],
	    "汉中市": ["请选择", "汉台区", "南郑县", "城固县", "洋县", "西乡县", "勉县", "宁强县", "略阳县", "镇巴县", "留坝县", "佛坪县", "经济开发区"],
	    "榆林市": ["请选择", "榆阳区", "神木县", "府谷县", "横山县", "靖边县", "定边县", "绥德县", "米脂县", "佳县", "吴堡县", "清涧县", "子洲县"],
	    "安康市": ["请选择", "汉滨区", "汉阴县", "石泉县", "宁陕县", "紫阳县", "岚皋县", "平利县", "镇坪县", "旬阳县", "白河县"],
	    "商洛市": ["请选择", "商州区", "洛南县", "丹凤县", "商南县", "山阳县", "镇安县", "柞水县"],
	    "杨凌示范区": ["请选择", "杨凌区"],
	    "兰州市": ["请选择", "城关区", "七里河区", "西固区", "安宁区", "红古区", "永登县", "皋兰县", "榆中县"],
	    "金昌市": ["请选择", "金川区", "永昌县"],
	    "白银市": ["请选择", "白银区", "平川区", "靖远县", "会宁县", "景泰县"],
	    "天水市": ["请选择", "秦州区", "麦积区", "清水县", "秦安县", "甘谷县", "武山县", "张家川"],
	    "武威市": ["请选择", "凉州区", "民勤县", "古浪县", "天祝"],
	    "张掖市": ["请选择", "甘州区", "肃南县", "民乐县", "临泽县", "高台县", "山丹县"],
	    "平凉市": ["请选择", "崆峒区", "泾川县", "灵台县", "崇信县", "华亭县", "庄浪县", "静宁县"],
	    "酒泉市": ["请选择", "肃州区", "金塔县", "瓜州县", "肃北", "阿克塞", "玉门市", "敦煌市"],
	    "庆阳市": ["请选择", "西峰区", "庆城县", "环县", "华池县", "合水县", "正宁县", "宁县", "镇原县"],
	    "定西市": ["请选择", "安定区", "通渭县", "陇西县", "渭源县", "临洮县", "漳县", "岷县"],
	    "陇南市": ["请选择", "武都区", "成县", "文县", "宕昌县", "康县", "西和县", "礼县", "徽县", "两当县"],
	    "临夏": ["请选择", "临夏市", "临夏县", "康乐县", "永靖县", "广河县", "和政县", "东乡", "积石山"],
	    "甘南": ["请选择", "合作市", "临潭县", "卓尼县", "舟曲县", "迭部县", "玛曲县", "碌曲县", "夏河县"],
	    "西宁市": ["请选择", "城东区", "城中区", "城西区", "城北区", "大通", "湟中县", "湟源县"],
	    "海东地区": ["请选择", "平安县", "民和", "乐都县", "互助", "化隆", "循化"],
	    "海北": ["请选择", "门源", "祁连县", "海晏县", "刚察县"],
	    "黄南": ["请选择", "同仁县", "尖扎县", "泽库县", "河南"],
	    "海南": ["请选择", "共和县", "同德县", "贵德县", "兴海县", "贵南县"],
	    "果洛": ["请选择", "玛沁县", "班玛县", "甘德县", "达日县", "久治县", "玛多县"],
	    "玉树": ["请选择", "玉树县", "杂多县", "称多县", "治多县", "囊谦县", "曲麻莱县"],
	    "海西": ["请选择", "格尔木市", "德令哈市", "乌兰县", "都兰县", "天峻县"],
	    "银川市": ["请选择", "兴庆区", "西夏区", "金凤区", "永宁县", "贺兰县", "灵武市"],
	    "石嘴山市": ["请选择", "大武口区", "惠农区", "平罗县"],
	    "吴忠市": ["请选择", "利通区", "红寺堡区", "盐池县", "同心县", "青铜峡市"],
	    "固原市": ["请选择", "原州区", "西吉县", "隆德县", "泾源县", "彭阳县"],
	    "中卫市": ["请选择", "沙坡头区", "中宁县", "海原县"],
	    "乌鲁木齐市": ["请选择", "天山区", "沙依巴克区", "新市区", "水磨沟区", "头屯河区", "达坂城区", "米东区(*)", "乌鲁木齐县"],
	    "克拉玛依市": ["请选择", "独山子区", "克拉玛依区", "白碱滩区", "乌尔禾区"],
	    "吐鲁番地区": ["请选择", "吐鲁番市", "鄯善县", "托克逊县"],
	    "哈密地区": ["请选择", "哈密市", "巴里坤", "伊吾县"],
	    "昌吉": ["请选择", "昌吉市", "阜康市", "呼图壁县", "玛纳斯县", "奇台县", "吉木萨尔县", "木垒哈萨克"],
	    "博尔塔拉": ["请选择", "博乐市", "精河县", "温泉县"],
	    "巴音郭楞": ["请选择", "库尔勒市", "轮台县", "尉犁县", "若羌县", "且末县", "焉耆", "和静县", "和硕县", "博湖县"],
	    "阿克苏地区": ["请选择", "阿克苏市", "温宿县", "库车县", "沙雅县", "新和县", "拜城县", "乌什县", "阿瓦提县", "柯坪县"],
	    "克孜勒": ["请选择", "阿图什市", "阿克陶县", "阿合奇县", "乌恰县"],
	    "喀什地区": ["请选择", "喀什市", "疏附县", "疏勒县", "英吉沙县", "泽普县", "莎车县", "叶城县", "麦盖提县", "岳普湖县", "伽师县", "巴楚县", "塔什"],
	    "和田地区": ["请选择", "和田市", "和田县", "墨玉县", "皮山县", "洛浦县", "策勒县", "于田县", "民丰县"],
	    "伊犁": ["请选择", "伊宁市", "奎屯市", "伊宁县", "察布查尔锡伯", "霍城县", "巩留县", "新源县", "昭苏县", "特克斯县", "尼勒克县"],
	    "塔城地区": ["请选择", "塔城市", "乌苏市", "额敏县", "沙湾县", "托里县", "裕民县", "和布克赛尔"],
	    "阿勒泰地区": ["请选择", "阿勒泰市", "布尔津县", "富蕴县", "福海县", "哈巴河县", "青河县", "吉木乃县"],
	    "自治区直辖县级行政单位": ["请选择", "石河子市", "阿拉尔市", "图木舒克市", "五家渠市"]
	};

	Chinesecity.province = province;
	Chinesecity.city = city;
	Chinesecity.area = area;

	exports.default = Chinesecity;
	exports.Chinesecity = Chinesecity;

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "\n<picker :data.sync=\"citytable.slot\" :default=\"citytable.default\" :response.sync=\"citytable.response\" :success=\"citytable.success\" :style-class=\"styleClass\"></picker>\n";

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(140)
	__vue_script__ = __webpack_require__(142)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\CssComponentes\\header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(143)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5ee3ee93/header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./header.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".Jui-header {\n  padding: 0 10px;\n  background-color: #419EFE;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 16px;\n  color: #fff;\n  height: 44px;\n  line-height: 44px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box; }\n  .Jui-header .Jui-header-left {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: left;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .Jui-header .Jui-header-left .Jui-arrow-left {\n      background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOUU5NTdBMTY4NDYxMUU2QjlBN0IzMDUxQzE0MzlCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOUU5NTdBMjY4NDYxMUU2QjlBN0IzMDUxQzE0MzlCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM5RTk1NzlGNjg0NjExRTZCOUE3QjMwNTFDMTQzOUJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM5RTk1N0EwNjg0NjExRTZCOUE3QjMwNTFDMTQzOUJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LCOx1wAAAP5JREFUeNrs1j0OAUEYxnGrITpBsXEAGyegQ0lBKH30buMKKgcgCjqJ1h1EQoRNfHQU45HsG5PNmv3I25CZ5Fft5J/d2Z3JGkKIGOeIx5iHDurgrwULkOEKlmABYzCVM9972UcFduIzRqr5frEa7KXYBqyowTqcpdga8n5P9O1CE2wptgIzwPJ4BttwkWJLyAaJeQW7cJdic0gHjbmDfVdsFjZGwQQM4eGEnjCBVNgYBYtwk+7sCLkoMQomue+QDFxrOI26hrIe51smHbhyfYekxblTSINzL8unzYHrtCFVzvOQlGHrbEflWhoh/r4sOIGtmmTo3zkd/MfgS4ABAG+sh5ILSHqlAAAAAElFTkSuQmCC\") no-repeat center center;\n      width: 44px;\n      height: 44px;\n      margin-left: -10px; }\n  .Jui-header .Jui-header-right {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: right;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .Jui-header .Jui-header-title {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .Jui-header.Jui-header-fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10;\n    width: 100%; }\n", ""]);

	// exports


/***/ },
/* 142 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<header :class="{'Jui-header':true,'Jui-header-fixed':fixed}" :style="{'backgroundColor':color}">
	// 		<div class="Jui-header-left">
	// 			<div class="Jui-arrow-left" @click="goback" v-if="back"></div>
	// 			<slot name="left"></slot>
	// 		</div>
	// 		<div class="Jui-header-title">{{title}}</div>
	// 		<div class="Jui-header-right">
	// 			<slot name="right"></slot>
	// 		</div>
	// 	</header>
	// </template>
	// <style lang="sass">
	// 	.Jui-header{
	// 		padding:0 10px;
	// 		background-color:#419EFE;
	// 		display:flex;
	// 		font-size:16px;
	// 		color:#fff;
	// 		height: 44px;
	//    		line-height:44px;
	//    		box-sizing: border-box;
	//    		-webkit-box-sizing: border-box;
	// 		.Jui-header-left{
	// 			flex:1;
	// 			text-align: left;
	// 			display: flex;
	// 			.Jui-arrow-left{
	// 				background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOUU5NTdBMTY4NDYxMUU2QjlBN0IzMDUxQzE0MzlCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOUU5NTdBMjY4NDYxMUU2QjlBN0IzMDUxQzE0MzlCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM5RTk1NzlGNjg0NjExRTZCOUE3QjMwNTFDMTQzOUJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM5RTk1N0EwNjg0NjExRTZCOUE3QjMwNTFDMTQzOUJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LCOx1wAAAP5JREFUeNrs1j0OAUEYxnGrITpBsXEAGyegQ0lBKH30buMKKgcgCjqJ1h1EQoRNfHQU45HsG5PNmv3I25CZ5Fft5J/d2Z3JGkKIGOeIx5iHDurgrwULkOEKlmABYzCVM9972UcFduIzRqr5frEa7KXYBqyowTqcpdga8n5P9O1CE2wptgIzwPJ4BttwkWJLyAaJeQW7cJdic0gHjbmDfVdsFjZGwQQM4eGEnjCBVNgYBYtwk+7sCLkoMQomue+QDFxrOI26hrIe51smHbhyfYekxblTSINzL8unzYHrtCFVzvOQlGHrbEflWhoh/r4sOIGtmmTo3zkd/MfgS4ABAG+sh5ILSHqlAAAAAElFTkSuQmCC") no-repeat center center;
	// 			    width:44px;
	// 			    height:44px;
	// 			    margin-left:-10px;
	// 			}
	// 		}
	// 		.Jui-header-right{
	// 			flex:1;
	// 			text-align: right;
	// 			display: flex;
	// 			justify-content:flex-end;
	// 		}
	// 		.Jui-header-title{
	// 			flex:2;
	// 			text-align:center;
	// 			white-space: nowrap;
	// 			overflow: hidden;
	// 			text-overflow: ellipsis;
	// 		}
	// 		&.Jui-header-fixed{
	// 			position: fixed;
	// 			top:0;
	// 			left:0;
	// 			z-index:10;
	// 			width:100%;
	// 		}
	// 	}
	// </style>
	// <script>
	exports.default = {
		name: 'jui-header',
		props: {
			fixed: Boolean,
			title: String,
			color: String,
			back: Boolean
		},
		methods: {
			goback: function goback() {
				window.history.go(-1);
			}
		}
	};

	// </script>

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "\n<header :class=\"{'Jui-header':true,'Jui-header-fixed':fixed}\" :style=\"{'backgroundColor':color}\">\n\t<div class=\"Jui-header-left\">\n\t\t<div class=\"Jui-arrow-left\" @click=\"goback\" v-if=\"back\"></div>\n\t\t<slot name=\"left\"></slot>\n\t</div>\n\t<div class=\"Jui-header-title\">{{title}}</div>\n\t<div class=\"Jui-header-right\">\n\t\t<slot name=\"right\"></slot>\n\t</div>\n</header>\n";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(145)
	__vue_script__ = __webpack_require__(147)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\CssComponentes\\checklist.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(148)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-fac2aae0/checklist.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(146);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./checklist.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./checklist.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".Jui-checklist .Jui-cell {\n  padding: 0; }\n\n.Jui-checklist .Jui-cell-title {\n  padding: 16px 10px; }\n\n.Jui-checklist-core {\n  border: none;\n  -webkit-appearance: none;\n  background: none;\n  outline: 0; }\n\n.Jui-checklist-core {\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  background-color: #fff;\n  margin-right: 5px;\n  border: 1px solid #ccc;\n  position: relative; }\n\n.Jui-checklist-limit .Jui-checklist-core:checked, .Jui-checklist-core:checked {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MkQ3MjUxMjZCNUUxMUU2QTIzQkU1Q0MzODE1QTQzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MkQ3MjUxMzZCNUUxMUU2QTIzQkU1Q0MzODE1QTQzRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkyRDcyNTEwNkI1RTExRTZBMjNCRTVDQzM4MTVBNDNEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkyRDcyNTExNkI1RTExRTZBMjNCRTVDQzM4MTVBNDNEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wc/+ggAAAUNJREFUeNpi/P//P8NgBkwMgxyMOnDUgaMOHHXgqANHHTj0HJgOxFeA2J4o1aDGAh1xOhD/+w8BV4jRQ88QTAbi6UDMCOXPG0whmADEf/8jQC2xeunhuFgg/oPkuAZS9NPacRFojmsh1QxiFfIBcTkQK5NgeCia4zrJ8SSxCrdCLXkCxCpEqA8C4l9IjusjNxZIdSAIPAZiJTxq/YH4J5L6CZQkE2IV8gPxKSRLHwKxAhZ1XmiOmwLEjPRwIAgLAPFZJMvvAbEskrwHmuNmUuo4cnKxEBCfR3LEHSCWAWI3IP6GJD6HGo4jt5gRBeKLSI65D8RfkfjzgZiJWkUVuRpFoXUpOlgExMzULEsp0SwOxNeQHLec2o4DYUYKhz4kgXglEN+CNqP+UruFwTg6NjPqwFEHjjpw1IGjDhx14IACgAADABN7amALQa/nAAAAAElFTkSuQmCC\") no-repeat center center;\n  background-size: 20px 20px;\n  background-color: #26a2ff;\n  border-color: #26a2ff; }\n\n.Jui-checklist-limit .Jui-checklist-core {\n  background-color: #d9d9d9;\n  border-color: #ccc; }\n", ""]);

	// exports


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _cell = __webpack_require__(117);

	var _cell2 = _interopRequireDefault(_cell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		name: 'jui-checklist',
		props: {
			options: {
				type: Array,
				required: true
			},
			title: String,
			value: Array,
			max: Number
		},
		components: {
			juiCell: _cell2.default
		},
		computed: {
			limit: function limit() {
				return this.max < this.value.length;
			}
		},
		watch: {
			value: function value() {
				if (this.limit) {
					this.value.pop();
				}
			}
		}
	};

	// </script>
	// <template>
	// 	<div :class="{'Jui-checklist':true,'Jui-checklist-limit':this.max == this.value.length}">
	// 		<jui-cell v-for="option in options" :title="option.label||option.value||option">
	// 			<input type="checkbox" slot="icon" class="Jui-checklist-core" :value="option.value||option" :disabled="option.disabled" v-model="value">
	// 		</jui-cell>
	// 	</div>
	// </template>
	// <style lang="sass">
	// 	.Jui-checklist .Jui-cell{
	// 		padding: 0;
	// 	}
	// 	.Jui-checklist .Jui-cell-title{
	// 		padding: 16px 10px;
	// 	}
	// 	.Jui-checklist-core{
	// 		border: none;
	// 	    -webkit-appearance: none;
	// 	    background: none;
	// 	    outline: 0;
	// 	}
	// 	.Jui-checklist-core{
	// 		width:20px;
	// 		height:20px;
	// 		border-radius: 20px;
	// 		background-color:#fff;
	// 		margin-right:5px;
	// 		border:1px solid #ccc;
	// 		position: relative;
	// 	}
	// 	.Jui-checklist-limit .Jui-checklist-core:checked,.Jui-checklist-core:checked {
	// 		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MkQ3MjUxMjZCNUUxMUU2QTIzQkU1Q0MzODE1QTQzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MkQ3MjUxMzZCNUUxMUU2QTIzQkU1Q0MzODE1QTQzRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkyRDcyNTEwNkI1RTExRTZBMjNCRTVDQzM4MTVBNDNEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkyRDcyNTExNkI1RTExRTZBMjNCRTVDQzM4MTVBNDNEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wc/+ggAAAUNJREFUeNpi/P//P8NgBkwMgxyMOnDUgaMOHHXgqANHHTj0HJgOxFeA2J4o1aDGAh1xOhD/+w8BV4jRQ88QTAbi6UDMCOXPG0whmADEf/8jQC2xeunhuFgg/oPkuAZS9NPacRFojmsh1QxiFfIBcTkQK5NgeCia4zrJ8SSxCrdCLXkCxCpEqA8C4l9IjusjNxZIdSAIPAZiJTxq/YH4J5L6CZQkE2IV8gPxKSRLHwKxAhZ1XmiOmwLEjPRwIAgLAPFZJMvvAbEskrwHmuNmUuo4cnKxEBCfR3LEHSCWAWI3IP6GJD6HGo4jt5gRBeKLSI65D8RfkfjzgZiJWkUVuRpFoXUpOlgExMzULEsp0SwOxNeQHLec2o4DYUYKhz4kgXglEN+CNqP+UruFwTg6NjPqwFEHjjpw1IGjDhx14IACgAADABN7amALQa/nAAAAAElFTkSuQmCC") no-repeat center center;
	// 		background-size:20px 20px;
	//     	background-color: #26a2ff;
	//     	border-color: #26a2ff;
	// 	}
	// 	.Jui-checklist-limit .Jui-checklist-core{
	// 		background-color: #d9d9d9;
	//     	border-color: #ccc;
	// 	}
	// </style>
	// <script>

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"{'Jui-checklist':true,'Jui-checklist-limit':this.max == this.value.length}\">\n\t<jui-cell v-for=\"option in options\" :title=\"option.label||option.value||option\">\n\t\t<input type=\"checkbox\" slot=\"icon\" class=\"Jui-checklist-core\" :value=\"option.value||option\" :disabled=\"option.disabled\" v-model=\"value\">\n\t</jui-cell>\n</div>\n";

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(150)
	__vue_script__ = __webpack_require__(152)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\CssComponentes\\radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(153)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-51c03365/radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(151);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./radio.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".Jui-radiolist .Jui-cell {\n  padding: 0; }\n\n.Jui-radiolist .Jui-cell-title {\n  padding: 16px 10px; }\n\n.Jui-radio-core {\n  border: none;\n  -webkit-appearance: none;\n  background: none;\n  outline: 0; }\n\n.Jui-radio-core {\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  background-color: #fff;\n  margin-right: 5px;\n  border: 1px solid #ccc;\n  position: relative; }\n\n.Jui-radio-core:after {\n  content: ' ';\n  width: 8px;\n  height: 8px;\n  border-radius: 10px;\n  position: absolute;\n  top: 5px;\n  left: 5px; }\n\n.Jui-radio-core:checked {\n  background-color: #26a2ff;\n  border-color: #26a2ff; }\n\n.Jui-radio-core:checked:after {\n  background-color: #fff; }\n\n.Jui-radio-core:disabled {\n  background-color: #d9d9d9;\n  border-color: #ccc; }\n", ""]);

	// exports


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _cell = __webpack_require__(117);

	var _cell2 = _interopRequireDefault(_cell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		name: 'jui-radio',
		props: {
			options: {
				type: Array,
				required: true
			},
			title: String,
			value: String
		},
		components: {
			juiCell: _cell2.default
		}
	};

	// </script>
	// <template>
	// 	<div class="Jui-radiolist">
	// 		<jui-cell v-for="option in options" :title="option.label||option.value||option">
	// 			<input type="radio" slot="icon" class="Jui-radio-core" :value="option.value||option" :disabled="option.disabled" v-model="value">
	// 		</jui-cell>
	// 	</div>
	// </template>
	// <style lang="sass">
	// 	.Jui-radiolist .Jui-cell{
	// 		padding: 0;
	// 	}
	// 	.Jui-radiolist .Jui-cell-title{
	// 		padding: 16px 10px;
	// 	}
	// 	.Jui-radio-core{
	// 		border: none;
	// 	    -webkit-appearance: none;
	// 	    background: none;
	// 	    outline: 0;
	// 	}
	// 	.Jui-radio-core{
	// 		width:20px;
	// 		height:20px;
	// 		border-radius: 20px;
	// 		background-color:#fff;
	// 		margin-right:5px;
	// 		border:1px solid #ccc;
	// 		position: relative;
	// 	}
	// 	.Jui-radio-core:after{
	// 		content:'\20';
	// 		width: 8px;
	// 		height:8px;
	// 		border-radius: 10px;
	// 		position: absolute;
	// 		top:5px;
	// 		left:5px;
	// 	}
	// 	.Jui-radio-core:checked {
	//     	background-color: #26a2ff;
	//     	border-color: #26a2ff;
	// 	}
	// 	.Jui-radio-core:checked:after{
	// 		background-color:#fff;
	// 	}
	// 	.Jui-radio-core:disabled{
	// 		background-color: #d9d9d9;
	//     	border-color: #ccc;
	// 	}
	// </style>
	// <script>

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Jui-radiolist\">\n\t<jui-cell v-for=\"option in options\" :title=\"option.label||option.value||option\">\n\t\t<input type=\"radio\" slot=\"icon\" class=\"Jui-radio-core\" :value=\"option.value||option\" :disabled=\"option.disabled\" v-model=\"value\">\n\t</jui-cell>\n</div>\n";

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(155)
	__vue_template__ = __webpack_require__(157)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-711e3c04/app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(156);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\r\ndl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td,body,button{\r\n\tmargin:0;\r\n\tpadding:0}\r\nbutton,input,textarea{\r\n\tborder:none;\r\n\t-webkit-appearance: none;\r\n\tbackground:none;\r\n\t}\r\n\t\r\n", ""]);

	// exports


/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports = "\n\r\n<div>\r\n      <router-view></router-view>\r\n</div>    \r\n";

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(159)
	__vue_script__ = __webpack_require__(161)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\indexView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(162)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6cb8713a/indexView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(160);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./indexView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./indexView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".page-home {\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n  .page-home .page-home-header {\n    background-color: #419EFE;\n    margin-bottom: 20px; }\n    .page-home .page-home-header img {\n      display: block;\n      margin: auto;\n      width: 66%; }\n    .page-home .page-home-header .page-home-title {\n      text-align: center;\n      color: #fff;\n      line-height: 40px; }\n", ""]);

	// exports


/***/ },
/* 161 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <template>
	//       <div class="page-home">
	//       <div class="page-home-header">
	//         <img src="../temp/images/logo.png">
	//         <div class="page-home-title">Vue常用组件&nbsp; V1.0.0</div>
	//       </div> 
	//       <jui-grids :options="options" :cols="3" border></jui-grids>
	//       </div>
	// </template>
	// <style lang="sass">
	// .page-home{
	//   width: 100%;
	//   height: 100%;
	//   overflow: auto;
	//   .page-home-header{
	//     background-color: #419EFE;
	//     margin-bottom:20px;
	//     img{
	//       display: block;
	//       margin: auto;
	//       width: 66%;
	//     }
	//     .page-home-title{
	//       text-align: center;
	//       color: #fff;
	//       line-height: 40px;
	//     }
	//   }
	// }
	//
	// </style>
	// <script>
	//es6
	exports.default = {
	    //data:function(){}，下面是es6写法

	    data: function data() {
	        return {
	            options: [{ title: 'layer', link: '#/layer', image: './example/temp/images/layer.png' }, { title: 'toast', link: '#/toast', image: './example/temp/images/toast.png' }, { title: 'swipe', link: '#/swipe', image: './example/temp/images/swipe.png' }, { title: 'search', link: '#/search', image: './example/temp/images/search.png' }, { title: 'actionSheet', link: '#/actionSheet', image: './example/temp/images/actionSheet.png' }, { title: 'picker', link: '#/picker', image: './example/temp/images/picker.png' }, { title: 'header', link: '#/header', image: './example/temp/images/header.png' }, { title: 'cell', link: '#/cell', image: './example/temp/images/cell.png' }, { title: 'grids', link: '#/grids', image: './example/temp/images/grids.png' }, { title: 'switch', link: '#/switch', image: './example/temp/images/switch.png' }, { title: 'radio', link: '#/radio', image: './example/temp/images/radio.png' }, { title: 'checklist', link: '#/checklist', image: './example/temp/images/checklist.png' }]
	        };
	    }
	};
	// </script>

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\n<div class=\"page-home\">\n<div class=\"page-home-header\">\n  <img src=\"" + __webpack_require__(163) + "\">\n  <div class=\"page-home-title\">Vue常用组件&nbsp; V1.0.0</div>\n</div> \n<jui-grids :options=\"options\" :cols=\"3\" border></jui-grids>\n</div>\n";

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./example/temp/images/logo.png";

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(165)
	__vue_script__ = __webpack_require__(167)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\layerView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(168)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-dd37a28e/layerView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(166);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./layerView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./layerView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".page-layer {\n  padding-top: 10px; }\n  .page-layer .list {\n    padding: 10px;\n    background-color: #fff;\n    color: #323232; }\n    .page-layer .list a {\n      display: block;\n      line-height: 40px;\n      text-align: center;\n      border: 1px solid #ccc;\n      margin-bottom: 10px;\n      background-color: #f1f1f1;\n      border-radius: 4px; }\n", ""]);

	// exports


/***/ },
/* 167 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	// <template>
	//   <jui-header title="layer" back></jui-header>
	//   <div class="page-layer">
	//     <nav class="list">
	//         <a v-for="item in list" @click="layerFn($index)">{{item.title}}</a>
	//     </nav>
	//   </div>      
	// </template>
	// <style lang="sass">
	//  .page-layer{
	//     padding-top:10px;
	//      .list{
	//         padding:10px;
	//         background-color:#fff;
	//         color:#323232;
	//     a{
	//         display: block;
	//         line-height:40px;
	//         text-align: center;
	//         border:1px solid #ccc;
	//         margin-bottom: 10px;
	//         background-color:#f1f1f1;
	//         border-radius: 4px;
	//     } 
	//   }
	// }  
	// </style>
	// <script>
	//es6
	exports.default = {
	  data: function data() {
	    return {
	      list: [{ title: 'message' }, { title: 'alert' }, { title: 'loading' }, { title: 'confirm' }]
	    };
	  },

	  methods: {
	    layerFn: function layerFn(index) {
	      switch (index) {
	        case 0:
	          this.$layer("我的天哪，好帅的作者!");
	          break;
	        case 1:
	          this.$layer.alert('这是一个美丽妖娆的弹窗,你觉得呢？', function () {
	            console.log("这是确认之后的回调函数");
	          });
	          break;
	        case 2:
	          this.$layer.loading(1, 2000);
	          break;
	        case 3:
	          this.$layer.confirm("这是一个美丽的弹窗<br>你觉得呢？", function () {
	            this.$layer("这是确认之后的回调函数!");
	          }, function () {
	            this.$layer("这是取消之后的回调函数!");
	          });
	          break;
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "\n\n<jui-header title=\"layer\" back></jui-header>\n<div class=\"page-layer\">\n  <nav class=\"list\">\n      <a v-for=\"item in list\" @click=\"layerFn($index)\">{{item.title}}</a>\n  </nav>\n</div>      \n";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(170)
	__vue_script__ = __webpack_require__(172)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\swipeView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(173)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-69a09fa2/swipeView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(171);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swipeView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swipeView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".page-swipe {\n  padding-top: 10px; }\n  .page-swipe .list {\n    padding: 10px;\n    background-color: #fff;\n    color: #323232; }\n    .page-swipe .list a {\n      display: block;\n      line-height: 40px;\n      text-align: center;\n      border: 1px solid #ccc;\n      margin-bottom: 10px;\n      background-color: #f1f1f1;\n      border-radius: 4px; }\n      .page-swipe .list a.active {\n        background-color: #419EFE;\n        color: #fff; }\n", ""]);

	// exports


/***/ },
/* 172 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <template>
	//     <jui-header title="swipe" back></jui-header>
	//     <div class="page-swipe">
	//     <jui-swipe :swipeitem="swipeitem" :shuffling="shuffling" :pagination="pagination"></jui-swipe>
	//         <nav class="list">
	//             <a v-for="item in list" @click.prevent="_swipe($index)" :class="{active:act==$index}">{{item.title}}</a>
	//         </nav>
	//     </div>
	// </template>
	// <style lang="sass">
	//  .page-swipe{
	//     padding-top:10px;
	//      .list{
	//         padding:10px;
	//         background-color:#fff;
	//         color:#323232;
	//     a{
	//         display: block;
	//         line-height:40px;
	//         text-align: center;
	//         border:1px solid #ccc;
	//         margin-bottom: 10px;
	//         background-color:#f1f1f1;
	//         border-radius: 4px;
	//         &.active{
	//             background-color:#419EFE;
	//             color:#fff;
	//             }
	//         }
	//     } 
	// }  
	// </style>
	// <script>
	//es6
	exports.default = {
	    data: function data() {
	        return {
	            act: 0,
	            list: [{ title: '默认值' }, { title: '自动播放' }, { title: '分页符' }, { title: '自动播放显示分页符' }],
	            swipeitem: [{ image: 'example/temp/images/swipe_00.jpg', link: 'https://www.baidu.com/' }, { image: 'example/temp/images/swipe_01.jpg', link: 'https://www.baidu.com/' }, { image: 'example/temp/images/swipe_02.jpg', link: 'https://www.baidu.com/' }],
	            shuffling: false,
	            pagination: false
	        };
	    },

	    methods: {
	        _swipe: function _swipe(index) {
	            this.act = index;
	            switch (index) {
	                case 0:
	                    this.shuffling = false;
	                    this.pagination = false;
	                    break;
	                case 1:
	                    this.shuffling = true;
	                    this.pagination = false;
	                    break;
	                case 2:
	                    this.shuffling = false;
	                    this.pagination = true;
	                    break;
	                case 3:
	                    this.shuffling = true;
	                    this.pagination = true;
	                    break;
	                default:
	                    break;
	            }
	        }
	    }
	};

	// </script>

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "\n\n<jui-header title=\"swipe\" back></jui-header>\n<div class=\"page-swipe\">\n<jui-swipe :swipeitem=\"swipeitem\" :shuffling=\"shuffling\" :pagination=\"pagination\"></jui-swipe>\n    <nav class=\"list\">\n        <a v-for=\"item in list\" @click.prevent=\"_swipe($index)\" :class=\"{active:act==$index}\">{{item.title}}</a>\n    </nav>\n</div>\n";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(175)
	__vue_script__ = __webpack_require__(177)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\toastView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(178)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-004fb98f/toastView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(176);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./toastView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./toastView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".page-toast {\n  padding-top: 10px; }\n  .page-toast .list {\n    padding: 10px;\n    background-color: #fff;\n    color: #323232; }\n    .page-toast .list a {\n      display: block;\n      line-height: 40px;\n      text-align: center;\n      border: 1px solid #ccc;\n      margin-bottom: 10px;\n      background-color: #f1f1f1;\n      border-radius: 4px; }\n", ""]);

	// exports


/***/ },
/* 177 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <template>
	//     <jui-header title="toast" back></jui-header>
	//     <div class="page-toast">
	//         <nav class="list">
	//         <a v-for="item in list" @click.prevent="Prompt($index)">{{item.title}}</a>
	//         </nav>
	//         <nav class="list">
	//         <a v-for="item in position" @click.prevent="PromptP($index)">{{item}}</a>
	//         </nav>
	//     </div>
	// </template>
	// <style lang="sass">
	//  .page-toast{
	//     padding-top:10px;
	//      .list{
	//         padding:10px;
	//         background-color:#fff;
	//         color:#323232;
	//     a{
	//         display: block;
	//         line-height:40px;
	//         text-align: center;
	//         border:1px solid #ccc;
	//         margin-bottom: 10px;
	//         background-color:#f1f1f1;
	//         border-radius: 4px;
	//         } 
	//     }
	// }    
	// </style>
	// <script>
	//es6
	exports.default = {
	    data: function data() {
	        return {
	            list: [{ title: '文字提示' }, { title: '图文提示' }, { title: '图片提示' }],
	            position: ["top", "center", "bottom"]
	        };
	    },

	    components: {},
	    methods: {
	        Prompt: function Prompt(index) {
	            switch (index) {
	                case 0:
	                    this.$toast("哈哈哈");
	                    break;
	                case 1:
	                    this.$toast({
	                        message: "回答正确",
	                        type: 1,
	                        imgSrc: 'example/temp/images/true.png'
	                    });
	                    break;
	                case 2:
	                    this.$toast.closeAll();
	                    this.$toast({
	                        type: 2,
	                        imgSrc: 'example/temp/images/loading.gif',
	                        time: 1000
	                    });
	                    break;
	                default:
	                    break;
	            }
	        },
	        PromptP: function PromptP(index) {
	            switch (index) {
	                case 0:
	                    this.$toast({
	                        message: "信息文本",
	                        type: 0,
	                        time: 1000,
	                        position: 'top'
	                    });
	                    break;
	                case 1:
	                    this.$toast({
	                        message: "信息文本",
	                        type: 0,
	                        time: 1000,
	                        position: 'center'
	                    });
	                    break;
	                case 2:
	                    this.$toast({
	                        message: "信息文本",
	                        type: 0,
	                        time: 1000,
	                        position: 'bottom'
	                    });
	                    break;
	                default:
	                    break;
	            }
	        }
	    }
	};

	// </script>

/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports = "\n\n<jui-header title=\"toast\" back></jui-header>\n<div class=\"page-toast\">\n    <nav class=\"list\">\n    <a v-for=\"item in list\" @click.prevent=\"Prompt($index)\">{{item.title}}</a>\n    </nav>\n    <nav class=\"list\">\n    <a v-for=\"item in position\" @click.prevent=\"PromptP($index)\">{{item}}</a>\n    </nav>\n</div>\n";

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(180)
	__vue_script__ = __webpack_require__(182)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\actionsheetView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(183)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ebcd03de/actionsheetView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(181);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./actionsheetView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./actionsheetView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".page-actionsheet {\n  padding: 10px; }\n\n.select {\n  border: 1px solid #ccc;\n  background-color: #419EFE;\n  border-radius: 4px;\n  text-align: center;\n  line-height: 40px;\n  height: 40px;\n  font-size: 14px;\n  color: #fff;\n  margin: 10px 0; }\n", ""]);

	// exports


/***/ },
/* 182 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <template>
	//         <jui-header title="actionsheet" back></jui-header>
	//         <div class="page-actionsheet">
	//         <jui-actionsheet :type="0" :data="selectOne"></jui-actionsheet>
	//         <jui-actionsheet :type="1" :data="selectTwo" style-class="select"></jui-actionsheet>
	//         <jui-actionsheet :type="1" :data="selectThr"></jui-actionsheet>
	//         <jui-actionsheet :type="0" :data="selectFou" style-class="select"></jui-actionsheet>
	//         </div>
	// </template>
	// <style lang="sass">
	// .page-actionsheet{
	//     padding:10px;
	// }
	// .select{
	//     border:1px solid #ccc;
	//     background-color:#419EFE;
	//     border-radius:4px;
	//     text-align: center;
	//     line-height:40px;
	//     height:40px;
	//     font-size:14px;
	//     color:#fff;
	//     margin:10px 0;
	// }  
	// </style>
	// <script>
	//es6
	exports.default = {
	    data: function data() {
	        return {
	            selectOne: {
	                choice: {
	                    key: "有取消的选择框",
	                    val: "none"
	                },
	                selectList: [{ key: "选项一", val: "1" }, { key: "选项二", val: "2" }, { key: "选项三", val: "3" }, { key: "选项四", val: "4" }]
	            },
	            selectTwo: {
	                choice: {
	                    key: "有取消的选择框",
	                    val: "none"
	                },
	                selectList: [{ key: "上天", val: "1", callback: function callback() {
	                        alert("你上天了");
	                    } }, { key: "入地", val: "2", callback: function callback() {
	                        alert("你入地了");
	                    } }]
	            },
	            selectThr: {
	                choice: {
	                    key: "无取消的选择框",
	                    val: "none"
	                },
	                selectList: [{ key: "寂寞的选项一", val: "1" }, { key: "闷骚的选项二", val: "2" }],
	                close: false
	            },
	            selectFou: {
	                choice: {
	                    key: "自定义样式",
	                    val: "none"
	                },
	                selectList: [{ key: "寂寞的选项一", val: "1" }, { key: "闷骚的选项二", val: "2" }],
	                styleClass: "select"
	            }
	        };
	    }
	};

	// </script>

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = "\n\n<jui-header title=\"actionsheet\" back></jui-header>\n<div class=\"page-actionsheet\">\n<jui-actionsheet :type=\"0\" :data=\"selectOne\"></jui-actionsheet>\n<jui-actionsheet :type=\"1\" :data=\"selectTwo\" style-class=\"select\"></jui-actionsheet>\n<jui-actionsheet :type=\"1\" :data=\"selectThr\"></jui-actionsheet>\n<jui-actionsheet :type=\"0\" :data=\"selectFou\" style-class=\"select\"></jui-actionsheet>\n</div>\n";

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(185)
	__vue_script__ = __webpack_require__(187)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\pickerView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(188)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3d99bf40/pickerView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(186);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pickerView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pickerView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".page-picker {\n  padding: 10px; }\n\n.blueSelect {\n  border: 1px solid #ccc;\n  background-color: #419EFE;\n  border-radius: 4px;\n  text-align: center;\n  line-height: 40px;\n  height: 40px;\n  font-size: 14px;\n  color: #fff;\n  margin: 10px 0; }\n", ""]);

	// exports


/***/ },
/* 187 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	// <template>
	//       <jui-header title="picker" back></jui-header>
	//       <div class="page-picker">
	//       <jui-picker-date :datevalues.sync="datevalues"></jui-picker-date>
	//       <jui-picker-city style-class="blueSelect" :cityvalues.sync="cityvalues"></jui-picker-city> 
	//       <jui-picker :data.sync="selectDate.slot" :default="selectDate.default" :response.sync="selectDate.response"></jui-picker> 
	//       <jui-picker style-class="blueSelect" :data.sync="selectDate.slot" :default="selectDate.default" :response.sync="selectDate.response"></jui-picker>
	//       </div> 
	// </template>
	// <style lang="sass">
	// .page-picker{
	//   padding:10px;
	// }
	// .blueSelect{
	//     border:1px solid #ccc;
	//     background-color:#419EFE;
	//     border-radius:4px;
	//     text-align: center;
	//     line-height:40px;
	//     height:40px;
	//     font-size:14px;
	//     color:#fff;
	//     margin:10px 0;
	// }
	// </style>
	// <script>
	//es6
	exports.default = {
	  //data:function(){}，下面是es6写法

	  data: function data() {
	    return {
	      datevalues: {
	        data: {
	          values: [],
	          value: ''
	        },
	        default: '选择日期'
	      },
	      cityvalues: {
	        data: {
	          values: [],
	          value: ''
	        },
	        default: '城市选择'
	      },
	      selectDate: {
	        slot: {
	          '0': {
	            values: ['美丽的选项一', '美丽的选项二', '淫荡的选项三', '机制的选项四'],
	            value: '美丽的选项一'
	          },
	          length: 1
	        },
	        default: '选择题',
	        response: ''
	      }
	    };
	  }
	};
	// </script>

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = "\n\n<jui-header title=\"picker\" back></jui-header>\n<div class=\"page-picker\">\n<jui-picker-date :datevalues.sync=\"datevalues\"></jui-picker-date>\n<jui-picker-city style-class=\"blueSelect\" :cityvalues.sync=\"cityvalues\"></jui-picker-city> \n<jui-picker :data.sync=\"selectDate.slot\" :default=\"selectDate.default\" :response.sync=\"selectDate.response\"></jui-picker> \n<jui-picker style-class=\"blueSelect\" :data.sync=\"selectDate.slot\" :default=\"selectDate.default\" :response.sync=\"selectDate.response\"></jui-picker>\n</div> \n";

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(190)
	__vue_script__ = __webpack_require__(192)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\searchView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(193)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-78c5625a/searchView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(191);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./searchView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./searchView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".page-serch {\n  padding: 10px 0; }\n  .page-serch .search {\n    padding: 10px;\n    background-color: #419EFE;\n    margin-bottom: 20px; }\n    .page-serch .search .input {\n      background-color: #fff;\n      line-height: 30px;\n      height: 30px;\n      border-radius: 4px;\n      position: relative; }\n      .page-serch .search .input .btn {\n        width: 30px;\n        height: 30px;\n        position: absolute;\n        right: 0;\n        top: 0;\n        background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRDA3OEQzMDY1MTExMUU2OUNDRUVFMzFEOEUwMTE1MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRDA3OEQzMTY1MTExMUU2OUNDRUVFMzFEOEUwMTE1MiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJEMDc4RDJFNjUxMTExRTY5Q0NFRUUzMUQ4RTAxMTUyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJEMDc4RDJGNjUxMTExRTY5Q0NFRUUzMUQ4RTAxMTUyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EBCwsgAAA7RJREFUeNrsml1IFUEUx69fGfpg3xpJKKWYoJUPhQgWZhD0WGBQUGoUUlRQBBX0ki8F9pD1EBQlRURR9GUhSlGQZJqmFBRYPWRmmlmEZWre/gfOwmWYve7u3bsfOQd+6IzOnv3vzJ6dc3ZjgrDAFLLYwBQzJVgJVoKVYCVYCVaClWDHLD6CsbQlbQF3QSt4A4bAMJgLMkEhKAHrQIIXBMdY2EuPg4ughkUasVSwHRwAM/wk+CWoAB0W/dHM14IyP9zDdbxEOyLwNwA2gX3gr5dn+Cyo4vtWZrmgCCzgizjAq+E5+KMzZis4D+IcVRyc3B6AOLouAvFgJ2gLM7YfHAdzJOOJw0GHbTLBvWCW5ESzQacJPyR8veQ4tMKavCR4s+QkC8CgBV/joFJyvBww6gXBr0GscHJpoCcCfyS6RCK6zinB4aL0GTAh9J3mwGTVKEBdAElCf60XHks3hHY+2GCDz4WgUuhrA+/cFPwWfBH6Km30WyHpe+im4FZJX6mNfpeBeUJfh5uCxdlNBEts9r1YaPe4Kfib0J5JuzKbfacJ7e9uChZTueEo+B4V2tPdFJwqtH+CQZt9vxfas90UnCPpa7bR75Akl851U/AKybK+ZqPfq5JNTZHb6SGVZRpC2tN4VjIj9DkG8vhZrxlVQfr4aeDaTqtCEmT2hMmJjVqNIJZsC/gahThhKh8eA1mSjX51BHv3Rs6jxWMmh/xeCtrdSg/v6CTuR8GESV+3QZLO8UQS+MKOOy2YrFznpFaBVwaT/ypO9gMmKQTddgo2UtP6xbXlFp0YsAZsBCvBfI7uWk2rHlwHvyVjaaMxYuCuSwYnwQ6nalpkP0CxhRnSIwM8MjmGSkR9TixpzUbALotLMyAEpV4+Zr7JsVQMvOmUYM2awXILQtPBOSHYPRUitFG28apzRHCQT7oelIGUMCeWyDN6OUyh7gUX8qzcFo+jEbSMvGuiHVg36A9JJzN5R2Vk90RB7SDX0YImN077wTGjuzQ7BNtpjaAcfDI5juptl/inbe+WnLC1oMvCy7YuTnhOSJIST89wqF0BuzmVNGPF/OIvw2+CyT5yEtNkclwKuAVW+01wgIPYKXBIZ8emZ1QV/SAW/f3wjQcVD/dysb7AxDh6Ytz3etAKZ1QCegaOBIx/m/LZz4K1amo1eAIWGfj/bL8L1ow+veicJIPK40zuvxCspY30KcY9kC78bSnfv/F+jNJGi/oN/BjL4vw9zo/PYUerlkqwEqwEK8FKsBLssP0TYABLJxQEyLBIfgAAAABJRU5ErkJggg==\");\n        background-size: 100% 100%;\n        background-color: #419EFE; }\n    .page-serch .search.s1 {\n      background-color: #f6194d; }\n      .page-serch .search.s1 .btn {\n        background-color: #f6194d; }\n", ""]);

	// exports


/***/ },
/* 192 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <template>
	// <jui-header title="search" back></jui-header>
	// <div class="page-serch">
	// <div class="search s1">
	//     <div class="input" @click="iSearch"><a class="btn"></a></div>
	// </div>
	// <div class="search">
	//     <div class="input" @click="iSearch1">{{value}}<a class="btn"></a></div>
	// </div>
	// </div>
	// </template>
	// <style lang="sass">
	// .page-serch{
	//     padding:10px 0;
	//  .search{
	//   padding:10px;
	//   background-color:#419EFE;
	//   margin-bottom:20px;
	//   .input{
	//     background-color: #fff;
	//     line-height:30px;
	//     height:30px;
	//     border-radius: 4px;
	//     position: relative;
	//     .btn{
	//         width:30px;
	//         height:30px;
	//         position: absolute;
	//         right:0;
	//         top:0;
	//         background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRDA3OEQzMDY1MTExMUU2OUNDRUVFMzFEOEUwMTE1MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRDA3OEQzMTY1MTExMUU2OUNDRUVFMzFEOEUwMTE1MiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJEMDc4RDJFNjUxMTExRTY5Q0NFRUUzMUQ4RTAxMTUyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJEMDc4RDJGNjUxMTExRTY5Q0NFRUUzMUQ4RTAxMTUyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EBCwsgAAA7RJREFUeNrsml1IFUEUx69fGfpg3xpJKKWYoJUPhQgWZhD0WGBQUGoUUlRQBBX0ki8F9pD1EBQlRURR9GUhSlGQZJqmFBRYPWRmmlmEZWre/gfOwmWYve7u3bsfOQd+6IzOnv3vzJ6dc3ZjgrDAFLLYwBQzJVgJVoKVYCVYCVaClWDHLD6CsbQlbQF3QSt4A4bAMJgLMkEhKAHrQIIXBMdY2EuPg4ughkUasVSwHRwAM/wk+CWoAB0W/dHM14IyP9zDdbxEOyLwNwA2gX3gr5dn+Cyo4vtWZrmgCCzgizjAq+E5+KMzZis4D+IcVRyc3B6AOLouAvFgJ2gLM7YfHAdzJOOJw0GHbTLBvWCW5ESzQacJPyR8veQ4tMKavCR4s+QkC8CgBV/joFJyvBww6gXBr0GscHJpoCcCfyS6RCK6zinB4aL0GTAh9J3mwGTVKEBdAElCf60XHks3hHY+2GCDz4WgUuhrA+/cFPwWfBH6Km30WyHpe+im4FZJX6mNfpeBeUJfh5uCxdlNBEts9r1YaPe4Kfib0J5JuzKbfacJ7e9uChZTueEo+B4V2tPdFJwqtH+CQZt9vxfas90UnCPpa7bR75Akl851U/AKybK+ZqPfq5JNTZHb6SGVZRpC2tN4VjIj9DkG8vhZrxlVQfr4aeDaTqtCEmT2hMmJjVqNIJZsC/gahThhKh8eA1mSjX51BHv3Rs6jxWMmh/xeCtrdSg/v6CTuR8GESV+3QZLO8UQS+MKOOy2YrFznpFaBVwaT/ypO9gMmKQTddgo2UtP6xbXlFp0YsAZsBCvBfI7uWk2rHlwHvyVjaaMxYuCuSwYnwQ6nalpkP0CxhRnSIwM8MjmGSkR9TixpzUbALotLMyAEpV4+Zr7JsVQMvOmUYM2awXILQtPBOSHYPRUitFG28apzRHCQT7oelIGUMCeWyDN6OUyh7gUX8qzcFo+jEbSMvGuiHVg36A9JJzN5R2Vk90RB7SDX0YImN077wTGjuzQ7BNtpjaAcfDI5juptl/inbe+WnLC1oMvCy7YuTnhOSJIST89wqF0BuzmVNGPF/OIvw2+CyT5yEtNkclwKuAVW+01wgIPYKXBIZ8emZ1QV/SAW/f3wjQcVD/dysb7AxDh6Ytz3etAKZ1QCegaOBIx/m/LZz4K1amo1eAIWGfj/bL8L1ow+veicJIPK40zuvxCspY30KcY9kC78bSnfv/F+jNJGi/oN/BjL4vw9zo/PYUerlkqwEqwEK8FKsBLssP0TYABLJxQEyLBIfgAAAABJRU5ErkJggg==');
	//         background-size:100% 100%;
	//         background-color:#419EFE;
	//     }
	//   }
	//   &.s1{
	//     background-color:#f6194d;
	//     .btn{
	//         background-color:#f6194d;
	//         }
	//       }
	//     } 
	// } 
	// </style>
	// <script>
	//es6
	exports.default = {
	    data: function data() {
	        return {
	            value: ''
	        };
	    },

	    methods: {
	        iSearch: function iSearch() {
	            this.$search({
	                color: '#f6194d'
	            });
	        },
	        iSearch1: function iSearch1() {
	            var self = this;
	            this.$search({
	                request: function request(val, that) {
	                    self.value = val;
	                    that.$destroy(true);
	                }
	            });
	        }
	    }
	};

	// </script>

/***/ },
/* 193 */
/***/ function(module, exports) {

	module.exports = "\n\r\n<jui-header title=\"search\" back></jui-header>\r\n<div class=\"page-serch\">\r\n<div class=\"search s1\">\r\n    <div class=\"input\" @click=\"iSearch\"><a class=\"btn\"></a></div>\r\n</div>\r\n<div class=\"search\">\r\n    <div class=\"input\" @click=\"iSearch1\">{{value}}<a class=\"btn\"></a></div>\r\n</div>\r\n</div>\r\n";

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(195)
	__vue_script__ = __webpack_require__(197)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\headerView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(198)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-52fb2a3f/headerView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(196);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./headerView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./headerView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".page-header {\n  padding-top: 60px; }\n  .page-header .page-header-interval {\n    height: 10px; }\n\n.btn-box {\n  overflow: hidden; }\n\n.btn-box1 {\n  margin-left: -10px; }\n\n.left-btn {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOUU5NTdBMTY4NDYxMUU2QjlBN0IzMDUxQzE0MzlCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOUU5NTdBMjY4NDYxMUU2QjlBN0IzMDUxQzE0MzlCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM5RTk1NzlGNjg0NjExRTZCOUE3QjMwNTFDMTQzOUJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM5RTk1N0EwNjg0NjExRTZCOUE3QjMwNTFDMTQzOUJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LCOx1wAAAP5JREFUeNrs1j0OAUEYxnGrITpBsXEAGyegQ0lBKH30buMKKgcgCjqJ1h1EQoRNfHQU45HsG5PNmv3I25CZ5Fft5J/d2Z3JGkKIGOeIx5iHDurgrwULkOEKlmABYzCVM9972UcFduIzRqr5frEa7KXYBqyowTqcpdga8n5P9O1CE2wptgIzwPJ4BttwkWJLyAaJeQW7cJdic0gHjbmDfVdsFjZGwQQM4eGEnjCBVNgYBYtwk+7sCLkoMQomue+QDFxrOI26hrIe51smHbhyfYekxblTSINzL8unzYHrtCFVzvOQlGHrbEflWhoh/r4sOIGtmmTo3zkd/MfgS4ABAG+sh5ILSHqlAAAAAElFTkSuQmCC\") no-repeat center;\n  width: 20px;\n  height: 44px;\n  float: left; }\n", ""]);

	// exports


/***/ },
/* 197 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <template>
	//     <div class="page-header">   
	//     <jui-header title="header" fixed back></jui-header>
	//
	//     <jui-header title="自定义颜色及自带返回" back color="#f18a2f"></jui-header>
	//     <div class="page-header-interval"></div>
	//
	//     <jui-header title="这是一个很长很长的标题这是一个很长很长的标题"></jui-header>
	//     <div class="page-header-interval"></div>
	//
	//     <jui-header title="完整版自定义背景颜色" color="#f6194d">
	//         <div slot="left" @click="back"><span>返回</span></div>
	//         <div slot="right" @click="next"><span>下一步</span></div>
	//     </jui-header>
	//     <div class="page-header-interval"></div>   
	//
	//     <jui-header title="自带返回及自定义左侧" back>
	//         <div slot="left" @click="back" class="btn-box1"><span>返回</span></div>
	//     </jui-header>
	//     <div class="page-header-interval"></div>
	//
	//     <jui-header title="自定义左侧" color="#51c448">
	//         <div slot="left" @click="back" class="btn-box"><div class="left-btn"></div><span>(⊙o⊙)</span></div>
	//     </jui-header>
	//     <div class="page-header-interval"></div>
	//
	//     <jui-header title="只有右侧">
	//         <div slot="right" @click="back"><span>返回</span></div>
	//     </jui-header>
	//     </div>
	// </template>
	// <style lang="sass">
	// .page-header{
	//     padding-top:60px;
	//     .page-header-interval{
	//         height:10px;
	//     }
	// }
	// .btn-box{
	//     overflow:hidden;
	// }
	// .btn-box1{
	//     margin-left:-10px;
	// }
	// .left-btn{
	//     background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOUU5NTdBMTY4NDYxMUU2QjlBN0IzMDUxQzE0MzlCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOUU5NTdBMjY4NDYxMUU2QjlBN0IzMDUxQzE0MzlCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM5RTk1NzlGNjg0NjExRTZCOUE3QjMwNTFDMTQzOUJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM5RTk1N0EwNjg0NjExRTZCOUE3QjMwNTFDMTQzOUJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LCOx1wAAAP5JREFUeNrs1j0OAUEYxnGrITpBsXEAGyegQ0lBKH30buMKKgcgCjqJ1h1EQoRNfHQU45HsG5PNmv3I25CZ5Fft5J/d2Z3JGkKIGOeIx5iHDurgrwULkOEKlmABYzCVM9972UcFduIzRqr5frEa7KXYBqyowTqcpdga8n5P9O1CE2wptgIzwPJ4BttwkWJLyAaJeQW7cJdic0gHjbmDfVdsFjZGwQQM4eGEnjCBVNgYBYtwk+7sCLkoMQomue+QDFxrOI26hrIe51smHbhyfYekxblTSINzL8unzYHrtCFVzvOQlGHrbEflWhoh/r4sOIGtmmTo3zkd/MfgS4ABAG+sh5ILSHqlAAAAAElFTkSuQmCC") no-repeat center;
	//     width:20px;
	//     height:44px;
	//     float: left;
	// }
	// </style>
	// <script>
	//es6
	exports.default = {
	    data: function data() {
	        return {
	            list: [{ title: '文字提示' }, { title: '图文提示' }, { title: '图片提示' }],
	            position: ["top", "center", "bottom"]
	        };
	    },

	    methods: {
	        back: function back() {
	            alert("你点击了整个左部");
	        },
	        next: function next() {
	            alert("你点击了下一步");
	        }
	    }
	};

	// </script>

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"page-header\">   \n<jui-header title=\"header\" fixed back></jui-header>\n\n<jui-header title=\"自定义颜色及自带返回\" back color=\"#f18a2f\"></jui-header>\n<div class=\"page-header-interval\"></div>\n\n<jui-header title=\"这是一个很长很长的标题这是一个很长很长的标题\"></jui-header>\n<div class=\"page-header-interval\"></div>\n\n<jui-header title=\"完整版自定义背景颜色\" color=\"#f6194d\">\n    <div slot=\"left\" @click=\"back\"><span>返回</span></div>\n    <div slot=\"right\" @click=\"next\"><span>下一步</span></div>\n</jui-header>\n<div class=\"page-header-interval\"></div>   \n\n<jui-header title=\"自带返回及自定义左侧\" back>\n    <div slot=\"left\" @click=\"back\" class=\"btn-box1\"><span>返回</span></div>\n</jui-header>\n<div class=\"page-header-interval\"></div>\n\n<jui-header title=\"自定义左侧\" color=\"#51c448\">\n    <div slot=\"left\" @click=\"back\" class=\"btn-box\"><div class=\"left-btn\"></div><span>(⊙o⊙)</span></div>\n</jui-header>\n<div class=\"page-header-interval\"></div>\n\n<jui-header title=\"只有右侧\">\n    <div slot=\"right\" @click=\"back\"><span>返回</span></div>\n</jui-header>\n</div>\n";

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(200)
	__vue_script__ = __webpack_require__(202)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\cellView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(203)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4bea9d54/cellView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(201);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./cellView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./cellView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".page-cell {\n  margin: 10px 0; }\n\n.icon {\n  width: 20px;\n  height: 20px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OTdGOUJFMDY4RTMxMUU2QjNGOUNBQkMyRUIyQjE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OTdGOUJFMTY4RTMxMUU2QjNGOUNBQkMyRUIyQjE3NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc5N0Y5QkRFNjhFMzExRTZCM0Y5Q0FCQzJFQjJCMTc1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc5N0Y5QkRGNjhFMzExRTZCM0Y5Q0FCQzJFQjJCMTc1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mXDJyQAAA85JREFUeNrsmFlIFWEUx13SblauGUVQSVhZhBQlSbZRUSn5EPbS/tBGQpnRgrQQ2EYP1UOZLdqqPgSSGRklVEZl9ZDYXmoQlSluqBezdPp/9J/4mGbu3O4drrfowI/51jvnnjnLN+OrKIqPN4ufj5eL1yvYS9NfCQJ7WKdOcFbt+Gp8sBmE9LCCLSDUyIKq1IBGDysWDqLMHrEqO8AjD1pTWC0OXHJWQSFHQJKHFLwG8lyN4ixwAbTpzLWCHFDNvqJxkzOg3cBip6mY22nmCVgOhoBT0vhdMII3iqIisSCZ88PBURANHkr7TvK3VoPPpncXUSzRrPyUxaCY7SLNmlTQDiLYL+S6PGlNBcdy2B8E7NyrrgkEX7iumPdUqMOv+zljQeGHk6X+MZAOGkAAmMfxCmmN2k4B/qAWbOJeVVaAgVY8Yj868GBpLJtXMWZjW/ZRtd1f2pctzY8Gh6wsdcLHburkqW9SW7ZGsNT+rtkj/LbE2RTmjIJdYA0DoEYzV89IFjJTGp8oRXm9Zk8VGAX2W6XgYUZvl86csM4Jtqcy2c6gAmqK0tv3FWSAc396WNCTAqaZRBAD+tHpbzGZi6ozAcwC08Aw7isFO8EAsJWKR9A/X4Cr4CCDxeU00wneKcbyCcSDILAK2EAoWMexBNDgYP9r0OYozZhZMIBO3Q3ugXJaIAxMAZNoyVgmbCEdfOxjwQ0QBB6QJlpRWHscGGnFIxayEFzRGRc3WgA+6sxVU9F8ViOt7AJ7rEoz1Qbjrbx5p8HB8zmoM9j71pUTtZHcAbmgkjU3mFG7RBx6wVPwTLNnPKPfDi6yHtvpHnEMPHMxCZIO8MGBkzeC+cAfLGJ9DQdJ/L0U1mAjqTKrxWYW7E0fmw5ms2yFMfmWMkc28R1iKUhlcKwH25lGxMF3M0jgUV6sfw+K6SKX3X3E4jFu4dFJTzKpXDddQC1/B8BLUAQ2GuwtsSJI0sAyB2koje3roIyHVDWo0g32iRPOXjDXCgWFlc+Dx8xhsohH3pft+7x2S2klSuf3YvgHMqw8zdTSig0O1jRJbUfrxGNfq3PKcUtBcTx/JfXn8FonHQb6SPM2aV6VZI3v7bNKwTJGnCqJfD20sazd5rhctqKl9xb1/SRf+mM+jPAWKxQskHxR+E0hiGTtFUoel8qh8NExIJ5juazFWbyKiN7A5G5n320FQxhxVbwGSulHVJChnIukf5UzSt+wVldK7y02piuxbxsDyu23Ok+IS5VE5LfdHv704XQlyeyhj0e/yV/3+S3NSz5gGlrw/zfqf07BHwIMAHzhCABjPe3fAAAAAElFTkSuQmCC\") no-repeat center;\n  background-size: cover;\n  background-color: #419EFE;\n  margin-right: 5px; }\n", ""]);

	// exports


/***/ },
/* 202 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <template>
	//     <jui-header title="cell" back></jui-header>
	// <div class="page-cell">
	//     <jui-cell href="http://www.baidu.com"  title="跳去百度吧"></jui-cell>
	//     <jui-cell title="标题文字" value="副标题"></jui-cell>
	//     <jui-cell title="标题文字" value="有链接图标" link></jui-cell>
	//     <jui-cell title="标题文字" link>
	//         <span style="color: #419EFE">这里是自定义元素</span>
	//     </jui-cell>
	//     <jui-cell title="标题文字" value="前头自定义图片">
	//         <span class="icon"slot="icon"></span>
	//     </jui-cell>
	//     <jui-cell title="自定义事件" @click="sucess"></jui-cell>
	// </div>
	// <div class="page-cell">
	//      <jui-cell title="单独一块"></jui-cell>
	// </div>
	// </template>
	// <style lang="sass">
	// .page-cell{
	//     margin:10px 0;
	// }
	// .icon{
	//     width:20px;
	//     height:20px;
	//     background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OTdGOUJFMDY4RTMxMUU2QjNGOUNBQkMyRUIyQjE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3OTdGOUJFMTY4RTMxMUU2QjNGOUNBQkMyRUIyQjE3NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc5N0Y5QkRFNjhFMzExRTZCM0Y5Q0FCQzJFQjJCMTc1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc5N0Y5QkRGNjhFMzExRTZCM0Y5Q0FCQzJFQjJCMTc1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mXDJyQAAA85JREFUeNrsmFlIFWEUx13SblauGUVQSVhZhBQlSbZRUSn5EPbS/tBGQpnRgrQQ2EYP1UOZLdqqPgSSGRklVEZl9ZDYXmoQlSluqBezdPp/9J/4mGbu3O4drrfowI/51jvnnjnLN+OrKIqPN4ufj5eL1yvYS9NfCQJ7WKdOcFbt+Gp8sBmE9LCCLSDUyIKq1IBGDysWDqLMHrEqO8AjD1pTWC0OXHJWQSFHQJKHFLwG8lyN4ixwAbTpzLWCHFDNvqJxkzOg3cBip6mY22nmCVgOhoBT0vhdMII3iqIisSCZ88PBURANHkr7TvK3VoPPpncXUSzRrPyUxaCY7SLNmlTQDiLYL+S6PGlNBcdy2B8E7NyrrgkEX7iumPdUqMOv+zljQeGHk6X+MZAOGkAAmMfxCmmN2k4B/qAWbOJeVVaAgVY8Yj868GBpLJtXMWZjW/ZRtd1f2pctzY8Gh6wsdcLHburkqW9SW7ZGsNT+rtkj/LbE2RTmjIJdYA0DoEYzV89IFjJTGp8oRXm9Zk8VGAX2W6XgYUZvl86csM4Jtqcy2c6gAmqK0tv3FWSAc396WNCTAqaZRBAD+tHpbzGZi6ozAcwC08Aw7isFO8EAsJWKR9A/X4Cr4CCDxeU00wneKcbyCcSDILAK2EAoWMexBNDgYP9r0OYozZhZMIBO3Q3ugXJaIAxMAZNoyVgmbCEdfOxjwQ0QBB6QJlpRWHscGGnFIxayEFzRGRc3WgA+6sxVU9F8ViOt7AJ7rEoz1Qbjrbx5p8HB8zmoM9j71pUTtZHcAbmgkjU3mFG7RBx6wVPwTLNnPKPfDi6yHtvpHnEMPHMxCZIO8MGBkzeC+cAfLGJ9DQdJ/L0U1mAjqTKrxWYW7E0fmw5ms2yFMfmWMkc28R1iKUhlcKwH25lGxMF3M0jgUV6sfw+K6SKX3X3E4jFu4dFJTzKpXDddQC1/B8BLUAQ2GuwtsSJI0sAyB2koje3roIyHVDWo0g32iRPOXjDXCgWFlc+Dx8xhsohH3pft+7x2S2klSuf3YvgHMqw8zdTSig0O1jRJbUfrxGNfq3PKcUtBcTx/JfXn8FonHQb6SPM2aV6VZI3v7bNKwTJGnCqJfD20sazd5rhctqKl9xb1/SRf+mM+jPAWKxQskHxR+E0hiGTtFUoel8qh8NExIJ5juazFWbyKiN7A5G5n320FQxhxVbwGSulHVJChnIukf5UzSt+wVldK7y02piuxbxsDyu23Ok+IS5VE5LfdHv704XQlyeyhj0e/yV/3+S3NSz5gGlrw/zfqf07BHwIMAHzhCABjPe3fAAAAAElFTkSuQmCC" ) no-repeat center;
	//     background-size:cover;
	//     background-color:#419EFE;
	//     margin-right: 5px;
	// }
	// </style>
	// <script>
	//es6
	exports.default = {
	    methods: {
	        sucess: function sucess() {
	            alert("别乱点 懂吗");
	        }
	    }
	};

	// </script>

/***/ },
/* 203 */
/***/ function(module, exports) {

	module.exports = "\n\n    <jui-header title=\"cell\" back></jui-header>\n<div class=\"page-cell\">\n    <jui-cell href=\"http://www.baidu.com\"  title=\"跳去百度吧\"></jui-cell>\n    <jui-cell title=\"标题文字\" value=\"副标题\"></jui-cell>\n    <jui-cell title=\"标题文字\" value=\"有链接图标\" link></jui-cell>\n    <jui-cell title=\"标题文字\" link>\n        <span style=\"color: #419EFE\">这里是自定义元素</span>\n    </jui-cell>\n    <jui-cell title=\"标题文字\" value=\"前头自定义图片\">\n        <span class=\"icon\"slot=\"icon\"></span>\n    </jui-cell>\n    <jui-cell title=\"自定义事件\" @click=\"sucess\"></jui-cell>\n</div>\n<div class=\"page-cell\">\n     <jui-cell title=\"单独一块\"></jui-cell>\n</div>\n";

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(205)
	__vue_script__ = __webpack_require__(207)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\gridsView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(208)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-855e4956/gridsView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(206);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./gridsView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./gridsView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".page-grids-box {\n  padding: 10px; }\n  .page-grids-box .page-grids-title {\n    color: #999;\n    font-size: 14px;\n    padding: 10px; }\n", ""]);

	// exports


/***/ },
/* 207 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <template>
	//     <jui-header title="grids" back></jui-header>
	//     <div class="page-grids-box">
	//     <div class="page-grids-title">等分网格有边框</div>
	//         <jui-grids :options="options" :cols="2" border></jui-grids>
	//     </div>
	//
	//     <div class="page-grids-box">
	//     <div class="page-grids-title">等分网格无边框</div>
	//         <jui-grids :options="options1" :cols="2"></jui-grids>
	//     </div>
	//
	//     <div class="page-grids-box">
	//     <div class="page-grids-title">等分网格有图标有边框</div>
	//         <jui-grids :options="options2" :cols="3" border></jui-grids>
	//     </div>
	//
	//     <div class="page-grids-box">
	//     <div class="page-grids-title">等分网格有图标无边框</div>
	//         <jui-grids :options="options2" :cols="3"></jui-grids>
	//     </div>
	// </template>
	//
	// <style lang="sass">
	// .page-grids-box{
	//     padding:10px;
	//     .page-grids-title{
	//         color:#999;
	//         font-size:14px;
	//         padding:10px;
	//     }
	// }
	// </style>
	//
	// <script> 
	//es6
	exports.default = {
	    data: function data() {
	        return {
	            options: ['一格', '二格'],
	            options1: ['一格', '二格', '三格'],
	            options2: [{ title: '一格', image: './example/temp/images/icon.jpg' }, { title: '二格', image: './example/temp/images/icon.jpg' }, { title: '三格', image: './example/temp/images/icon.jpg' }]
	        };
	    }
	};

	// </script>

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "\n\n<jui-header title=\"grids\" back></jui-header>\n<div class=\"page-grids-box\">\n<div class=\"page-grids-title\">等分网格有边框</div>\n    <jui-grids :options=\"options\" :cols=\"2\" border></jui-grids>\n</div>\n\n<div class=\"page-grids-box\">\n<div class=\"page-grids-title\">等分网格无边框</div>\n    <jui-grids :options=\"options1\" :cols=\"2\"></jui-grids>\n</div>\n\n<div class=\"page-grids-box\">\n<div class=\"page-grids-title\">等分网格有图标有边框</div>\n    <jui-grids :options=\"options2\" :cols=\"3\" border></jui-grids>\n</div>\n\n<div class=\"page-grids-box\">\n<div class=\"page-grids-title\">等分网格有图标无边框</div>\n    <jui-grids :options=\"options2\" :cols=\"3\"></jui-grids>\n</div>\n";

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(210)
	__vue_script__ = __webpack_require__(212)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\switchView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(213)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b55b3034/switchView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(211);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./switchView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./switchView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".cell-padding {\n  padding: 10px; }\n", ""]);

	// exports


/***/ },
/* 212 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <template>
	//     <jui-header title="switch" back></jui-header>
	// 	<div class="cell-padding">
	//     <jui-switch :value.sync="value1">
	//     	<label v-text="value1"></label>
	//     </jui-switch>
	//     </div>
	//     <div class="cell-padding">
	//     <jui-switch :value.sync="value4">
	//     	<label v-text="value4"></label>
	//     </jui-switch>
	//     </div>
	//     <jui-cell :title="'选项 ' + value3">
	//     	<jui-switch :value.sync="value3"></jui-switch>
	//     </jui-cell>
	//     <jui-cell :title="'选项 ' + value2">
	//     	<jui-switch :value.sync="value2"></jui-switch>
	//     </jui-cell>
	// </template>
	//
	// <style lang="sass">
	// .cell-padding{
	// 	padding:10px;
	// }
	// </style>
	//
	// <script>  
	//es6
	exports.default = {
	    data: function data() {
	        return {
	            value1: false,
	            value2: false,
	            value3: true,
	            value4: true
	        };
	    },

	    watch: {
	        value3: function value3(val) {
	            alert(val);
	        },
	        value2: function value2(val) {
	            alert(val);
	        }
	    }
	};

	// </script>

/***/ },
/* 213 */
/***/ function(module, exports) {

	module.exports = "\n\n    <jui-header title=\"switch\" back></jui-header>\n\t<div class=\"cell-padding\">\n    <jui-switch :value.sync=\"value1\">\n    \t<label v-text=\"value1\"></label>\n    </jui-switch>\n    </div>\n    <div class=\"cell-padding\">\n    <jui-switch :value.sync=\"value4\">\n    \t<label v-text=\"value4\"></label>\n    </jui-switch>\n    </div>\n    <jui-cell :title=\"'选项 ' + value3\">\n    \t<jui-switch :value.sync=\"value3\"></jui-switch>\n    </jui-cell>\n    <jui-cell :title=\"'选项 ' + value2\">\n    \t<jui-switch :value.sync=\"value2\"></jui-switch>\n    </jui-cell>\n";

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(215)
	__vue_script__ = __webpack_require__(217)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\radioView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(218)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-060c2363/radioView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(216);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./radioView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./radioView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".page-radio {\n  paddingt-top: 40px; }\n  .page-radio .radio-list {\n    padding: 10px 0; }\n    .page-radio .radio-list .radio-head {\n      padding: 10px;\n      line-height: 30px;\n      color: #666;\n      font-size: 14px; }\n    .page-radio .radio-list .radio-foot {\n      margin-top: 10px;\n      padding: 10px;\n      line-height: 30px;\n      border-bottom: 1px solid #ccc;\n      border-top: 1px solid #ccc; }\n", ""]);

	// exports


/***/ },
/* 217 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	              value: true
	});
	//
	// <template>
	// <jui-header title="radio" fixed back></jui-header>
	// <div class="page-radio">
	// <div class="radio-list">
	//      <div class="radio-head">你喜欢什么样的女生</div>
	//      <jui-radio :options="options1" :value.sync="value1"></jui-radio>
	//      <div class="radio-foot">你选择了{{value1}}</div>
	// </div>
	//
	// <div class="radio-list">
	//      <div class="radio-head">你喜欢什么样的基友</div>
	//      <jui-radio :options="options2" :value.sync="value2"></jui-radio>
	//      <div class="radio-foot">你选择了{{value2}}</div>
	// </div>
	// </div>
	// </template>
	//
	// <style lang="sass">
	// .page-radio{
	//     paddingt-top:40px;
	//     .radio-list{
	// 	padding:10px 0;
	//     .radio-head{
	//         padding:10px;
	//         line-height:30px;
	//         color:#666;
	//         font-size:14px;
	//     }
	//     .radio-foot{
	//         margin-top:10px;
	//         padding:10px;
	//         line-height:30px;
	//         border-bottom:1px solid #ccc;
	//         border-top:1px solid #ccc;
	//     }
	// }
	// }
	// </style>
	//
	// <script> 
	//es6
	exports.default = {
	              data: function data() {
	                            return {
	                                          options1: ['女神', '绿茶婊', '女汉子'],
	                                          value1: '女神',
	                                          options2: [{
	                                                        label: '文艺青年',
	                                                        value: 'A' }, {
	                                                        label: '中二青年',
	                                                        value: 'B' }, {
	                                                        label: '普通青年',
	                                                        value: 'C' }, {
	                                                        label: '优质青年',
	                                                        value: 'D',
	                                                        disabled: 'disabled' }],
	                                          value2: ''
	                            };
	              }
	};

	// </script>

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = "\n\r\n<jui-header title=\"radio\" fixed back></jui-header>\r\n<div class=\"page-radio\">\r\n<div class=\"radio-list\">\r\n     <div class=\"radio-head\">你喜欢什么样的女生</div>\r\n     <jui-radio :options=\"options1\" :value.sync=\"value1\"></jui-radio>\r\n     <div class=\"radio-foot\">你选择了{{value1}}</div>\r\n</div>\r\n\r\n<div class=\"radio-list\">\r\n     <div class=\"radio-head\">你喜欢什么样的基友</div>\r\n     <jui-radio :options=\"options2\" :value.sync=\"value2\"></jui-radio>\r\n     <div class=\"radio-foot\">你选择了{{value2}}</div>\r\n</div>\r\n</div>\r\n";

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(220)
	__vue_script__ = __webpack_require__(222)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] example\\modules\\checklistView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(223)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-dbc96ee4/checklistView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(221);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(96)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./checklistView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./checklistView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports


	// module
	exports.push([module.id, ".page-checklist {\n  padding-top: 40px; }\n\n.page-checklist-box {\n  padding: 10px 0; }\n  .page-checklist-box .check-head {\n    padding: 10px;\n    line-height: 30px;\n    color: #666;\n    font-size: 14px; }\n  .page-checklist-box .check-foot {\n    margin-top: 10px;\n    padding: 10px;\n    line-height: 30px;\n    border-bottom: 1px solid #ccc;\n    border-top: 1px solid #ccc; }\n", ""]);

	// exports


/***/ },
/* 222 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	              value: true
	});
	//
	// <template>
	//
	// <jui-header title="checklist" fixed back></jui-header>
	// <div class="page-checklist">
	// <div class="page-checklist-box">
	//      <div class="check-head">你喜欢什么样的女生</div>
	//      <jui-checklist :options="options1" :value.sync="value1"></jui-checklist>
	//      <div class="check-foot">你选择了{{value1}}</div>
	// </div>
	//
	// <div class="page-checklist-box">
	//      <div class="check-head">你喜欢什么样的人</div>
	//      <jui-checklist :options="options2" :value.sync="value2" :max="2"></jui-checklist>
	//      <div class="check-foot">你选择了{{value2}}</div>
	// </div>
	//
	// </div>
	//
	// </template>
	//
	// <style lang="sass">
	// .page-checklist{
	//     padding-top:40px;
	// }
	// .page-checklist-box{
	// 	padding:10px 0;
	//     .check-head{
	//         padding:10px;
	//         line-height:30px;
	//         color:#666;
	//         font-size:14px;
	//     }
	//     .check-foot{
	//         margin-top:10px;
	//         padding:10px;
	//         line-height:30px;
	//         border-bottom:1px solid #ccc;
	//         border-top:1px solid #ccc;
	//     }
	// }
	// </style>
	//
	// <script>
	//es6
	exports.default = {
	              data: function data() {
	                            return {
	                                          options1: ['女神', '绿茶婊', '女汉子', '女博士'],
	                                          value1: ['女神'],
	                                          options2: [{
	                                                        label: '基佬',
	                                                        value: 'A' }, {
	                                                        label: '变态',
	                                                        value: 'B' }, {
	                                                        label: '帅的',
	                                                        value: 'C' }, {
	                                                        label: '富的',
	                                                        value: 'D' }],
	                                          value2: []
	                            };
	              }
	};

	// </script>

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = "\n\r\n\r\n<jui-header title=\"checklist\" fixed back></jui-header>\r\n<div class=\"page-checklist\">\r\n<div class=\"page-checklist-box\">\r\n     <div class=\"check-head\">你喜欢什么样的女生</div>\r\n     <jui-checklist :options=\"options1\" :value.sync=\"value1\"></jui-checklist>\r\n     <div class=\"check-foot\">你选择了{{value1}}</div>\r\n</div>\r\n\r\n<div class=\"page-checklist-box\">\r\n     <div class=\"check-head\">你喜欢什么样的人</div>\r\n     <jui-checklist :options=\"options2\" :value.sync=\"value2\" :max=\"2\"></jui-checklist>\r\n     <div class=\"check-foot\">你选择了{{value2}}</div>\r\n</div>\r\n\r\n</div>\r\n\r\n";

/***/ }
/******/ ]);