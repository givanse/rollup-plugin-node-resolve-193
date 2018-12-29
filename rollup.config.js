const path = require('path');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

const somethingExternalId = path.resolve(__dirname, 'src/something-external.js');

module.exports = {
  input: 'src/index.js',
  external: [
    'fizzbuzz',
    somethingExternalId
  ],
  output: [
    {
      name: 'Foobar',
      file: 'index.js',
      format: 'iife',
      globals: {
        'fizzbuzz': 'fizzbuzz',
        [somethingExternalId]: 'somethingExternal',
      },
    },
    {
      file: 'index.es.js',
      format: 'es',
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
  ],
};

