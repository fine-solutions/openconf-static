function getNumberWords(value, words) {
  value = Math.abs(value) % 100
	var num = value % 10
	if(value > 10 && value < 20) return words[2]
	if(num > 1 && num < 5) return words[1]
	if(num == 1) return words[0]
	return words[2]
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
  } else if (diff < 60*60*24*30) {
    value = Math.ceil(diff / (60*60*24*7))
    word = getNumberWords(value, ['неделя', 'недели', 'недель'])
    return `${value} ${word} назад`
  } else if (diff < 60*60*24*30*12) {
    value = Math.ceil(diff / (60*60*24*30))
    word = getNumberWords(value, ['месяц', 'месяца', 'месяцев'])
    return `${value} ${word} назад`
  } else if (diff > 60*60*24*365) {
    value = Math.ceil(diff / (60*60*24*365))
    word = getNumberWords(value, ['год', 'года', 'лет'])
    return `${value} ${word} назад`
  }
}

export default {
  getUpdatedTime
}
