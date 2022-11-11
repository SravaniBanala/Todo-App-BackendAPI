import TodoResourcesRouter from './todoResources-routes.js';

export default (app)=>{
    app.use('/',TodoResourcesRouter);
}