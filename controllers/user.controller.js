const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
require('dotenv').config()
const User = require("../models/user.model")

const user = {
    async Register(req, res) {
        const { username, password } = req.body;

        const alreadyExistsUser = await User.findOne({ where: { username } }).catch(
            (err) => {
                console.log("Error: ", err);
            }
        );

        if (alreadyExistsUser) {
            return res.status(409).json({ message: "User with email already exists!" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ username });
        newUser.password = hashedPassword;
        const savedUser = await newUser.save().catch((err) => {
            console.log("Error: ", err);
            res.status(500).json({ error: "Cannot register user at the moment!" });
        });

        if (savedUser) res.json({ message: "Thanks for registering" });
    },
    async Login(req, res) {
        const { username, password } = req.body;

        const userWithEmail = await User.findOne({ where: { username } }).catch(
            (err) => {
                console.log("Error: ", err);
            }
        );

        if (!userWithEmail) {
            return res
                .status(400)
                .json({ message: "Email or password does not match!" });
        }
        const bResult = bcrypt.compare(password, userWithEmail.password)
        if (bResult) {
            const jwtToken = jwt.sign(
                { user_id: userWithEmail.user_id, username: userWithEmail.username },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );
            res.json({ message: "Welcome Back!", token: jwtToken });
        } else {
            return res
                .status(400)
                .json({ message: "Email or password does not match!" });
        }


    },
    Secret(req, res) {
        res.status(200).send({
            message: "Logged in"
        });
    },
};

module.exports = { ...user };
