import express, { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { createError } from "./error";

interface IGetUserAuthInfoRequest extends express.Request {
  user: any; // You can refine the type of 'user' based on your needs
}

export const verifyToken = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError("401", "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT || "", (err: any, user: any) => {
    if (err) return next(createError("403", "Token is not valid!"));
    (req as IGetUserAuthInfoRequest).user = user;
    next();
  });
};
