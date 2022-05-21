const mongoose = require('mongoose');
const { Schema } = mongoose;
const NoteSchema = new Schema({
    // this user help me out to find the notes associated with this user and in type it was like foreign key
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    }
  });
  module.exports = mongoose.model('note',NoteSchema);
