import TodoResource from '../models/todoResource.js';

/**
 * Creates a new  todoResource
 * @param {*} todoResource 
 * @returns {Promise<todoResource>}
 */
export const save = async (todoResource) => {
    const newTodoResource = new TodoResource(todoResource);
    return newTodoResource.save();
};

/**
 * search a todoResource based on query Params
 * @param {*} query 
 * @returns {Promise<todoResources>}
 */
export const search = async (query) => {
    const params = { ...query };
    const todoResources = TodoResource.find(params).exec();
    return todoResources;
}

/**
 * search a todoResource based on id
 * @param {id} id 
 * @returns {Promise<todoResource>}
 */
export const searchResourceById = async (id) => {
    const todoResources = TodoResource.findById(id).exec();
    return todoResources;
}

/**
 * update a todoResource
 * @param {id} id 
 * @returns {Promise<todoResource>}
 */
export const update = async (id,todoTask) => {
    todoTask.modifiedDate = new Date();
    const query = {id: id};
    const updateTodoResource = TodoResource.findOneAndUpdate(query, todoTask).exec();
    return updateTodoResource;
}

/**
 * delete all todoResources
 * @param 
 * @returns 
 */
 export const deleteAll = async () => {
    const updateTodoResource = TodoResource.deleteMany().exec();
    return updateTodoResource;
}

/**
 * remove a todoResource
 * @param {id} id 
 * @returns {Promise<todoResource>}
 */
export const remove = async (id) => {
    const query = {id: id};
    const updateTodoResource = TodoResource.findOneAndDelete(query).exec();
    return updateTodoResource;
}
