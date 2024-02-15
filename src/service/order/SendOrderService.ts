import { prisma } from "../../lib/prisma";

interface OderRequest {
  order_id: string;
 
}
export class SendOrderService {
  async execute({order_id}:OderRequest) {
    const order = await prisma.order.update({
      where: {
       id: order_id
      },
      data: {
        draft: false
      }
    })

    return order
  }
}