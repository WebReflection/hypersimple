import {wire} from 'hyperhtml';
import assign from '@ungap/assign';
import WeakMap from '@ungap/weakmap';
import {bound, same} from './utils.js';

var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var keys = Object.keys;

var counter = 0;
var comps = new WeakMap;
var model = new WeakMap;
var store = new WeakMap;
var wired = {id: 0, model: null};

function update(Component, self, args, id, model) {
  var wid = wired.id;
  var wmodel = wired.model;
  wired.id = id;
  wired.model = model;
  try {
    return Component.apply(self, args);
  }
  finally {
    wired.id = wid;
    wired.model = wmodel;
  }
}

export function comp(Component) {'use strict';
  var id = counter++;
  component.update = function (model, changes) {
    var update = store.get(model);
    if (!update)
      throw new Error('unknown model');
    update(changes);
  };
  comps.set(component, id);
  return component;
  function component(model) {
    if (!model)
      model = {};
    var args = arguments;
    var self = this;
    var sync = true;
    if (!store.has(model)) {
      store.set(model, function (changes) {
        sync = false;
        try {
          assign(model, changes);
        }
        finally {
          sync = true;
          update(Component, self, args, id, model);
        }
      });
      keys(model).forEach(function (key) {
        var value, desc = gOPD(model, key);
        if (desc.configurable) {
          if ('value' in desc) {
            value = bound(desc.value, model);
            delete desc.value;
            delete desc.writable;
            desc.get = function () {
              return value;
            };
            desc.set = function ($) {
              value = bound($, model);
              if (sync)
                update(Component, self, args, id, model);
            };
            defineProperty(model, key, desc);
          } else if ('set' in desc) {
            value = desc.set;
            desc.set = function ($) {
              value.call(model, $);
              if (sync)
                update(Component, self, args, id, model);
            };
            defineProperty(model, key, desc);
          }
        }
      });
    }
    return update(Component, self, args, id, model);
  };
};

export function render(where, Component) {
  var known = comps.has(Component);
  var content = known ?
    Component(model.get(where) || model.set(where, {}).get(where)) :
    Component();
  var isElement = content.nodeType === 1;
  if (!(
    (isElement && where.firstChild === content) ||
    (!isElement && content.childNodes.every(same, where.childNodes))
  )) {
    where.textContent = '';
    where.appendChild(content.valueOf(true));
  }
  return where;
};

export function html() {
  return wire(wired.model, 'html:' + wired.id).apply(null, arguments);
};

export function svg() {
  return wire(wired.model, 'svg:' + wired.id).apply(null, arguments);
};
