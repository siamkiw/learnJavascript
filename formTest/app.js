const form = document.querySelector('#signup-form')
const creditCard = document.querySelector('#credit')
const trems = document.querySelector('#trems')
const veggie = document.querySelector('#veggie')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('creditCard', creditCard.value)
    console.log('trems', trems.value)
    console.log('veggie', veggie.value)
})

const formData = {}

for (let input of [creditCard, trems, veggie]) {
    input.addEventListener('input', ({ target }) => {
        const { name, type, checked, value } = target
        formData[name] = type === 'checkbox' ? checked : value
        console.log(formData)
    })

}

// creditCard.addEventListener('input', function (e) {
//     formData['credit'] = this.value
//     console.log(formData['credit'])
// })

// veggie.addEventListener('input', function (e) {
//     formData['veggie'] = this.value
//     console.log(formData['veggie'])
// })

// trems.addEventListener('input', function (e) {
//     formData['agreeToTrems'] = this.checked
//     console.log(formData['agreeToTrems'])
// })