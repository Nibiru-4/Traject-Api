import prescriptionController from "../controllers/prescription"
import auth from "../middleware/auth"


module.exports = [
    {
        url : "/api/user/:id/prescription/:idPrescription",
        method :"get",
        func : [auth, prescriptionController.getPrescriptionById]
    },
    {
        url : "/api/user/:id/prescription/",
        method :"post",
        func : [auth, prescriptionController.createPrescription]
    },
    {
        url : "/api/user/:id/prescription/:idPrescription",
        method :"put",
        func : [auth, prescriptionController.updatePrescriptionById]
    },
    {
        url : "/api/user/:id/prescription/:idPrescription",
        method :"delete",
        func : [auth, prescriptionController.deletePrescriptionById]
    }


]