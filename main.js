// This is the main file of Schema's to connect Database
// Processing Frondend user data in Backend 

const express =  require('express')
const {route} = require('express/lib/application')

const Detail = require("../models/Detail")
const Slider = require("../models/slider")
const Services = require("../models/service")
const Contact = require("../models/Contact");
const { response } = require('express')

const routes = express.Router()

routes.get('/', async (req,res) =>{

   const details = await Detail.findOne({"_id: ObjectId":"63e7a6981621605f08c547bd"})
   const slides = await Slider.find()
   const services = await Services.find()
//    console.log(slides);
    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})

routes.get('/gallery',async (req,res) => {
    const details = await Detail.findOne({"_id: ObjectId":"63e7a6981621605f08c547bd"})
    res.render("gallery",{
        details:details
    })
})

// Accept Contact Form Data(Frondend, Coming from user Side)

routes.post("/process-contact-form", async (req,res)=>{
    console.log(req.body);
    //save the form data in database:-
    try{
        const data = await Contact.create(req.body)
        console.log(data);
        res.redirect("/")
    }catch(e)
    {
        console.log(e);
        res.redirect("/")
    }
})


module.exports = routes;