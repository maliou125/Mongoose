const mongoose = require ("mongoose")
const contactSchema = mongoose.Schema(
    {
        name: {type:String , require:true } ,
        age: { type: Number },
        favoriteFoods: { type: [String], required: true }

    }
)

const Contact = mongoose.model('contact', contactSchema)
module.exports= Contact



