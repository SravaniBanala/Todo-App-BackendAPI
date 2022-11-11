import TodoResourcesRouter from './todoResources-routes.js';

export default (app)=>{
    // Adding  Route file TodoResourcesRouter
    app.use('/',TodoResourcesRouter);
}