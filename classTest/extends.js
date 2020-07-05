class Pet {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        return `${this.name} eatting`
    }
}

class Cat extends Pet {
    constructor(name, age, lifeLeft) {
        super(name, age)
        this.lifeLeft = lifeLeft
    }
    meow() {
        return `meowww`
    }
}

class Dog extends Pet {
    bark() {
        return `woff`
    }
    eat() {
        return `im Dog and im eating`
    }
}