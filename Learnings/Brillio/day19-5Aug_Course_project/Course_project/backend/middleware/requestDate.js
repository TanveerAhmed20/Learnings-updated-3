const requestDate = (req,res,next)=>{
    req.requestDate = Date.now(); 
    // Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
    next();
}

module.exports = requestDate;