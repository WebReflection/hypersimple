export function bound(value, model) {
  return typeof value === 'function' ? value.bind(model) : value;
}

export function same(node, i) {
  return this[i] === node[i];
}
