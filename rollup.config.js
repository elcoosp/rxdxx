import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'

const output = format => packageName => ({
  file: `dist/${packageName}/index.${format}.js`,
  format,
  sourcemap: true,
  ...(format === 'umd' ? { name: packageName } : {})
})

const outputs = packageName =>
  ['esm', 'cjs', 'umd'].map(format => output(format)(packageName))

const entry = packageName => ({
  input: `packages/${packageName}/index.js`,
  output: outputs(packageName),
  plugins
})

const plugins = [
  resolve(),
  babel({
    exclude: 'node_modules/**'
  }),
  minify({
    comments: false
  })
]

export default [entry('primo')]
