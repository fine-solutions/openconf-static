export default {
  layout: 'base.njk',
  permalink: '/accommodation/index.html',
  fullPageUrl: '/accommodation',
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
          url: '/accommodation',
          label: 'Размещение'
        },
      ]
    },

    accommodations: function (data) {
      const { accommodations } = data.collections
      return accommodations.map((a) => {
        return {
          label: a.data.title,
          text: a.data.summary,
          url: `/accommodation/${a.fileSlug}/index.html`,
          title: `Перейти на страницу с описанием условий размещения в отеле «${a.data.title}»`,
          price: a.data.price,
        }
      })
    },
  },
}
