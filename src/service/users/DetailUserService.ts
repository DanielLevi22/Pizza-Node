import { prisma } from "../../lib/prisma";

interface UserRequest {
  user_id: string;
}
export class DetailUserService {
  async execute({ user_id }:UserRequest) {

    const user = await prisma.user.findFirst({
      where: {
        id: user_id
      }
    })

    return user
  }
}