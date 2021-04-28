import { terser } from 'rollup-plugin-terser';
export default [
  {
    input: 'src/index.js',
    plugins: [terser()],
    output: {
      file: 'umd/stringLib.js',
      format: 'umd',
      name: 'sl',
      esModule: false
    }
  },
  {
    input: 'src/index.js',
    output: {
      file: 'esm/index.js',
      format: 'esm'
    }
  }
]