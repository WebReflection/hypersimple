'use strict';
const {define, wire} = require('hyperhtml');

var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var keys = Object.keys;

var hOP = {}.hasOwnProperty;
var slice = [].slice;
var wired = {id: 0, model: null};

// hyper utilities
exports.define = define;

function html() {
  return wire(wired.model, 'html:' + wired.id).apply(null, arguments);
}
exports.html = html;

function svg() {
  return wire(wired.model, 'svg:' + wired.id).apply(null, arguments);
}
exports.svg = svg;

// extra utilities
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

function merge(model, changes) {
  for (var key in changes) {
    if (hOP.call(changes, key)) {
      var has = hOP.call(model, key);
      var curr = changes[key];
      var prev = has ? model[key] : null;
      if (has && curr !== null && typeof curr === "object")
        merge(prev, curr);
      else if (!has || curr !== prev)
        model[key] = curr;
    }
  }
}
exports.merge = merge;

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

exports.slice = slice;

function bound(value, model) {
  return typeof value === 'function' ? value.bind(model) : value;
}
