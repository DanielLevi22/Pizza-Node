import { Request,Response } from "express";
import { AddItemService } from "../../service/order/AddItemService";

export class AddItemController {

  async handle(req: Request, res: Response){

    const { amount, order_id: order_Id, product_id:product_Id } =  req.body
  

    const addItemService = new AddItemService()
    const order = await addItemService.execute({amount,order_Id,product_Id})
    
    return res.json(order)
  }
}