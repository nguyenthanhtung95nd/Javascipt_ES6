// 3. Destruction object
let thingsToDo = {
    morning: "Exercise",
    afternoon: "Work",
    evening: "Code",
    night: ["Sleep", "Dream"]
}

let {morning, afternoon} = thingsToDo;
console.log(morning, ' - ',afternoon);

// Example with function
let uniStudent = student => {
    let {name, university} = student;
    console.log(`${name} from ${university}`)
}

uniStudent({
    name: "TungNT",
    university: "Hutech"
});