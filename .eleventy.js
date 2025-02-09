export default async function(config) {
  const modules = await Promise.all([
    import('./.eleventy/collections.js'),
    import('./.eleventy/transforms.js'),
    import('./.eleventy/shortcodes.js'),
    import('./.eleventy/static-files.js'),
    import('./.eleventy/extensions.js'),
  ])

  modules.forEach(module => module.default(config))

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
    templateFormats: ['md', 'njk'],
  }
}
