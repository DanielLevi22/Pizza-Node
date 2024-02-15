import { prisma } from "../../lib/prisma";

interface OderRequest {
  order_id: string;

}
export class FinishOrderService {
  async execute({order_id}:OderRequest) {
    const order = await prisma.order.update({
      where: {
       id: order_id
      },
      data: {
        status: true
      }
    })

    return order
  }
}