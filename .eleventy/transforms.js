import htmlnano from 'htmlnano'
import { parseHTML } from 'linkedom'

const isProdMode = process.env.NODE_ENV === 'production'

export default async function(eleventyConfig) {
  if (isProdMode) {
    eleventyConfig.addTransform('html-min', (content, outputPath) => {
      if (outputPath) {
        let isHtml = outputPath.endsWith('.html')
        let notDemo = !outputPath.includes('demos')
        if (isHtml && notDemo) {
          return htmlnano
            .process(content, {
              collapseAttributeWhitespace: true,
              collapseWhitespace: 'conservative',
              deduplicateAttributeValues: false,
              minifyCss: false,
              minifyJs: true,
              minifyJson: false,
              minifySvg: false,
              removeComments: 'safe',
              removeEmptyAttributes: false,
              removeAttributeQuotes: false,
              removeRedundantAttributes: true,
              sortAttributesWithLists: false,
              removeOptionalTags: false,
              collapseBooleanAttributes: true,
              mergeStyles: false,
              mergeScripts: false,
              minifyUrls: false,
            })
            .then((result) => result.html)
        }
      }

      return content
    })

    eleventyConfig.addTransform('unused-font-remover', (content, outputPath) => {
      if (outputPath && outputPath.endsWith('.html')) {
        const window = parseHTML(content)
        const isCaptionExists = !!window.document.querySelector('.caption')
        const isInputExists = !!window.document.querySelector('.input')
        const isTitleExists = !!window.document.querySelector('.title')
        const isValueExists = !!window.document.querySelector('.value')
        const isTextExists = !!window.document.querySelector('.text')
        const isTagExists = !!window.document.querySelector('.tag')
        const isStrongExists = !!window.document.querySelector('.strong')
        const isMenuExists = !!window.document.querySelector('.menu')

        if (!isInputExists && !isTagExists && !isMenuExists) {
          window.document.querySelector("link[href='/fonts/RobotoMono/RobotoMono-Regular.woff2']").remove()
        }
        if (!isCaptionExists && !isTitleExists) {
          window.document.querySelector("link[href='/fonts/RobotoMono/RobotoMono-Bold.woff2']").remove()
        }
        if (!isValueExists) {
          window.document.querySelector("link[href='/fonts/RobotoMono/RobotoMono-Light.woff2']").remove()
        }
        if (!isTextExists) {
          window.document.querySelector("link[href='/fonts/Roboto/Roboto-Regular.woff2']").remove()
        }
        if (!isStrongExists) {
          window.document.querySelector("link[href='/fonts/Roboto/Roboto-Semibold.woff2']").remove()
        }
      }

      return content
    })
  }
}
