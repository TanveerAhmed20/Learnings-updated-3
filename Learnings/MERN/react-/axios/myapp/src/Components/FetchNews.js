import React from 'react';
import axios from 'axios';
const FetchNews = ({callback}) => {
    const fetchnews =(country)=>{
        console.log('button clicked');
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=8d36002b5cd54462bdf296b7fe1b9bfe")
        .then((response)=>{
            callback(response.data.articles);
            console.log(response.data.articles);
        })
    }
  return (
    <div>
        <h1>FetchNews</h1>
        <button onClick={fetchnews}>Fetch</button> 
    </div>
  )
}

export default FetchNews