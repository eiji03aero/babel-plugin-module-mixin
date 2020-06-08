# babel-plugin-module-mixin
- plugin to add support for ruby-like module syntax

# example

```js
// serializable.js
export const Serializable = {
  serialize () {
    return {
      id: this.id,
      name: this.name
    };
  }
}

// Model.js
export class Model {
  include Serializable;
}

const m = new Model();
m.serialize();
```

# Todo
- lexing
- parsing
- implement plugin
  - need to do some research on how can prototype be used for this
- TBD
  - extend module
  - option to bind this?
