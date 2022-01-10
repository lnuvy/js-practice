const colorBox = document.querySelector('.color-box')
const colorList = document.querySelector('.color-list')
const colorInput = document.getElementById('color-input')

const colors = ['orange', 'blue', 'brown', 'green', 'red', 'skyblue', 'tan']

function addColors(colors) {
  for (let color of colors) {
    const item = `<div class='color-item'>${color}</div>`
    colorList.innerHTML += item
  }
}

function typeColor(e) {
  console.log(e.target.value)

  if (e.target.value !== '') {
    console.log('you typed something')
    colorList.classList.add('show')
  } else {
    console.log('you didn\'t type anything')
    colorList.classList.remove('show')
  }
}

function setColor(e) {
  console.log(e.target)

  if (e.target.className === 'color-item') {
    const pickedColor = e.target.innerText
    console.log('you picked color !', pickedColor)
    colorInput.value = pickedColor // 사용자가 선택한 색상으로 입력창 화면 설정
    colorList.classList.remove('show') // 색상목록 숨기기
    colorBox.style.background = pickedColor // 배경색 변경
  }
}

addColors(colors)
colorInput.addEventListener('input', typeColor)
colorList.addEventListener('click', setColor)