const btn = document.querySelector('button')

// setTimeout(() => {
//     btn.style.transform = 'translateX(100px)'
//     setTimeout(() => {
//         btn.style.transform = 'translateX(200px)'
//     }, 2000);
//     setTimeout(() => {
//         btn.style.transform = 'translateX(3 00px)'
//     }, 1000);

// }, 1000);


const moveX = (element, amount, delay, onSuccess, onFailure) => {
    setTimeout(() => {
        const bodyBoundary = document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right;
        const currLeft = element.getBoundingClientRect().left;
        if (currLeft + amount > bodyBoundary) {
            onFailure()
        }
        else {
            element.style.transform = `translateX(${amount + currLeft}px)`
            onSuccess()
        }
    }, delay);
}

// moveX(btn, 100, 1000, () => [
//     moveX(btn, 1000, 1000, () => {
//         moveX(btn, 1000, 1000, () => {
//             moveX(btn, 1000, 1000)
//         })
//     })
// ])

// moveX(btn, 1000, 1000, () => {
//     console.log('onSuccess')
//     moveX(btn, 1000, 1000, () => {
//         console.log('onSuccess')
//         moveX(btn, 1000, 1000, () => {
//             console.log('onSuccess')
//             moveX(btn, 1000, 1000, () => {
//                 console.log('onSuccess')
//             }, () => {
//                 alert('onFailure')
//             })
//         }, () => {
//             alert('onFailure')
//         })
//     }, () => {
//         alert('onFailure')
//     })
// }, () => {
//     alert('onFailure')
// })


// const willGetADog = new Promise((resolve, reject) => {
//     const rand = Math.random()
//     res = rand < 0.5 ? resolve() : reject()
// })

// willGetADog.then(() => {
//     console.log('we get a dog.')
// }).catch(() => {
//     console.log('sorry you didt get a dog')
// })

// const makeDogPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random()
//             res = rand < 0.5 ? resolve() : reject()
//         }, 5000)

//     })
// }

// willGetADog = makeDogPromise()

// willGetADog
//     .then(() => {
//         console.log('we get a dog.')
//     })
//     .catch(() => {
//         console.log('sorry you didt get a dog')
//     })

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                reject({ status: 404 })
            } else {
                const pages = {
                    '/user': [
                        { id: 1, username: 'siamKiw' },
                        { id: 3, username: 'Siam Sae-chua' }
                    ],
                    '/about': 'This is about page.'
                }
                const data = pages[url]
                data ? resolve({ status: 200, data }) : reject({ status: 404 })
            }
        }, 1000)
    })
}

fakeRequest('/about')
    .then((res) => {
        console.log('Status Code', res.status)
        console.log('Data', res.data)
        console.log('REQUEST WORKED')
    })
    .catch((res) => {
        console.log(res.status)
        console.log('REQUEST FAILED')
    })


fakeRequest('/dog')
    .then((res) => {
        console.log('Status Code', res.status)
        console.log('Data', res.data)
        console.log('REQUEST WORKED')
    })
    .catch((res) => {
        console.log(res.status)
        console.log('REQUEST FAILED')
    })