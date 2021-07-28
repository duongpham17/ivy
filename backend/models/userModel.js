const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: "user",
    },
    password:{
        type: String,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

//hashing the password with package called (bcryptjs)
userSchema.pre('save', async function(next){
    //only run this when password has been modified
    if(!this.isModified('password')) return next();

    //hash password
    this.password = await bcrypt.hash(this.password, 12);

    next();
})
//check if confirm password matches the encrypted password.
userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
    return bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model('User', userSchema)
module.exports = User