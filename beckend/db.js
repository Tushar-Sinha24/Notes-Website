const mongoose =require('mongoose');

const mongoURI ="mongodb://localhost:27017/?directConnection=true&readPreference=primary&tls=false"

const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo");
    } )
}

module.exports=connectToMongo;