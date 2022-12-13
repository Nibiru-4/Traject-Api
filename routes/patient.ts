import patientController from "../controllers/patient"
import auth from "../middleware/auth"


module.exports = [
    {
        url : "/api/user/:id/patient/:idPatient",
        method :"get",
        func : [auth, patientController.getPatientById]
    },
    {
        url : "/api/user/:id/patient/",
        method :"post",
        func : [auth, patientController.createPatient]
    },
    {
        url : "/api/user/:id/patient/:idPatient",
        method :"put",
        func : [auth, patientController.updatePatientById]
    },
    {
        url : "/api/user/:id/patient/:idPatient",
        method :"delete",
        func : [auth, patientController.deletePatientById]
    },
    {
        url: "/api/user/:id/doctor/:idDoctor/patient",
        method: "get",
        func: [auth, patientController.getPatientsByIdDoctor]
    },{
        url : "/api/user/:id/patient/",
        method :"get",
        func : [auth, patientController.getAllPatients]
    }


]