import TodoResource from '../models/todoResource.js';

/**
 * Creates a new  todoResource
 * @param {*} todoResource 
 * @returns {Promise<todoResource>}
 */
export const save =async (todoResource) => {
    const newTodoResource =new TodoResource(todoResource);
    return newTodoResource.save();
};

export const search =async (query) => {
    const params ={...query };
    const todoResources = TodoResource.find(params).exec();
    return todoResources;
}

export const get =async (id) => {
    const todoResources = TodoResource.findById(id).exec();
    return todoResources;
}

export const update =async(updatedTodoResource)=>{
    updatedTodoResource.modifiedDate = new Date();
    const todoResources = TodoResource.findByIdAndDelete(updatedTodoResource.id,updatedTodoResource).exec();
    return todoResources;   
}

export const remove =async(id)=>{
    const todoResources = TodoResource.findByIdAndDelete(id).exec();
    return todoResources;
}
