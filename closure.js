// Closure ruturn function
function talkTo(people){
    var age = 18
    return function send(message){
        debugger
        console.log('Hi, '+ people + ' ' + message + age )
    }
}

var hi = talkTo('Khoa')

console.log(hi)

hi('I love u')

// Closure ruturn object
function getUserId(){
    var id = 69
    return {
        getId: function(){
            return 'id: ' + id
        },
        setId: function(newId){
            id = newId
            return 'id: ' + id
        }
    }
}

var userId = getUserId()

console.log(userId)

console.log(userId.getId())

userId.setId(96)

console.log(userId.getId())


// Closure ruturn array

function functionCreator(){

    var arrays = []
    
    for (let i = 0; i < 3; i++ ){
         arrays[i] = function(){
             console.log(i)
         }
    }
    
    return arrays // array of functions
}

var showNumbers = functionCreator()

// console.log(showNumbers[0])

showNumbers[0]()
showNumbers[1]()
showNumbers[2]()