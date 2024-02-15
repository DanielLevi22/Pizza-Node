import { compare } from "bcryptjs"
import { prisma } from "../../lib/prisma"
import { sign } from "jsonwebtoken"

interface AuthRequest {
  email: string
  password: string
}

export class AuthUserService  {
  async execute({ email, password}: AuthRequest) {

    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if(!user) {
      throw new Error("User/password not found")
    }

    const passwordIsCorrectly = await compare(password,user.password)

    if(!passwordIsCorrectly)  {
      throw new Error("User/password not found")
    }

    const token = sign({
      name: user.name,
      email: user.email,
    },
      process.env.JWT_SECRET_KEY !,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return  {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    }
  }
}