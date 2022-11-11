import express from 'express'; 
import * as todoResourcesController from './../controllers/todoResources-controller.js'
const Router =express.Router();

Router.route('/todoResources')
.post(todoResourcesController.create)
.delete(todoResourcesController.deleteAll)
.get(todoResourcesController.findAll);

Router.route('/todoResources/:id')
.put(todoResourcesController.update)
.delete(todoResourcesController.deletetask)
.get(todoResourcesController.get);


export default Router;