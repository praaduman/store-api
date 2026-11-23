require('dotenv').config();
//async 

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json());

//routes
app.get('/' , (req,res)=>{
    res.send('<h1>Store api</h1><a href="/api/v1/products">products routes </a>')
})

//prouduts route


app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () =>{
    try {
        //connect to db 
        app.listen(port, console.log(`server is listening ${port} `))
    } catch (error) {
        console.log(error);
        
    }
}

start();
