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

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_PAGETYPE = exports.ADD_PAGETYPE = 'ADD_PAGETYPE';
var UPDATA_PAGETYPE = exports.UPDATA_PAGETYPE = 'UPDATA_PAGETYPE';

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
exports.default = {
  pageTypeList: [],
  apiTypeList: []
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FETCH_PAGETYPE = undefined;

var _regenerator = __webpack_require__(6);

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

  return function FETCH_PAGETYPE(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 服务度模式一些参数
 */

var serverEntry = exports.serverEntry = {
  server: './server/index.js'
};
var serverPort = exports.serverPort = 3300;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _Menu = __webpack_require__(22);

var _Menu2 = _interopRequireDefault(_Menu);

var _Home = __webpack_require__(18);

var _Home2 = _interopRequireDefault(_Home);

var _Api = __webpack_require__(16);

var _Api2 = _interopRequireDefault(_Api);

var _Modify = __webpack_require__(20);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _initialState = __webpack_require__(4);

var _initialState2 = _interopRequireDefault(_initialState);

var _pageType = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default;
  var action = arguments[1];

  switch (action.type) {
    case _pageType.ADD_PAGETYPE:
      return Object.assign({}, state, {
        pageTypeList: [].concat(_toConsumableArray(state.pageTypeList), [_extends({}, action.value)])
      });
    case _pageType.UPDATA_PAGETYPE:
      return Object.assign({}, state, {
        pageTypeList: [].concat(_toConsumableArray(action.value))
      });
    default:
      return state;
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return '\n  <html>\n    <head>\n      <meta name="viewport" content="width=1000, initial-scale=1.0, maximum-scale=1.0">\n      <title>' + props.title + '</title>\n      <link href="/static/bootflat/css/bootstrap.min.css" rel="stylesheet">\n      <link href="/static/bootflat/css/site.min.css" rel="stylesheet">\n    </head>\n    <body>\n      <div id="root">' + (props.content || '') + '</div>\n      <script src="/static/vendor.js"></script>\n      <script src="/static/bundle.js"></script>\n      <script>\n        window.__INITSTATE__ = ' + JSON.stringify(props.__INITSTATE__ || {}) + '\n      </script>\n    </body>\n  </html>\n';
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(12);

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(13);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _redux = __webpack_require__(14);

var _reactRedux = __webpack_require__(1);

var _layout = __webpack_require__(10);

var _layout2 = _interopRequireDefault(_layout);

var _server3 = __webpack_require__(7);

var _reducer = __webpack_require__(9);

var _reducer2 = _interopRequireDefault(_reducer);

var _initialState = __webpack_require__(4);

var _initialState2 = _interopRequireDefault(_initialState);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default);
var app = (0, _express2.default)();
app.use('/static', _express2.default.static('./dist'));
app.use('/static', _express2.default.static('./node_modules'));

app.get('*', function (req, res) {
  var context = {};
  var html = _server2.default.renderToString(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(_App2.default, null)
    )
  ));
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
  } else {
    res.send((0, _layout2.default)({ title: 'server', content: html, __INITSTATE__: _initialState2.default }));
  }
});
app.listen(_server3.serverPort, function () {
  return console.log('start server: http://localhost:' + _server3.serverPort);
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fetch = __webpack_require__(5);

var _Select = __webpack_require__(21);

var _Select2 = _interopRequireDefault(_Select);

var _InputText = __webpack_require__(19);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

var _fetch = __webpack_require__(5);

var _pageType = __webpack_require__(2);

var _CreatePage = __webpack_require__(24);

var _CreatePage2 = _interopRequireDefault(_CreatePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const CreatePage = () => <h3>CreatePage</h3>

var ModifyPage = function ModifyPage(_ref) {
  var match = _ref.match;

  return _react2.default.createElement(
    'div',
    null,
    'modify'
  );
};

var pageTypeSwitch = function pageTypeSwitch(match) {
  switch (match.params.pagetype) {
    case 'createPage':
      return _react2.default.createElement(_CreatePage2.default, null);
    case 'pageTypeModify':
      return _react2.default.createElement(ModifyPage, null);
    default:
      return _react2.default.createElement(
        'div',
        null,
        'default'
      );
  }
};

var Home = function Home(_ref2) {
  var match = _ref2.match;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/:pagetype', render: function render(_ref3) {
        var match = _ref3.match;
        return pageTypeSwitch(match);
      } }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url, render: function render() {
        return _react2.default.createElement(
          'h3',
          null,
          'Home2'
        );
      } })
  );
};

exports.default = Home;

/*class Home extends Component {
  componentDidMount() {
    // 异步获取页面类型
    FETCH_PAGETYPE({
      type: 'search',
    }).then(data => {
      this.props.updataPageType(data.data)
    })
  }

  render() {
    return (
      <div>
        <h3>home</h3>
      </div>
    )
  }
}

Home.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updataPageType: data => {
      dispatch(updata_pageType(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)*/

/***/ }),
/* 19 */
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
/* 20 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _Search = __webpack_require__(23);

var _Search2 = _interopRequireDefault(_Search);

var _modal = __webpack_require__(25);

var _modal2 = _interopRequireDefault(_modal);

var _pageType = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*const PageInfo = ({ match }) => {
  return (
    <ul className="dropdown-menu">
      <li>
        <Link to={`${match.url}/createPage`}>创建页面</Link>
        </li>
      <li>
        <Link to={`${match.url}/pageTypeModify`}>编辑页面类型</Link>
      </li>
    </ul>
  )
}*/

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
    key: 'render',


    // handleClickPageType = e => {
    //   modal({type: 'editPageType', pageTypeList: this.props.pageTypeList, addPageType: this.props.addPageType})
    // }
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
    addPageType: function addPageType(value) {
      dispatch((0, _pageType.add_pageType)(value));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Menu);

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
/* 24 */
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

var CreagePage = function (_Component) {
  _inherits(CreagePage, _Component);

  function CreagePage() {
    _classCallCheck(this, CreagePage);

    return _possibleConstructorReturn(this, (CreagePage.__proto__ || Object.getPrototypeOf(CreagePage)).apply(this, arguments));
  }

  _createClass(CreagePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'creage page test'
      );
    }
  }]);

  return CreagePage;
}(_react.Component);

CreagePage.propTypes = {};

exports.default = CreagePage;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _EditPageType = __webpack_require__(17);

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
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })
/******/ ]);