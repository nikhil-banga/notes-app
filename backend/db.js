const mongoose = require ('mongoose');
// const mongoURI = "mongodb://localhost:27017/iNotebook"
// password = qLEf3z7EeVj8pm6E
const mongoURI = "mongodb+srv://admin-iNoteBook:qLEf3z7EeVj8pm6E@cluster0.ixsftuj.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully ");
    })
}
module.exports = connectToMongo;