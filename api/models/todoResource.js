import mongoose, { Schema } from 'mongoose';

//Schema related to TodoResource
const schema = new mongoose.Schema({
id: {
    type:String,
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

const model = mongoose.model('toDoResource',schema);

export default model;