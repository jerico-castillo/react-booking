import express, { NextFunction } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";
import { createError } from "../utils/error";

export const register = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError("404", "User not found!"));

    const isPasswordCorret = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordCorret)
      return next(createError("400", "Wrong password or username"));

    const { password, isAdmin, ...otherDetails } = user._doc;

    res.status(200).json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
