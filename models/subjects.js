const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Assignment = require('./assignments');
const Resource = require('./resources');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    plan: {
        type: String,
        requried: true,
    },
    
    chapters: [{
        name: {
            type: String,
            required: true
        },
        assignments: [{
            type: Schema.Types.ObjectId,
        }],
        topics: [{
            name: {
                type: String,
                required: true
            },
            week: {
                type: String,
            }
        }]
    }],


    // image: {
    //     type: String
    // },

    // resources: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Resource'
    // }],

    // plan: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Plan'
    // }],


    // subcode: {
    //     type: String
    // }
})

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;