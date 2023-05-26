import CoursesController from "../controllers/CoursesControllers.js";
import StudentsControllers from "../controllers/StudentsControllers.js";
import UserController from "../controllers/UserController.js";
import findPath from "../middlewares/findpath.js";
import upload from "../middlewares/multer-config.js";

export default function injectionRoutes(api) {

    // inscripton
    api.post('/signup', UserController.signUp);  // Ok
    api.post('/login', UserController.logIn);  // ok
    //api.get('/logout', UserController.logout);

    // api of about students

    api.get('/api/all/students',  StudentsControllers.getStudents); // return all students
    api.get('/api/students/:id', StudentsControllers.getOneStudent); // after clique on a students


    // api about Classromms
    api.get('/api/all/pathways', CoursesController.getCourses); // return all Pathways              ok
    api.get('/api/pathways/:id', CoursesController.getOneCourse); // after clique on a pathway      ok


    // add students
    api.post('/api/students', StudentsControllers.createStudents); // return all students
    // add courses
    api.post('/api/pathways', CoursesController.createCourses); // return create a Pathways         ok

    // update a students
    api.put(`/api/students/:id`, StudentsControllers.updateOneStudent);
    // update a Courses
    api.put(`/api/pathways/:id`, CoursesController.updateOneCourse); // Update a pathways           ok

    //delate a students
    api.delete(`/api/students/:id`, StudentsControllers.delOneStudent); //   
    //dalate  a a courses
    api.delete(`/api/pathways/:id`, CoursesController.deleteOneCourse);   // ok

}