const express = require('express');
const app = express();
const connectDB = require("./utils/db");
const router = require("./routes/auth-routes");
const contactRouter = require("./routes/contact-route")
const errorMiddleware = require('./middlewares/error-middleware');
const cors = require("cors")

require("dotenv").config();

const corsPolicy ={
    origin:"http://localhost:5173",
    methods:"GET, PUT, DELETE, PATCH, HEAD",
    credentials:true,
}

app.use(cors(corsPolicy))

app.use(express.json());

app.use("/api", router);
app.use("/api/form", contactRouter)



app.use(errorMiddleware)
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})
connectDB();