export default {
  layout: 'paper.njk',

  eleventyComputed: {
    permalink: function (data) {
      return `/paper/${data.page.fileSlug}/index.html`
    },

    fullPageUrl: function (data) {
      return `/paper/${data.page.fileSlug}/index.html`
    },

    documentTitle: function (data) {
      return `RLNC*2025 | Доклады | ${data.title}`
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
          url: '/paper',
          label: 'Доклады'
        },
        {
          url: `/paper/${data.page.fileSlug}/index.html`,
          label: `${data.title}`
        },
      ]
    },

    videoItem: function () {
      return {
        title: 'Видео доклада',
        src: 'video/test',
        poster: 'poster/test',
      }
    },

    documentsList: function (data) {
      // const { documents } = data.collections
      // return documents.filter((t) => data.page.fileSlug == t.url)
      return [
        {
          label: 'Доклад',
          type: 'pdf',
          url: '',
          title: 'Доклад',
          isActive: true,
        },
        {
          label: 'Презентация',
          type: 'pdf',
          url: '',
          title: 'Презентация',
          isActive: true,
        },
        {
          label: 'Видео (VK)',
          type: 'link',
          url: '',
          title: 'Видео (VK)',
          isActive: true,
        },
      ]
    },

    speakersList: function () {
      // const { speakers } = data.collections
      // return speakers.filter((t) => data.page.f  ileSlug == t.url)
      return [
        {
          name: 'Иванов Петр Сидорович',
          url: '/',
          title: 'Почитать об Иванове Петре Сидоровиче',
          image: '/images/speakers/ivanov',
          tags: [
            {
              label: 'Пленарный доклад',
              url: '/section/plenary',
            }
          ],
        },
      ]
    },
  },
}
