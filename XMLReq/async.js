async function greet() {
    return 'hello'
}

greet().then((data) => [
    console.log(data)
])

async function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X and Y must be number')
    }
    return x + y
}

function add(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            reject(Error('X and Y must be number'))
        }
        resolve(x + y)
    })
}

add(5, 's')
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })