const durationInput = document.querySelector('#duration')
const stratButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle')

let perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)


let duration
const timer = new Timer(durationInput, stratButton, pauseButton, {
    onStart(tortalDuration) {
        duration = tortalDuration
    },
    onTick(timeRemaing) {
        const currentOffset = perimeter * timeRemaing / duration - perimeter
        circle.setAttribute('stroke-dashoffset', currentOffset)
        console.log(`perimeter ${perimeter.toFixed(2)} || timeRemaing ${timeRemaing.toFixed(2)} || duration ${duration} || perimeter ${perimeter.toFixed(2)}`)
        console.log(`currentOffset ${currentOffset.toFixed(2)}`)
    },
    onComplete() {
        console.log('onComplete')
    }
})
// timer.start()