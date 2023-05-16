import User from "../models/User.js";
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class UserController {
    static signUp = (req, res) => {
        const email = req.body? req.body.email : null;
        const password = req.body? req.body.password : null;
        const nom = req.body? req.body.nom : null;
        const prenom = req.body? req.body.prenom : null;

        if (!email) {
            res.status(400).json({error: "Missing email"});
            return;
        }

        if (!password) {
            res.status(400).json({ error: "Missing password"});
            return;
        }

        if (!nom) {
            res.status(400).json({ error: "Missing name"});
            return;
        }

        if (!prenom) {
            res.status(400).json({ error: "Missing first name"});
            return;
        }

        User.findOne({ email })
            .then(theuser => {
                if (theuser) {
                    return res.status(400).json({ error: "User Already exist"})
                }

                bcrypt.hash(password, 10)
                .then(hash => {
                    const user = new User({
                        email: email,
                        nom: nom,
                        prenom: prenom, 
                        password: hash
                    });
                    user.save()
                        .then((user) => res.status(201).json({ email, password }))
                        .catch((error) => res.status(400).json({ error}))
                })
                .catch((error) => res.status(500).json({ error }))



            })

        
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
                            token: jwt.sign(
                                {userId: user._id},
                                'RANDOM_TOKEN_SECRET',
                                { expiresIn: '24H'}
                            )
                        });
                    })
                    .catch(error => res.status(500).json({ error }))
            })
    }
}