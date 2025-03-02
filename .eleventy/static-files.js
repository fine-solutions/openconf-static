import constants from '../config/constants.js'

export default async function(eleventyConfig) {
  // Favicon
  const faviconKey = `src/favicon-${constants.baseSuffix}.ico`
  const faviconSetting = {}
  faviconSetting[faviconKey] = 'favicon.ico'
  eleventyConfig.addPassthroughCopy(faviconSetting)

  // Logo
  const logosKey = `src/images/logo-${constants.baseSuffix}`
  const logosSetting = {}
  logosSetting[logosKey] = 'images/logo'
  eleventyConfig.addPassthroughCopy(logosSetting)

  // Other images
  const imagesFolders = ['index', 'partners', 'speakers', 'icons', 'accommodation']
  imagesFolders.forEach((folder) => {
    eleventyConfig.addPassthroughCopy(`src/images/${folder}`)
  })

  // Docs from archive
  constants.archiveYears.forEach((y) => {
    const docsKey = `src/pages/archive/${y}/docs/*.pdf`
    const docsSetting = {}
    docsSetting[docsKey] = `docs/${y}`
    eleventyConfig.addPassthroughCopy(docsSetting)
  })


  // Other files
  eleventyConfig.addPassthroughCopy('src/docs/**/*')
  eleventyConfig.addPassthroughCopy('src/manifest.json')
  eleventyConfig.addPassthroughCopy('src/robots.txt')
  eleventyConfig.addPassthroughCopy('src/fonts')
}
