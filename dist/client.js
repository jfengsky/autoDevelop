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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FETCH_PAGEINFO = exports.FETCH_PAGETYPE = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _api = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

// 页面类型一些接口
/**
 * 
 * data: {
      type: 'save',  'search' 'delete', 'modify'
      text: ''
    }
 */
var FETCH_PAGETYPE = exports.FETCH_PAGETYPE = function () {
  var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(data) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(_api.pageType, {
              method: 'post',
              headers: headers,
              body: JSON.stringify(data)
            }).then(function (response) {
              return response.json();
            });

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function FETCH_PAGETYPE(_x) {
    return _ref.apply(this, arguments);
  };
}();

// 页面代码一些借口

var FETCH_PAGEINFO = exports.FETCH_PAGEINFO = function () {
  var _ref2 = _asyncToGenerator(_regenerator2.default.mark(function _callee2(data) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(_api.pageInfo, {
              method: 'post',
              headers: headers,
              body: JSON.stringify(data)
            }).then(function (response) {
              return response.json();
            });

          case 2:
            return _context2.abrupt('return', _context2.sent);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function FETCH_PAGEINFO(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 所有接口
 */

// 页面路由地址
var index = exports.index = '/';
var home = exports.home = '/home';
// export const homeCreate = '/home/createPage'
var api = exports.api = '/api';
var modify = exports.modify = '/modify';
// export const favIco = '/favicon.ico'

// 接口路由地址
var pageType = exports.pageType = '/pageType';

var pageInfo = exports.pageInfo = '/pageInfo';

var pageList = exports.pageList = [index, home, api, modify];
var apiList = exports.apiList = [pageType, pageInfo];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URL = exports.MongoClient = undefined;

var _mongodb = __webpack_require__(36);

var _mongodb2 = _interopRequireDefault(_mongodb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoClient = exports.MongoClient = _mongodb2.default.MongoClient;
var URL = exports.URL = 'mongodb://localhost:27017/autoDevelopData';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 客户端模式一些配置参数
 */

var clientEntry = exports.clientEntry = {
  client: './client/index.js'
};
var clientPort = exports.clientPort = 3200;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pageInfo = __webpack_require__(20);

var _pageInfo2 = _interopRequireDefault(_pageInfo);

var _fsPageInfo = __webpack_require__(19);

var _fsPageInfo2 = _interopRequireDefault(_fsPageInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function (req) {
  var _req$body = req.body,
      type = _req$body.type,
      name = _req$body.name,
      code = _req$body.code,
      kind = _req$body.kind,
      desc = _req$body.desc,
      id = _req$body.id;

  switch (type) {
    case 'save':
      return _fsPageInfo2.default.write({
        name: name,
        code: code
      }).then(function () {
        var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(_data) {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _pageInfo2.default.save({
                    name: name,
                    kind: kind,
                    desc: desc
                  }).then(function (_data) {
                    return {
                      data: _data.ops[0]
                    };
                  });

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, undefined);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    case 'search':
      return _pageInfo2.default.search({ id: id }).then(function (_data) {
        return {
          data: _data
        };
      });
    case 'searchfile':
      return _pageInfo2.default.search({ id: id }).then(function () {
        var _ref2 = _asyncToGenerator(_regenerator2.default.mark(function _callee2(_data) {
          var tempData;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  tempData = _data[0];
                  _context2.next = 3;
                  return _fsPageInfo2.default.read({
                    name: tempData.name
                  }).then(function (result) {
                    return {
                      data: _extends({}, tempData, {
                        code: result
                      })
                    };
                  });

                case 3:
                  return _context2.abrupt('return', _context2.sent);

                case 4:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, undefined);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    case 'updata':
      return _fsPageInfo2.default.write({
        name: name,
        code: code
      }).then(function () {
        var _ref3 = _asyncToGenerator(_regenerator2.default.mark(function _callee3(_data) {
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _pageInfo2.default.updata({
                    name: name,
                    kind: kind,
                    desc: desc,
                    id: id
                  }).then(function (_data) {
                    return {
                      data: _data.ops[0]
                    };
                  });

                case 2:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, undefined);
        }));

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    case 'delete':
      return _pageInfo2.default.delete({ id: id }).then(function (_data) {
        return {
          data: _data
        };
      });
    default:
      break;
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageType = __webpack_require__(21);

var _pageType2 = _interopRequireDefault(_pageType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var _req$body = req.body,
      type = _req$body.type,
      text = _req$body.text,
      id = _req$body.id;

  switch (type) {
    case 'save':
      return _pageType2.default.save({
        name: text
      }).then(function (_data) {
        return {
          data: _data.ops[0]
        };
      });
    case 'search':
      return _pageType2.default.search().then(function (_data) {
        return {
          data: _data
        };
      });
    case 'delete':
      return _pageType2.default.delete({ id: id }).then(function (_data) {
        return {
          data: _data
        };
      });
    default:
      break;
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _Menu = __webpack_require__(29);

var _Menu2 = _interopRequireDefault(_Menu);

var _Home = __webpack_require__(25);

var _Home2 = _interopRequireDefault(_Home);

var _Api = __webpack_require__(23);

var _Api2 = _interopRequireDefault(_Api);

var _Modify = __webpack_require__(27);

var _Modify2 = _interopRequireDefault(_Modify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement(
    'div',
    { className: 'main', style: { paddingLeft: 10, paddingRight: 10 } },
    _react2.default.createElement(_Menu2.default, null),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/home', component: _Home2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/api', component: _Api2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/modify', component: _Modify2.default })
  );
};

exports.default = App;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  pageTypeList: [],
  apiTypeList: []
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return '\n  <html>\n    <head>\n      <meta name="viewport" content="width=1000, initial-scale=1.0, maximum-scale=1.0">\n      <title>' + props.title + '</title>\n      <link href="/static/bootflat/css/bootstrap.min.css" rel="stylesheet">\n      <link href="/static/bootflat/css/site.min.css" rel="stylesheet">\n    </head>\n    <body>\n      <div id="root">' + (props.content || '') + '</div>\n      <script src="/static/vendor.js"></script>\n      <script src="/static/bundle.js"></script>\n      <script>\n        window.__INITSTATE__ = ' + JSON.stringify(props.__INITSTATE__ || {}) + '\n      </script>\n    </body>\n  </html>\n';
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(16);

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(17);

var _express = __webpack_require__(14);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(13);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _multer = __webpack_require__(15);

var _multer2 = _interopRequireDefault(_multer);

var _layout = __webpack_require__(12);

var _layout2 = _interopRequireDefault(_layout);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

var _initialState = __webpack_require__(11);

var _initialState2 = _interopRequireDefault(_initialState);

var _client = __webpack_require__(7);

var _pageType = __webpack_require__(9);

var _pageType2 = _interopRequireDefault(_pageType);

var _pageInfo = __webpack_require__(8);

var _pageInfo2 = _interopRequireDefault(_pageInfo);

var _api = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = (0, _express2.default)();
var upload = (0, _multer2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use('/static', _express2.default.static('./dist'));
app.use(_express2.default.static('./public'));
app.use('/static', _express2.default.static('./node_modules'));

app.get('*', function (req, res) {
  var hasMatchUrl = false;
  _api.pageList.filter(function (item) {
    if (item === '/') {
      hasMatchUrl = true;
    } else if (req.path.indexOf(item + '/') >= 0) {
      hasMatchUrl = true;
    }
  });
  if (hasMatchUrl) {
    res.send((0, _layout2.default)({ title: 'client', content: '', __INITSTATE__: _initialState2.default }));
  } else {
    res.sendStatus('404');
  }
});

// 通用成功返回默认信息
var successData = { state: 0, data: null };

app.post('*', function () {
  var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(req, res) {
    var sendData;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(_api.apiList.indexOf(req.path) >= 0)) {
              _context.next = 18;
              break;
            }

            // todo switch接口
            sendData = {};
            _context.t0 = req.path;
            _context.next = _context.t0 === _api.pageType ? 5 : _context.t0 === _api.pageInfo ? 10 : 15;
            break;

          case 5:
            _context.next = 7;
            return (0, _pageType2.default)(req);

          case 7:
            sendData = _context.sent;

            res.send(Object.assign({}, successData, sendData));
            return _context.abrupt('break', 16);

          case 10:
            _context.next = 12;
            return (0, _pageInfo2.default)(req);

          case 12:
            sendData = _context.sent;

            res.send(Object.assign({}, successData, sendData));
            return _context.abrupt('break', 16);

          case 15:
            return _context.abrupt('break', 16);

          case 16:
            _context.next = 19;
            break;

          case 18:
            res.sendStatus('404');

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

app.listen(_client.clientPort, function () {
  return console.log('start client: http://localhost:' + _client.clientPort);
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = __webpack_require__(35);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(37);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var file = {
    read: function read(_ref) {
        var name = _ref.name;

        return new Promise(function (resolve, reject) {
            _fs2.default.readFile('./public/pages/' + name + '.html', 'utf-8', function (err, data) {
                resolve(data);
            });
        });
    },
    write: function write(_ref2) {
        var name = _ref2.name,
            code = _ref2.code;

        return new Promise(function (resolve, reject) {
            _fs2.default.writeFile('./public/pages/' + name + '.html', decodeURIComponent(code), 'utf-8', function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
};

exports.default = file;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dbConfig = __webpack_require__(6);

var colName = 'pageInfo';

exports.default = {
  save: function save(_ref) {
    var name = _ref.name,
        kind = _ref.kind,
        desc = _ref.desc;

    return new Promise(function (resolve, reject) {
      _dbConfig.MongoClient.connect(_dbConfig.URL, function (err, db) {
        // TODO
        var collection = db.collection(colName);
        var id = 0;
        // 实现自增id，查询最后一个，然后把id+1
        collection.find({}).toArray(function (searchErr, result) {
          // console.log(result)
          if (result.length) {
            id = result[result.length - 1].id + 1;
          }
          collection.insert({ name: name, id: id, kind: kind, desc: desc, time: new Date().getTime() }, function (inerr, docs) {
            resolve(docs);
            db.close();
          });
        });
      });
    });
  },
  search: function search(_ref2) {
    var id = _ref2.id;

    return new Promise(function (resolve, reject) {
      _dbConfig.MongoClient.connect(_dbConfig.URL, function (err, db) {
        var collection = db.collection(colName);
        var where = {};
        if (id >= 0) {
          where = { id: id - 0 };
        }
        collection.find(where).toArray(function (searchErr, result) {
          if (searchErr) {
            reject('search error');
          } else {
            resolve(result);
          }
          db.close();
        });
      });
    });
  },
  updata: function updata(_ref3) {
    var id = _ref3.id,
        name = _ref3.name,
        kind = _ref3.kind,
        desc = _ref3.desc;

    return new Promise(function (resolve, reject) {
      _dbConfig.MongoClient.connect(_dbConfig.URL, function (err, db) {
        var collection = db.collection(colName);
      });
    });
  },
  delete: function _delete(_ref4) {
    var id = _ref4.id;

    return new Promise(function (resolve, reject) {
      _dbConfig.MongoClient.connect(_dbConfig.URL, function (err, db) {
        var collection = db.collection(colName);
        collection.remove({ id: id }, function (delErr, result) {
          if (delErr) {
            reject('delete pageType error');
          } else {
            resolve(result);
          }
          db.close();
        });
      });
    });
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dbConfig = __webpack_require__(6);

var colName = 'pageType';

exports.default = {
  save: function save(_ref) {
    var name = _ref.name;

    return new Promise(function (resolve, reject) {
      _dbConfig.MongoClient.connect(_dbConfig.URL, function (err, db) {
        // TODO
        var collection = db.collection(colName);
        var id = 0;
        // 实现自增id，查询最后一个，然后把id+1
        collection.find({}).toArray(function (searchErr, result) {
          // console.log(result)
          if (result.length) {
            id = result[result.length - 1].id + 1;
          }
          collection.insert({ name: name, id: id, time: new Date().getTime() }, function (inerr, docs) {
            resolve(docs);
            db.close();
          });
        });
      });
    });
  },
  search: function search() {
    return new Promise(function (resolve, reject) {
      _dbConfig.MongoClient.connect(_dbConfig.URL, function (err, db) {
        var collection = db.collection(colName);
        collection.find({}).toArray(function (searchErr, result) {
          if (searchErr) {
            reject('search error');
          } else {
            resolve(result);
          }
          db.close();
        });
      });
    });
  },
  delete: function _delete(_ref2) {
    var id = _ref2.id;

    return new Promise(function (resolve, reject) {
      _dbConfig.MongoClient.connect(_dbConfig.URL, function (err, db) {
        var collection = db.collection(colName);
        collection.remove({ id: id }, function (delErr, result) {
          if (delErr) {
            reject('delete pageType error');
          } else {
            resolve(result);
          }
          db.close();
        });
      });
    });
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_PAGETYPE = exports.ADD_PAGETYPE = 'ADD_PAGETYPE';
var UPDATA_PAGETYPE = exports.UPDATA_PAGETYPE = 'UPDATA_PAGETYPE';
var DELETE_PAGETYPE = exports.DELETE_PAGETYPE = 'DELETE_PAGETYPE';

var add_pageType = exports.add_pageType = function add_pageType(value) {
  return {
    type: ADD_PAGETYPE,
    value: value
  };
};

var updata_pageType = exports.updata_pageType = function updata_pageType(value) {
  return {
    type: UPDATA_PAGETYPE,
    value: value
  };
};

var delete_pageType = exports.delete_pageType = function delete_pageType(value) {
  return {
    type: DELETE_PAGETYPE,
    value: value
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Api = function (_Component) {
  _inherits(Api, _Component);

  function Api() {
    _classCallCheck(this, Api);

    return _possibleConstructorReturn(this, (Api.__proto__ || Object.getPrototypeOf(Api)).apply(this, arguments));
  }

  _createClass(Api, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Api2'
      );
    }
  }]);

  return Api;
}(_react.Component);

Api.propTypes = {};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return _extends({}, state);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Api);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fetch = __webpack_require__(2);

var _Select = __webpack_require__(28);

var _Select2 = _interopRequireDefault(_Select);

var _InputText = __webpack_require__(26);

var _InputText2 = _interopRequireDefault(_InputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditPageType = function (_Component) {
  _inherits(EditPageType, _Component);

  function EditPageType(props) {
    var _this2 = this;

    _classCallCheck(this, EditPageType);

    var _this = _possibleConstructorReturn(this, (EditPageType.__proto__ || Object.getPrototypeOf(EditPageType)).call(this, props));

    _this.createPageType = function () {
      var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(e) {
        var value, _ref2, _ref2$data, id, name;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = _this.refs.pageTypeInput.refs.pageTypeValue.value.trim();

                if (!value) {
                  _context.next = 11;
                  break;
                }

                _context.next = 4;
                return (0, _fetch.FETCH_PAGETYPE)({
                  type: 'save',
                  text: value
                });

              case 4:
                _ref2 = _context.sent;
                _ref2$data = _ref2.data;
                id = _ref2$data.id;
                name = _ref2$data.name;

                _this.props.addPageType({
                  id: id,
                  name: name
                });
                _context.next = 12;
                break;

              case 11:
                _this.setState({
                  typeError: true
                });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      typeError: false
    };
    return _this;
  }

  _createClass(EditPageType, [{
    key: 'render',
    value: function render() {
      var typeError = this.state.typeError;
      var pageTypeList = this.props.pageTypeList;

      return _react2.default.createElement(
        'div',
        { className: 'modal', style: { display: 'block' } },
        _react2.default.createElement(
          'div',
          { className: 'modal-dialog' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            _react2.default.createElement(
              'div',
              { className: 'modal-header' },
              _react2.default.createElement(
                'button',
                {
                  type: 'button',
                  className: 'close',
                  onClick: this.props.close
                },
                '\xD7'
              ),
              _react2.default.createElement(
                'h4',
                { className: 'modal-title' },
                '\u7F16\u8F91\u9875\u9762\u7C7B\u578B'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'modal-body' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-10' },
                  _react2.default.createElement(_InputText2.default, { ref: 'pageTypeInput', error: typeError })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-2' },
                  _react2.default.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'btn btn-success',
                      onClick: this.createPageType
                    },
                    '\u521B\u5EFA'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row', style: { marginTop: 10 } },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-10' },
                  _react2.default.createElement(_Select2.default, { data: pageTypeList })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-2' },
                  _react2.default.createElement(
                    'button',
                    { type: 'button', className: 'btn btn-danger' },
                    '\u5220\u9664'
                  )
                )
              )
            ),
            _react2.default.createElement('div', { className: 'modal-footer' })
          )
        )
      );
    }
  }]);

  return EditPageType;
}(_react.Component);

EditPageType.propTypes = {};

exports.default = EditPageType;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _CreatePage = __webpack_require__(32);

var _CreatePage2 = _interopRequireDefault(_CreatePage);

var _Modify = __webpack_require__(33);

var _Modify2 = _interopRequireDefault(_Modify);

var _pageLis = __webpack_require__(31);

var _pageLis2 = _interopRequireDefault(_pageLis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO 这个模块的路由需要优化一下

var pageTypeSwitch = function pageTypeSwitch(match) {
  return _react2.default.createElement(_CreatePage2.default, { id: match.params.id });
};

var CreatePageSplit = function CreatePageSplit(_ref) {
  var match = _ref.match;

  var pageComponent = _CreatePage2.default;
  if (match.params.pagetype === 'pageTypeModify') {
    pageComponent = _Modify2.default;
  }
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url, component: pageComponent }),
    _react2.default.createElement(_reactRouterDom.Route, {
      path: match.url + '/:id',
      render: function render(_ref2) {
        var match = _ref2.match;
        return pageTypeSwitch(match);
      }
    })
  );
};

var Home = function Home(_ref3) {
  var match = _ref3.match;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url, component: _pageLis2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/:pagetype', component: CreatePageSplit })
  );
};

exports.default = Home;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputText = function (_Component) {
  _inherits(InputText, _Component);

  function InputText(props) {
    _classCallCheck(this, InputText);

    var _this = _possibleConstructorReturn(this, (InputText.__proto__ || Object.getPrototypeOf(InputText)).call(this, props));

    _this.state = {
      // error: false
      text: ''
    };
    return _this;
  }

  _createClass(InputText, [{
    key: 'render',
    value: function render() {
      // let { error } = this.state
      var error = this.props.error;

      return _react2.default.createElement(
        'div',
        { className: 'form-group ' + (error ? ' has-error has-feedback' : '') },
        _react2.default.createElement('input', {
          type: 'text',
          ref: 'pageTypeValue',
          className: 'form-control',
          placeholder: '\u8BF7\u8F93\u5165\u9875\u9762\u7C7B\u578B'
        }),
        _react2.default.createElement('span', {
          className: 'glyphicon glyphicon-remove form-control-feedback',
          style: { right: 10, display: error ? '' : 'none' }
        })
      );
    }
  }]);

  return InputText;
}(_react.Component);

exports.default = InputText;


InputText.propTypes = {};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modify = function (_Component) {
  _inherits(Modify, _Component);

  function Modify() {
    _classCallCheck(this, Modify);

    return _possibleConstructorReturn(this, (Modify.__proto__ || Object.getPrototypeOf(Modify)).apply(this, arguments));
  }

  _createClass(Modify, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Modify'
      );
    }
  }]);

  return Modify;
}(_react.Component);

Modify.propTypes = {};

exports.default = Modify;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.focusHandle = function (e) {
      _this.setState({
        showList: true
      });
    };

    _this.blurHandle = function (e) {
      _this.setState({
        showList: false
      });
    };

    _this.state = {
      showList: false
    };
    return _this;
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var showList = this.state.showList;
      var data = this.props.data;

      return _react2.default.createElement(
        'div',
        {
          className: 'selecter ' + (showList ? 'open' : 'closed'),
          onFocus: this.focusHandle,
          onBlur: this.blurHandle,
          tabIndex: '0'
        },
        _react2.default.createElement(
          'select',
          {
            name: 'selecter_basic',
            className: 'selecter_1 selecter-element',
            tabIndex: '-1'
          },
          data.map(function (item) {
            var id = item.id,
                name = item.name;

            return _react2.default.createElement(
              'option',
              { value: id, key: id },
              name
            );
          })
        ),
        _react2.default.createElement(
          'span',
          { className: 'selecter-selected' },
          data[0].name
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'selecter-options',
            style: { display: showList ? 'block' : 'none' }
          },
          data.map(function (item) {
            var id = item.id,
                name = item.name;

            return _react2.default.createElement(
              'span',
              { className: 'selecter-item', 'data-value': id, key: id },
              name
            );
          })
        )
      );
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {};

exports.default = Select;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _Search = __webpack_require__(30);

var _Search2 = _interopRequireDefault(_Search);

var _modal = __webpack_require__(34);

var _modal2 = _interopRequireDefault(_modal);

var _pageType = __webpack_require__(22);

var _fetch = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.handleMouseEnter = function (type) {
      _this.navChange(type, true);
    };

    _this.handleMouseLeave = function (type) {
      _this.navChange(type, false);
    };

    _this.navChange = function (type, bool) {
      var nav = _this.state.nav;

      switch (type) {
        case 'home':
          nav.homeListSlide = bool;
          break;
        case 'api':
          nav.apiListSlide = bool;
          break;
        default:
          nav.modifyListSlide = bool;
          break;
      }
      _this.setState({
        nav: nav
      });
    };

    _this.state = {
      nav: {
        homeListSlide: false,
        apiListSlide: false,
        modifyListSlide: false
      }
    };
    return _this;
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _fetch.FETCH_PAGETYPE)({
        type: 'search'
      }).then(function (data) {
        _this2.props.updataPageType(data.data);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'navbar navbar-inverse' },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'li',
              {
                className: '' + (this.state.nav.homeListSlide ? 'dropdown open' : 'dropup'),
                onMouseEnter: this.handleMouseEnter.bind(this, 'home'),
                onMouseLeave: this.handleMouseLeave.bind(this, 'home')
              },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' },
                '\u9996\u9875',
                _react2.default.createElement('b', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '/home/createPage' },
                    '\u521B\u5EFA\u9875\u9762'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '/home/pageTypeModify' },
                    '\u7F16\u8F91\u9875\u9762\u7C7B\u578B'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/api' },
                '\u63A5\u53E3',
                _react2.default.createElement('b', { className: 'caret' })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/modify' },
                '\u914D\u7F6E'
              )
            )
          ),
          _react2.default.createElement(_Search2.default, null)
        )
      );
    }
  }]);

  return Menu;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // addPageType: value => {
    //   dispatch(add_pageType(value));
    // },
    updataPageType: function updataPageType(data) {
      dispatch((0, _pageType.updata_pageType)(data));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Menu);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "form",
        { className: "navbar-form navbar-right" },
        _react2.default.createElement(
          "div",
          { className: "form-search search-only" },
          _react2.default.createElement("i", { className: "search-icon glyphicon glyphicon-search" }),
          _react2.default.createElement("input", { type: "text", className: "form-control search-query" })
        )
      );
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;


Search.propTypes = {};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _fetch = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thead = function Thead() {
  return _react2.default.createElement(
    'thead',
    null,
    _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'th',
        null,
        '#'
      ),
      _react2.default.createElement(
        'th',
        null,
        '\u6587\u4EF6\u540D'
      ),
      _react2.default.createElement(
        'th',
        null,
        '\u63CF\u8FF0'
      ),
      _react2.default.createElement(
        'th',
        null,
        '\u9875\u9762\u7C7B\u578B'
      ),
      _react2.default.createElement(
        'th',
        null,
        '\u64CD\u4F5C'
      )
    )
  );
};

var getKindName = function getKindName(kind, pageTypeList) {
  var name = '';
  pageTypeList.filter(function (item) {
    if (item.id === kind) {
      name = item.name;
    }
  });
  return name;
};

var PageList = function (_Component) {
  _inherits(PageList, _Component);

  function PageList(props) {
    _classCallCheck(this, PageList);

    var _this = _possibleConstructorReturn(this, (PageList.__proto__ || Object.getPrototypeOf(PageList)).call(this, props));

    _this.state = {
      pageList: []
    };
    return _this;
  }

  _createClass(PageList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _fetch.FETCH_PAGEINFO)({
        type: 'search'
      }).then(function (data) {
        var pageList = [];
        data.data.map(function (_ref) {
          var id = _ref.id,
              name = _ref.name,
              desc = _ref.desc,
              kind = _ref.kind;

          pageList.push({
            name: name + '.html',
            desc: desc,
            id: id,
            kind: kind,
            kindName: getKindName(kind, _this2.props.pageTypeList)
          });
        });

        _this2.setState({
          pageList: pageList
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'table',
        { className: 'table table-striped' },
        _react2.default.createElement(Thead, null),
        _react2.default.createElement(
          'tbody',
          null,
          this.state.pageList.map(function (_ref2) {
            var id = _ref2.id,
                name = _ref2.name,
                desc = _ref2.desc,
                kindName = _ref2.kindName;

            return _react2.default.createElement(
              'tr',
              { key: id },
              _react2.default.createElement(
                'th',
                { scope: 'row' },
                id
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '/pages/' + name, target: '_blank' },
                  name
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                desc
              ),
              _react2.default.createElement(
                'td',
                null,
                kindName
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '/home/createPage/' + id },
                  '\u7F16\u8F91'
                )
              )
            );
          })
        )
      );
    }
  }]);

  return PageList;
}(_react.Component);

PageList.propTypes = {};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    pageTypeList: state.pageTypeList
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PageList);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _fetch = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreagePage = function (_Component) {
  _inherits(CreagePage, _Component);

  function CreagePage(props) {
    _classCallCheck(this, CreagePage);

    var _this = _possibleConstructorReturn(this, (CreagePage.__proto__ || Object.getPrototypeOf(CreagePage)).call(this, props));

    _this.handlerClickCreagePage = function (e) {
      var id = _this.props.id;
      var _this$refs = _this.refs,
          pageName = _this$refs.pageName,
          pageType = _this$refs.pageType,
          pageDesc = _this$refs.pageDesc,
          pageCode = _this$refs.pageCode;

      var name = pageName.value;
      var kind = pageType.value - 0;
      var desc = pageDesc.value;
      var code = pageCode.value;

      var changeType = 'save';
      if (id >= 0) {
        changeType = 'updata';
      }

      if (!desc || !code || !name) {
        _this.setState({
          errorMessage: '请填写页面信息'
        });
      } else {
        (0, _fetch.FETCH_PAGEINFO)({
          type: changeType,
          name: name,
          kind: kind,
          desc: desc,
          code: code,
          id: id
        });
      }
    };

    _this.handlerChangePageType = function (e) {
      _this.setState({
        type: e.target.value - 0
      });
    };

    _this.handlerChangeName = function (e) {
      _this.setState({
        name: e.target.value
      });
    };

    _this.handlerChangeDesc = function (e) {
      _this.setState({
        desc: e.target.value
      });
    };

    _this.handlerChangeCode = function (e) {
      _this.setState({
        code: e.target.value
      });
    };

    _this.state = {
      type: props.pageType || 0,
      desc: props.desc || '',
      code: props.code || '',
      name: props.name || '',
      errorMessage: '',
      isUpdata: false
    };
    return _this;
  }

  _createClass(CreagePage, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee() {
        var id, _ref2, data, state, kind, desc, code, name;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.props.id;

                if (!(id >= 0)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 4;
                return (0, _fetch.FETCH_PAGEINFO)({
                  type: 'searchfile',
                  id: id
                });

              case 4:
                _ref2 = _context.sent;
                data = _ref2.data;
                state = _ref2.state;
                kind = data.kind, desc = data.desc, code = data.code, name = data.name;

                this.setState({
                  type: kind,
                  desc: desc,
                  code: code,
                  name: name,
                  isUpdata: true
                });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          type = _state.type,
          desc = _state.desc,
          code = _state.code,
          name = _state.name,
          isUpdata = _state.isUpdata;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h5',
          { className: 'modal-title' },
          '\u521B\u5EFA\u9875\u9762'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'select',
              {
                className: 'form-control',
                onChange: this.handlerChangePageType,
                value: type,
                ref: 'pageType'
              },
              this.props.pageTypeList.map(function (_ref3) {
                var name = _ref3.name,
                    id = _ref3.id;
                return _react2.default.createElement(
                  'option',
                  { key: id, value: id },
                  name
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row', style: { marginTop: 10 } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement('input', {
                type: 'text',
                ref: 'pageName',
                className: 'form-control',
                placeholder: '\u8BF7\u8F93\u5165\u6587\u4EF6\u540D',
                value: name,
                onChange: this.handlerChangeName,
                readOnly: isUpdata ? true : false
              }),
              _react2.default.createElement(
                'span',
                { className: 'input-group-addon' },
                '.html'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row', style: { marginTop: 10 } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement('input', {
              type: 'text',
              ref: 'pageDesc',
              className: 'form-control',
              placeholder: '\u8BF7\u8F93\u5165\u9875\u9762\u63CF\u8FF0',
              value: desc,
              onChange: this.handlerChangeDesc
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row', style: { marginTop: 10 } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement('textarea', {
              className: 'form-control',
              ref: 'pageCode',
              rows: '20',
              placeholder: '\u8BF7\u7C98\u8D34\u9875\u9762\u6E90\u4EE3\u7801',
              value: code,
              onChange: this.handlerChangeCode
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row', style: { marginTop: 10 } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            !isUpdata && _react2.default.createElement(
              'button',
              {
                type: 'button',
                className: 'btn btn-primary',
                onClick: this.handlerClickCreagePage
              },
              '\u521B\u5EFA'
            ),
            isUpdata && _react2.default.createElement(
              'button',
              {
                type: 'button',
                className: 'btn btn-primary',
                onClick: this.handlerClickCreagePage
              },
              '\u4FEE\u6539'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row', style: { marginTop: 10 } },
          _react2.default.createElement(
            'div',
            {
              className: 'col-xs-12',
              style: { display: this.state.errorMessage ? 'block' : 'none' }
            },
            _react2.default.createElement(
              'div',
              { className: 'alert alert-danger', role: 'alert' },
              this.state.errorMessage
            )
          )
        )
      );
    }
  }]);

  return CreagePage;
}(_react.Component);

CreagePage.propTypes = {};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    pageTypeList: state.pageTypeList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // updataPageType: data => {
    //   dispatch(updata_pageType(data));
    // },
    // deletePageType: data => {
    //   dispatch(delete_pageType(data))
    // }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CreagePage);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _fetch = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {updata_pageType, delete_pageType} from '../../action/pageType'

var ModifyPageType = function (_Component) {
  _inherits(ModifyPageType, _Component);

  function ModifyPageType(props) {
    var _this2 = this;

    _classCallCheck(this, ModifyPageType);

    var _this = _possibleConstructorReturn(this, (ModifyPageType.__proto__ || Object.getPrototypeOf(ModifyPageType)).call(this, props));

    _this.handlerChangePageType = function (e) {
      _this.setState({
        select: e.target.value - 0
      });
    };

    _this.handlerFocus = function (e) {
      _this.setState({
        errorMessage: ''
      });
    };

    _this.createPageType = function () {
      var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(e) {
        var value, _ref2, _ref2$data, id, name;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = _this.refs.pageTypeInput.value.trim();

                if (!value) {
                  _context.next = 11;
                  break;
                }

                _context.next = 4;
                return (0, _fetch.FETCH_PAGETYPE)({
                  type: 'save',
                  text: value
                });

              case 4:
                _ref2 = _context.sent;
                _ref2$data = _ref2.data;
                id = _ref2$data.id;
                name = _ref2$data.name;

                // 偷懒 直接刷新 没去更新state
                window.location.reload();
                // this.props.addPageType({
                //   id,
                //   name,
                // });
                _context.next = 12;
                break;

              case 11:
                _this.setState({
                  errorMessage: '请输入页面类型'
                });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.deletePageType = function () {
      var _ref3 = _asyncToGenerator(_regenerator2.default.mark(function _callee2(e) {
        var id, _ref4, state, data;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _this.refs.pageTypeSelect.value - 0;
                _context2.next = 3;
                return (0, _fetch.FETCH_PAGETYPE)({
                  type: 'delete',
                  id: id
                });

              case 3:
                _ref4 = _context2.sent;
                state = _ref4.state;
                data = _ref4.data;

                if (!state && data.ok === 1) {
                  // 偷懒 直接刷新
                  window.location.reload();
                }

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.state = {
      select: null,
      errorMessage: ''
    };
    return _this;
  }
  // componentDidMount() {
  //   FETCH_PAGETYPE({
  //     type: 'search',
  //   }).then(data => {
  //     this.props.updataPageType(data.data);
  //   })
  // }

  _createClass(ModifyPageType, [{
    key: 'render',
    value: function render() {
      var pageTypeList = this.props.pageTypeList;
      var select = this.state.select;

      var selectValue = 0;
      if (pageTypeList[0]) {
        selectValue = pageTypeList[0].id;
      }
      if (select != null) {
        selectValue = select;
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h5',
          { className: 'modal-title' },
          '\u7F16\u8F91\u9875\u9762\u7C7B\u578B'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'text',
              ref: 'pageTypeInput',
              className: 'form-control',
              onFocus: this.handlerFocus,
              placeholder: '\u8BF7\u8F93\u5165\u9875\u9762\u7C7B\u578B'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-2' },
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                className: 'btn btn-success',
                onClick: this.createPageType
              },
              '\u521B\u5EFA'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row', style: { marginTop: 10 } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement(
              'select',
              {
                className: 'form-control',
                onChange: this.handlerChangePageType,
                value: selectValue,
                ref: 'pageTypeSelect'
              },
              this.props.pageTypeList.map(function (_ref5) {
                var name = _ref5.name,
                    id = _ref5.id;
                return _react2.default.createElement(
                  'option',
                  { key: id, value: id },
                  name
                );
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-2' },
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                className: 'btn btn-danger',
                onClick: this.deletePageType
              },
              '\u5220\u9664'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row', style: { marginTop: 10 } },
          _react2.default.createElement(
            'div',
            {
              className: 'col-xs-10',
              style: { display: this.state.errorMessage ? 'block' : 'none' }
            },
            _react2.default.createElement(
              'div',
              { className: 'alert alert-danger', role: 'alert' },
              this.state.errorMessage
            )
          )
        )
      );
    }
  }]);

  return ModifyPageType;
}(_react.Component);

ModifyPageType.propTypes = {};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    pageTypeList: state.pageTypeList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // updataPageType: data => {
    //   dispatch(updata_pageType(data));
    // },
    // deletePageType: data => {
    //   dispatch(delete_pageType(data))
    // }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ModifyPageType);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(38);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _EditPageType = __webpack_require__(24);

var _EditPageType2 = _interopRequireDefault(_EditPageType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = null;

var closeModal = function closeModal(e) {
  if (container) {
    document.body.removeChild(container);
    container = null;
  }
};

var modal = function modal(props) {
  closeModal();
  container = document.createElement('div');
  document.body.appendChild(container);
  _reactDom2.default.render(_react2.default.createElement(_EditPageType2.default, {
    close: closeModal,
    pageTypeList: props.pageTypeList,
    addPageType: props.addPageType
  }), container);
};

exports.default = modal;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })
/******/ ]);