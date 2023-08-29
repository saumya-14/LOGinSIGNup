const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/registration")
  .then(() => {
    console.log("MONGO CONNECTED");
  })
  .catch(() => {
    console.log("failed to connect");   
    
  });

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password:{
    type:String,
    required:true
  }

});

const collection = new mongoose.model("registration1", registrationSchema);

module.exports = collection;
  

