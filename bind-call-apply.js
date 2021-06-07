var obj = {
    firstname: 'Tung',
    lastname: 'Nguyen',
    showName: function(){
        console.log(this.firstname +  ' '  + this.lastname)
    }
}

function displayName(age,address){
     console.log(this.firstname +  ' '  + this.lastname)
     console.log(age + ' ' + address )
     return true
}

// Bind: gắn kết -> bind(obj) -> this của obj
var bind = displayName.bind(obj)
bind(21,'HCM') // excute

// Call giống như bind: gắn kết -> bind(obj) -> this của obj
// nhưng nó sẽ chạy luôn ko cần gọi hàm excute
var call = displayName.call(obj)
// sayIntro(21,'HCM') // is not function


var apply = displayName.apply(obj, [21, 'HCM'])