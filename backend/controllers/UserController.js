import User from "../models/User.js";
import bcrypt, { hash } from 'bcrypt';

export default class UserController {
    static signUp = (req, res) => {
        const email = req.body? req.body.email : null;
        const password = req.body? req.body.password : null;

        if (!email) {
            res.status(400).json({error: "Missing email"});
            return;
        }

        if (!password) {
            res.status(400).json({ error: "Missing password"});
            return;
        }

        bcrypt.hash(password, 10)
            .then(hash => {
                const user = new User({
                    email: email,
                    password: hash
                });
                user.save()
                    .then(() => res.status(201).json({ email: email }))
                    .catch((error) => res.status(400).json({ error}))
            })
            .catch((error) => res.status(500).json({ error }))
    }


    static logIn = (req, res) => {
        const email = req.body? req.body.email : null;
        const password = req.body? req.body.password : null;

        if (!email) {
            res.status(400).json({error: "Missing email"});
            return;
        }

        if (!password) {
            res.status(400).json({ error: "Missing password"});
            return;
        }

        User.findOne({ email })
            .then(user => {
                if(!user) {
                    return res.status(401).json({ message: "Login or password is incorret"});
                }
                bcrypt.compare(password, user.password)
                    .then(valid => {
                        if(!valid) {
                            return res.status(401).json({ Mesasge: "Login or Password is incorrect" })
                        }
                        res.status(200).json({
                            userId: user._id,
                            token: 'TOKEN'
                        })
                    })
            })
    }
}