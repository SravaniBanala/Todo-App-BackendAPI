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
export const get = async (id) => {
    const todoResources = TodoResource.findById(id).exec();
    return todoResources;
}

/**
 * update a todoResource
 * @param {id} id 
 * @returns {Promise<todoResource>}
 */
export const update = async (updatedTodoResource) => {
    updatedTodoResource.modifiedDate = new Date();
    const todoResources = TodoResource.findByIdAndDelete(updatedTodoResource.id, updatedTodoResource, { new: true }).exec();
    return todoResources;
}

/**
 * remove a todoResource
 * @param {id} id 
 * @returns {Promise<todoResource>}
 */
export const remove = async (id) => {
    const todoResources = TodoResource.findByIdAndDelete(id).exec();
    return todoResources;
}
