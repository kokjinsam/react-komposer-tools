'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeWatchQuery = exports.composeWithQuery = exports.composeWithRedux = undefined;

var _reactKomposerRedux = require('react-komposer-redux');

var _reactKomposerRedux2 = _interopRequireDefault(_reactKomposerRedux);

var _reactKomposerQuery = require('react-komposer-query');

var _reactKomposerQuery2 = _interopRequireDefault(_reactKomposerQuery);

var _reactKomposerWatchQuery = require('react-komposer-watchQuery');

var _reactKomposerWatchQuery2 = _interopRequireDefault(_reactKomposerWatchQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.composeWithRedux = _reactKomposerRedux2.default;
exports.composeWithQuery = _reactKomposerQuery2.default;
exports.composeWatchQuery = _reactKomposerWatchQuery2.default;