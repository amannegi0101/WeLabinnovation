const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProviderDetailSchema = new Schema ({
    Name:{type: String},
    Password:{type:String},
    Gender: {type: String, enum: ['MALE','FEMALE','OTHERS' ]},
    Phone:{type: Number,},
    Email:{type:String,},
    Address:{type:String,},
    
});


//Exporting the model
module.exports = mongoose.model('ProviderDetail', ProviderDetailSchema);