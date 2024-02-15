import { prisma } from "../../lib/prisma";

interface OderRequest {
  name: string;
  table: number;
 
}
export class CreateOrderService {
  async execute({name,table}:OderRequest) {
    const order = await prisma.order.create({
      data: {
        name: name,
        table: table
      }
    })

    return order
  }
}