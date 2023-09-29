import {NextApiRequest, NextApiResponse} from 'next'
import validator from 'validator'
import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({
        hello: 'there'
    })
    if(req.method === 'POST'){
        const {firstName, lastName, email, city, phone, password} = req.body
        const errors: string[] = []
        const validationSchema = [{
            valid: validator.isLength(firstName, {
                min: 1,
                max: 20
            }),
            errorMessage: 'First name is invalid'
        },
            {
                valid: validator.isLength(lastName, {
                    min: 1,
                    max: 20
                }),
                errorMessage: 'Last name is invalid'
            },
            {
                valid: validator.isEmail(email),
                errorMessage: 'Email is invalid'
            },
            {
                valid: validator.isMobilePhone(phone),
                errorMessage: 'Phone number is invalid'
            },
            {
                valid: validator.isLength(city, {min: 1}),
                errorMessage: 'City is invalid'
            },
            {
                valid: validator.isStrongPassword(password),
                errorMessage: 'Password is not strong enough'
            },
        ]

        validationSchema.forEach((check) =>{if(!check.valid){
            errors.push(check.errorMessage)
        }})

        if(errors.length){
            return res.status(400).json({errorMessage: errors[0]})
        }

        const userWithEmail = await prisma.user.findUnique({where: {email}})

        if(userWithEmail){
            res.status(400).json({errorsMessage: 'Email is associated with another account'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({data: {first_name:  firstName,
            last_name: lastName,
                password: hashedPassword,
                city,
                phone,
                email
            }})

        res.status(200).json({})
    }
}