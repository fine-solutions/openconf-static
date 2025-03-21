export default {
  layout: 'base.njk',
  permalink: '/news/index.html',
  fullPageUrl: '/news',
  documentTitle: `RLNC*2025 | Новости`,
  documentDescription: `Новости конференции RLNC*2025`,

  eleventyComputed: {
    breadcrumbs: function () {
      return [
        {
          url: '/',
          label: 'Главная'
        },
        {
          url: '/news',
          label: 'Новости'
        },
      ]
    },

    newsList: function (data) {
      return data.collections.news
        .sort((a, b) => new Date(b.data.updated) - new Date(a.data.updated))
    },
  },
}
