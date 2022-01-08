function popup() {
  alert('팝업창')
  popupBtn.removeEventListener('click', popup) // 1회 이후 이벤트를 제거
}

const popupBtn = document.getElementById('popup')
popupBtn.addEventListener('click', popup)