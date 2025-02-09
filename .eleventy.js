export default async function(config) {
  const modules = await Promise.all([
    import('./.eleventy/collections.js'),
    import('./.eleventy/extensions.js'),
    import('./.eleventy/shortcodes.js'),
    import('./.eleventy/static-files.js'),
    import('./.eleventy/transforms.js'),
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
    templateFormats: ['md', 'njk'],
  }
}
