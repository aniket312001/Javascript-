console.log("hello")

for(let i=0;i<=5;i++) {
    if(i%2==0){
        console.log("hello" ,i);
    }
}

function run(){
    console.log("Inside in run");
}

run()

sum = (a,b)=>{
    console.log("sum of "+a+ " and "+b + " is "+(a+b));
}

sum(5,7)

var user = "Aniket chavan"
var greet = `hello ${user}`

console.log(greet)

//  function with multiple arguments 
function add(args){
    sum=0;
    for(let i in args){
        sum += args[i];
    }
    return sum;
}

console.log(add([6,5,3,6]))
// -----------------------------------------------------------------------------
// Rest operator
function adds(name,...args){    //...a rest operator
    let sum=0
    for(let i in args){
        sum +=args[i];
    }
    console.log(name,sum)
}

adds("sam",5,3,2)
// ------------------------------------------------------------------------------

function sums(){
    console.log(arguments)  // very imp no need to pass and argument in function  , just call with argument
}
sums(4,5,6,7)
sums(4,5,6,3,5,6)

// -----------------------------------------------------------------------------------

// spread operator 
        //  means we can pass array will calling the functions  


    var a1 = [1,2,34,5]
    var a2 = [4,5,6,7,3]
    var b1 = [55,...a1,...a2,55]
    
    console.log(b1) //it will concatinate array 1 and 2   









function addmany(name,course,...args){  // rest operator
    console.log(`${name} is studing in ${course}`)
    var sum=0;
    for(let i in args){
        sum += args[i]
    }
    console.log(sum)
}

arr = [4,5,6,7,8,3,2]
addmany("aniket","nsg",...arr)   // spread operator


// -----------------------------------------------------------------------------------


// object literals

let obj = {
    name:"aniket",
    show(){
        console.log(this.name)
    }
}

console.log(obj.show())





// ---------------------------------------------------------------------------------------------

// Destructuring Array
let user1 = ["anu", 55]
let [nm , age] = user1

console.log(nm,age)