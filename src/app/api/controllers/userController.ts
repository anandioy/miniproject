import { db } from "../../../../prisma/client";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';

function generateRandomCode(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export async function createUser(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password, phone, image } = body;

        const existingUserByEmail = await db.user.findUnique({
            where: {email: email}
        });
         
        if(existingUserByEmail) {
            return NextResponse.json({ user: null, message: "User with this email already exists"},
                {status: 409})
        }

        const existingUserByUsername = await db.user.findUnique({
            where: { username: username } as any
        });

        if(existingUserByUsername) {
            return NextResponse.json({ user: null, message: "User with this username already exists"},
                {status: 409})
        }

        const hashedPassword = await hash(password, 10);

        const referralcode = generateRandomCode(8);

        const newUser = await db.$transaction([db.user.create({
            data: {
                username: username,
                email: email,
                password: hashedPassword,
                phone: phone,
                image: image,
                referralcode: referralcode,
                redeemedPoints: 0
            }
        })
        ])

        return NextResponse.json({ user: newUser, message: "User Created Successfully"}, {status: 201});
    } catch(error) {
        console.error('Error Processing Request', error);
    }
    return NextResponse.json({ success: false, message: 'Internal Server Error'})
}