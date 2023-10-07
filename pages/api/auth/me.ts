import { NextApiRequest, NextApiResponse } from 'next'
import * as jose from 'jose'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    const bearerToke = req.headers['authorization'] as string
    const token = bearerToke.split(' ')[1]

    const payload = jwt.decode(token) as { email: string }

    if (!payload.email) {
        return res.status(401).json({
            errorMessage: 'Unauthorized request',
        })
    }

    const user = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            city: true,
            phone: true,
        },
    })
    return res.json({ user })
}
