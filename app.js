// function popup(e) {
//   e.target.style.all = 'unset'
//   e.target.style.position = 'absolute'
//   e.target.style.left = '500px'
//   e.target.style.width = '200px'
//   e.target.style.height = '70px'
//   e.target.style.textAlign = 'center'
//   e.target.style.background = 'skyblue'
//   e.target.style.borderRadius = '50%'
//   e.target.style.transition = 'all ease 2.5s'
// }

// const popupBtn = document.getElementById('popup')
// popupBtn.addEventListener('click', popup)


function popup(e) {
  const target = e.target
  const targetStyle = target.style

  targetStyle.all = 'unset'
  targetStyle.position = 'absolute'
  targetStyle.left = '500px'
  targetStyle.width = '200px'
  targetStyle.height = '70px'
  targetStyle.textAlign = 'center'
  targetStyle.background = 'skyblue'
  targetStyle.borderRadius = '50%'
  targetStyle.transition = 'all ease 2.5s'
}

const popupBtn = document.getElementById('popup')
popupBtn.addEventListener('click', popup)