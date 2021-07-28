const mongoose = require('mongoose');

module.exports  = async () => {
    const db = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
    const use = {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false};
    try{
        await mongoose.connect( db , use )
        if (process.env.NODE_ENV === "development") console.log("DB connection successful!");
    } catch (err){
        console.log("Could not connect to database")
    }
}