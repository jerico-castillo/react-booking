import express, { NextFunction } from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verityToken";

const usersRouter: express.Router = express.Router();

// usersRouter.get(
//   "/checkauthentication",
//   verifyToken,
//   (req: express.Request, res: express.Response, next: NextFunction) => {
//     res.send(`"hello user, you are logged in!"`);
//   }
// );

// usersRouter.get(
//   "/checkuser/:id",
//   verifyUser,
//   (req: express.Request, res: express.Response, next: NextFunction) => {
//     res.send("hello user, you are logged in and you cal delete you account");
//   }
// );

// usersRouter.get(
//   "/checkadmin/:id",
//   verifyAdmin,
//   (req: express.Request, res: express.Response, next: NextFunction) => {
//     res.send("hello admin, you are logged in and you can delete all account");
//   }
// );

// UPDATE
usersRouter.put("/:id", verifyUser, updateUser);

//DELETE
usersRouter.delete("/:id", verifyUser, deleteUser);

// GET
usersRouter.get("/:id", verifyUser, getUser);

// GET ALL
usersRouter.get("/", verifyAdmin, getUsers);

export default usersRouter;
