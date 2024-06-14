const mongoose = require ("mongoose")
const contactSchema = mongoose.Schema(
    {
        name: String ,
        email: {type:String , require:true },
        password : {type:String , require: true},
        address : String

    }
)

const Contact = mongoose.model('contact', contactSchema)
module.exports= Contact



