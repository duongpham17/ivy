const Price = require('../models/priceModel');
const {appError, catchAsync} = require('../util/CatchError');

exports.createPrice = catchAsync(async(req, res, next) => {

    const price = await Price.create(req.body);

    if(!price){
        return next(new appError("Cant create message", 400))
    }

    res.status(200).json({
        status: "success",
        price
    })
}) 

exports.getPrice = catchAsync(async(req, res, next) => {

    const price = await Price.find()

    if(!price){
        return next(new appError("Cant get price", 400))
    }

    res.status(200).json({
        status: "success",
        price
    })
}) 

exports.updatePrice = catchAsync(async(req, res, next) => {

    const price = await Price.findByIdAndUpdate(req.params.id, req.body, {new:  true})

    if(!price){
        return next(new appError("Cant update price", 400))
    }

    res.status(200).json({
        status: "success",
        price
    })
}) 

exports.deletePrice = catchAsync(async(req, res, next) => {

    await Price.findByIdAndDelete(req.params.id)

    res.status(200).json({
        status: "success",
    })
    
}) 
