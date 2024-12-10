import mongoose from "mongoose";

const mongodbURL = "mongodb://localhost:27017";

const dataBase = async () => {
    try {
        const { connection } = await mongoose.connect(mongodbURL);
        // Check the connection status using _readyState
        if (connection.readyState === 1) { // 1 indicates a successful connection
            console.log("MongoDB database connected");
        } else {
            console.log("MongoDB database connection failed");
        }
    } catch (error) {
        console.error(error); // Log the error details for debugging
        console.log("MongoDB database connection failed");
    }
};


export default dataBase;


