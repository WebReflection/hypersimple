'use strict';
const {wire} = require('hyperhtml');
const assign = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/assign'));
const WeakMap = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/weakmap'));

var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var keys = Object.keys;

var counter = 0;
var comps = new WeakMap;
var props = new WeakMap;
var store = new WeakMap;
var wired = {id: 0, props: null};

function bound(value, props) {
  return typeof value === 'function' ? value.bind(props) : value;
}

function same(node, i) {
  return this[i] === node[i];
}

function update(Component, self, args, id, props) {
  var wid = wired.id;
  var wprops = wired.props;
  wired.id = id;
  wired.props = props;
  try {
    return Component.apply(self, args);
  }
  finally {
    wired.id = wid;
    wired.props = wprops;
  }
}

function comp(Component) {'use strict';
  var id = counter++;
  component.update = function (props, changes) {
    var update = store.get(props);
    if (!update)
      throw new Error('unknown model');
    update(changes);
  };
  comps.set(component, id);
  return component;
  function component(props) {
    if (!props)
      props = {};
    var args = arguments;
    var self = this;
    var sync = true;
    if (!store.has(props)) {
      store.set(props, function (changes) {
        sync = false;
        try {
          assign(props, changes);
        }
        finally {
          sync = true;
          update(Component, self, args, id, props);
        }
      });
      keys(props).forEach(function (key) {
        var value, desc = gOPD(props, key);
        if (desc.configurable) {
          if ('value' in desc) {
            value = bound(desc.value, props);
            delete desc.value;
            delete desc.writable;
            desc.get = function () {
              return value;
            };
            desc.set = function ($) {
              value = bound($, props);
              if (sync)
                update(Component, self, args, id, props);
            };
            defineProperty(props, key, desc);
          } else if ('set' in desc) {
            value = desc.set;
            desc.set = function ($) {
              value.call(props, $);
              if (sync)
                update(Component, self, args, id, props);
            };
            defineProperty(props, key, desc);
          }
        }
      });
    }
    return update(Component, self, args, id, props);
  };
}
exports.comp = comp;

function render(where, Component) {
  var content, comp = comps.get(Component);
  if (comp) {
    var p = props.get(where);
    if (!p) props.set(where, p = {});
    content = Component(p);
  }
  else
    content = Component();
  if (
    (content.nodeType === 1 && where.firstChild === content) ||
    content.childNodes.every(same, where.childNodes)
  ) {
    Component.update(p);
  }
  else {
    where.textContent = '';
    where.appendChild(content.valueOf(true));
  }
  return where;
}
exports.render = render;

function html() {
  return wire(wired.props, 'html:' + wired.id).apply(null, arguments);
}
exports.html = html;

function svg() {
  return wire(wired.props, 'svg:' + wired.id).apply(null, arguments);
}
exports.svg = svg;
