import { Request,Response } from "express";
import { CreateCategoryService } from "../../service/category/CreateCategoryService";
import { ListCategoryService } from "../../service/category/ListCategoryService";

export class ListCategoryController {

  async handle(req: Request, res: Response){

   

    const listCategoryService = new ListCategoryService()
    const category= await listCategoryService.execute()
    
    return res.json(category)
   

  }
}