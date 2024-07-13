const mongoose = require('mongoose');

const ApplicationSchema = mongoose.Schema({
    Company: { type: String },
    position: { type: String, required: false },
    status: { type: String, required: false },
    Date_applied: { type: Date,default:Date.now()}
})

const Application = mongoose.model("application", ApplicationSchema);
module.exports = Application;
console.log("Helooooo");

// {
//    "Company":"TCS"
//       "position":"HR Manager"
//       "status":"Fresher"
//       "Date_applied":"21-11-2023"
// }