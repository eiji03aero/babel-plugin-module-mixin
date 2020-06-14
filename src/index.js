Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./setup.js');

const { declare } = require('@babel/helper-plugin-utils');

exports.default = declare((api) => {
  return {
    name: 'module-mixin'
  };
});
