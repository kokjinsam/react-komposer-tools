'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeWatchQuery = exports.composeWithQueries = exports.composeWithRedux = undefined;

var _reactKomposerRedux = require('react-komposer-redux');

var _reactKomposerRedux2 = _interopRequireDefault(_reactKomposerRedux);

var _reactKomposerQueries = require('react-komposer-queries');

var _reactKomposerQueries2 = _interopRequireDefault(_reactKomposerQueries);

var _reactKomposerWatchQuery = require('react-komposer-watchQuery');

var _reactKomposerWatchQuery2 = _interopRequireDefault(_reactKomposerWatchQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.composeWithRedux = _reactKomposerRedux2.default;
exports.composeWithQueries = _reactKomposerQueries2.default;
exports.composeWatchQuery = _reactKomposerWatchQuery2.default;