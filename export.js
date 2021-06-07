function sayHi(user) {
    console.log(`Hello, ${user}!`);
}

function sayBye(user) {
    console.log(`Bye, ${user}!`);
}

export default class User { // just add "default"
    constructor(name) {
        this.name = name;
    }
    info() {
        console.log(`Hello user ${this.name}`);
    }
}

export { sayHi, sayBye }; // a list of exported variables