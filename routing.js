const userRoutes = require('./routes/userRoutes');
const priceRoutes = require('./routes/priceRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const {errorMessage} = require('./util/CatchError');

module.exports = (app) => {

    app.use('/users', userRoutes);
    app.use('/notices', noticeRoutes);
    app.use('/prices', priceRoutes);
    app.use('/gallery', galleryRoutes);
    app.use(errorMessage);

}