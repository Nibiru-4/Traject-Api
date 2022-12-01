import specialityController from "../controllers/speciality"
import auth from "../middleware/auth"


module.exports = [
    {
        url : "/api/speciality/:id",
        method :"get",
        func : [auth, specialityController.getSpecialityById]
    },
    {
        url : "/api/speciality/",
        method :"post",
        func : [auth, specialityController.createSpeciality]
    },
    {
        url : "/api/speciality/:id",
        method :"put",
        func : [auth, specialityController.updateSpecialityById]
    },
    {
        url : "/api/speciality/:id",
        method :"delete",
        func : [auth, specialityController.deleteSpecialityById]
    }


]