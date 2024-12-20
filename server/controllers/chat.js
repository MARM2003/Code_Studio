const message = require("../model/message");
const userDatamodel = require("../model/user")

const handleMessageUser = async (req, res) => {
  const { username } = req.params;
  console.log(username);

  try {
    const messages = await message.find({
      $or: [
        { from: username },
        { to: username },
      ],
    });

    let userSet = new Set();

    messages.forEach((ele) => {
      userSet.add(ele.from);
      userSet.add(ele.to);
    });

    const userArray = Array.from(userSet);
    const userPromises = userArray.map((user) => {
      return userDatamodel.findOne({ username: user }).exec();
    });

    const userDetails = await Promise.all(userPromises);

    console.log(userDetails);
    res.status(200).json(userDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const handleMessage=async(req,res)=>{
    console.log("Message are on this ")
    const {from,to}=req.query;
    message
    const messages = await message.find({
        $or: [
          { from, to },
          { from: to, to: from },
        ],
      })
      console.log(messages)
      res.json(messages);
}
const handleUserList=async(req,res)=>{
  const result=await userDatamodel.find();
  res.json(result);

}
module.exports={
    handleMessageUser,
    handleMessage,
    handleUserList
}