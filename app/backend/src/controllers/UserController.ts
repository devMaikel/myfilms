import { Request, Response } from "express";
import UserServices from "../services/UserServices";

class UserController {

  async create(req: Request, res: Response) {
    const sResponse = await UserServices.create(req.body);
    return res.status(sResponse.status).json(sResponse.message);

  }

  async findAll(_req: Request, res: Response) {
    const sResponse = await UserServices.findAll();
    return res.status(sResponse.status).json(sResponse.message);

  }
  
  async findOne(req: Request, res: Response) {
    const { email } = req.params;
    const sResponse = await UserServices.search(email);
    return res.status(sResponse.status).json(sResponse.message);
  }

  async delete(req: Request, res: Response) {
    const { username, password } = req.body;
    const sResponse = await UserServices.delete(username, password);
    return res.status(sResponse.status).json(sResponse.message);
  }
}

export default new UserController;
