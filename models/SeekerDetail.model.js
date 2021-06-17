const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SeekerDetailSchema = new Schema ({
    Name:{type: String, required: true},
    Password:{type:String,required:true},
    Gender: {type: String, enum: ['MALE','FEMALE','OTHERS' ]},
    Phone:{type: Number,},
    Email:{type:String,},
    Address:{type:String,},
    JobLocation : {type:String},
    JobType:{type:String} //Eg : DAILY WAGE','HOUSEMAID,','COOK','DRIVER'

});


//Exporting the model
module.exports = mongoose.model('SeekerDetail', SeekerDetailSchema);