const userService = require("../services/userService");
const { comparePassword} = require("../utils/helper");

const userLogin = async (email, password) => {
    let user = {}
    user = await userService.getUserByEmail({email})

    console.log(password)
    if (user && comparePassword(password, user.password)) {
        return {
            validity: true,
            user: user
        }
    } else {
        return {
            validity: false,
            user: user
        }
    }
}

const userLogOut = async (data) => {

}

module.exports = {
    userLogin, userLogOut
}
