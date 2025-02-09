import cssExtension from './extensions/css-extension.js'
import jsExtension from './extensions/js-extension.js'

const isProdMode = process.env.NODE_ENV === 'production'

export default async function(eleventyConfig) {
    eleventyConfig.ignores.add('src/**/!(styles)/*.css')
    eleventyConfig.ignores.add('src/styles/fonts.css')

    eleventyConfig.addPlugin(cssExtension, {
        lightningcss: {
            minify: isProdMode,
        },
    })

    eleventyConfig.ignores.add('src/**/!(scripts)/*.js')
    eleventyConfig.ignores.add('src/scripts/modules/**/*.js')

    eleventyConfig.addPlugin(jsExtension, {
        esbuild: {
            platform: 'browser',
            minify: isProdMode,
        },
    })
}
