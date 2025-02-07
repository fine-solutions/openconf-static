function getNumberWords(value, words) {
  value = Math.abs(value) % 100;
	var num = value % 10;
	if(value > 10 && value < 20) return words[2];
	if(num > 1 && num < 5) return words[1];
	if(num == 1) return words[0];
	return words[2];
}

function getUpdatedTime(time) {
  const currentTime = new Date()
  const updatedTime = new Date(time)
  const diff = Math.abs((updatedTime - currentTime) / 1000)
  let value = 0, word = ''
  if (diff < 60) {
    value =   Math.floor(diff)
    word = getNumberWords(value, ['секунда', 'секунды', 'секунд'])
    return `${value} ${word} назад`
  } else if (diff < 60*60) {
    value = Math.ceil(diff / 60)
    word = getNumberWords(value, ['минута', 'минуты', 'минут'])
    return `${value} ${word} назад`
  } else if (diff < 60*60*24) {
    value = Math.ceil(diff / (60*60))
    word = getNumberWords(value, ['час', 'часа', 'часов'])
    return `${value} ${word} назад`
  } else if (diff < 60*60*24*7) {
    value = Math.ceil(diff / (60*60*24))
    word = getNumberWords(value, ['день', 'дня', 'дней'])
    return `${value} ${word} назад`
  } else if (diff < 60*60*24*7*30) {
    value = Math.ceil(diff / (60*60*24*7))
    word = getNumberWords(value, ['неделя', 'недели', 'недель'])
    return `${value} ${word} назад`
  } else if (diff < 60*60*24*7*30*12) {
    value = Math.ceil(diff / (60*60*24*7*30))
    word = getNumberWords(value, ['месяц', 'месяца', 'месяцев'])
    return `${value} ${word} назад`
  } else if (diff > 60*60*24*7*365) {
    value = Math.ceil(diff / (60*60*24*7*365))
    word = getNumberWords(value, ['год', 'года', 'лет'])
    return `${value} ${word} назад`
  }
}

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
      return false
      // return {
      //   label: 'Подать доклад',
      //   url: 'https://my.rlnc.ru',
      //   title: 'Нажав эту кнопку Вы попадёте в личный кабинет, где сможете подать доклад на конференцию',
      // }
    },

    mainImage: function () {
      return {
        url: '/images/index/chip',
        alt: 'Фотография части печатной платы в черном цвете с крупной интегральной микросхемой и другими мелкими компонентами на ней',
      }
    },

    bannersItems: function () {
      return undefined
    },

    calendarItems: function () {
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
          url: '/docs/rlnc-call-for-paper.pdf',
          title: 'Информационное письмо в формате PDF',
          isActive: false,
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
          text: 'Мы запустили наш новый сайт и систему подачи докладов',
          updated: '2025-01-01T09:20+02:00',
          time: getUpdatedTime('2025-02-08T09:20+02:00'),
          tags: [
            {
              label: 'Важно',
              url: '/#news',
            }
          ],
          url: '/#news',
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
      return undefined
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
          url: 'https://www.benefitplaza.ru/contact.htm',
          title: 'Перейти на страницу с описанием условий размещения в отеле Benefit Plaza',
          price: 3750,
        },
        {
          label: 'Degas',
          text: 'Завтрак «Шведский стол» включен в стоимость проживания. Стоимость дополнительного завтрака 700 руб/чел.',
          url: 'https://degas-hotel.ru',
          title: 'Перейти на страницу с описанием условий размещения в отеле Degas',
          price: 4500,
        },
      ]
    },

    archiveItems: function (data) {
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
