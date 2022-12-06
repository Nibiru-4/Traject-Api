import doctorController from "../controllers/doctor"
import auth from "../middleware/auth"


module.exports = [
    {
        url : "/api/user/:id/doctor/:idDoctor",
        method :"get",
        func : [auth, doctorController.getDoctorById]
    },
    {
        url : "/api/user/:id/doctor/",
        method :"post",
        func : [auth, doctorController.createDoctor]
    },
    {
        url : "/api/user/:id/doctor/:idDoctor",
        method :"delete",
        func : [auth, doctorController.deleteDoctorById]
    },
    {
        url : "/api/user/:id/doctor/:idDoctor",
        method :"put",
        func : [auth, doctorController.updateDoctorById]
    }


]