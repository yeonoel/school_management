import Students from '../models/students.js'


export default class StudentsControllers {

  static createStudents = (req, res) => {
      if (!nom || !prenom || !niveau || !matricule || !moyenMath || moyenInfo || !ImageUrl) {
        console.log('fill in all the fields');
        return
      }
      const { path } = req;
      delete req.body._id;
      const student = new Students({
          ...req.body, pathId: path._id
      });
      student.save()
      .then(() => res.status(201).json({ message: 'student succeffull save !'}))
      .catch(error => res.status(400).json({ error }));
  }
  
  
  static getStudents = (req, res) => {
    Students.find()
      .then(students => res.status(200).json(students))
      .catch(error => res.status(400).json({ error }));
  }
  
  static getOneStudent = (req, res) => {
    const { id } = req.params;
    Students.findOne({ _id: id})
      .then(student => res.status(200).json(student))
      .catch(error => res.status(400).json({ error }));
  }
  
  static updateOneStudent = (req, res) => {
    const { id } = req.params;
    Students.updateOne({ _id: id}, { ...req.body, _id: id })
      .then(() => res.status(200).json({ message: 'Succesfful student update !'}))
      .catch(error => res.status(400).json({ error }));
  }
  
  static delOneStudent = (req, res) => {
    const { id } = req.params;
    Students.deleteOne({ _id: id })
      .then(() => res.status(200).json({ message: 'Object deleted !'}))
      .catch(error => res.status(400).json({ error }));
  }

}


