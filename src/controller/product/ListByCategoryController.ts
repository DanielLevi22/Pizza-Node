import { Request,Response } from "express";
import { ListByCategoryService } from "../../service/product/ListByCategoryService";

export class ListByCategoryController {

  async handle(req: Request, res: Response){

 
    const { category_id  } = req.params

    const listByCategoryService = new ListByCategoryService()

    const products = await listByCategoryService.execute({category_id})
    
    return res.json(products)
  }
}