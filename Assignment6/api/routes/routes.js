const express = require('express');
const router = express.Router();
const postRegistration = require('../../db/db');

router.get("/",(req,res,next)=>{
    res.status(200).json({
       message: "Server is up",
       method: req.method,
    })
    res.render("index",{
        pagename: "Home"
    })
})

router.get("/about", (req,res)=>{
    res.render("about",{
        pagename: "About"
    })
})
router.get("/contact", (req,res)=>{
    res.render("contact",{
        pagename: "Contact"
    })
})

router.get("/portfolio", (req,res)=>{
    res.render("portfolio",{
        pagename: "Portfolio"
    })
})
router.get("/register", (req,res)=>{
    res.render("register",{
        pagename: "Register"
    })
})

router.post("/register",(req,res,next)=>{
    postRegistration(req).then(result =>{
        console.log(result);
        res.status(200).json({
            message:"Account Created",
            status:200,
            register:{
                fullname: result.fullname,
                address: result.address,
                city: result.city,
                state: result.state,
                age: result.age,
                gender: result.gender,
                consent: result.consent,
                bio: result.bio,
                metadata:{
                    hostname: req,host,
                    method: req.method,
                },
            },
        });
    }).catch(err =>{
        res.status(500).json({
            message:"Account Creation Failed",
            status:500,
            error:{
                message: err.message,
                metadata:{
                    hostname: req,host,
                    method: req.method,
                },
            },
        });
    })
})

module.exports =router;