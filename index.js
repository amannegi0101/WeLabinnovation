const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


var dbquery = require('./dbquery');
//var sendemail = require('./sendemail');
//var sendsms = require('./sendsms');

const app = express()
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/jobsearch';

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


//Database connectivity
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database is connected');
});


app.post('/AddSeeker', dbquery.AddSeeker);
app.post('/AddProvider', dbquery.AddProvider);
app.post('/SeekerEntry', dbquery.SeekerEntry);
app.post('/ProviderEntry', dbquery.ProviderEntry);
app.post('/SeekerProfile', dbquery.GetSeekerProfile);
app.post('/ProviderProfile', dbquery.GetProviderProfile);
app.post('/UpdateSeeker', dbquery.UpdateSeekerProfile);
app.post('/UpdateProvider', dbquery.UpdateProviderProfile);
app.post('/AddJob', dbquery.AddJob);
app.get('/FetchJob',dbquery.FetchJob);


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`App listening on port ${port}!`))