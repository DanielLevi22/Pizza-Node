import { prisma } from "../../lib/prisma";


export class ListOrdersService {
  async execute() {
    const orders = await prisma.order.findMany({
      where: {
        draft: false,
        status: false
      },
      orderBy: {
        created_at: 'desc'
      }
    })

    return orders
  }
}