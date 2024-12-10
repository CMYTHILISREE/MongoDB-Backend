// Importing mongoose and Schema from the mongoose library
import mongoose, { Schema } from "mongoose";


// Defining the schema for the User model
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hobby: {
        type: String,
        required: true
    }
});

// Exporting the User model based on the defined schema
 export const User = mongoose.model("User", userSchema);
    