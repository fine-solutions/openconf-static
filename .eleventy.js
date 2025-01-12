const postcss = require('postcss');
const postcssImport = require('postcss-import');
const postcssMediaMinmax = require('postcss-media-minmax');
const autoprefixer = require('autoprefixer');
const postcssCsso = require('postcss-csso');

module.exports = function (config) {
  // Settings
  config.setDataDeepMerge(true)

  // Plugins
  // Extensions
  config.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (content, path) => {
      if (path !== './src/styles/index.css') {
        return
      }

      return async () => {
        let output = await postcss([
          postcssImport,
          postcssMediaMinmax,
          autoprefixer,
          postcssCsso,
        ]).process(content, {
          from: path,
        })

        return output.css
      }
    }
  })

  // Collections
  // Libraries
  // NunjucksShortcodes
  // Filters
  // Transforms
  // PassthroughCopy
  config.addPassthroughCopy('src/favicon.ico')
  config.addPassthroughCopy('src/manifest.json')
  config.addPassthroughCopy('src/robots.txt')
  config.addPassthroughCopy('src/fonts')
  config.addPassthroughCopy('src/images')

  // Return
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: false,
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    templateFormats: ['md', 'njk', 'css'],
  }
}
