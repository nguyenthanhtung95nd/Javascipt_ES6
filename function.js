// default arguments

function pay(total, tips = 0, tax = 0){

    // tips = tips || 0

    // if (tips === undefined ){
    //     tips = 0
    // }

    return total + tips + tax*0.2
}

console.log(pay(100,null,5))

// Function overloading

function funcOverload(param1, param2){
    console.log('run funcion with 2 param')
    return param1 + param2;
}

function funcOverload(param1, param2, param3){
    console.log('run funcion with 3 param')
    return param1 + param2 + param3;
}

funcOverload('a', 'b');
funcOverload('a', 'b', 'c'); // running function with 3 parameters

// Immediately-invoked function expression
(function(){
    var name = 'Tung'
    console.log(name)
}());


let fucn = function hi(name){
    console.log(name)
}('Phuong');