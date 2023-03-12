
const express = require('express');
const tasklistRouter = express.Router();
const pool = require('../modules/pool.js');


//create a GET route
tasklistRouter.get('/', (req, res)=>{
    console.log('In the tasklistRouter GET, trying to get some tasks');
    const queryText = 'SELECT * FROM "TaskList"';
    console.log('submitting Query to DB');
    
    pool.query(queryText)
    .then((result)=>{
    console.log('All my result info', result);
    res.send(result.rows);
    }).catch((err)=>{
        console.log(`Error making query${queryText}`, err)
        res.sendStatus(500);
    });  
});


//create a POST route
tasklistRouter.post('/', (req, res) => {
    const newTask= req.body;
    console.log('New Task', newTask);

    const queryText = `INSERT INTO "TaskList" (task, complete, notes)
    VALUES ($1, $2, $3);`; //need to start at $1 and go up to as many values as you have 
console.log('adding tasks', newTask);//console.log to ensure the the POST is working on postman.  server side is good. 
    pool.query(queryText, [newTask.task, newTask.complete, newTask.notes])
    .then((result) => {
        res.sendStatus(201)
    })
    .catch((error) => {
        console.log(`Error making query ${queryText}`, error);
        res.sendStatus(500);
    })
   
});//complete POST route


//create a PUT route




//create a DELETE route
tasklistRouter.delete('/task/:id', (req, res) => {
    console.log('Inside tasklistRouter - DELETE');
    //targeting the params of id of task to delete
    const idtask = req.params.id;
    const queryText = 
        `DELETE FROM "TaskList"
        WHERE "id" = $1;`;
    pool.query(queryText, [idtask])
        .then(result => {
            console.log('successful deletion for task id:', idtask)
            res.sendStatus(200);
        }).catch(err => {
            console.log('There was an error deleting task from the server');
            res.sendStatus(500);
        });
});//end Delete route

module.exports = tasklistRouter;