const express = require('express');
const app = express();
const connectDB = require("./utils/db");
const router = require("./routes/auth-routes");
const errorMiddleware = require('./middlewares/error-middleware');

require("dotenv").config();

app.use(express.json());

app.use("/api", router);



app.use(errorMiddleware)
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})
connectDB();