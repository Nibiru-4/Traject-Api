import specialityController from "../controllers/speciality"
import auth from "../middleware/auth"


module.exports = [
    {
        url : "/api/user/:id/speciality/:idSpeciality",
        method :"get",
        func : [auth, specialityController.getSpecialityById]
    },
    {
        url : "/api/user/:id/speciality/",
        method :"post",
        func : [auth, specialityController.createSpeciality]
    },
    {
        url : "/api/user/:id/speciality/:idSpeciality",
        method :"put",
        func : [auth, specialityController.updateSpecialityById]
    },
    {
        url : "/api/user/:id/speciality/:idSpeciality",
        method :"delete",
        func : [auth, specialityController.deleteSpecialityById]
    }


]