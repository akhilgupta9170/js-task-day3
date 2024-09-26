//Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.
function cancelRequest(){
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => controller.abort(),500)
    fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(err => {
         if (err.name === 'AbortError') {
             console.log('Fetch aborted due to timeout');
         } else {
             console.error('Fetch failed:', err);
         }
        
     })
}
cancelRequest()