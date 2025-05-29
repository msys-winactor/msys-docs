const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

module.exports = withNextra({
  output: 'export',
  basePath: '/msys-docs', // GitHub Pages のサブパスに合わせる
  trailingSlash: true,
})