# hypersimple

The easiest way to use [hyperHTML](https://github.com/WebReflection/hyperHTML#readme) 🦄

  * `hooks` like simplicity implemented through the model
  * component implemented as callbacks
  * an entire model/props driven development

- - -
<sup>**Social Media Photo by [Juliana Malta](https://unsplash.com/@julianamalta) on [Unsplash](https://unsplash.com/)**</sup>

![WebReflection status](https://offline.report/status/webreflection.svg) [![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)


#### Example

[Live on Code Pen](https://codepen.io/WebReflection/pen/RXaWyR?editors=0010).

```js
import {comp, html, render} from 'hypersimple';

// components
const Button = comp(model => html`
  <button onclick=${model.onclick}>
    ${model.text}
  </button>
`);

// main App: just like any component
const App = comp(model => html`
  Lorem ipsum: ${model.count}
  <br>
  ${Button(model.button)}
`);

// model: it will be mutated to trigger updates on changes
const model = {
  count: 0,
  button: {
    text: 'increment',
    onclick() {
      // will update the view right away
      model.count += 1;
    }
  }
};

// render
render(document.body, () => App(model));
```

## API in a nutshell

  * `comp(fn)` returns a component based on some `props` or `model` object. The `fn` _must_ return the result of `html` or `svg`
  * `html` and `svg` are a template literal tag that accept everything _hyperHTML_ can produce
  * `render(where, what)` will populate the content of a generic node with whatever a component returns
  * `update(model[, {...changes}])` to update all components based on the same model and, eventually, batch all updates at once through changes
  * `define(...)` to enrich _hyperHTML_ potentials [as described in the documentation](https://viperhtml.js.org/hyperhtml/documentation/#api-3)

The `model` _will be modified_ to reflect any change of any of its properties in the UI, and every method will be automatically bound to the related context.

A `model` _can be used with multiple components_ without needing to nest a sub model/object per each component related to the same model.

If you use immutable structures, you'll trash the whole layout each time so ... to **keep it simple**, as the project suggests, but also to keep it memory safe, just pass mutable models and update those directly instead of duplicating references.

The whole idea is indeed to abstract away everything that's more complicated than setting, or updating, a generic property.
