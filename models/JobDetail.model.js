const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let JobDetailSchema = new Schema ({
    Title:{type:String},
    JobLocation:{type:String},
    Description:{type:String},
    JobType:{type:String}, //Eg : DAILY WAGE','HOUSEMAID,','COOK','DRIVER'
    AddedBy:{type: mongoose.Schema.ObjectId}

});


//Exporting the model
module.exports = mongoose.model('JobDetail', JobDetailSchema);