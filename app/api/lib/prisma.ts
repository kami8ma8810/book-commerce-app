import { PrismaClient } from "@prisma/client"

let prisma:PrismaClient;

// ホットリロードで何回も prisma インスタンスが作られてしまうのでグローバル変数に保存する
const globalForPrisma = global as unknown as {
  prisma:PrismaClient | undefined
}

if(!globalForPrisma.prisma){
  globalForPrisma.prisma = new PrismaClient()
}

prisma = globalForPrisma.prisma

export default prisma
