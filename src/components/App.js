// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [url, setURL] = useState('')
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data =>{
                 setURL(data.message)
                 setIsLoaded(true)
                })
    })

    if (!isLoaded) return <p>Loading...</p>
    return <img src={url} alt='A Random Dog'/>

}

export default App; 