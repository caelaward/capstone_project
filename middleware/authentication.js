// import cookieParser from 'cookie-parser'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { checkUser, getUserRole } from "../models/userDB.js";

const auth = async (req, res, next) => {
  // getting username and passsword from user
  const { password, userName } = req.body;
  const hashedPassword = await checkUser(userName);
  let userRole = await getUserRole(userName);
  bcrypt.compare(password, hashedPassword, (err, result) => {
    if (err) throw err;
    if (result === true) {
      const { userName } = req.body;
      const token = jwt.sign(
        { userName: userName }, //jsonwebtoken does not authenticate but they allow the user access as long as they have a token
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      ); //secret key is in the .env file
      // true only backend can access
      // res.cookie('jwt',token,{httpOnly:false})

      res.cookie("jwt", token, {
        httpOnly: false,
        secure: true,
        sameSite: "none",
        maxAge: 3600000,
      });

      res.send({
        // key name,value of the
        token: token,
        msg: "you have logged in",
        user: userRole,
      });
      next();
    } else {
      res.send({ msg: "The username or password is incorrect" });
    }
  });
};

const authenticate = (req, res, next) => {
  let { cookie } = req.headers;
  let tokenInHeader = cookie && cookie.split("=")[1];
  if (tokenInHeader === null) res.sendStatus(401);
  jwt.verify(
    tokenInHeader,
    process.env.SECRET_KEY,
    (err, userName, userRole) => {
      if (err) return res.sendStatus(403);
      req.userName = userName;
      req.userRole = userRole;
      next();
    }
  );
};

export { auth, authenticate };
