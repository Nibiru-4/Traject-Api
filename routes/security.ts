import securityController from "../controllers/security"


module.exports = [
    {
        url: "/api/login",
        method: "post",
        func : securityController.login
    },
    {
        url: "/api/register",
        method: "post",
        func : securityController.register
    },
    {
        url: "/api/whoami",
        method: "post",
        func : securityController.whoami
    }
]