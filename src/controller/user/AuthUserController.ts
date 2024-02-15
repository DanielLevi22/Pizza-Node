import { Request,Response } from "express";
import { AuthUserService  } from "../../service/users/AuthUserService";

export class AuthUserController {

  async handle(req: Request, res: Response){
    const { email, password } = req.body;


    const authUserController = new AuthUserService()
    
    const user = await  authUserController.execute({
      email,
      password
    })
   
    res.json(user)
  }
}