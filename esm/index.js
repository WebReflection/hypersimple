import assign from '@ungap/assign';
import WeakMap from '@ungap/weakmap';
import Map from '@ungap/essential-map';
import {
  augment, define, merge, refresh, same,
  hOP, slice,
  html, svg
} from './utils.js';

var comps = new WeakMap;
var param = new WeakMap;
var store = new WeakMap;

var ids = 0;
var sync = true;

export {define, html, svg};

export function comp(Component) {
  var id = ++ids;
  comps.set(component, id);
  return component;
  function component(model) {
    var mod = model || {};
    var map = store.get(mod) || setMap(mod);
    return updateComponent.call(
      mod,
      map.get(component) ||
      setInfo(map, component, Component, id, slice.call(arguments, 0))
    );
  };
};

export function render(where, comp) {
  var content = comps.has(comp) ?
    comp(param.get(where) || setParam(where)) :
    comp();
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

export function update(model, changes) {
  var map = store.get(model);
  if (!map)
    throw new Error('unknown model');
  sync = false;
  try {
    merge(model, changes || {});
  }
  finally {
    sync = true;
    map.forEach(updateComponent, model);
  }
};

function setInfo(map, comp, Component, id, args) {
  var info = {Component: Component, id: id, args: args};
  map.set(comp, info);
  return info;
}

function setMap(model) {
  var map = new Map;
  store.set(model, map);
  augment(model, updateAll);
  return map;
}

function setParam(where) {
  var model = {};
  param.set(where, model);
  return model;
}

function updateAll(model) {
  if (sync)
    store.get(model).forEach(updateComponent, model);
}

function updateComponent(info) {
  return refresh(this, info.Component, info.id, info.args);
}
