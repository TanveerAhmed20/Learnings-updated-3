// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
// import Example from './App';
import Employees from './App';
import './index.css'

// const name  = "Pulkit";
// function formatUser(user){
//   return user.firstName + user.lastName;
// }
// const user = {
//   firstName : "tanveer",
//   lastName : "Ahmed"
// }

// const getGreeting  = user => user?<h1>Hello:
//   {formatUser(user)}
// </h1>:<h1>Hello stranger</h1>
// ReactDOM.render(<h1>Hello {getGreeting(user)}</h1>, document.getElementById('root'));
ReactDOM.render(<Employees/>, document.getElementById('root'));