// Spead
// Ex 1
let a = ["1","2","3"];
let b = ["5","6"];

let ab = [...a, ...b];
console.log(ab);

// Ex 2
let day = {
    breakfast: "Banh my",
    lunch: "Pho"
}

let night = {
    dinner: "Di nhau"
}

let picnic = {...day, ...night};
console.log(picnic);
// Rest
// Ex 1

let rivers = ["song hong", "song ranh", "song cau"]

var [first, ...rest] = rivers;
console.log(first);

let person = {
    name: "TungNT",
    age: "26"
}

var {name, ...rest} = person;
console.log(name);