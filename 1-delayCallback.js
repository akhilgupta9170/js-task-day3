//Write a JavaScript function that takes a callback and invokes it after a delay of 2 seconds.

function delayCallback(callback){
    setTimeout(callback, 2000);
    console.log('delayCallback')
}
delayCallback(()=>{console.log("After 2 Seconds")})