const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

module.exports = withNextra({
  output: 'export',
  basePath: '', // GitHub Pages のサブパスに合わせる
  trailingSlash: true,
  images: {
    unoptimized: true, // ← これを追加
  },
})