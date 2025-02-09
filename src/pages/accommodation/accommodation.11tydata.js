export default {
  layout: 'accommodation.njk',

  eleventyComputed: {
    permalink: function (data) {
      return `/accommodation/${data.page.fileSlug}/index.html`
    },

    fullPageUrl: function (data) {
      return `/accommodation/${data.page.fileSlug}/index.html`
    },

    documentTitle: function (data) {
      return `RLNC*2025 | Размещение | ${data.title}`
    },

    documentDescription: function (data) {
      return data.summary
    },

    breadcrumbs: function () {
      return [
        {
          url: '/',
          label: 'Главная'
        },
        {
          url: '/#accommodation',
          label: 'Размещение'
        },
      ]
    },
    imageItem: function (data) {
      return {
        url: `/images/accommodation/${data.fileSlug}`,
        alt: data.title,
      }
    },
  },
}
