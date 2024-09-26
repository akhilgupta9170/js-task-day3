//Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises



function arrayUrl(urls){
    const promises =  urls.map((url) => {
        return new Promise((resolve,reject) => {
            if(!response.ok){
                throw new Error(`Something went wrong ${response.status}`)
            }
            else{
                return response.text()
            }
        })
    }).then(data=>ressolve(data))
}


arrayUrl(["https://www.example.com", "https://www.google.com", "https://www.facebook.com"])
    
