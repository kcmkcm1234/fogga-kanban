(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/components/Routers/Settings/child.jsx":
/*!***************************************************!*\
  !*** ./src/components/Routers/Settings/child.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Child = function (_React$Component) {\n  _inherits(Child, _React$Component);\n\n  function Child() {\n    _classCallCheck(this, Child);\n\n    return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));\n  }\n\n  _createClass(Child, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(\n          \"section\",\n          { className: \"kanban__nav\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"kanban__nav-wrapper\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"kanban__nav-name\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"kanban-name\" },\n                \"Studio Settings\"\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"kanban__main\" },\n          _react2.default.createElement(\"div\", { className: \"kanban__main-wrapper\" })\n        )\n      );\n    }\n  }]);\n\n  return Child;\n}(_react2.default.Component);\n\nexports.default = Child;\n\n//# sourceURL=webpack:///./src/components/Routers/Settings/child.jsx?");

/***/ }),

/***/ "./src/components/Routers/Settings/index.jsx":
/*!***************************************************!*\
  !*** ./src/components/Routers/Settings/index.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _child = __webpack_require__(/*! ./child.jsx */ \"./src/components/Routers/Settings/child.jsx\");\n\nvar _child2 = _interopRequireDefault(_child);\n\nvar _Logo = __webpack_require__(/*! ../../Logo/Logo.jsx */ \"./src/components/Logo/Logo.jsx\");\n\nvar _Logo2 = _interopRequireDefault(_Logo);\n\nvar _Header = __webpack_require__(/*! ../../Header/Header.jsx */ \"./src/components/Header/Header.jsx\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Sidebar = __webpack_require__(/*! ../../Sidebar/Sidebar.jsx */ \"./src/components/Sidebar/Sidebar.jsx\");\n\nvar _Sidebar2 = _interopRequireDefault(_Sidebar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Settings = function (_React$Component) {\n  _inherits(Settings, _React$Component);\n\n  function Settings() {\n    _classCallCheck(this, Settings);\n\n    return _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).apply(this, arguments));\n  }\n\n  _createClass(Settings, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"kanban-wrapper\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"kanban\" },\n          _react2.default.createElement(_Logo2.default, null),\n          _react2.default.createElement(_Header2.default, null),\n          _react2.default.createElement(_Sidebar2.default, null),\n          _react2.default.createElement(_child2.default, null)\n        )\n      );\n    }\n  }]);\n\n  return Settings;\n}(_react2.default.Component);\n\nexports.default = Settings;\n\n//# sourceURL=webpack:///./src/components/Routers/Settings/index.jsx?");

/***/ })

}]);