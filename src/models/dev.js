const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema.js');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema);