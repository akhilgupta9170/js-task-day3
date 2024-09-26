//Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.


function normal(){
    console.log("function execution started")
    let timer= setInterval(function(){
        console.log("Hello world")
    },2000)
    setTimeout(()=>clearInterval(timer),10000)
}
normal()

