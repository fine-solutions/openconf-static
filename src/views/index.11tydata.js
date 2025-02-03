export default {
  layout: 'base.njk',
  permalink: '/',

  eleventyComputed: {
    documentTitle: function (data) {
      return `${data.constants.baseTitle}*${data.constants.archiveYears[data.constants.archiveYears.length - 1]}`
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
        {
          label: 'Основные направления устойчивого развития предприятий радиоэлектронного комплекса в 2020–2030 годы',
          url: '/featured/ways',
          title: 'Описание',
          src: '/images/index/antenna',
          alt: 'Описание',
          tags: [
            {
              label: 'Пленарный доклад',
              url: '/section/plenary'
            },
          ],
        },
        {
          label: 'Фракталы, метаповерхности, системы РСА и MIMO: перспективы развития и стратегия технологий',
          url: '/featured/fractals',
          title: 'Описание',
          src: '/images/index/satellite',
          alt: 'Описание',
          tags: [
            {
              label: 'Пленарный доклад',
              url: '/section/plenary'
            },
          ],
        }
      ]
    },

    calendarItems: function () {
      return [
        {
          title: '8 февраля — 20 марта',
          text: 'Прием докладов на сайте конференции',
          isActive: true
        },
        {
          title: '1 апреля — 10 апреля',
          text: 'Регистрация участников на сайте конференции',
          isActive: false
        },
        {
          title: '15 апреля — 17 апреля',
          text: 'Работа секций конференции',
          isActive: false
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
          isActive: true,
        },
        {
          label: 'Информационное письмо',
          type: 'pdf',
          url: '',
          title: 'Информационное письмо в формате PDF',
          isActive: true,
        },
        {
          label: 'Шаблоны оформления',
          type: 'pdf',
          url: '',
          title: 'Шаблоны оформления в формате PDF',
          isActive: false,
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

    newsItems: function () {
      return [
        {
          text: 'Открыта регистрация участников очных и онлайн секций XXX международной научно-технической конференции «Радиолокация, навигация, связь».',
          updated: '2025-02-03T09:20+02:00',
          time: '6 часов назад',
          tags: [
            {
              label: 'Регистрация',
              url: '/news/tags/registration',
            },
            {
              label: 'Важно',
              url: '/news/tags/important',
            }
          ],
          url: '/news',
          title: 'Вы можете перейти к новостям'
        },
        {
          text: 'Приём докладов продлится до 24 марта (воскресенье).',
          updated: '2025-02-02T09:20+02:00',
          time: '1 день назад',
          tags: [
            {
              label: 'Сроки',
              url: '/news/tags/dates',
            },
            {
              label: 'Важно',
              url: '/news/tags/important',
            }
          ],
          url: '/news',
          title: 'Вы можете перейти к новостям'
        },
        {
          text: 'Приём докладов на XXXI международную научно-техническую конференцию «Радиолокация, навигация, связь» (RLNC*2025) начнется 8 февраля.',
          updated: '2025-02-01T09:20+02:00',
          time: '2 дня назад',
          tags: [
            {
              label: 'Сроки',
              url: '/news/tags/dates',
            },
            {
              label: 'Важно',
              url: '/news/tags/important',
            }
          ],
          url: '/news',
          title: 'Вы можете перейти к новостям'
        },
      ]
    },

    sectionItems: function () {
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
        {
          name: 'Петров Сидор Иванович',
          url: '/',
          title: 'Почитать о Петрове Сидоре Ивановиче',
          image: '/images/speakers/ivanov',
          tags: [
            {
              label: 'Пленарный доклад',
              url: '/section/plenary',
            }
          ],
        },
        {
          name: 'Сидоров Иван Петрович',
          url: '/',
          title: 'Почитать о Сидорове Иване Петровиче',
          image: '/images/speakers/ivanov',
          tags: [
            {
              label: 'Пленарный доклад',
              url: '/section/plenary',
            }
          ],
        }
      ]
    },

    partnerItems: function () {
      return [
        {
          title: 'Перейти на официальный сайт ФГБОУ ВО «ВГУ»',
          url: 'https://vsu.ru',
          image: '/images/partners/vsu.svg',
        },
        {
          title: 'Перейти на официальный сайт проекта «Передовые инженерные школы»',
          url: 'https://engineers2030.ru',
          image: '/images/partners/saes.svg',
        },
        {
          title: 'Перейти на официальный сайт «Концерна «Созвездие»',
          url: 'https://sozvezdie-dmr.su',
          image: '/images/partners/sozvezdie.svg',
        },
      ]
    },

    accommodationItems: function () {
      return [
        {
          label: 'Benefit Plaza',
          text: 'Скидка на все категории номеров 15%. В стоимость включены: завтрак «шведский стол», Интернет, пользование тренажерным залом. К услугам гостей 173 просторных комфортабельных номера. Отель гарантирует безопасность и комфортабельный',
          url: '/accommodation/benefit-plaza',
          title: 'Перейти на страницу с описанием условий размещения в отеле Benefit Plaza',
          price: 3750,
        },
        {
          label: 'Degas',
          text: 'Завтрак «Шведский стол» включен в стоимость проживания. Стоимость дополнительного завтрака 700 руб/чел.',
          url: '/accommodation/degas',
          title: 'Перейти на страницу с описанием условий размещения в отеле Degas',
          price: 4500,
        },
      ]
    },

    archiveItems: function (data) {
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
