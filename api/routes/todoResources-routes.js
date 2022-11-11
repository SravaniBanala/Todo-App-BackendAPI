import express from 'express';
import * as todoResourcesController from './../controllers/todoResources-controller.js'
const Router = express.Router();

/**
 * REST methods with end points
 * Register Router related to todoResources to Router
 * routes for todoResources
 */
Router.route('/todoResources')
    .post(todoResourcesController.post)
    .delete(todoResourcesController.deleteAll)
    .get(todoResourcesController.get);

/**
 * id in Params
 * routes for todoResources based on id
 */
Router.route('/todoResources/:id')
    .put(todoResourcesController.put)
    .delete(todoResourcesController.remove)
    .get(todoResourcesController.getResourceById);


export default Router;