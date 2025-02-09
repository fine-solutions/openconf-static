import timePass from './modules/time-pass.js'

const timeBlocks = document.getElementsByTagName('time')
if (timeBlocks.length > 0) {
  for (let i = 0; i < timeBlocks.length; i++) {
    timeBlocks[i].innerText = timePass.getUpdatedTime(timeBlocks[i].getAttribute('datetime'))
  }
}
