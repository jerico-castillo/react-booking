import express, { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { createError } from "./error";

export const verifyToken = (
  req: express.Request,
  res: express.Response,
  next: NextFunction,
  callback?: (
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => void
) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError("401", "You are not authenticated!"));
  }
  jwt.verify(token, process.env.JWT || "", (err: any, user: any) => {
    if (err) return next(createError("403", "Token is not valid!"));

    req.user = user;
    if (callback) {
      callback(req, res, next);
    }

    // if (req.params.id && req.user.id !== req.params.id) {
    //   return next(createError("403", "You are not authorized!"));
    // }

    next();
  });
};

export const verifyUser = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  verifyToken(req, res, next, (req, _res, next) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError("403", "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  verifyToken(req, res, next, (req, _res, next) => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError("403", "You are not authorized!"));
    }
  });
};
