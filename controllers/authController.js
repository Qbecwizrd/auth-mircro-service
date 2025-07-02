const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register new user

const registerUser = async(req,res) =>{
    try{
        const {name , email , password} = req.body


         // 1. Validate input
         if (!name || ! email || !password){
            return res.status(400).json({message : 'Please enter all fields'});
         }

          // 2. Check if user exists
          const existingUser = await User.findOne({email});
          if (existingUser){
            return res.status(400).json({message:'User already exists'});
          }

           // 3. Hash password
           const salt = await bcrypt.genSalt(10)
           const hashedPassword = await bcrypt.hash(password,salt)

           // 4. Create new user document
           const newUser = new User({
            name,
            email,
            password : hashedPassword
           });

           // 5. save the new User 
           await newUser.save()

           // 6. return success
           return res.status(200).json({message : 'User registered successfully'});


    }
    catch(error){
        console.error(error);
        return res.status(500).json({message : 'Server error'});
    }
}

// User user 
const loginUser = async (req,res) => {
    try{

        const {email,password} =req.body;

        // 1. Validate input
        if (!email || !password){
            return res.status(400).json({message :'Please enter all fields'});
        }

        // 2. Find user by email
        const user = await User.findOne({email})

        if (!user){
            return res.status(400).json({message :'Invalid credentials'});
        }

        // 3. Compare hashed password
        const isMatch = await bcrypt.compare(password,user.password)

        if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
        }

        // 4. Create JWT token

        const payload = {
            userId : user._id,
            name: user.name,
            email: user.email
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

         // 5. Return token
        return res.json({ token });


    }
    catch(error){
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }


};


module.exports = {
  registerUser,
  loginUser
};