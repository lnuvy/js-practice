function popup(e) {
  const target = e.target
  target.classList.add('circle')
}

const popupBtn = document.querySelector('.popup')
popupBtn.addEventListener('click', popup)