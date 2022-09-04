const cluster = require("cluster");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const crypto = require("crypto");

// NOte round robin scheduling is disabled in windows
cluster.schedulingPolicy = cluster.SCHED_RR;
console.log(cluster.isMaster);
function delay(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

//is the file being executed in the master mode ?

app.get("/", (req, res) => {
  // delay(6000);
  const starttime = Date.now();
  crypto.pbkdf2("string", "salt", 1000000, 512, "sha512", () => {
    console.log("CHILD");
    console.log(Date.now() - starttime);
    res.send("hi There");

    // make sure to set thread pool size to 1 to know more about the workings
  });
  // res.send('Hi there');
});
app.get("/fast", (req, res) => {
  res.send("This is fast");
});
app.listen(port, () => {
  console.log("listening on port: ", port);
});
