// 2. Arrow function
// function greeting(messgae) {
//     return alert(`Hello ${messgae}`);
// }

let greeting = messgae => alert(`Hello ${messgae}`);

greeting("TungNT");

let createBlog = (title, body) => {
    if(!title) {
        throw new Error('A title is required!');
    }
    if(!body) {
        throw new Error('A body is required!');
    }
    return alert(`${title}-${body}`);
}