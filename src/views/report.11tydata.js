export default {
  layout: 'base.njk',
  permalink: '/report/',

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
          label: 'Доклады',
          title: 'Вы находитесь на странице доклады',
          isLink: false,
          url: '/report/',
        }
      ]
    },
    videoItem: function () {
      return {
        title: 'Видео доклада',
        video: 'video/test',
        poster: 'poster/test',
      }
    },
    repotrItem: function () {
      return {
        title: 'Некоторые значимые достижения российских ученых в области информационных технологий',
        name: 'А.А. Зацаринный',
        location: 'ФИЦ ИУ РАН, г. Москва',
        annotation: 'Статья посвящена 300-летию образования Российской академии наук (РАН). Рассмотрены некоторые факты из истории создания РАН. Показаны наиболее значимые достижения российских ученых в области создания и развития информационных технологий и систем. Особое внимание уделено положительному опыту в создании и развитии автоматизированных систем в интересах органов государственного и военного управления. Дан краткий анализ современного состояния российской науки. Показаны меры, направленные на повышение роли и значимости научных исследований.',
      }
    },
    documentItems: function () {
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
          label: 'Видео',
          type: 'link',
          url: '',
          title: 'Видео (VK)',
          isActive: true,
        },
      ]
    },
    speakerItems: function () {
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
