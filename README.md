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

  * `comp(fn)` returns a component based on some `props` or `model` object
  * the `fn` _must_ return the result of `html`
  * `html` is a template literal tag that accepts everything _hyperHTML_ can produce
  * `render(where, what)` will populate the content of a generic node with whatever a component returns

A component can `Comp.update(model)` to explicitly update some part of the layout, or batch multiple updates at once via `Comp.update(model, {...changes})`.

The `model` _will be modified_ to reflect any change of any of its properties in the UI, and every method will be automatically bound to the related context.

If you use immutable structures, you'll trash the whole layout each time so ... to **keep it simple**, as the project suggest, but also to keep it memory safe, just pass mutable models and update those directly instead of duplicating it.

The whole idea is indeed to abstract away everything that's more complicated than setting, or updating, a generic property.

### TODO

- [ ] relate models to components, so it's possible to use the same model with different components still providing same magic
- [ ] evaluate the exposure of `hyperHTML.define(...)` to provide user-defined behaviors too
