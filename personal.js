const mongoose = require('mongoose');

const Personal = mongoose.Schema({
	name: String,
	phone: Number,
	email: String,
	address: String,
	dob: String,
	qualification: String,
	college: String,
	university: String,
	type: {
		type: String,
		enum: ["fresher", "experience"],
		default: "fresher"
	},
	company: [{
		designation: {
			type: String
		},
		experience: {
			type: Number
		},
		description: {
			type: String
		},
		achievements: {
			type: String
		},
		skills: {
			type: String
		}
	}]


}, {
	timestamps: true
});

module.exports = mongoose.model('Personal', Personal);