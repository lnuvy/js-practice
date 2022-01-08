function popup(e) {  // 변수이름은 주로 e, evt, event 로 사용
  console.log(e);
  console.log(e.target);
}

const popupBtn = document.getElementById('popup')
popupBtn.addEventListener('click', popup)