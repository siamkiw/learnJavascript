// function isValidPassword(password, username) {
//     if (isValidPassword.length < 8) {
//         return false;
//     }
//     if (password.indexOf(' ') !== -1) {
//         return false;
//     }
//     if (password.indexOf(username) !== -1) {
//         return false;
//     }
//     return true
// }


function avg(arr) {
    let total = 0;
    for (let num of arr) {
        total += num
    }
    res = total / arr.length
    return res
}

console.log(avg([0, 50, 50, 50]));

// function isPangram(sentence) {
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (sentence.toLowerCase().indexOf(char) === -1)
//             return false
//     }
//     return true
// }

function isPangram(sentence) {
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!sentence.toLowerCase().includes(char))
            return false
    }
    return true
}


console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))

let test = function (x, y) {
    console.log(x + y)
    return x + y;
}

console.log(test(5, 5))

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}

function hello() {
    console.log('hello')
}

function bye() {
    console.log('bye')
}

repeatNTimes(hello, 5)

function pickOne(f1, f2) {
    let rand = Math.random();
    console.log(rand)
    if (rand < 0.5) {
        f1()
    } else {
        f2()
    }
}

pickOne(hello, bye)

// return value as a function

function multiplyBy(num) {
    return function (x) {
        return x * num
    }
}

const triple = multiplyBy(3);
console.log(triple(5))

const double = multiplyBy(2);
console.log(double(5))


function makeBetweenFunc(x, y) {
    return function (num) {
        return num >= x && num <= y;
    }
}

const isChild = makeBetweenFunc(10, 15)

console.log(isChild(16))


setTimeout(function () {
    console.log('hello'), 6000
})


const number = [20, 21, 40, 41, 60, 61, 81, 80, 101, 100];

const words = ['asap', 'byob', 'rsvp', 'diy']

doubleNum = number.map(function (num) {
    return num * 2
})

console.log(doubleNum)

numDetail = number.map(function (num) {
    return {
        value: num,
        isEven: num % 2 === 0
    }
})

console.log(numDetail)

const square = (x) => {
    return x * x;
}

console.log(square(10))

const isEven = num => {
    return num % 2 === 0;
}


const square2 = n => n * n;

const nums = [1, 2, 3, 4, 5, 6, 7, 8]

const numSquare = nums.map(n => n * n)

console.log(numSquare)

const evenOrOdd = nums.map(n => {
    if (n % 2 === 0) return 'even';
    return 'odd';
})

console.log(evenOrOdd)

const evenOrOdd2 = nums.map(n => {
    return n % 2 === 0 ? 'even' : 'odd'
})

console.log(evenOrOdd2)

const odd = nums.filter(n => n % 2 !== 0)

console.log(odd)

const words2 = ['dog', 'dig', 'log', 'bag', 'wag']

const has3Len = words2.every(w => w.length === 3)

console.log(`has3Len ${has3Len}`)

const someStartWithD = words2.some(w => w[0] === 'd')

console.log(someStartWithD)

const allStartWithD = words2.every(w => w[0] === 'd')

console.log(allStartWithD)

number.sort((a, b) => a - b)

number.sort((a, b) => b - a)

maxGrade = number.reduce((max, currVal) => {
    return Math.max(max, currVal)
})

minGrade = number.reduce((min, currVal) => {
    return Math.min(min, currVal)
})

console.log(maxGrade)
console.log(minGrade)


let sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
    return sum + currVal
}, 1000)

console.log(sum)

const votes = ['y', 'y', 'n', 'n', 'y', 'n', 'n', 'y', 'n', 'n', 'n', 'y', 'n', 'y']

// const results = votes.reduce((total, val) => {
//     if (total[val]) {
//         total[val]++
//     } else {
//         total[val] = 1
//     }
//     return total
// }, {})

const results = votes.reduce((total, val) => {
    total[val] = (total[val] || 0) + 1
    return total
}, {})

console.log(results)


const color = ['red', 'orange', 'yellow', 'green']

const text = 'abcdefg'
const text2 = 'hijklmnop'

console.log(color)
console.log(...color)
console.log([...text, ...text2])


const feline = {
    legs: 4,
    family: 'Felidae'
}

const canine = {
    family: 'Caninae',
    furry: true
}

const dog = {
    ...canine,
    isPet: true,
    adorable: true
}

console.log(feline)

console.log(canine)

console.log(dog)

const testSum = (...nums) => {
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}

let num = testSum(1, 2, 3, 4, 5, 6, 7)

console.log(num)


const multiply = (...nums) => (
    nums.reduce((total, currVal) => total * currVal)
)

console.log(multiply(1, 2, 3, 4, 5, 6, 7, 8, 9))


const raceResults = [
    'ที่ 1',
    'ที่ 2',
    'ที่ 3',
    'ที่ 4',
]

const [gold, silver, bronze] = raceResults;


console.log(gold, silver, bronze)


const runner = {
    first: 'Eliud',
    last: 'kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Colden Heart of Kunya'
}

const { first, last } = runner;

const { country: nation, title: honorific } = runner

const mathTest = {
    add: (x, y) => x + y,
    someCondition: (x, ...num) => {
        const sum = num.reduce((x, y) => x + y)
        return [x, sum]
    }
}

console.log(mathTest.someCondition(10, 20, 30, 40))


const person = {
    first: 'siam',
    last: 'Saechua',
    nickName: 'kiw',
    fullanme() {
        const {
            first,
            last,
            nickName
        } = this;
        return `${first}, ${last}, ${nickName}`
    },
    printBio() {
        console.log(this)
        const fullName = this.fullanme();
        console.log(`${fullName}  is a person`)
    },
    laugh: () => {
        console.log(this)
        console.log(this.nickName)
    }
}

const annoyer = {
    phrases: ['literrally', 'cray cray', 'i can not even', 'Totes', 'YOLO', 'Can not stop, would not stop'],
    pickPhrase() {
        const { phrases } = this
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx]
    },
    start() {
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000);
    },
    stop() {
        clearInterval(this.timerId);
        console.log('its over.')
    }
}
