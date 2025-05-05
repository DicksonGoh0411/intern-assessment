import { prisma } from "@/app/lib/db";
import { getCurrentUser } from "@/app/lib/session";
import { NextResponse } from "next/server";


// Create a new post
export async function POST(req: Request) {
    const user = await getCurrentUser();
    try {

        if (!user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const body = await req.json();

        const newPost = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                userEmail: user.email
            }
        })
        return NextResponse.json({ newPost }, { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}