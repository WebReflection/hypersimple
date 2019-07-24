'use strict';
const {define, wire} = require('hyperhtml');

var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var keys = Object.keys;

var slice = [].slice;
var wired = {id: 0, model: null};

exports.define = define;
exports.slice = slice;

function html() {
  return wire(wired.model, 'html:' + wired.id).apply(null, arguments);
}
exports.html = html;

function svg() {
  return wire(wired.model, 'svg:' + wired.id).apply(null, arguments);
}
exports.svg = svg;

function refresh(model, Component, id, args) {
  var wid = wired.id;
  var wmodel = wired.model;
  wired.id = id;
  wired.model = model;
  try {
    return Component.apply(null, args);
  }
  finally {
    wired.id = wid;
    wired.model = wmodel;
  }
}
exports.refresh = refresh;

function same(node, i) {
  return this[i] === node[i];
}
exports.same = same;

function augment(model, update) {
  keys(model).forEach(function (key) {
    var value, desc = gOPD(model, key);
    if (desc.configurable) {
      if ('value' in desc) {
        value = bound(desc.value, model);
        defineProperty(model, key, {
          configurable: true,
          enumerable: true,
          get: function () {
            return value;
          },
          set: function ($) {
            value = bound($, model);
            update(model);
          }
        });
      } else if ('set' in desc) {
        value = desc.set;
        desc.set = function ($) {
          value.call(model, $);
          update(model);
        };
        defineProperty(model, key, desc);
      }
    }
  });
}
exports.augment = augment;

function bound(value, model) {
  return typeof value === 'function' ? value.bind(model) : value;
}
