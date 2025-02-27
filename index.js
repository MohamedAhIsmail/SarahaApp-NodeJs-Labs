import * as dotenv from 'dotenv';
dotenv.config({});

import express from "express";
import bootStrap from "./src/app.controller.js";

import cors from "cors"


const app = express();
const port = process.env.PORT || 8888;

app.use(cors())

bootStrap(app, express);


app.listen(port, () => {
  console.log(`Saraha APP is Running on Port ${port}`);
});
