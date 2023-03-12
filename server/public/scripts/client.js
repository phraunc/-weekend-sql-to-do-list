$(document).ready(getReady);

function getReady(){
console.log('in the getready function');

//create 'addTask' listener
$('#addButton').on('click', addTaskButton);
//create a 'deleteTask' listener
$('#viewTasks').on('click', '.deleteButton', deleteTask);
//create 'completeTask' listener
$('#viewTasks').on('click', '.completeButton', completeTask);
getTask();
};//End getReady Function

//function to get the button to work and get data.
function addTaskButton(){
console.log('in the addTaskButton');
let payloadObject = {
    task: $('#taskInput').val(),
    complete: $('#completeTaskInput').val(),
    notes: $('#notesInput').val()
  }
  $.ajax({
    type: 'POST',
    url: '/taskList',
    data: payloadObject,
  })
  .then(function (response){
    $('#taskInput').val(''),
    $('#completeTaskInput').val(''),
    $('#notesInput').val(''),
    getTask();
  })


};

//Create a GET function to get the data from the router
function getTask(){
    console.log('In getTask function');
    $('#viewTasks').empty();//emptys the array
    $.ajax({
        type: 'GET',
        url: '/taskList'
    }).then(function(response) {
        console.log('GET /task response', response);
        //appending data to the DOM

        for( let i=0; i < response.length; i++){
            $('#viewTasks').append(`
            
            <tr data-id=${response[i].id}>
                <th>${response[i].task}</th>
                <th>${response[i].complete}</th>
                <th>${response[i].notes}</th>
                <td><button class=deleteButton>Delete Task</button></th>
                <td><button class=completeButton>Complete Task</button></th>
            </tr>
        
            
            `);
        };
    });
};//end GET and append

//create DELETE function

function deleteTask(){
console.log('in the deleteTask function');
    console.log(`Clicked on this ${this} task`);
    const idtask = $(this).parent().parent().data().id;
  
    $.ajax({
      method: 'DELETE',
      url: `taskList/task/${idtask}`
    })
      .then(result => {
        console.log('deleted task with id: ', idtask);
        getTask();
      }).catch(err => {
        console.log('There was an error deleting task from server:', err);
      });
  };

//Create PUT/complete function
function completeTask(){
console.log('In the completeTask function');

}