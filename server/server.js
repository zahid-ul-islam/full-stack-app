const express = require('express');
const app = express();
const connectDB = require("./utils/db");
const router = require("./routes/auth-routes");

require("dotenv").config();

app.use(express.json());

app.use("/api", router);




const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})
connectDB();