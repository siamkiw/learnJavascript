// const btn = document.querySelector('#clicker')

// btn.addEventListener('click', () => {
//     alert('click')
// })

// btn.addEventListener('click', function () {
//     console.log('second thing')
// })

// window.addEventListener('scroll', function () {
//     console.log('stop scrolling me!')
// })

// btn.addEventListener('mouseover', function () {
//     console.log('MOUSE OVER ME.')
//     const h = Math.floor(Math.random() * window.innerHeight)
//     const w = Math.floor(Math.random() * window.innerWidth)
//     console.log(h, w)
//     btn.style.left = `${w}px`;
//     btn.style.top = `${h}px`;
// })

// btn.addEventListener('click', function () {
//     btn.innerText = 'YOU GOT ME'
//     document.body.style.backgroungColor = 'pink'
// })


const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
]

const container = document.querySelector('#boxes')
const h1 = document.querySelector('h1')

const printColor = function (evt) {
    console.log(evt)
    h1.style.color = this.style.backgroundColor
}

for (let color of colors) {
    const box = document.createElement('div')
    box.style.backgroundColor = color
    box.classList.add('box')
    container.appendChild(box)
    box.addEventListener('click', printColor)
}

// document.body.addEventListener('keypress', function (e) {
//     console.log(e)
// })

const input = document.querySelector('#username')

input.addEventListener('keypress', function (e) {
    console.log(e.code)
})

input.addEventListener('keydown', function (e) {
    console.log(e.code)
})


const addItemInput = document.querySelector('#addItem')
const itemsUl = document.querySelector('#items')

addItemInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (!this.value) return
        const food = this.value
        const item = document.createElement('li')
        item.innerText = food
        itemsUl.appendChild(item)
        this.value = ''
    }

})