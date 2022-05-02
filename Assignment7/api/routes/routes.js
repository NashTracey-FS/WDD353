const express = require('express');
const router = express.Router();
const postRegistration = require('../../db/db');
const sessions = require('express-sessions');
const getLogin = require('../api/api')

router.get("/",(req,res,next)=>{
    session = req.session;
    res.status(200).json({
       message: "Server is up",
       method: req.method,
    })
    res.render("index",{
        pagename: "Home",
        sess:sessions,
    })
})

router.get("/about", (req,res)=>{
    session = req.session;
    res.render("about",{
        pagename: "About",
        sess:sessions,
    })
})
router.get("/contact", (req,res)=>{
    session = req.session;
    res.render("contact",{
        pagename: "Contact",
        sess:sessions,
    })
})

router.get("/portfolio", (req,res)=>{
    session = req.session;
    res.render("portfolio",{
        pagename: "Portfolio",
        sess:sessions,
    })
})
router.get("/register", (req,res)=>{
    session = req.session;
    res.render("register",{
        pagename: "Register",
        sess:sessions,
    })
})

router.post("/register",async (req,res,next)=>{
    session = req.session;
    session.userid =userid;
    await getRegistration(data).then(result =>{
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

router.get('/login', (req, res, next)=>{
    res.render('login',{
        pagename: 'Login'
    })
})

const username = 'user 1';
const password = 'password';
router.post('/login', async (req,res)=>{
const userid=req.body.username;
const pw = req.body.password;
if(userid == username && pw == password){
    session = req.session;
    session.userid =userid;
    const data ={
        userid: userid,
        password: pw,
    };
    await getLogin(data).then((result)=>{
        console.log(result.data);
        res.render('index', {
            pagename: 'Home',
            message: result.data.message,
            sess:session,
        })
    }).catch(err=>{
        res.render('login',{
            pagename: "Login",
            error: err.message
        })
    });
}else{
    res.render('login',{
        pagename: "Login",
        error: "Invalid Credentials"
    })
}
})

router.get('/logout',(req,res)=>{
    req.session.destroy(null);
    res.render('index',{
        pagename: 'Home',
    })
    
})

module.exports =router;