import express from 'express'; 
import * as todoResourcesController from './../controllers/todoResources-controller.js'
const Router =express.Router();

//Register Router related to todoResources to Router
//routes for todoResources
Router.route('/todoResources')
.post(todoResourcesController.create)
.get(todoResourcesController.findAll);

//routes for todoResources based on id
Router.route('/todoResources/:id')
.put(todoResourcesController.update)
.delete(todoResourcesController.deletetask)
.get(todoResourcesController.get);


export default Router;