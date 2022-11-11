import mongoose, { Schema } from 'mongoose';

const schema = new mongoose.Schema({
id: {
        type:Number,
        required:'The id is required'
     },
title: {
    type:String,
    required:'The Title Field is required'
},
description : {
    type:String,
    required:'The Description Field is required'
},
createdDate: {
    type:Date,
    default:Date.now    
},

lastModifiedDate: {
    type:Date,
    default:Date.now   

}
},{ versionKey:false });

//schema.virtual('id',()=> this._id.toHexString());
//schema.virtual('toJSON',{ virtuals :true});

schema.method("toJSON",function(){
    const {__v,_id,...Object} =this.toObject();
    Object.id=_id;
    return Object;

});

const model = mongoose.model('toDoResource',schema);

export default model;