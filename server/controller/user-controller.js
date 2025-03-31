import { compare } from "bcryptjs";
import { User } from "../model/user-model.js";
import { ErrorHandler } from "../utility/utils.js";
import { sendToken } from "../utility/features.js";


const register = async (req, res, next) => {


  const { name, username, password, designation } = req.body;

  if (!name || !username || !password || !designation) {
    return next(new ErrorHandler("All fields are required", 400));
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return next(new ErrorHandler("User already exists", 400));
  }

  const isAdmin = designation !== "Employee" ? true : false;

  const user = await User.create({
    name,
    username,
    password,
    isAdmin,
    designation
  });

  sendToken(res, user, 201, "User created successfully!");
};



const login = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password")
  // console.log(user)

  if (!user) return next(new ErrorHandler('User not found!', 401))

  const isMatchedPassword = await compare(password, user.password)

  if (!isMatchedPassword) return next(new ErrorHandler('Invalid Credentials', 400));

  sendToken(res, user, 200, `Welcome back ${user.name}!`)

}

const myProfile = async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if(!user) return next(new ErrorHandler('You need to login',403));

  res.status(200).json({
    success:true,
    user
  })
}

export {
  register,
  login,
  myProfile
}