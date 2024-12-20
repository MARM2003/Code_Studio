const mongoose = require('mongoose');

const connectDatabase = async () => {
    const uri = "mongodb://127.0.0.1:27017/CodeStudio";

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Adjust the timeout as necessary
        });
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

module.exports = connectDatabase;
