// Require express to get access to functionality for builsing a server
const express = require('express')

// 
const app = express();
const port = 5000;

// At local host 5000, this will deliver to the browser some static code
app.use(express.static('server/public'))