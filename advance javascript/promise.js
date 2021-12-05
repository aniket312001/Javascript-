// Promise 
//     resolve()  ---> then()
//     reject() ---> catch()





let condition = true  // or false

let prom = new Promise((resolve,reject)=>{
    if(condition){
        resolve("Here is success")
    }
    else {
        reject("here is failure")
    }
})

console.log(prom)




function prom(condition) {
      
    return new Promise((resolve,reject)=>{
        if(condition){
            resolve("Here is success")
        }
        else {
            reject("here is failure")
        }
    })

}



prom(true).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});


/* .then((result) => {
    
 }).catch((err) => {
    
});*/



//  3.
// do it in html 
 <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
function prom2() {
      
    return new Promise((resolve,reject)=>{
       $.get("https://jsonplaceholder.typicode.com/posts",function(data) {
           console.log(data)
       })
    })

}



prom2().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});
// ------------------------------------------------------------------------------------------------------



/*  Promise.all() 

    we can write many promise function but didnot need to write then and catch for all
    Promise.all([p1,p2]).then().catch()

*/


let p1 = new Promise(function(resolve,reject) {
    console.log("First Promise")
    resolve("first")
})

let p2 = new Promise(function(resolve,reject) {
    console.log("Second Promise")
    resolve("second")
})

Promise.all([p1,p2]).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

