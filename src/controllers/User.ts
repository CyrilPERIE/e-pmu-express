import { Request, Response } from "express";
import { UserService } from "../services/User.js";

export class UserController {

  static async login(req: Request, res: Response) {
    return await UserService.login(req.body.username, req.body.password)
    .then(obj => res.status(201).json(obj))
    .catch(e => { console.error(e); res.status(500).send("Internal Error") });
  }

  static async register(req: Request, res: Response) {
    return await UserService.register(req.body.username, req.body.password, req.body.email)
    .then(obj => res.status(201).json(obj))
    .catch(e => { console.error(e); res.status(500).send("Internal Error") });

  }

}