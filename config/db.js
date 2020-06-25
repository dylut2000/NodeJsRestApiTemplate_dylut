const mongoose = require("mongoose");
const config = require("config");
// get mongo URI from default.json file
const db = config.get("mongoURI");

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.log('error while connection')
        console.error(err.message);
        // Exit process
        process.exit(1);
    }
};

module.exports = connectDB;