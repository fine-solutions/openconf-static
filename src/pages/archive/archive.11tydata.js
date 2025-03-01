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

    fileList: function (data) {
      const { documents } = data
      return documents?.map((d) => {
        return {
          label: d.label,
          url: `/docs/${data.page.fileSlug}/${d.url}`,
          type: d.url.split('.')[1]
        }
      })
    },
  },
}
