var SeekerDetail = require('./models/SeekerDetail.model');
var ProviderDetail = require('./models/ProviderDetail.model');
var JobDetail = require('./models/JobDetail.model')

exports.AddSeeker = (req, res) => {
    const newObj = new SeekerDetail(req.body); //
    newObj.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send("SUCCESS, ACCOUNT CREATED");
    });
}

exports.AddProvider = (req,res) =>{
    const newObj = new ProviderDetail(req.body); //
    newObj.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send("SUCCESS");
    });
}
exports.AddJob = (req,res) =>{
    const newObj = new JobDetail(req.body); //
    newObj.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send("JOB ADDED SUCCESSFULLY");
    });
}

exports.SeekerEntry = (req,res) =>{
    const { phone,password} = req.body;

    SeekerDetail.findOne({ 'Phone': phone })
        .then((info) => {
            if (info) {
                if(info.Password == password){
                    console.log(info); 
                    _id = info._id;
                    _id = mongoose.Types.ObjectId(_id);
                    res.status(200).json({
                        id : _id,
                        message : "Redirecting to dashboard"
                    });
                }else {
                    res.json({
                        message : "Wrong Password"
                    });
                }
               

            }
            else { console.log("No data exist for this id"); res.status(404).send("User not found"); }
        }).catch((err) => { res.status(500).send("Some technical error") });
}

exports.ProviderEntry = (req,res) =>{
    const { phone,password} = req.body;

    ProviderDetail.findOne({ 'Phone': phone })
        .then((info) => {
            if (info) {
                if(info.Password == password){
                    console.log(info); 
                    _id = info._id;
                    _id = mongoose.Types.ObjectId(_id);
                    res.status(200).json({
                        id : _id,
                        message : "Redirecting to dashboard"
                    });
                }else {
                    res.json({
                        message : "Wrong Password"
                    });
                }
               

            }
            else { console.log("No data exist for this id"); res.status(404).send("User not found"); }
        }).catch((err) => { res.status(500).send("Some technical error") });
}

exports.GetProviderProfile = (req,res) =>{
    var obj = req.body;

    ProviderDetail.findById( obj.id )
        .then((info) => {
            if (info) {
                
                    console.log(info); 
                    res.json({
                        data : info,
                        message : "Welcome"
                    });
                

            }
            else { console.log("No data exist for this id");  
            res.json({
                message : "User Not found"
            });}
        }).catch((err) => { res.status(500).send("Some technical error") });
}

exports.GetSeekerProfile = (req,res) =>{
    var obj = req.body;

    SeekerDetail.findById( obj.id )
        .then((info) => {
            if (info) {
                
                    console.log(info); 
                    res.json({
                        data : info,
                        message : "Welcome"
                    });
                

            }
            else { console.log("No data exist for this id");  
            res.json({
                message : "User Not found"
            });}
        }).catch((err) => { res.status(500).send("Some technical error") });
}

exports.UpdateProviderProfile = (req,res)=>{
    const { name, phone, email, address} = req.body;

    ProviderDetail.findByIdAndUpdate(req.id,{
        Name: name,
        Phone : phone,
        Email : email,
        Address : address,
    },
    {new: true})
    .then(data => {
        res.status(200).send({message: `Data saved!!`})
    })
    .catch(err => {
        res.status(500).send({
        message: err.message || "Error while saving profile."
        });
    });

    
}

exports.UpdateSeekerProfile = (req,res)=>{
    const { name, phone, email, address, jobtype, joblocation } = req.body;

    SeekerDetail.findByIdAndUpdate(req.id,{
        Name: name,
        Phone : phone,
        Email : email,
        Address : address,
        JobType : jobtype,
        JobLocation : joblocation,
    },
    {new: true})
    .then(data => {
        res.status(200).send({message: `Data saved!!`})
    })
    .catch(err => {
        res.status(500).send({
        message: err.message || "Error while saving profile."
        });
    });  
}

exports.FetchJob = (req,res)=>{
    JobDetail.find()
    .then((info) => {
        if (info) {
           res.status(200).json({
               data : info,
               message : 'data fetched'
           })
        }
        else { console.log("No data exist"); res.status(404).send("Data not found"); }
    }).catch((err) => { res.send("Some technical error") });
}


var mongoose = require('mongoose');
