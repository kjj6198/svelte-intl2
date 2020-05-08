import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const PROD = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/index.js',
    external: ['@babel/core', '@babel/preset-env', 'svelte', 'svelte/store'],
    output: [
      { file: 'dist/index.js', format: 'es' },
      { file: 'dist/index.cjs.js', format: 'cjs' },
    ],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      commonjs(),
      PROD && terser(),
    ],
  },
];
