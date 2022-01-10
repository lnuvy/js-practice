const colorBox = document.querySelector('.color-box')
const colorList = document.querySelector('.color-list')
const colorInput = document.getElementById('color-input')

const colors = ['orange', 'blue', 'brown', 'green', 'red', 'skyblue', 'tan']

function addColors(colors) {
  for (let color of colors) {
    const item = `<div class="color-item">${color}</div>`
    colorList.innerHTML += item
  }
}

function typeColor(e) {
  const targetValue = e.target.value
  console.log(targetValue);

  if (targetValue !== '') {
    console.log('you typed something');
    colorList.classList.add('show')
  } else {
    console.log('you didn\'t type anything');
    colorList.classList.remove('show')
  }
}

function setColor(e) {
  const target = e.target
  console.log(target);

  if (target.className === 'color-item') {
    const pickedColor = target.innerText
    console.log('you picked color !', pickedColor);
    colorList.classList.remove('show')
    colorBox.style.background = pickedColor
  }
}

addColors(colors)
colorInput.addEventListener('input', typeColor)
colorList.addEventListener('click', setColor)