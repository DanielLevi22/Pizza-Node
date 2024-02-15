import { hash } from "bcryptjs";
import { prisma } from "../../lib/prisma";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}
export class CreateUserService {
  async execute({ email, name ,password}:UserRequest) {
    if(!email) {
      throw new Error("Email incorrect");
    }
    const userExists = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if(userExists) {
      throw new Error("User already exists");
    }

    const passwordHashed = await hash(password, 8);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password:passwordHashed
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    })


    return user;
  }
}