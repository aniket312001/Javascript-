// An async function is a function declared with the async keyword, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains


/*async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise*/

async function test() {
    return "hello"
}

// console.log(test())      //  Promise { 'hello' }

test().then((result)=>{
    console.log(result)
})


// we can also write like this 
let run = async () => "hello bye"

run().then((result)=>console.log(result))


// ----------------------------------------------------------- await


async function test1() {
    console.log("1")
    await console.log("2")
    console.log("3")
}

console.log("5")
test1()
console.log("6")

// output -- 5 1 2 6 3

// -----------------------------------------------------
// run this in html script tag
async function test3() {
    console.log("1")
    const response = await fetch("json/a.json")
    console.log("2")
    const student = await response.json()
    return student 
}

console.log("5")
let a = test3()
console.log(a)
console.log("6")

// output 5 1 promise 6 2 


//------------------------------------------------------------

async function test4() {
    const response = await fetch("json/a.json")
    const student = await response.json()
    return student 
}

test4().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

