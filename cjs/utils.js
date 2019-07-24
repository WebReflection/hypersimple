'use strict';
function bound(value, model) {
  return typeof value === 'function' ? value.bind(model) : value;
}
exports.bound = bound

function same(node, i) {
  return this[i] === node[i];
}
exports.same = same
