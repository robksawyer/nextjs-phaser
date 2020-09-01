/**
 * next.config.js
 * Next JS configuration file
 * The following helps to use multiple plugins
 * @see https://github.com/JerryCauser/next-compose
 */
/**
 * Web Workers
 * @see https://github.com/zeit/next-plugins/tree/master/packages/next-workers
 * Use SASS styles
 * @see https://github.com/zeit/next-plugins/tree/master/packages/next-sass
 * Using Fonts
 * @see https://github.com/rohanray/next-fonts
 */

/**
 * Exclude tests and stories from being compiled.
 * @see https://github.com/zeit/next.js/issues/1914
 * via
 * excludeFile: ... (see below)
 */
const withPlugins = require('next-compose-plugins')
// const withFonts = require('next-fonts')
// const withImages = require('next-images')
// const optimizedImages = require('next-optimized-images')

const path = require('path')

const nextConfig = {
  // Google App Engine doesn't recognize .next folder so you need to change the folder from .next to
  // _next using the distDir parameter in the next.config.js
  distDir: '_next',
  // Removes the [BABEL] Note: The code generator has deoptimised the styling of
  compact: true,
  // excludeFile: (str) => /\*.{spec,test,stories}.{js,jsx}/.test(str),
  // useFileSystemPublicRoutes: false,
  webpack: (config, options) => {
    const { dev } = options
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        include: [path.resolve('components'), path.resolve('pages')],
        exclude: ['/node_modules/', '/.next/', '/out/'],
        options: {
          // Compile, but with a warning
          emitWarning: true,
        },
        loader: 'eslint-loader',
      })
    }
    return config
  },
  env: {
    DEBUG_MODE: true,
    DEFAULT_LANG: 'en-us',
    PAGE_TITLE: 'My Cool Game',
    META_TITLE: 'Phaser Game | My Cool Game',
    META_DESCRIPTION:
      'A really cool game.',
  },
}

module.exports = withPlugins(
  [
    // [withFonts, {}],
    // [withImages, {}],
    // [optimizedImages, {}],
  ],
  nextConfig
)
