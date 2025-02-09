export default async function(eleventyConfig) {
  eleventyConfig.addShortcode('newsArticleDate', ( timeStamp ) => {
    const date = new Date(timeStamp)
    return `${date.toLocaleString('ru-RU')}`
  })
}
