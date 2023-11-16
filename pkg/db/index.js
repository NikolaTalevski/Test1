const mongoose = require("mongoose");
const config = require("../config");

const {
    MONGO_USERNAME,
    MONGO_PASSWORD
} = config.getSection("development");

const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.0hmhh1m.mongodb.net/Courses?retryWrites=true&w=majority`;

async function connect() {
    try{
        await mongoose.connect(uri);
    }catch(err){
        console.error(err);
    }
}

connect();