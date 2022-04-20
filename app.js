const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors')


const app = express();
const port = process.env.PORT || 8080
const crossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
     next();
  };
 

const loginUser = require('./routes/loginRoute')


mongoose.connect("mongodb+srv://jmac222:roman222@cluster0.dgqgw.mongodb.net/basket-social?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
    console.log("server is connected");
})

app.use(express.json());
app.use(crossDomain)
app.use(morgan('tiny'))
app.use('/api/v1/login', loginUser)

app.listen(port, console.log(`server is listening at ${port}`))