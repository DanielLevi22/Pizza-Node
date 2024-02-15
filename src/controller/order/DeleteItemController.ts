import { Request,Response } from "express";
import { DeleteItemService } from "../../service/order/DeleteItemService";

export class DeleteItemController {

  async handle(req: Request, res: Response){

    const  item_id  = req.query.item_id  as string
    
    console.log(item_id)

    const deleteItemService = new DeleteItemService()
    const order = await deleteItemService.execute({item_id})
    
    return res.json(order)
  }
}