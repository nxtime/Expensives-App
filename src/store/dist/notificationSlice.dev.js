"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.currentNotification = exports.resetNotification = exports.updateNotification = void 0;

var _toolkit = require("@reduxjs/toolkit");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  changed: false
};
var notificationSlice = (0, _toolkit.createSlice)({
  name: 'notification',
  initialState: initialState,
  reducers: {
    updateNotification: function updateNotification(state, action) {
      state = _objectSpread({}, action.payload, {
        changed: true
      });
      return state;
    },
    resetNotification: function resetNotification(state) {
      state = _objectSpread({}, initialState);
      return state;
    }
  }
});
var _notificationSlice$ac = notificationSlice.actions,
    updateNotification = _notificationSlice$ac.updateNotification,
    resetNotification = _notificationSlice$ac.resetNotification;
exports.resetNotification = resetNotification;
exports.updateNotification = updateNotification;

var currentNotification = function currentNotification(state) {
  return state.notification;
};

exports.currentNotification = currentNotification;
var _default = notificationSlice.reducer;
exports["default"] = _default;