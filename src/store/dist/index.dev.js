"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _notificationSlice = _interopRequireDefault(require("./notificationSlice"));

var _listItemsSlice = _interopRequireDefault(require("./listItemsSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    notification: _notificationSlice["default"],
    listItems: _listItemsSlice["default"]
  },
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  }
});
var _default = store;
exports["default"] = _default;