const userRoutes     = require('../backend/routes/userRoutes');
const priceRoutes    = require('../backend/routes/priceRoutes');
const noticeRoutes   = require('../backend/routes/noticeRoutes');
const galleryRoutes  = require('../backend/routes/galleryRoutes');
const {errorMessage} = require('../backend/util/CatchError');

module.exports = (app) => {
    app.use('/api/users', userRoutes);
    app.use('/api/notices', noticeRoutes);
    app.use('/api/prices', priceRoutes);
    app.use('/api/galleries', galleryRoutes);
    app.use(errorMessage)
};