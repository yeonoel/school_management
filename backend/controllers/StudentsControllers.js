import Students from "../models/Students.js";

export default class StudentsControllers {

  static createStudents = (req, res) => {


    console.log(req.body)
    const matricule = req.body? req.body.matricule : null;
    const nom = req.body? req.body.nom : null;
    const prenom = req.body? req.body.prenom : null;
    const niveau = req.body? req.body.niveau : null;
    const moyenMath = req.body? req.body.moyenMath : null;
    const moyenInfo = req.body? req.body.moyenInfo : null;


      if (!nom || !prenom || !niveau || !matricule || !moyenMath || !moyenInfo) {
        console.log('fill in all the fields');
        return
      }
      const { path } = req || null;
      console.log(req.body)
      Students.findOne({matricule})
      .then(matric => {
        if(matric) {
          return res.status(400).json({error: "Matricule Already exist"})
        }

        const student = new Students({
          ...req.body,
          pathId: path._id
      });
        console.log(student);
        student.save()
        .then(() => res.status(201).json({ message: ' student successful save !'}))
        .catch(error => res.status(400).json({ error }));
      })
      
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
