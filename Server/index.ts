const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();


const server = express();
const port = 3001;


server.use(bodyParser.json());
server.use(cors());
server.use(express.static(`${__dirname}/../../build`));

server.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

server.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
