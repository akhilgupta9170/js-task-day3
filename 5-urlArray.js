//Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

function operation1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("operation1")
            resolve();
        },2000)
    })
}
function operation2(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("operation2")
            resolve();
        },3000)
    })

}

function operation3(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("operation3")
            resolve();
        },4000)
    })
}

 async function async(){
    try{
        await operation1();
        await operation2();
        await operation3();
        console.log("All operations are done")

    }
    catch(error){
        console.log(error)
    }
}

async();