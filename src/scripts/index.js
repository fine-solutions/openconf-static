import { getNumberWords } from "./temporal/index.js"

const timeBlocks = document.getElementsByTagName('time')
if (timeBlocks.length > 0) {
  for (let i = 0; i < timeBlocks.length; i++) {
    timeBlocks[i].innerText = getNumberWords(timeBlocks[i].innerText)
  }
}
