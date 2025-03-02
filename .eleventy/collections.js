export default async function(eleventyConfig) {
  eleventyConfig.addCollection('news', function(collection) {
    return collection.getFilteredByGlob('src/pages/news/*/index.md')
  })

  eleventyConfig.addCollection('accommodations', function(collection) {
    return collection.getFilteredByGlob('src/pages/accommodation/*/index.md')
  })

  eleventyConfig.addCollection('archive', function(collection) {
    return collection.getFilteredByGlob('src/pages/archive/*/index.md')
  })

  eleventyConfig.addCollection('tags', function() {
    return [
      {
        label: 'Важно',
        title: 'С этим тегом публикуются наиболее важные новости конференции',
        url: 'important',
      }
    ]
  })
}
