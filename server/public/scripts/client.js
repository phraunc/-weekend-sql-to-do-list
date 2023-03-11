$(document).ready(getReady);

function getReady(){
console.log('in the getready function');

//create 'addTask' listener
$('#addButton').on('click', addTaskButton);
//create a 'taskComplete' listener
getTask();
};//End getReady Function

//function to get the button to work and get data.
function addTaskButton(){
console.log('in the addTaskButton');


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
            <thread>
            <tr data-id=${response[i].id}>
                <th>${response[i].task}</th>
                <th>${response[i].completetask}</th>
                <th>${response[i].timecompleted}</th>
                <th>${response[i].notes}</th>
                <td><button class=deleteButton>Delete Task</button></th>
            </tr>
        </thread>
            
            `);
        };
    });
};//end GET and append
