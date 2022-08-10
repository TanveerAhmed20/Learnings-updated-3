function log(req, res, next) {
    console.log('logging...');
    next();// commenting this part will lead to infininte loop
};

module.exports = log;