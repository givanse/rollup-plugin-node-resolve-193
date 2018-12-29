const path = require('path');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

const somethingExternalId = path.resolve(__dirname, 'src/something-external.js');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      name: 'Foobar',
      file: 'actual-output.js',
      format: 'iife',
      globals: {
        'fizzbuzz': 'fizzbuzz',
        [somethingExternalId]: 'somethingExternal',
      },
      external: [
        'fizzbuzz',
        somethingExternalId
      ]
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
  ],
};

