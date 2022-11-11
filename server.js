import app from './api/app.js';

// RestAPI port is setted to 8082
const port = 8082;
app.listen(port,()=>{
    console.log('Server is running on port'+ port);
    console.log('todo list Restful Api server started on:'+port);

});