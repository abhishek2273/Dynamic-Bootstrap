const express = require("express");
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
mongoose.set('strictQuery', true); //for handling Error

const routes = require('./routes/main');
const Detail = require("./models/Detail");
const Slider = require("./models/slider");
const Service = require("./models/service");
// const Contact = require("./models/Contact");

//Routes :-
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)

//(Template Engine)
app.set('view engine','hbs')
app.set("views", 'views')
hbs.registerPartials("views/partials");


//Database Connections :-
const mongoDB = ("mongodb://127.0.0.1/website_tut");
mongoose.connect(mongoDB, ()=>{
    console.log("DataBase is connected...");

// Service.create(
//  {
//     icon:'fa fa-duotone fa-book',
//     title:'Courses',
//     description:'Enhance your Technical Skill with Us',
//     link:'https://www.google.com',
//     linkText:'Check'
//  },
//  {
//     icon:'fa-solid fa-truck-fast',
//     title:'Services',
//     description:'Enhance your Technical Skill with Us',
//     link:'https://www.google.com',
//     linkText:'Check'
//  },
//  {
//     icon:'fa-solid fa-truck-fast',
//     title:'Services',
//     description:'Enhance your Technical Skill with Us',
//     link:'https://www.google.com',
//     linkText:'Check'
//  }
// )

    // Slider.create(
    // {
    //     title:'Duck Studio Environment',
    //     subTitle: 'Animal have also Emotions, Ele',
    //     imageUrl: "/static/images/elephant.jpg"
    // },
    // {
    //     title:'Duck Studio Environment',
    //     subTitle: 'Animal have also Emotions, Mon',
    //     imageUrl: "/static/images/monkey.jpg"
    // },
    // {
    //     title:'Duck Studio Environment',
    //     subTitle: 'Animal have also Emotions, fish',
    //     imageUrl: "/static/images/fish.jpg"
    // },
    // )



    // Detail.create({
    //     brandName : "Duck Studio",
    //     brandIconUrl : "https://yt3.ggpht.com/jacKdChZFpq8YISByHrVhKmhxJzhP6qkC_qFSrqqVelPvo6tMBFljnK4wfyU5Q3a_Oxp1SNLOEI=s88-c-k-c0x00ffffff-no-rj",
    //     links : [
    //         {
    //             label : "Home",
    //             url : "/"
    //         },
    //         {
    //             label : "Services",
    //             url : "/services"   
    //         },
    //         {
    //             label : "Gallery",
    //             url : "/gallery"   
    //         },
    //         {
    //             label : "About",
    //             url : "/about"   
    //         },
    //         {
    //             label : "Contact us",
    //             url : "/contact"   
    //         }
    //     ]
    // })
})

app.listen(process.env.PORT | 8000,() =>{
    console.log("Server is ON..");
})