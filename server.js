var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var Personal = require('./personal.js');
const SwaggerUI = require('swagger-ui-express');
var swaggerDocument = require('./swagger.js');
app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());


//connection for Database
mongoose.connect('mongodb://*******', {
	useNewUrlParser: true
}).then(() => {
	console.log("Successfully connected to the database");
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...');
	process.exit();
});





//crud for personal
app.get('/personal', (req, res) => {
	var query = {};
	//this query for filter date wise users
	if (req.query.from && req.query.to) {
		query.createdAt = {
			$gte: moment(new Date(req.query.from)).startOf('day').format(),
			$lte: moment(new Date(req.query.to)).endOf('day').format()
		}
	}
	Personal.find(query).then((data) => {
		res.send(data);
	}).catch((err) => {
		res.send(err)
	})
});
app.post('/personal', (req, res) => {
	var getInfo = {};
	getInfo.name = req.body.name,
		getInfo.phone = req.body.phone,
		getInfo.email = req.body.email,
		getInfo.address = req.body.address,
		getInfo.dob = req.body.dob,
		getInfo.qualification = req.body.qualification,
		getInfo.college = req.body.college,
		getInfo.university = req.body.university,
		getInfo.type = req.body.type,
		getInfo.company = req.body.company
	Personal.create(getInfo).then((data) => {
		res.send(data);
	}).catch((err) => {
		res.send(err)
	})
});

app.post('/personal', (req, res) => {
	Personal.create(req.body).then((data) => {
		res.send(data);
	}).catch((err) => {
		res.send(err)
	})
});

app.put('/personal/:id', (req, res) => {
	var getInfo = {};
	getInfo.name = req.body.name,
		getInfo.phone = req.body.phone,
		getInfo.email = req.body.email,
		getInfo.address = req.body.address,
		getInfo.dob = req.body.dob,
		getInfo.qualification = req.body.qualification,
		getInfo.college = req.body.college,
		getInfo.university = req.body.university,
		getInfo.type = req.body.type,
		getInfo.company = req.body.company
	Personal.update({
		_id: req.params.id
	}, getInfo).then((data) => {
		res.send(data, 200, "updated");
	}).catch((err) => {
		res.send(err)
	})
});


app.get('/personal/:id', (req, res) => {
	Personal.findById(req.params.id).then((data) => {
		res.send(data);
	}).catch((err) => {
		res.send(err)
	})
});

app.delete('/personal/:id', (req, res) => {
	Personal.findByIdAndRemove(req.params.id).then((data) => {
		res.send(data);
	}).catch((err) => {
		res.send(err)
	})
});







app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});