export default {
  layout: 'base.njk',

  pagination: {
      data: 'collections.tags',
      size: 1,
      alias: 'tagInfo',
  },

  eleventyComputed: {
    permalink: function (data) {
      const { tagInfo } = data
      return `/news/tags/${tagInfo.url}/index.html`
    },

    fullPageUrl: function (data) {
      const { tagInfo } = data
      return `/news/tags/${tagInfo.url}/index.html`
    },

    documentTitle: function (data) {
      const { tagInfo } = data
      return `RLNC*2025 | Новости | Тег: ${tagInfo.label}`
    },

    documentDescription: function (data) {
      const { tagInfo } = data
      return tagInfo.title
    },

    breadcrumbs: function (data) {
      const { tagInfo } = data
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
          url: `/news/tags/${tagInfo.url}/index.html`,
          label: `${tagInfo.label}`
        },
      ]
    },

    newsList: function (data) {
      const { tagInfo } = data
      const { news } = data.collections
      return news
        .filter((n) => {
          return n.data.tags.filter((t) => t.url === tagInfo.url).length > 0
        })
    },
  },
}
