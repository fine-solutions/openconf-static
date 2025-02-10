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

    breadcrumbs: function (data) {
      return [
        {
          url: '/',
          label: 'Главная'
        },
        {
          url: '/accommodation/index.html',
          label: 'Размещение'
        },
        {
          url: `/accommodation/${data.page.fileSlug}/index.html`,
          label: data.title
        },
      ]
    },
    imageItem: function (data) {
      return {
        url: `/images/accommodation/${data.page.fileSlug}`,
        alt: data.title,
      }
    },
  },
}
