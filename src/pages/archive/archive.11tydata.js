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
          label: 'Информационное письмо',
          type: 'pdf',
          url: '/docs/2025/rlnc-call-for-paper.pdf',
          title: 'Информационное письмо в формате PDF',
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
  },
}
