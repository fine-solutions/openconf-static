export default {
  layout: 'base.njk',
  permalink: '/speaker/',

  eleventyComputed: {
    breadcrumbsItems: function () {
      return [
        {
          label: 'Главная',
          title: 'Нажмите для перехода на главную страницу',
          isLink: true,
          url: '/',
        },
        {
          label: 'Спикеры',
          title: 'Вы находитесь на странице спикеры',
          isLink: false,
          url: '/speaker/',
        }
      ]
    },
    speakerItem: function () {
      return {
        name: 'Зацаринный Александр Алексеевич',
        image: '/images/speakers/ivanov',
        alt: 'Описание изображения',
        position: 'Доктор технических наук, заместитель директора Феде- рального исследовательского центра «Информатика и управле- ние» РАН, лауреат Премии Правительства РФ в области науки и техники за 2003 г. Член Научного совета при Президиуме РАН по фундаментальным проблемам связи с глубокопогруженными объектами (Москва, Россия).',
      }
    },
    bannersItems: function () {
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
