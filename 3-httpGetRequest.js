//Write a JavaScript function that makes an HTTP GET request and returns a Promise that resolves with the response data.f




function getHttp(){
    return new Promise((resolve,reject) =>{
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            if(!response.ok){
                reject("Error fetch")
            }
            else{
                resolve("Success")
            }
        })
     
    })
}

getHttp().then(function(message){
    console.log(message)
})
.catch(function(error){
    console.log(error)
})