const Notice = require('../models/noticeModel');
const {appError, catchAsync} = require('../util/CatchError');

exports.getPost = catchAsync(async(req, res, next) => {

    const notice = await Notice.find().sort({createdAt: -1});

    if(!notice){
        return next(new appError("Cant create message", 400))
    }

    res.status(200).json({
        status: "success",
        notice
    })
}) 

exports.createPost = catchAsync(async(req, res, next) => {

    const notice = await Notice.create({message: req.body.message});

    if(!notice){
        return next(new appError("Cant create message", 400))
    }

    res.status(200).json({
        status: "success",
        notice
    })
}) 

exports.deletePost = catchAsync(async(req, res, next) => {

    await Notice.findByIdAndDelete(req.params.id);

    res.status(200).json({
        status: "success",
    })
})

exports.updatePost = catchAsync(async(req, res, next) => {

    const notice = await Notice.findByIdAndUpdate(req.params.id, {message: req.body.message}, {new: true})

    if(!notice){
        return next(new appError("Could not update notice", 400))
    }

    res.status(200).json({
        status: "success",
        notice
    })
})