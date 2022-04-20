const Login = require('../models/LoginUser')


const addLogin = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    const login = new Login({...req.body})

    const data = await login.save()
    // const login = new Login.create(req.body)
    res.status(200).json({...data})
}


module.exports = {addLogin}