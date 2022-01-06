
const div = document.createElement('div')
div.className = "parent"


// div.innerText = "Hello~"
// const img = document.createElement('img')
// img.className = "child"
// img.src = "http://127.0.0.1:5500"
// img.alt = "photo"
//
// const p = document.createElement('p')
// p.className = "summary"
// p.innerText = "this is summary !"

// div.append(img, p)


div.innerHTML = `
  "Hello~"
  <img class="child" src="http://127.0.0.1:5500" alt="photo" />
  <p class="summary">this is summary !</p>
`

const root = document.getElementById('root')
root.appendChild(div)
