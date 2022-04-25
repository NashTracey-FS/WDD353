const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.render('index',{
        pageName: "Assignment 3",
    });
});

router.get('/about',(req,res)=>{
    res.render('about',{
        pageName: 'About',
    });
});

router.get('/contact',(req,res)=>{
    res.render('contact',{
        pageName: 'Contact',
    });
});

router.get('/portfolio',(req,res)=>{
    res.render('portfolio',{
        pageName: 'Portfolio',
    });
});

router.get('/register',(req,res)=>{
    res.render('register',{
        pageName: 'Register',
    });
});


module.exports = router;