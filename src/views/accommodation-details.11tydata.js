export default {
  layout: 'base.njk',

    pagination: {
      data: 'collections.accommodations',
      size: 1,
      alias: 'accommodation',
    },

    permalink: '/accommodation/{{ accommodation.fileSlug }}/index.html',

  eleventyComputed: {
    documentTitle: function (data) {
      const { accommodation } = data
      return `RLNC*2025 | Размещение | ${accommodation.data.title}`
    },

    documentDescription: function (data) {
      const { accommodation } = data
      return accommodation.data.summary
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
        url: `/images/accommodation/${data.accommodation.fileSlug}`,
        alt: data.accommodation.data.title,
      }
    },
  },
}
