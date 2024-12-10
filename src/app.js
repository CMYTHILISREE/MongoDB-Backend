import express from "express";
import usersRouter from "./routes/users.js";
import dataBase from "./utils/connection/dataBase.js"
import logging from "./middleware/logging.js";
const app = express();//initializing express

//connecting to database
dataBase();

//middlewares
app.use(express.json()); //middleware to parse json
app.use(logging); //middleware to log requests

//routes
app.use("/users", usersRouter);//routes to handle user data related requests
app.get("/", (req, res) => res.send("Welcome to Nodejs Assignment"));//routes to handle home page request


//listening
app.listen(5100, () => console.log("Server is running at 5100"));