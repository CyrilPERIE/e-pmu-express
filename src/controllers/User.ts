import { Request, Response } from "express";
import { UserService } from "../services/User.js";

export class UserController {

  static async login(req: Request, res: Response) {
    console.log("req.body")
    console.log(req.body)
    const { username, password } = req.body
    console.log(username, password)
    return await UserService.login(username, password)
      .then(obj =>{ 
        // try {
        //   const password = req.body.password;
        //   if (!user) {
        //     return res.status(404).json({ message: 'User not found' });
        //   }
        //   if (password != user.password) {
        //     return res.status(401).json({ message: 'Password is incorrect' });
        //   }
        //   const token = jwt.sign({ id: user.id }, 'your_secret_key_here', { expiresIn: '1h' });
        //   res.json({ token });
        // } catch (error) {
        //   console.log(error);
        //   res.status(500).json({ message: 'Erreur lors de la connexion' });
        // }
        console.log(obj)
        res.status(200).json(obj)
      })
      .catch((e) => { console.error(e); res.status(500).send("Internal Error") });

  }
}