import { prisma } from "../../lib/prisma";

interface OderRequest {
  order_id: string;
 
}
export class DeleteOrderService {
  async execute({order_id}:OderRequest) {
    const order = await prisma.order.delete({
      where: {
       id: order_id
      }
    })

    return order
  }
}