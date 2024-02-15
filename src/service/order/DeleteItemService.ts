import { prisma } from "../../lib/prisma";

interface ItemRequest {
  item_id: string;
}
export class DeleteItemService {
  async execute({item_id}:ItemRequest) {
    const order = await prisma.item.delete({
      where: {
        id: item_id
      }
    })

    return order
  }
}