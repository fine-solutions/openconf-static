export default {
  layout: 'base.njk',
  permalink: '/',
  fullPageUrl: '/',

  eleventyComputed: {
    documentTitle: function (data) {
      return `${data.constants.baseTitle}*${data.constants.currentYear}`
    },

    documentSubTitle: function (data) {
      return data.constants.baseSubTitle
    },

    documentDescription: function (data) {
      return data.constants.baseCaption
    },

    documentLocation: function (data) {
      return data.constants.baseLocation
    },

    breadcrumbs: function () {
      return undefined
    },

    actionInfo: function () {
      return {
        label: 'Подать доклад',
        url: 'https://my.rlnc.ru',
        title: 'Нажав эту кнопку Вы попадёте в личный кабинет, где сможете подать доклад на конференцию',
      }
    },

    mainImage: function () {
      return {
        url: '/images/index/chip',
        alt: 'Фотография части печатной платы в черном цвете с крупной интегральной микросхемой и другими мелкими компонентами на ней',
      }
    },

    featuredPapers: function () {
      return undefined
    },

    timeLine: function () {
      const currentDate = new Date()
      return [
        {
          title: '10 февраля — 20 марта',
          text: 'Прием и рецензирование докладов',
          isActive: currentDate >= new Date('2025-02-10T00:00+02:00') && currentDate <= new Date('2025-03-20T00:00+02:00'),
        },
        {
          title: '1 апреля — 10 апреля',
          text: 'Регистрация участников',
          isActive: currentDate >= new Date('2025-04-01T00:00+02:00') && currentDate <= new Date('2025-04-10T00:00+02:00'),
        },
        {
          title: '15 апреля — 17 апреля',
          text: 'Работа секций конференции',
          isActive: currentDate >= new Date('2025-04-15T00:00+02:00') && currentDate <= new Date('2025-04-17T00:00+02:00'),
        }
      ]
    },

    documentItems: function () {
      return [
        {
          label: 'Оргкомитет',
          type: 'link',
          url: '',
          title: 'Состав оргкомитета',
          isActive: false,
        },
        {
          label: 'Информационное письмо',
          type: 'pdf',
          url: '/docs/2025/rlnc-call-for-paper.pdf',
          title: 'Информационное письмо в формате PDF',
          isActive: true,
        },
        {
          label: 'Шаблоны оформления',
          type: 'doc',
          url: '/docs/2025/template.doc',
          title: 'Шаблоны оформления в формате DOC',
          isActive: true,
        },
        {
          label: 'Согласие на обработку ПД',
          type: 'doc',
          url: '/docs/2025/agreement.doc',
          title: 'Согласие на обработку персональных данных в формате DOC',
          isActive: true,
        },
        {
          label: 'Программа',
          type: 'pdf',
          url: '',
          title: 'Программа в формате PDF',
          isActive: false,
        },
        {
          label: 'Сборник трудов',
          type: 'pdf',
          url: '',
          title: 'Сборник трудов в формате PDF',
          isActive: false,
        },
        {
          label: 'Лучшие доклады на секциях',
          type: 'pdf',
          url: '',
          title: 'Лучшие доклады на секциях в формате PDF',
          isActive: false,
        }
      ]
    },

    newsList: function (data) {
      return data.collections.news
    },

    sections: function () {
      return [
        {
          prefix: 'Пленарное заседание',
          label: '',
        },
        {
          prefix: 'Секция 1.',
          label: 'Общие проблемы передачи и обработки информации. Цифровая обработка сигналов.',
        },
        {
          prefix: 'Секция 2.',
          label: 'Распознавание и обработка изображений.',
        },
        {
          prefix: 'Секция 3.',
          label: 'Системы связи и передачи данных. Мобильная связь. Спутниковые системы связи и передачи информации.',
        },
        {
          prefix: 'Секция 4.',
          label: 'Тепловые, лазерно-оптические системы наблюдения и связи',
        },
        {
          prefix: 'Секция 5.',
          label: 'Радиолокация. Радиолокационные системы с синтезированной апертурой. Авиационно-космические радиоэлектронные системы.',
        },
        {
          prefix: 'Секция 6.',
          label: 'Навигация. Позиционирование. Морская локация и навигация. Гидроакустика. Системы наведения.',
        },
        {
          prefix: 'Секция 7.',
          label: 'Сверхширокополосные радиоэлектронные системы. Теория фракталов.',
        },
        {
          prefix: 'Секция 8.',
          label: 'Электродинамика, распространение радиоволн, антенны. Цифровые антенные решетки и технология MIMO.',
        },
        {
          prefix: 'Секция 9.',
          label: 'Помехи. Электромагнитная совместимость. Радио- и оптоэлектронная разведка и подавление.',
        },
        {
          prefix: 'Секция 10.',
          label: 'Радиотехнические устройства. Автоматизированные измерительные комплексы. Электроника. Техника СВЧ.',
        },
        {
          prefix: 'Секция 11.',
          label: 'Радиотехнический мониторинг Земли.',
        },
        {
          prefix: 'Секция 12.',
          label: 'Интеллектуальные системы управления и связи. Когнитивное радио.',
        }
      ]
    },

    speakers: function () {
      return undefined
    },

    partners: function () {
      return [
        {
          title: 'Перейти на официальный сайт ФГБОУ ВО «ВГУ»',
          url: 'https://vsu.ru',
          image: '/images/partners/vsu.svg',
        },
        {
          title: 'Передовая инженерная школа «Российская электроника, инфокоммуникации и радиосвязь»',
          url: 'https://www.vsu.ru/engineers/',
          image: '/images/partners/saes.svg',
        },
        {
          title: 'Перейти на официальный сайт «Концерна «Созвездие»',
          url: 'https://sozvezdie-dmr.su',
          image: '/images/partners/sozvezdie.svg',
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

    archive: function () {
      return undefined
      // return data.constants.archiveYears
      //   .map((y, i) => {
      //     return {
      //       url: `/archive/${y}`,
      //       label: data.constants.currentNumber - data.constants.archiveYears.length + i,
      //     }
      //   })
      //   .sort((a, b) => b.label - a.label)
    }
  },
}
