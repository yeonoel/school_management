import Courses from '../models/Courses.js'


// add a courses

export default class CoursesController {

  static createCourses = (req, res, ) => {
    
    const niveau = req.body? req.body.niveau : null;
    const specialite = req.body? req.body.specialite : null;
    const salle = req.body? req.body.salle : null;

    if (!niveau) {
      res.status(400).json({ error: 'Missing level'});
      return
    }
    if (!specialite) {
      res.status(400).json({ error: 'Missing epsecialite'});
      return
    }
    if (!salle) {
      res.status(400).json({ error: 'Missing salle'});
      return
    }
    const courses = new Courses({
        ...req.body
    });
    console.log(courses);
    courses.save()
    .then(() => res.status(201).json({ message: ' student succeffull save !'}))
    .catch(error => res.status(400).json({ error }));
}

// get all couses

static getCourses = (req, res) => {
  console.log(1)
    Courses.find()
    .then(courses => res.status(200).json({courses}))
    .catch(error => res.status(400).json({ error }));
}

// get one course
static getOneCourse = (req, res) => {
    const { id } = req.params.id;
    Courses.findOne({ _id: id})
      .then(courses => res.status(200).json(courses))
      .catch(error => res.status(400).json({ error }));
  }

  // update courses
  static updateOneCourse = (req, res) => {
    const { id } = req.params;
    Courses.updateOne({ _id: id}, { ...req.body, _id: id })
      .then(() => res.status(200).json({ message: 'Succesfful Course update !'}))
      .catch(error => res.status(400).json({ error }));
  }
  
  static deleteOneCourse = (req, res) => {
    const { id } = req.params;
    Courses.deleteOne({ _id: id })
      .then(() => res.status(200).json({ message: 'Object deleted !'}))
      .catch(error => res.status(400).json({ error }));
  }

}