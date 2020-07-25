import sucrase from '@rollup/plugin-sucrase'
import * as pkg from './package.json'

/**
 * Defaults
 *
 * Apply to all bundles.
 */
const defaults = {
  input: 'index.ts',
  output: {
    banner: `// ${pkg.name} v${pkg.version} Copyright ${(new Date()).getFullYear()} ${pkg.contributors.map(c => `${c.name} <${c.email}>`).join(' & ')} ${pkg.license}`,
  },
  plugins: [
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript', 'imports']
    })
  ]
}

/**
 * Bundle as CommonJS & ECMAScript module
 */
export default {
  ...defaults,
  output: [
    {
      ...defaults.output,
      file: pkg.exports.require,
      format: 'cjs'
    }, {
      ...defaults.output,
      file: pkg.exports.import,
      format: 'es'
    }
  ]
}
