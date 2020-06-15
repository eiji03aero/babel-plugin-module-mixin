# babel-plugin-module-mixin
- plugin to add support for ruby-like module syntax

# setup

```sh
# clone this repo and babel
$ git clone git@github.com:eiji03aero/babel-plugin-module-mixin.git
$ git clone git@github.com:eiji03aero/babel.git

# use the dedicated branch
$ cd babel
$ git checkout babel-plugin-module-mixin
$ cd ../
```

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
- generate
- TBD
  - extend module
  - option to bind this?
