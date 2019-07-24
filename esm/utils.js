import {define, wire} from 'hyperhtml';

var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var keys = Object.keys;

var slice = [].slice;
var wired = {id: 0, model: null};

export {define, slice};

export function html() {
  return wire(wired.model, 'html:' + wired.id).apply(null, arguments);
};

export function svg() {
  return wire(wired.model, 'svg:' + wired.id).apply(null, arguments);
};

export function same(node, i) {
  return this[i] === node[i];
};

export function update(model, Component, id, args) {
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
};

export function wrap(model, update) {
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
};

function bound(value, model) {
  return typeof value === 'function' ? value.bind(model) : value;
}
