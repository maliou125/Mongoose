const express = require("express")
const mongoose = require("mongoose")
const app = express()



app.use(express.json())
app.use("/api", require("./Routes/contactRoutes"))

mongoose.connect("mongodb+srv://maliou:maliou1@cluster0.kntrv0u.mongodb.net/Project0?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("DataBase Connected"))
.catch((err)=>console.error(err)) 



const PORT = 5000
app.listen(PORT, ()=> console.log("my server is running in the port",PORT))

