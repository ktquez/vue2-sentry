import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import VueLoader from 'rollup-plugin-vue'

export default {
  entry: 'src/index.js',
  plugins: [
    resolve(),
    VueLoader(),
    commonjs(),
    uglify({}, minify),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  targets: [
    {
      dest: 'dist/vue2-sentry.cjs.js',
      format: 'cjs'
    },
    {
      dest: 'dist/vue2-sentry.es.js',
      format: 'es'
    },
    {
      dest: 'dist/vue2-sentry.amd.js',
      format: 'amd'
    }
  ]
}