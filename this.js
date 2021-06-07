// 1 -- this is a function
function sayHello() {
    console.log(this);
}

sayHello();

// 2 --- Calll stack $ call site
function login() {
    // call-stack is 'login'
    // so, our call-site is in the global scope
    console.log('Login');
    welcome(); // <--- call-site for 'welcome'
}

function welcome() {
    // call-stack is 'welcome'
    // so, our call-site is in the login
    console.log('Welcome');
    like(); // <--- call-site for 'like'
}

function like() {
    // call-stack is 'like'
    // so, our call-site is in the welcome
    console.log('Like');
}

// Implicit binding
function hello() {
    console.log('welcome' + this.name);
}

var obj1 = {
    name: 'tungnt',
    hello: hello
}
// context
obj1.hello();
