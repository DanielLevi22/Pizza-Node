import { Request,Response } from "express";
import { CreateProductService } from "../../service/product/CreateProductService";

export class CreateProductController {

  async handle(req: Request, res: Response){

    const { name, description, category_id , price } = req.body


    const createProductService = new CreateProductService()

    if(!req.file ){
      throw new Error("error Upload file")
    }else {
      const { filename: banner } = req.file
      const product = await createProductService.execute({
        banner,
        category_id,
        description,
        name,
        price
      })
      return res.json(product)
    }

    
  }
}