module.exports = {
  layout: 'base.njk',
  permalink: '/',

  eleventyComputed: {
    documentTitle: function (data) {
      return data.constants.baseTitle
    },

    documentDescription: function (data) {
      return data.constants.baseDescription
    },
  },
}
