import { prisma } from "../../lib/prisma";

interface ItemRequest {
  order_Id: string;
  product_Id: string;
  amount: number;
}
export class AddItemService {
  async execute({amount,order_Id,product_Id}:ItemRequest) {
    const order = await prisma.item.create({
      data: {
        amount,
        product_Id,
        order_Id
      }
    })

    return order
  }
}