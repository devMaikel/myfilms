import { Request, Response } from "express";
import User from "../models/user";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body
      const user = await User.create({
        username,
        email,
        password,
      });

    } catch (error) {
      return res.status(500).send({
        error: "Registration failure",
        message: error,
      });
    }
  }
}

export default new UserController;