import { Router } from "express";
import UserController from "../controllers/UserController";
import checkEmailPass from "../middlewares/checkEmailPass";

const routes = Router();

routes.post('/', checkEmailPass, UserController.create);
routes.get('/:email', UserController.findOne); // pesquisa user por username ou email
routes.get('/', UserController.findAll);
routes.delete('/', UserController.delete);

export default routes;
