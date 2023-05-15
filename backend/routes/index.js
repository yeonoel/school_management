import CoursesController from "../controllers/CoursesControllers.js";
import StudentsControllers from "../controllers/studentsControllers.js";
import UserController from "../controllers/UserController.js";


export default function injectionRoutes(api) {

    // inscripton
    api.post('/signup', UserController.signUp);
    api.post('/login', UserController.logIn);
    //api.get('/logout', UserController.logout);

    // api of about students

    api.get('/api/students', StudentsControllers.getStudents); // return all students
    api.get('/api/:id', StudentsControllers.getOneStudent); // after clique on a students


    // api about Classromms
    api.get('/api/allcourses', CoursesController.getCourses); // return all students
    api.get('/api/:id', CoursesController.getOneCourse); // after clique on a students
    // add students
    api.post('/api/students', StudentsControllers.createStudents); // return all students
    // add courses
    api.post('/api/courses', CoursesController.createCourses); // return all students

    // update a students
    api.put(`/api/students/:id`, StudentsControllers.updateOneStudent);
    // update a Courses
    api.put(`/api/courses/:id`, CoursesController.updateOneCourse);

    //dleete a students
    api.delete(`/api/students/:id`, StudentsControllers.delOneStudent);
    //dleete a a courses
    api.delete(`/api/courses/:id`, CoursesController.deleteOneCourse);

}