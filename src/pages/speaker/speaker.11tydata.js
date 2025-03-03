export default {
  layout: 'speaker.njk',

  eleventyComputed: {
    permalink: function (data) {
      return `/speaker/${data.page.fileSlug}/index.html`
    },

    fullPageUrl: function (data) {
      return `/speaker/${data.page.fileSlug}/index.html`
    },

    documentTitle: function (data) {
      return `RLNC*2025 | Спикеры | ${data.title}`
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
          url: '/speaker',
          label: 'Спикеры'
        },
        {
          url: `/speaker/${data.page.fileSlug}/index.html`,
          label: `${data.title}`
        },
      ]
    },

    papersList: function () {
      // const { papers } = data.collections
      // return papers.filter((t) => data.page.f  ileSlug == t.url)
      return [
        {
          label: 'Некоторые значимые достижения российских ученых в области информационных технологий',
          url: '/featured/achievements',
          title: 'Описание',
          src: '/images/index/lights',
          alt: 'Описание',
          tags: [
            {
              label: 'Пленарный доклад',
              url: '/section/plenary'
            },
          ],
        },
      ]
    },
  },
}
