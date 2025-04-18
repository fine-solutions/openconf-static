export default {
  layout: 'base.njk',
  title: 'Страница не найдена',
  permalink: '/404/index.html',
  fullPageUrl: '/404',
  documentTitle: `RLNC | Страница не найдена`,
  documentDescription: `Страница не найдена`,

  eleventyComputed: {
    linksList: function () {
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
          url: '/accommodation',
          label: 'Размещение'
        },
        {
          url: '/archive',
          label: 'Архив'
        },
      ]
    },
  },
}
