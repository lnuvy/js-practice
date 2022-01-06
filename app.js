
// 클래스명이 photo-item 인 요소 검색
const photos = document.querySelectorAll('.photo-item')
console.log(photos)

// 클래스명이 photo-item 이고, 하위요소가 img 태그인 요소 검색
const imgs = document.querySelectorAll('.photo-item img')
console.log(imgs)

console.log(imgs[0].src);

for (let img of imgs) {
  console.log(img);
}