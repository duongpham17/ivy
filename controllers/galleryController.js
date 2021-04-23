const Gallery = require('../models/galleryModel');
const {appError, catchAsync} = require('../util/CatchError');

exports.getGallery = catchAsync(async(req, res, next) => {

    const gallery = await Gallery.find({type: "main"});

    if(!gallery){
        return next(new appError("Cant find gallery docs", 400))
    }

    res.status(200).json({
        status: "success",
        gallery
    })
});

exports.createGallery = catchAsync(async(req, res, next) => {

    const gallery = await Gallery.create(req.body);

    if(!gallery){
        return next(new appError("Cant create new gallery", 400))
    }

    res.status(200).json({
        status: "success",
        gallery
    })
});

exports.deleteGallery = catchAsync(async(req, res, next) => {

    await Gallery.findByIdAndDelete(req.params.id);

    res.status(200).json({
        status: "success",
    })
});

//upload images
exports.uploadImage = catchAsync(async(req, res, next) => {
    const gallery = await Gallery.findByIdAndUpdate(req.params.id, {images: req.body.images}, {new : true})

    if(!gallery ){
        return next(new appError('Images could not be updated', 400))
    }

    res.status(200).json({
        status: 'success',
        gallery
    })
});

exports.updateGallery = catchAsync(async(req, res, next) => {

    const gallery = await Gallery.findByIdAndUpdate(req.params.id, req.body, {new: true})

    if(!gallery){
        return next(new appError("Could not update gallery", 400))
    }

    res.status(200).json({
        status: "success",
        gallery
    })
});