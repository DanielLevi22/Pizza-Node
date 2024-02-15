import { prisma } from "../../lib/prisma";

interface DetailRequest {
  order_id: string;
 
}
export class DetailOrderService {
  async execute({order_id}:DetailRequest) {
    const order = await prisma.item.findMany({
      where: {
       order_Id: order_id
      },
      include: {
        product: true,
        order:true
      }
      
    })

    return order
  }
}