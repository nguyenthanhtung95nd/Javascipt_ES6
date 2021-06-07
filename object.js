// JS Objects

// JS Object initialization
let student ={
    usn: '112',
    firstName: 'Tung',
    lastName: 'Nguyen',
    greet: function() {
        return "Hello";
    },
    subjects: ["Math", "AI"],
}

console.log('Output is: ', student.firstName);
console.log('Output is: ', student.greet());
console.log('Output is: ', student.subjects[1]);

// JS Object Constructor
let myLaptop = new Object();
myLaptop.brand = "Dell";
myLaptop.cores = "8";

console.log("My laptop info: ", myLaptop.brand, " Cores: ", myLaptop.cores)

// Object.create()
const occupation = {
    type: 'none',
    displayType: function() {
        console.log(this.type);
    }
}

let police = Object.create(occupation);
police.type = "police";
police.displayType();

// cloning
let std = {
    name: "TungNT",
    age: 26
}

const cloneObject = Object.assign({}, std);
console.log(cloneObject);

// appending
let appending = {
    name: "TungNT",
    age: 26
}
let skills = {
    languages: '.NET, Vue',
    experience: 3
}

appending = Object.assign({}, appending, skills);
console.log(appending);

// merging
let before = {
    name: "TungNT",
    age: 28
}

let after = {
    age: 26
}

let hobbies = {
    hobbies: 'Swimming, Diving'
}
Object.assign(before, after, skills, hobbies);
console.log(before);

// Delete properties
let demoObj = new Object();
demoObj.a = 10;
demoObj.b = 20;

console.log(demoObj);

delete demoObj.b;
console.log(demoObj);

// Comparing Object
let obj1 = new Object();
obj1.name = "TungNT";

let obj2 = new Object();
obj2.name = "TungNT";

console.log("obj1==obj2", obj1 == obj2);
console.log("obj1===obj2", obj1 === obj2);
console.log("Object.is()", Object.is(obj1, obj2));

// Object destructing
let destObj = new Object();
destObj.name = "TungNT";
destObj.age = 28;

let {name, age} = destObj;
console.log(`Name: ${name}, Age: ${age}`);