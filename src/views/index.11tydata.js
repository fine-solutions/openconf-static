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
          title: '10 февраля — 31 марта',
          text: 'Прием и рецензирование докладов',
          isActive: currentDate >= new Date('2025-02-10T00:00+03:00') && currentDate <= new Date('2025-03-31T00:00+03:00'),
        },
        {
          title: '31 марта — 10 апреля',
          text: 'Регистрация участников',
          isActive: currentDate >= new Date('2025-03-31T00:00+03:00') && currentDate <= new Date('2025-04-10T00:00+03:00'),
        },
        {
          title: '15 апреля — 17 апреля',
          text: 'Работа секций конференции',
          isActive: currentDate >= new Date('2025-04-15T00:00+03:00') && currentDate <= new Date('2025-04-17T00:00+03:00'),
        }
      ]
    },

    onlineStreams: function () {
      return [
        {
          url: 'https://tc.main.vsu.ru/c/6613088286',
          label: 'Пленарное заседание',
        },
        {
          url: 'https://tc.main.vsu.ru/c/0155641640',
          label: 'Заседание секций 1, 2',
        },
        {
          url: 'https://tc.main.vsu.ru/c/7784013099',
          label: 'Заседание секций 3, 4, 12',
        },
        {
          url: 'https://tc.main.vsu.ru/c/7953417226',
          label: 'Заседание секций 5, 6, 11',
        },
        {
          url: 'https://tc.main.vsu.ru/c/6613088286',
          label: 'Заседание секций 7, 8',
        },
        {
          url: 'https://tc.main.vsu.ru/c/8204042211',
          label: 'Заседание секций 9, 10',
        },
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
          url: '/docs/2025/rlnc-agenda.pdf',
          title: 'Программа в формате PDF',
          isActive: true,
        },
        {
          label: 'Сборник трудов (том 1)',
          type: 'pdf',
          url: '/docs/2025/vol-1.pdf',
          title: 'Сборник трудов (том 1) в формате PDF',
          isActive: true,
        },
        {
          label: 'Сборник трудов (том 2)',
          type: 'pdf',
          url: '/docs/2025/vol-1.pdf',
          title: 'Сборник трудов (том 2) в формате PDF',
          isActive: true,
        },
        {
          label: 'Сборник трудов (том 3)',
          type: 'pdf',
          url: '/docs/2025/vol-1.pdf',
          title: 'Сборник трудов (том 3) в формате PDF',
          isActive: true,
        },
        {
          label: 'Сборник трудов (том 4)',
          type: 'pdf',
          url: '/docs/2025/vol-1.pdf',
          title: 'Сборник трудов (том 4) в формате PDF',
          isActive: true,
        },
        {
          label: 'Сборник трудов (том 5)',
          type: 'pdf',
          url: '/docs/2025/vol-1.pdf',
          title: 'Сборник трудов (том 5) в формате PDF',
          isActive: true,
        },
        {
          label: 'Сборник трудов (том 6)',
          type: 'pdf',
          url: '/docs/2025/vol-1.pdf',
          title: 'Сборник трудов (том 6) в формате PDF',
          isActive: true,
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
      const { tags } = data.collections
      const { news } = data.collections
      return news
        .map((n) => {
          n.data.tags = n.data.tags.map((t) => tags.filter((s) => s.url === t)[0])
          return n
        })
        .sort((a, b) => new Date(b.data.updated) - new Date(a.data.updated))
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

    archiveList: function (data) {
      return data.constants.archiveYears
        .map((y, i) => {
          return {
            url: `/archive/${y}`,
            label: data.constants.currentNumber - data.constants.archiveYears.length + i,
          }
        })
        .sort((a, b) => b.label - a.label)
    }
  },
}
