const express = require('express');
const path    = require('path');
const app     = express();
const http = require('http');
var server = http.createServer(app);
const port    = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var cors = require('cors')
app.use(cors());

//app.use('/user', require(path.join(__dirname,'routes/front.js')));
//app.use('/', require(path.join(__dirname,'routes/admin.js')));
app.use('/admin', require(path.join(__dirname,'routes/admin.js')));

app.listen(port, ()=> 
    console.log({port})
)
