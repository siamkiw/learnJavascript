const egg = document.querySelector('#egg')

let isClicked = false

egg.addEventListener('click', () => {
    let rotate = 10 + Math.floor(Math.random() * 30);
    rotate = isClicked === false ? rotate : rotate * -1
    isClicked = !isClicked
    console.log(rotate)
    egg.style.transform = `rotate(${rotate}deg)`
})