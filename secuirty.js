const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const dotenv = require('dotenv');

dotenv.config({ path: "./config.env" });
const cors = require('cors');

module.exports = (app) => {
    app.use(cors({
        origin: process.env.NODE_ENV === "production" ? process.env.WEBSITE_URL :  process.env.FRONTEND_PORT,
        credentials: true,
    }));
    app.use(mongoSanitize());
    app.use(xss());
}
