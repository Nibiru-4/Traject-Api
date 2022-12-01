import doctorController from "../controllers/doctor"
import auth from "../middleware/auth"


module.exports = [
    {
        url : "/api/doctor/:id",
        method :"get",
        func : [auth, doctorController.getDoctorById]
    },
    {
        url : "/api/doctor/",
        method :"post",
        func : [auth, doctorController.createDoctor]
    },
    {
        url : "/api/doctor/:id",
        method :"delete",
        func : [auth, doctorController.deleteDoctorById]
    },
    {
        url : "/api/doctor/:id",
        method :"put",
        func : [auth, doctorController.updateDoctorById]
    }


]