const div = document.createElement('div')
div.className = "parent"
div.innerText = "Hello World !"

const img = document.createElement('img')
img.id = "photo"
img.src = "index.js"
img.alt = "photo"

const p = document.createElement('p')
p.className = "summary"
p.innerText = "this is summary !"

div.append(img, p)


const photo = document.querySelector('#photo')
console.log(photo);

const root = document.getElementById('root')
root.appendChild(div)

const photo2 = document.querySelector('#photo')
console.log(photo2);