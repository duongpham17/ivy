const rateLimit = require('express-rate-limit');

const limiter = (rate, minute, message) => rateLimit({
    max: rate,
    windowMs: minute * 60 * 1000,
    message: message
});

module.exports = (app) => {
    app.use(`/users/login`, limiter(5, 5, "This function is in progress..." ));
}