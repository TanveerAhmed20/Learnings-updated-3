const chalk = require('chalk')
const fetch = require('node-fetch');
// import defineComponent from './swapi'
const getPeoplePromise = fetch => {
  return fetch('http://swapi.py4e.com/api/people')
  .then(response=> response.json())
  .then(data=>{
    // console.log(chalk.green('DATA RECEIVED'))
    return {
      count: data.count , 
      results : data.results
    }
    
  })

}

const getPeople  = async fetch =>{
  const response = await fetch('http://swapi.py4e.com/api/people');
  const data = await response.json(); 
  // console.log(chalk.green('DATA RECEIVED'))
  return {
    count:data.count ,
     results: data.results
  }
} 

const fetchDataPromise = async ()=>{
  const result = await getPeoplePromise(fetch)
  // console.log(result)
}

// fetchData();
const fetchData = async ()=>{
  const result = await getPeople(fetch)
  console.log(result)
}

// fetchData();
// const result = getPeople(fetch);
// console.log(result)

module.exports = {
  getPeople,
  getPeoplePromise
}