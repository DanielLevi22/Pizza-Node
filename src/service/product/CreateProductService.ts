import { prisma } from "../../lib/prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}
export class CreateProductService {
  async execute({ banner,category_id,description,name,price}:ProductRequest) {

    const product = await prisma.product.create({
      data: {
        banner,
        description,
        name,
        price,
        category_id
      }
    })

    return product
    
  }
}