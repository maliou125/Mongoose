const express = require("express")
const router = express.Router()
const Contact = require("../Models/contactSchema")



router.post("/users", async(req,res)=>{
    try{
        const newContact = new Contact(req.body)
        await newContact.save()
        res.status(200).json({msg:"success",newContact})
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
})

router.get("/users",async(req,res)=>{
    try{
        const newContact = await Contact.find()
        
        res.status(200).json({msg:"find data", newContact})
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}) 


router.get("/users/:id",async(req,res)=>{
    try{
        const newContact = await Contact.findById(req.params.id)
        res.status(200).json({msg:"find user", newContact})
        if(! newContact) return res.status(404).json({msg:"Contact not found"})
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
})

module.exports = router
