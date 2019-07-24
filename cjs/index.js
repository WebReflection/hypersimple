'use strict';
const assign = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/assign'));
const WeakMap = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/weakmap'));
const Map = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/essential-map'));
const {define, html, svg, same, slice, update, wrap} = require('./utils.js');

var comps = new WeakMap;
var param = new WeakMap;
var store = new WeakMap;

var ids = 0;
var sync = true;

exports.define = define;
exports.html = html;
exports.svg = svg;

function comp(Component) {
  var id = ++ids;
  comps.set(component, id);
  component.update = function (model, changes) {
    var map = getMap(model);
    if (!map)
      throw new Error('unknown model');
    try {
      sync = false;
      assign(model, changes);
    }
    finally {
      sync = true;
      map.forEach(updateComponent, model);
    }
  };
  return component;
  function component(model) {
    var info = getInfo(model || {}, component, Component, id, arguments);
    return update(model, info.Component, info.id, info.args);
  };
}
exports.comp = comp;

function render(where, comp) {
  var content = comps.has(comp) ?
    comp(param.get(where) || param.set(where, {}).get(where)) :
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
}
exports.render = render;

function getInfo(model, comp, Component, id, args) {
  var map = getMap(model);
  return map.get(comp) ||
          setInfo(map, comp, Component, id, slice.call(args, 0));
}

function getMap(model) {
  return store.get(model) || setMap(model);
}

function setInfo(map, comp, Component, id, args) {
  var info = {Component: Component, id: id, args: args};
  map.set(comp, info);
  return info;
}

function setMap(model) {
  var map = new Map;
  store.set(model, map);
  wrap(model, updateAll);
  return map;
}

function updateAll(model) {
  if (sync)
    getMap(model).forEach(updateComponent, model);
}

function updateComponent(info) {
  update(this, info.Component, info.id, info.args);
}
