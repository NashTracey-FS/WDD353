const express = require('express');
const router = express.Router();
const sessions = require('express-sessions');


router.get('/',(req,res) =>{
   
    res.render('index',{
        pageName: 'Home',
     
    })
})
router.get('/about',(req,res) =>{
   
    res.render('about',{
        pageName: 'About',
       
    })
})
router.get('/contact',(req,res) =>{
   
    res.render('contact',{
        pageName: 'contact',
      
    })
})
router.get('/portfolio',(req,res) =>{
    
    res.render('portfolio',{
        pageName: 'Portfolio',
      
    })
})
router.get('/register',(req,res) =>{
    
    res.render('register',{
        pageName: 'Sign Up',
       
    })
})
router.get('/profile',(req,res) =>{
   
    res.render('profile',{
        pageName: 'Profile',
      
    })
})

router.get('/logon',(req,res)=>{
    res.render('logon',{
        pagename: 'Logon',
    });
});

let bool =true;

router.post('/login',(req, res) => {
if(bool){

    res.render('profile',{pageName: "Profile", sess:session});
}else{
    res.render("logon",{pageName:"Logon", error:"Not Found! Try again!"})
}
});

router.get('/logout',(req,res)=> {
    req.session.destroy(null);
    res.render('index',{pageName: 'Home'})
});



module.exports = router;