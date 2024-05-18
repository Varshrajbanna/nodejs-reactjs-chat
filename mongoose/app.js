const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017").then(()=>console.log("database connected")).catch(err=>console.log(err));
const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number
})
const item = mongoose.model("First",fruitsSchema);
const element = new item({
    name: "apple",
    rating: 10
})

// const saveItem = async ()=>{
//     await element.save();
// }

// saveItem()

element.save().then().catch(err => console.log(err));

