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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
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
var home = exports.home = '/';
var api = exports.api = '/api';
var modify = exports.modify = '/modify';
// export const favIco = '/favicon.ico'

// 接口路由地址
var pageType = exports.pageType = '/pageType';

var pageList = exports.pageList = [home, api, modify];
var apiList = exports.apiList = [pageType];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageType = __webpack_require__(17);

var _pageType2 = _interopRequireDefault(_pageType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var _req$body = req.body,
      type = _req$body.type,
      text = _req$body.text;

  switch (type) {
    case 'save':
      return _pageType2.default.save({
        name: text
      }).then(function (_data) {
        console.log(_data);
        return _data;
      });
    default:
      break;
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _Menu = __webpack_require__(24);

var _Menu2 = _interopRequireDefault(_Menu);

var _Home = __webpack_require__(20);

var _Home2 = _interopRequireDefault(_Home);

var _Api = __webpack_require__(18);

var _Api2 = _interopRequireDefault(_Api);

var _Modify = __webpack_require__(22);

var _Modify2 = _interopRequireDefault(_Modify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement(
    'div',
    { className: 'main', style: { paddingLeft: 10, paddingRight: 10 } },
    _react2.default.createElement(_Menu2.default, null),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/api', component: _Api2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/modify', component: _Modify2.default })
  );
};

exports.default = App;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return '\n  <html>\n    <head>\n      <meta name="viewport" content="width=1000, initial-scale=1.0, maximum-scale=1.0">\n      <title>' + props.title + '</title>\n      <link href="/static/bootflat/css/bootstrap.min.css" rel="stylesheet">\n      <link href="/static/bootflat/css/site.min.css" rel="stylesheet">\n    </head>\n    <body>\n      <div id="root">' + (props.content || '') + '</div>\n      <script src="/static/vendor.js"></script>\n      <script src="/static/bundle.js"></script>\n      <script>\n        window.__INITSTATE__ = ' + JSON.stringify(props.__INITSTATE__ || {}) + '\n      </script>\n    </body>\n  </html>\n';
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(13);

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(14);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(10);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _multer = __webpack_require__(12);

var _multer2 = _interopRequireDefault(_multer);

var _layout = __webpack_require__(9);

var _layout2 = _interopRequireDefault(_layout);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

var _initialState = __webpack_require__(8);

var _initialState2 = _interopRequireDefault(_initialState);

var _client = __webpack_require__(4);

var _pageType = __webpack_require__(6);

var _pageType2 = _interopRequireDefault(_pageType);

var _api = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = (0, _express2.default)();
var upload = (0, _multer2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use('/static', _express2.default.static('./dist'));
app.use('/static', _express2.default.static('./node_modules'));

app.get('*', function (req, res) {
  if (_api.pageList.indexOf(req.path) >= 0) {
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
              _context.next = 13;
              break;
            }

            // todo switch接口
            sendData = {};
            _context.t0 = req.path;
            _context.next = _context.t0 === _api.pageType ? 5 : 10;
            break;

          case 5:
            _context.next = 7;
            return (0, _pageType2.default)(req);

          case 7:
            sendData = _context.sent;

            res.send(Object.assign({}, successData, sendData));
            return _context.abrupt('break', 11);

          case 10:
            return _context.abrupt('break', 11);

          case 11:
            _context.next = 14;
            break;

          case 13:
            res.sendStatus('404');

          case 14:
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URL = exports.MongoClient = undefined;

var _mongodb = __webpack_require__(28);

var _mongodb2 = _interopRequireDefault(_mongodb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoClient = exports.MongoClient = _mongodb2.default.MongoClient;
var URL = exports.URL = 'mongodb://localhost:27017/autoDevelopData';

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dbConfig = __webpack_require__(16);

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

          collection.insert({ name: name, id: id }, function (inerr, docs) {
            resolve(docs);
            db.close();
          });
        });
      });
    });
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

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
/* 19 */
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

var _fetch = __webpack_require__(27);

var _Select = __webpack_require__(23);

var _Select2 = _interopRequireDefault(_Select);

var _InputText = __webpack_require__(21);

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
        var value, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = _this.refs.pageTypeInput.refs.pageTypeValue.value.trim();

                if (!value) {
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return (0, _fetch.FETCH_SAVE_PAGETYPE)({
                  type: 'save',
                  text: value
                });

              case 4:
                result = _context.sent;

                // TODO
                console.log(result);
                _context.next = 9;
                break;

              case 8:
                _this.setState({
                  typeError: true
                });

              case 9:
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
                  _react2.default.createElement(_Select2.default, null)
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Home2'
      );
    }
  }]);

  return Home;
}(_react.Component);

Home.propTypes = {};

exports.default = Home;

/***/ }),
/* 21 */
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
/* 22 */
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
/* 23 */
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
          _react2.default.createElement(
            'option',
            { value: '1' },
            'One'
          ),
          _react2.default.createElement(
            'option',
            { value: '2' },
            'Two'
          ),
          _react2.default.createElement(
            'option',
            { value: '3' },
            'Three'
          ),
          _react2.default.createElement(
            'option',
            { value: '4' },
            'Four'
          ),
          _react2.default.createElement(
            'option',
            { value: '5' },
            'Five'
          ),
          _react2.default.createElement(
            'option',
            { value: '6' },
            'Six'
          ),
          _react2.default.createElement(
            'option',
            { value: '7' },
            'Seven'
          ),
          _react2.default.createElement(
            'option',
            { value: '8' },
            'Eight'
          ),
          _react2.default.createElement(
            'option',
            { value: '9' },
            'Nine'
          ),
          _react2.default.createElement(
            'option',
            { value: '10' },
            'Ten'
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'selecter-selected' },
          'One'
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'selecter-options',
            style: { display: showList ? 'block' : 'none' }
          },
          _react2.default.createElement(
            'span',
            { className: 'selecter-item selected', 'data-value': '1' },
            'One'
          ),
          _react2.default.createElement(
            'span',
            { className: 'selecter-item', 'data-value': '2' },
            'Two'
          ),
          _react2.default.createElement(
            'span',
            { className: 'selecter-item', 'data-value': '3' },
            'Three'
          ),
          _react2.default.createElement(
            'span',
            { className: 'selecter-item', 'data-value': '4' },
            'Four'
          ),
          _react2.default.createElement(
            'span',
            { className: 'selecter-item', 'data-value': '5' },
            'Five'
          ),
          _react2.default.createElement(
            'span',
            { className: 'selecter-item', 'data-value': '6' },
            'Six'
          ),
          _react2.default.createElement(
            'span',
            { className: 'selecter-item', 'data-value': '7' },
            'Seven'
          ),
          _react2.default.createElement(
            'span',
            { className: 'selecter-item', 'data-value': '8' },
            'Eight'
          ),
          _react2.default.createElement(
            'span',
            { className: 'selecter-item', 'data-value': '9' },
            'Nine'
          ),
          _react2.default.createElement(
            'span',
            { className: 'selecter-item', 'data-value': '10' },
            'Ten'
          )
        )
      );
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {};

exports.default = Select;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _Search = __webpack_require__(25);

var _Search2 = _interopRequireDefault(_Search);

var _modal = __webpack_require__(26);

var _modal2 = _interopRequireDefault(_modal);

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

    _this.handleClickPageType = function (e) {
      (0, _modal2.default)({ type: 'editPageType' });
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
                    { href: 'javascript:void(0)' },
                    '\u521B\u5EFA\u9875\u9762'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    {
                      onClick: this.handleClickPageType,
                      href: 'javascript:void(0)'
                    },
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

exports.default = Menu;

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _EditPageType = __webpack_require__(19);

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
  _reactDom2.default.render(_react2.default.createElement(_EditPageType2.default, { close: closeModal }), container);
};

exports.default = modal;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FETCH_SAVE_PAGETYPE = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

// 页面类型接口
var pagetType = '/pageType';

// 页面类型一些接口
var FETCH_SAVE_PAGETYPE = exports.FETCH_SAVE_PAGETYPE = function () {
  var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(data) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(pagetType, {
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

  return function FETCH_SAVE_PAGETYPE(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })
/******/ ]);