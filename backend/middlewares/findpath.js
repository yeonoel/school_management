import Courses from "../models/Courses.js";

export const findPath = (req, res) => {
    try {
        const level = req.body.niveau;
        Courses.findOne({niveau: level})
        .then(path => {
            if (!path) {
                res.status(404).json({ error: 'Dont exist'});
                return;
            }

            req.path = path;
        })
        .catch((error) => res.status(500).json({error}))

    } catch(error) {
        res.status(401).json({ error: "error auuthentication" });
    }
}

export default findPath;