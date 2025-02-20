export default {
  layout: 'news.njk',

  eleventyComputed: {
    permalink: function (data) {
      return `/news/${data.page.fileSlug}/index.html`
    },

    fullPageUrl: function (data) {
      return `/news/${data.page.fileSlug}/index.html`
    },

    documentTitle: function (data) {
      return `RLNC*2025 | Новости | ${data.title}`
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
          url: '/news',
          label: 'Новости'
        },
        {
          url: `/news/${data.page.fileSlug}/index.html`,
          label: `${data.title}`
        },
      ]
    },

    newsTags: function (data) {
      return data.collections.tags.filter((t) => data.tags.includes(t.url))
    },
  },
}
