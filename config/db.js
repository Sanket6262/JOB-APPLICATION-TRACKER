const mongoose = require('mongoose')

async function connectDB(){
try{
await mongoose.connect("mongodb+srv://sp009778:Sanket@cluster0.vqqik80.mongodb.net/");
console.log("Connection succesful");
}catch(error){
console.log("error in connection", error);
}
}
module.exports= {connectDB};