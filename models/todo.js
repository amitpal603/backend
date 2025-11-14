const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    duaDate : {
        type : Date,
        required : true
    }
} , {timestamps : true})

const Todos = mongoose.model('Todos' , todoSchema)
module.exports = Todos