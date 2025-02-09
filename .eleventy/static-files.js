import constants from '../config/constants.js'

export default async function(eleventyConfig) {
  const faviconKey = `src/favicon-${constants.baseSuffix}.ico`
  const faviconSetting = {}
  faviconSetting[faviconKey] = 'favicon.ico'
  const logosKey = `src/images/logo-${constants.baseSuffix}.*`
  const logosSetting = {}
  logosSetting[logosKey] = 'images/logo'
  const imagesFolders = ['index', 'partners', 'speakers', 'icons', 'accommodation']

  eleventyConfig.addPassthroughCopy(faviconSetting)
  eleventyConfig.addPassthroughCopy(logosSetting)
  imagesFolders.forEach((folder) => {
    eleventyConfig.addPassthroughCopy(`src/images/${folder}`)
  })

  eleventyConfig.addPassthroughCopy('src/docs/**/*')
  eleventyConfig.addPassthroughCopy('src/manifest.json')
  eleventyConfig.addPassthroughCopy('src/robots.txt')
  eleventyConfig.addPassthroughCopy('src/fonts')
}
