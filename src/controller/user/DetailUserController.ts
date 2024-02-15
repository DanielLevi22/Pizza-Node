import { Request,Response, response } from "express";
import { DetailUserService } from "../../service/users/DetailUserService";

export class DetailUserController {

  async handle(req: Request, res: Response){
  

    const user_id  = req.user_id

    const detailUserController = new DetailUserService()
    
    const user = await  detailUserController.execute({
      user_id
    })
   
    res.status(201).json(user)
  }
}