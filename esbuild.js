const esbuild = require('esbuild');

const defaultConfig = {
  entryPoints: ['./src/index.js'],
  bundle: true,
}

esbuild.build({
  ...defaultConfig,
  format: 'esm',
  outfile: './dist/index.esm.js',
})

esbuild.build({
  ...defaultConfig,
  format: 'cjs',
  outfile: './dist/index.cjs.js',
})