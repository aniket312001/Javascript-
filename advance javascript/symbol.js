// Symbol means unique value 

var x = Symbol()
var x = Symbol("Hello")  // unique value
var y = Symbol("Hello")

console.log(x==y)  // false

var a = "hello"
var b = "hello"
console.log(a==b)  // true


// alert(x) // error
// alert(x.toString())


let age = Symbol()
let user = {
    name : "aniket", 
    class : "BCA",
    [age] : 55   // symbol is delcare like this 
}

console.log(user)   //{ name: 'aniket', class: 'BCA', [Symbol()]: 55 }
console.log(user.name)
// console.log(user.age)  // dont use like this 
console.log(user[age])

//      note 
    // we cannot use symbol in forin loop
    // when we create json it will skip symbol 

    for(var i in user) {
        console.log(i)  // name , class 
    }


    var j = JSON.stringify(user)
    console.log(j)  //{"name":"aniket","class":"BCA"}