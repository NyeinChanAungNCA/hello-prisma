import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'NCA',
    //         email: 'nca@gmail.com'
    //     }
    // })
    // console.log(user)
    // const users = await prisma.user.findMany()
    // console.log(users)

    // const user = await prisma.user.create({
    //     data: {
    //         name: 'NCA2',
    //         email: 'nca2@gmail.com',
    //         posts: {
    //             create: [
    //                 {
    //                     title: 'Hello World',
    //                     published: true
    //                 },
    //                 {
    //                     title: 'My second post',
    //                     content: 'This is still a draft'
    //                 }
    //             ],
    //         },
    //     },
    // })
    // console.log(user)

    const usersWithPosts = await prisma.user.findMany({
        include: {
            posts: true,
        },
    })
    console.dir(usersWithPosts, { depth: null })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })