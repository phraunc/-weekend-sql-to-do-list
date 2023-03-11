
const express = require('express');
const tasklistRouter = express.Router();
const pool = require('../modules/pool');


//create a GET route
tasklistRouter.get('/taskList', (req, res)=>{
    console.log('In the taskListRouter GET, trying to get some tasks');
    const queryText = 'SELECT * FROM "TaskList"';
    console.log('submitting Query to DB', queryText);
    
    pool.query(queryText)
    .then((result)=>{
    console.log('All my result info', result);
    res.send(result.row);
    }).catch((err)=>{
        console.log(`Error making query${queryText}`, err)
        res.sendStatus(500);
    });  
});


//create a POST route



//create a PUT route




//create a DELETE route


module.exports = tasklistRouter;