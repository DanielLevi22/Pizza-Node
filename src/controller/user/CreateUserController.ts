import { Request,Response, response } from "express";
import { CreateUserService } from "../../service/users/CreateUsersService";

export class CreateUserController {

  async handle(req: Request, res: Response){
    const { name, email, password } = req.body;


    const createUserService = new CreateUserService()
    
    const user = await  createUserService.execute({
      name,
      email,
      password
    })
   
    res.status(201).json(user)
  }
}