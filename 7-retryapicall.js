//Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

function getUserInfo(retry = 5){
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts/ 1")
       .then(response => {
         if(!response.ok){
            const retriesLeft = retry-1;
            // console.log("Retrying after retry " + retriesLeft)
            // reject("Error fetching the post")
            if(retry == 0)  {
                console.log("Rejecting")
              return  reject("Error fetching the post")
            }

            console.log(`Retrying... Attempt ${retriesLeft}`);
            return getUserInfo(retriesLeft);
            //  throw new Error(`Error ${response.status}`)
         }
         return resolve(response.json())
         console.log("After resolving")
       })
       .catch(error => {
            console.error(`Max retries reached: ${error}`);
            reject(error);
       });
    })
}
 
getUserInfo()
.then(response => console.log(response))
.catch(error => console.error(error));

