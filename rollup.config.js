import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'

const output = packageName => format => ({
  file: `dist/${packageName}/index.${format}.js`,
  format,
  sourcemap: true
})

const primo = output('primo')

export default [
  {
    input: 'packages/primo/index.js',
    output: [primo('esm'), primo('cjs')],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      }),
      minify({
        comments: false
      })
    ]
  }
]
