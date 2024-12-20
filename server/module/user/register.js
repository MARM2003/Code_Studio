const userDatamodel = require("../../model/user");

const module_Register = async (UserName, email, pass) => {
  const userFind = await userDatamodel.findOne({ username: UserName });
  if (userFind) {
    return {
      status: "error",
      data: "The userName Already used",
    };
  } else {
    try {
      const result = await userDatamodel.create({
        username: UserName,
        email: email,
        password: pass,
      });
      const responseMessage = {
        _id: result._id,
        username: result.username,
      };
      return {
        status: "login",
        data: responseMessage,
      };
    } catch (error) {
      return error;
    }
  }
};
module.exports = module_Register;
