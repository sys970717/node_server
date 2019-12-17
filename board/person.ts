class Person {
    private user_name: string

    constructor(name: string) {
        this.user_name = name
    }

    sayHello() {
        return `Hello, ${this.user_name}`
    }
}

exports.module = Person

// const person = new Person('lee')
// console.log(person.sayHello())