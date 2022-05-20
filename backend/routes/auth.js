const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "NoOneCanHackBangaServer"
//create a user using post  "/api/auth/createuser. " doesn't require auth
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be of atleast 5 character').isLength({min:5}),
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
    let user =await User.findOne({email: req.body.email});
    if(user){
      return res.status(400).json({error: "Sorry a user with this email already exists"})
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);
   user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data ={
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(authtoken) // bar

      
      // .then(user => res.json(user)).catch(err=>{console.log(err)
      //   res.json({error: 'Please enter valid email'})});
      // res.json({"Nice":"nice"})
      res.json({authtoken})
    }
    catch(error){
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
//    res.send(req.body);
})
module.exports = router