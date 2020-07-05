// function Color(r, g, b) {
//     this.r = r
//     this.g = g
//     this.b = b
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this
//     return `rgb(${r}, ${g}, ${b})`
// }

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this
//     return `rgba(${r}, ${g}, ${b}, ${a})`
// }

// color = new Color(10, 20, 30)

class Color {
    constructor(r, g, b, name) {
        this.r = r
        this.g = g
        this.b = b
        this.name = name
        console.log('from CONSTRUCTOR')
    }
    innerRBG() {
        const { r, g, b } = this
        return `${r}, ${g}, ${b}`
    }
    greet() {
        return `hello iam ${this.name}`
    }
    rgb() {
        const { r, g, b } = this
        return `rgb(${this.innerRBG()})`
    }
    rgba(a = 1.0) {
        const { r, g, b } = this
        return `rgb(${this.innerRBG()}, ${a})`
    }
}

const color = new Color(255, 20, 20, 'tomato')