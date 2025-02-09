export default {
  layout: 'base.njk',

    pagination: {
      data: 'collections.accommodations',
      size: 1,
      alias: 'accommodation',
    },

    permalink: '/accommodation/{{ accommodation.fileSlug }}/index.html',

  eleventyComputed: {
    breadcrumbsItems: function () {
      return [
        {
          url: '/',
          label: 'Главная'
        },
        {
          url: '/#accommodation',
          label: 'Размещение'
        },
      ]
    },
    imageItem: function () {
      return {
        url: '/images/accommodation/benefit',
        alt: 'На изображении представлено здание отеля «Benefit Plaza». Светлое здание с несколькими этажами. На фасаде видны большие окна, а также вывеска с названием отеля на английском языке',
      }
    },
    imageMap: function () {
      return {
        url: '/images/accommodation/map',
        alt: 'На изображении представлена карта, где находится отель «Benefit Plaza».',
      }
    },
  },
}
