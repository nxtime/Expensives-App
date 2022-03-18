"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateItem = exports.addItem = void 0;

var _toolkit = require("@reduxjs/toolkit");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = [{
  id: 0,
  title: "Toilet Paper",
  amount: 94.12,
  date: new Date(2020, 7, 14).toDateString()
}, {
  id: 1,
  title: "New TV",
  amount: 799.49,
  date: new Date(2021, 2, 12).toDateString()
}, {
  id: 2,
  title: "Car Insurance",
  amount: 294.67,
  date: new Date(2021, 2, 28).toDateString()
}, {
  id: 3,
  title: "New Desk (Wooden)",
  amount: 450,
  date: new Date(2021, 5, 12).toDateString()
}];
var listItemsSlicer = (0, _toolkit.createSlice)({
  name: 'listItems',
  initialState: initialState,
  reducers: {
    addItem: function addItem(state, action) {
      var expenseData = _objectSpread({}, action.payload, {
        id: state.length
      });

      state = [].concat(_toConsumableArray(state), [expenseData]);
      return state;
    },
    updateItem: function updateItem(state, action) {
      state[action.payload.id] = action.payload;
      return state;
    }
  }
});
var _listItemsSlicer$acti = listItemsSlicer.actions,
    addItem = _listItemsSlicer$acti.addItem,
    updateItem = _listItemsSlicer$acti.updateItem;
exports.updateItem = updateItem;
exports.addItem = addItem;
var _default = listItemsSlicer.reducer;
exports["default"] = _default;