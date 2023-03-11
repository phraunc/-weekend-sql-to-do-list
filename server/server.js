const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const tasklistRouter = require('./routes/tasklist.router');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
app.use(bodyParser.json());


app.use('/taskList', tasklistRouter);
// Start listening for requests on a specific port
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });



  
  
  
