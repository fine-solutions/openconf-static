export default {
  layout: 'archive.njk',

  eleventyComputed: {
    permalink: function (data) {
      return `/archive/${data.page.fileSlug}/index.html`
    },

    fullPageUrl: function (data) {
      return `/archive/${data.page.fileSlug}/index.html`
    },

    documentTitle: function (data) {
      return `RLNC*2025 | Архив | ${data.title}`
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
          url: '/archive',
          label: 'Архив'
        },
        {
          url: `/archive/${data.page.fileSlug}/index.html`,
          label: `${data.title}`
        },
      ]
    },

    documentsList: function (data) {
      // const { documents } = data.collections
      // return documents.filter((t) => data.page.fileSlug == t.url)
      return [
        {
          label: 'Оргкоммитет',
          type: 'pdf',
          url: '',
          title: 'Оргкоммитет конференции',
          isActive: true,
        },
        {
          label: 'Информационное письмо',
          type: 'pdf',
          url: '/docs/2025/rlnc-call-for-paper.pdf',
          title: 'Информационное письмо в формате PDF',
          isActive: true,
        },
        {
          label: 'Программа',
          type: 'pdf',
          url: '',
          title: 'Программа конференции',
          isActive: true,
        },
        {
          label: 'Сборник трудов (том 1)',
          type: 'pdf',
          url: '',
          title: 'Сборник трудов (том 1) конференции',
          isActive: true,
        },
        {
          label: 'Сборник трудов (том 2)',
          type: 'pdf',
          url: '',
          title: 'Сборник трудов (том 2) конференции',
          isActive: true,
        },
        {
          label: 'Сборник трудов (том 3)',
          type: 'pdf',
          url: '',
          title: 'Сборник трудов (том 3) конференции',
          isActive: true,
        },
        {
          label: 'Сборник трудов (том 4)',
          type: 'pdf',
          url: '',
          title: 'Сборник трудов (том 4) конференции',
          isActive: true,
        },
        {
          label: 'Сборник трудов (том 5)',
          type: 'pdf',
          url: '',
          title: 'Сборник трудов (том 5) конференции',
          isActive: true,
        },
        {
          label: 'Лучшие доклады на секциях',
          type: 'pdf',
          url: '',
          title: 'Лучшие доклады на секциях конференции',
          isActive: true,
        },
        {
          label: 'Фотографии',
          type: 'zip',
          url: '',
          title: 'Фотографии конференции',
          isActive: true,
        },
      ]
    },

    images: function () {
      return undefined
    }
  },
}
