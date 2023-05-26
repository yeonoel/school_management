import Courses from '../models/Courses.js'


// add a courses

export default class CoursesController {

  static createCourses = (req, res, ) => {
    
    const niveau = req.body? req.body.niveau : null;
    const speciality = req.body? req.body.speciality : null;
    const salle = req.body? req.body.salle : null;
    
    console.log(req.body)

    if (!niveau) {
      res.status(400).json({ error: 'Missing level'});
      return;
    }
    if (!speciality) {
      res.status(400).json({ error: 'Missing epsecialite'});
      return;
    }
    if (!salle) {
      res.status(400).json({ error: 'Missing salle'});
      return;
    }

    Courses.findOne({niveau})
      .then(level => {
        if(level) {
          return res.status(400).json({error: "Already exist"})
        }

        const courses = new Courses({
          ...req.body
        });
        console.log(courses);
        courses.save()
        .then(() => res.status(201).json({ message: ' student successful save !'}))
        .catch(error => res.status(400).json({ error }));
      })

    
}

// get all couses

static getCourses = (req, res) => {
  console.log(1)
  Courses.find()
    .then(courses => res.status(200).json({ courses }))
    .catch(error => res.status(400).json({ error }));
}

// get one course
static getOneCourse = (req, res) => {
    const { id } = req.params;
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
    console.log(id)
    Courses.deleteOne({ _id: id })
      .then(() => res.status(200).json({ message: 'Object deleted !'}))
      .catch(error => res.status(400).json({ error }));
  }

}