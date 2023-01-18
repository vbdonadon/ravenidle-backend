import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateAccount {
  username: string;
  password: string;
  nickname: string;
}

export class CreateAccountUseCase {
  async execute({ username, password, nickname }: ICreateAccount) {
    const usernameAlreadyExist = await prisma.account.findMany({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    });

    console.log('usernameAlreadyExist')
    console.log(usernameAlreadyExist)

    if (usernameAlreadyExist.length) throw new Error('Username already exists!');

    const hashPassword = await hash(password, 10);

    const account = await prisma.account.create({
      data: {
        username,
        password: hashPassword, 
        nickname
      }
    });

    return account;
  }
}