//Write a JavaScript program that converts a callback-based function to a Promise-based function.



function callbackToPromise(callback){
console.log("I am callback to promise")

    const prom=new Promise((resolve,reject) => {
        callback(resolve,reject);
        
    });



    
}
callbackToPromise(function(resolve,reject){
    setTimeout(() => {
        console.log("hello world")
        resolve("Promise resolved")
    }, 2000);

}.then(function(){
 console.log("promise is resolve")
}))

