const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens
const { expressjwt: jwt } = require("express-jwt");
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "payload",
  algorithms: ["HS256"],
});

// This is where we import the controllers we will router
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

console.log('router')

// define route for our trips endpoint
router	
	.route('/register')
	.post(authController.register);
// define route for login endpoint 
router 
	.route('/login') 
	.post(authController.login); 
router	
	.route('/user')
	.get(tripsController.getUser);
router
	.route('/trips')
	.get(tripsController.tripsList)
	.post(auth, tripsController.tripsAddTrip); //GET method routes triplist
router
	.route('/trips/:tripCode')
	.get(tripsController.tripsFindByCode)
	.put(auth, tripsController.tripsUpdateTrip)
	.delete(tripsController.tripsDeleteByCode); //GET method routes tripsFindByCode


// // Method to authenticate our JWT 
// function authenticateJWT(req, res, next) {     
// 	// console.log('In Middleware');      
// 	const authHeader = req.headers['authorization'];     
// 	// console.log('Auth Header: ' + authHeader);      
// 	if(authHeader == null) {         
// 		console.log('Auth Header Required but NOT PRESENT!');         
// 		return res.sendStatus(401);     
// 	} 

// 	let headers = authHeader.split(' ');     
// 	if(headers.length < 1)     
// 	{         
// 		console.log('Not enough tokens in Auth Header: ' + headers.length);         
// 		return res.sendStatus(501);     
// 	}      

// 	const token = authHeader.split(' ')[1];     
// 	// console.log('Token: ' + token);      
// 	if(token == null)     
// 	{         
// 		console.log('Null Bearer Token');        
// 		return res.sendStatus(401);     
// 	}     

// 	// console.log(process.env.JWT_SECRET); 
// 	// console.log(jwt.decode(token));     
// 	const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {         
// 		if(err) {             
// 			return res.sendStatus(401).json('Token Validation Error!');         
// 		}          
		
// 		req.auth = verified; // Set the auth paramto the decoded object     
// 	});

// 	next(); // We need to continue or this will hang forever 
// }



module.exports = router;
