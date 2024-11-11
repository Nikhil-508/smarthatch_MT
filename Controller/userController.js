const userModel = require('../Model/userModel')

const register = async (req, res) => {

    
    try {
        console.log(req.body,"bodyyy");
        const { name, email, password,departmentHead,streetAddress,department } = req.body;
        console.log(name,"usernameee");
        
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = new userModel({ name, email, password, departmentHead, streetAddress, department });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.log('register error', error);
        res.status(500).json({ message: "An error occurred during registration" });
    }
};

module.exports = {register}