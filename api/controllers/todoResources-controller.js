import * as TodoResourceService from './../services/todoResources-service.js';


const setSuccessResponse =(obj,response)=>{
    response.status(200);
    response.json(obj);
}

const setErrorResponse =(err,response)=>{
    response.status(500);
    response.json(err);
}

export const create = async (request,response) =>{
    try{
    const payload = request.body;
    const savedTodoResource = await TodoResourceService.save(payload);
    setSuccessResponse(savedTodoResource,response);
    }
    catch(error){
          setErrorResponse(error,response);
    }
}

export const update =async (request,response) =>{
    try{
        const taskId =request.params.id;
        const updated ={...request.body};
        updated.id=taskId;
        const todoResource = await TodoResourceService.update(updated);
        setSuccessResponse(todoResource,response);
        }
         catch(error){
            setErrorResponse(error,response);
         }
    
}

export const deletetask = async (request,response) =>{
    try{
        const taskId =request.params.id;
        const todoResource = await TodoResourceService.remove(taskId);
        setSuccessResponse({message: 'Successfully Removed '+taskId},response);
        }
         catch(error){
            setErrorResponse(error,response);
         }
    
}

export const deleteAll =async (request,response) =>{
    
}

export const get =async (request,response) =>{
    try{
        const taskId =request.params.id;
        const todoResource = await TodoResourceService.get(taskId);
        setSuccessResponse(todoResource,response);
        }
         catch(error){
            setErrorResponse(error,response);
         }
    
}

export const findAll =async (request,response) =>{
    try{
        const taskId =request.query.id;
        const tasktitle =request.query.title;
        const taskdescription =request.query.description;
        const query={};
        if(taskId){
            query.id = taskId
        }
        if(tasktitle){
            query.title=tasktitle
        }
        if(taskdescription){
            query.description=taskdescription
        }
        const todoResource = await TodoResourceService.search(query);
        setSuccessResponse(todoResource,response);
        }
         catch(error){
            setErrorResponse(error,response);
         }
}


