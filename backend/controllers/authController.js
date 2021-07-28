const User = require('../models/userModel');
const {appError, catchAsync} = require('../util/CatchError');
const {promisify} = require('util')
const jwt = require('jsonwebtoken');

const signToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, 
        {expiresIn: process.env.JWT_EXPIRES}
    )
};

//create a jwt token
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);

    const cookieOptions = {
        expires: new Date( Date.now() + process.env.JWT_EXPIRES_NUM * 24 * 60 * 60 * 1000),
        httpOnly: process.env.NODE_ENV === "production" ? true : false,
        secure: process.env.NODE_ENV === "production" ? true : false,
    };

    res.cookie('jwt', token, cookieOptions);

    user.password = undefined

    res.status(statusCode).json({
      status: 'success',
      token,
      user
    });
};


//Protect routes 
exports.protect = catchAsync(async(req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
    } else if(req.cookies.jwt) {
        token = req.cookies.jwt
    }

    if(!token){
        return next(new appError('Login to access these features', 401))
    };

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const existingUser = await User.findById(decoded.id).select(['role', 'point'])

    if(!existingUser){
        return next(new appError('The user belonging to this token does not exist.', 401))
    };

    //grant access to protected route if everything is good.
    req.user = existingUser;

    next();
}) 

//sign up users
exports.signup = catchAsync(async(req, res, next) => {
    const {username, password} = req.body

    const user = await User.create({username, password})

    if(!user){
        return next(new appError("Something went wrong", 400))
    }

    createSendToken(user, 201, res)
});

//login users
exports.login = catchAsync(async(req, res, next) => {
    const {password, username} = req.body;

    const user = await User.findOne({username}).select('+password');

    if(!user || !(await user.correctPassword(password, user.password))) {
        return next(new appError("Incorrect Login Information", 401))
    };
    
    user.username = undefined;
    user.createdAt = undefined;
    user.__v = undefined;

    //if everything okay send token to client
    createSendToken(user, 200, res);
});

//logout
exports.logout = async (req, res, next) => {
    const options = {
        expires: new Date( Date.now() + 2000),
        httpOnly: process.env.NODE_ENV === "production" ? true : false,
        secure: process.env.NODE_ENV === "production" ? true : false,
    }

    res.cookie('jwt', 'expiredtoken', options);

    res.status(200).json({
        status: 'success'
    })
};

//check if the user is logged in
exports.loggedIn = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('role')

    if(!user){
        return next( new appError('please log back in for a new token', 401))
    }
    
    res.status(201).json({
        status: "success",
        user
    })
});