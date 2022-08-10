// find the second element in each currency

const data = require("./players.json");



const firstUniq = []; // ["INR"]



const res = data.reduce((acc, e) => {

    if (!firstUniq.includes(e.currency)) {

        firstUniq.push(e.currency);

    } else if (!acc[e.currency]) {

        acc[e.currency] = e;

    }

    return acc;

}, {});



console.log(res);