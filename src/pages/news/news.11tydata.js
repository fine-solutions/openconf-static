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
