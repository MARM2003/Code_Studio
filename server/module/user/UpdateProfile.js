const userDatamodel = require("../../model/user");

const UpdateProfile = async (username, name, profession, about, keyword, image) => {


  const result = await userDatamodel.findOneAndUpdate(
    { username: username },
    {
      profile: {
        name: name,
        image: image,
        profession: profession,
        about: about,
        Skill: keyword,
      },
    },
    { new: true } // This option ensures that the updated document is returned
  );
  if (result) {
    // Remove the password field
    const { password, ...userWithoutPassword } = result.toObject();
    return userWithoutPassword;
  }
  return null;
};

module.exports = UpdateProfile;
