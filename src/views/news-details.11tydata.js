export default {
  layout: 'base.njk',

  pagination: {
    data: 'collections.news',
    size: 1,
    alias: 'article',
  },

  permalink: '/news/{{ article.fileSlug}}/index.html',

  eleventyComputed: {
    documentTitle: function (data) {
      const { article } = data
      return `Конференция RLNC*2025 | Новости | ${article.data.title}`
    },

    documentDescription: function (data) {
      const { article } = data
      return article.data.summary
    },

    breadcrumbs: function () {
      return [
        {
          url: '/',
          label: 'Главная'
        },
        {
          url: '/#news',
          label: 'Новости'
        },
      ]
    },

    tags: function (data) {
      const { article } = data
      return data.collections.tags.filter((t) => article.data.tags.includes(t.url))
    },

    newsList: function (data) {
      const { tags } = data.collections
      const { news } = data.collections
      return news
        .map((n) => {
          n.data.tags = n.data.tags.map((t) => {
            return {
              url: t,
              label: tags.filter((s) => s.url === t)[0]?.label,
              title: tags.filter((s) => s.url === t)[0]?.title,
            }
          })
          return n
        })
    },
  },
}
