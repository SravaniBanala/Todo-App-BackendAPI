import * as TodoResourceService from './../services/todoResources-service.js';

/**
 * succesfull Response 
 * @param {*} obj 
 * @param {*} response 
 */
const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}
/**
 * Error Response 
 * @param {*} err 
 * @param {*} response 
 */
const setErrorResponse = (err, response) => {
    response.status(500);
    response.json(err);
}

/**
 * Export post method to post a new TodoResource
 * @param {*} request 
 * @param {*} response 
 */
export const post = async (request, response) => {
    try {
        const payload = request.body;
        const savedTodoResource = await TodoResourceService.save(payload);
        setSuccessResponse(savedTodoResource, response);
    }
    catch (error) {
        setErrorResponse(error, response);
    }
}

/**
 * Export Create method to update a new TodoResource
 * @param {*} request 
 * @param {*} response 
 */
export const put = async (request, response) => {
    try {
        const queryId = request.params.id;
        const updatedTodoResource = {...request.body};
        const updateTodoResource = await TodoResourceService.update(queryId, updatedTodoResource);
        setSuccessResponse(updateTodoResource , response);
    }
    catch (error) {
        setErrorResponse(error, response);
    }

}

/**
 * Export Create method to delete a  TodoResource
 * @param {*} request 
 * @param {*} response 
 */
export const remove = async (request, response) => {
    try {
        const taskId = request.params.id;
        const todoResource = await TodoResourceService.remove(taskId);
        setSuccessResponse({ message: 'Successfully Removed ' + taskId }, response);
    }
    catch (error) {
        setErrorResponse(error, response);
    }

}

/**
 * Export get method to search a  TodoResource
 * @param {*} request 
 * @param {*} response 
 */

export const getResourceById = async (request, response) => {
    try {
        const taskId = request.params.id;
        const todoResource = await TodoResourceService.searchResourceById(taskId);
        setSuccessResponse(todoResource, response);
    }
    catch (error) {
        setErrorResponse(error, response);
    }

}

/**
 * Export get method to search all TodoResources
 * @param {*} request 
 * @param {*} response 
 */

export const get = async (request, response) => {
    try {
        const taskId = request.query.id;
        const tasktitle = request.query.title;
        const taskdescription = request.query.description;
        const query = {};
        if (taskId) {
            query.id = taskId
        }
        if (tasktitle) {
            query.title = tasktitle
        }
        if (taskdescription) {
            query.description = taskdescription
        }
        const todoResource = await TodoResourceService.search(query);
        setSuccessResponse(todoResource, response);
    }
    catch (error) {
        setErrorResponse(error, response);
    }
}


