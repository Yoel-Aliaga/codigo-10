import prisma from '@prisma/client'

// asi se exporta por defecto cuando solo es una exportacion
export default new prisma.PrismaClient({
    log:['query'],
})