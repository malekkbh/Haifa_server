const USER_MODEL = require("../Moduls/user.module");

const createUser = (req, res) => {
  const { userID, name } = req.body;

  console.log("inside");

  USER_MODEL.create({
    name: name,
    userID: userID,
  })
    .then((Cres) => {
      res.status(200).json({ user: Cres });
    })
    .catch((e) =>
      res.status(500).json({ error: true, errorMessage: e.message })
    );
};

module.exports = {
  createUser,
};
