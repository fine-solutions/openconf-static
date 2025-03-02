export default {
  layout: 'base.njk',
  permalink: '/archive/index.html',
  fullPageUrl: '/archive',
  documentTitle: `RLNC | Архив`,
  documentDescription: `Архив конференции`,

  eleventyComputed: {
    breadcrumbs: function () {
      return [
        {
          url: '/',
          label: 'Главная'
        },
        {
          url: '/archive',
          label: 'Архив'
        },
      ]
    },

    archiveList: function (data) {
      return data.collections.archive.sort((a, b) => b.fileSlug - a.fileSlug)
    },
  },
}
