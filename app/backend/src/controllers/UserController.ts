import { Request, Response } from "express";
import UserServices from "../services/UserServices";

class UserController {

  async create(req: Request, res: Response) {
    const sResponse = await UserServices.create(req.body);
    return res.status(sResponse.status).json(sResponse.message);

  }

  async findAll(req: Request, res: Response) {
    const sResponse = await UserServices.findAll();
    return res.status(sResponse.status).json(sResponse.message);

  }
  
}

export default new UserController;
