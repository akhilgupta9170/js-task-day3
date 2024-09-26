//Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.


const apiUrls = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
];

async function fetchData() {
try {
    const promises = apiUrls.map(async (url) => {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    });

    const data = await Promise.all(promises);
    // console.log(data);

}
catch (error) {
    console.error("Error fetching data:", error);
} finally {
    console.log("Fetch operation complete.");
}
}

fetchData(); 
